# blueprints/downloads.py
# ── Diff-file downloads listing + hardened path-traversal-safe file serve.
#    Imports app (for app.root_path) and _file_sha256 (cached hashing
#    helper) from app.py, which owns the SHA-256 cache as a module-level
#    dict shared across requests. ──────────────────────────────────────────
import os

from flask import Blueprint, abort, send_from_directory, render_template
from werkzeug.utils import secure_filename
from core import _file_sha256

bp = Blueprint('downloads', __name__)


@bp.route('/downloads/<fc>/<filename>')
def download_diff(fc, filename):
    from app import app
    safe_fc = secure_filename(fc)
    # ROBUST VALIDATION:
    # 1. Block null bytes and control characters
    if '\0' in filename or any(ord(c) < 32 for c in filename):
        abort(404)

    # 2. Strict Whitelist: Allow alphanumeric, spaces, dots, dashes, underscores, 
    # parentheses, and Thai characters (\u0e00-\u0e7f).
    import re
    if not re.match(r'^[a-zA-Z0-9\s\.\-_()\u0e00-\u0e7f]+$', filename):
        abort(404)

    # 3. Directory Traversal Block: Absolute check for any traversal patterns
    # even though regex should catch most, we explicitly block these.
    forbidden = ['..', '/', '\\', '%2e%2e', '%2f', '%5c']
    if any(p in filename.lower() for p in forbidden):
        abort(404)
    
    # 4. Final safety: use normalized filename
    safe_fn = os.path.normpath(filename)
    if safe_fn.startswith(('.', '/')):
        abort(404)
    base_root = os.path.realpath(os.path.join(app.root_path, 'static', 'downloads', 'diff_all'))
    if not safe_fc:
        abort(404)
    candidate_fc_dir = os.path.realpath(os.path.join(base_root, safe_fc))
    if not (candidate_fc_dir.startswith(base_root + os.sep) and os.path.isdir(candidate_fc_dir)):
        abort(404)
    file_path = os.path.realpath(os.path.join(candidate_fc_dir, safe_fn))
    if not file_path.startswith(candidate_fc_dir + os.sep):
        abort(404)
    if not os.path.isfile(file_path):
        abort(404)
    return send_from_directory(candidate_fc_dir, safe_fn, as_attachment=True)


@bp.route('/downloads')
def downloads_index():
    from app import app
    base = os.path.realpath(os.path.join(app.root_path, 'static', 'downloads', 'diff_all'))
    items = []
    if os.path.isdir(base):
        for fc in sorted(os.listdir(base)):
            fcdir = os.path.realpath(os.path.join(base, fc))
            if not os.path.isdir(fcdir):
                continue
            for fn in sorted(os.listdir(fcdir)):
                path = os.path.join(fcdir, fn)
                if not os.path.isfile(path):
                    continue
                items.append({'fc': fc, 'filename': fn,
                              'size': os.path.getsize(path),
                              'mtime': int(os.path.getmtime(path)),
                              'sha': _file_sha256(path)})
    return render_template('downloads.html', items=items)
