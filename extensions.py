# extensions.py
import os
import logging

logger = logging.getLogger("configdoctor")

try:
    from flask_limiter import Limiter
    from flask_limiter.util import get_remote_address
    LIMITER_AVAILABLE = True
except ImportError:
    LIMITER_AVAILABLE = False

if LIMITER_AVAILABLE:
    storage_uri = os.getenv("REDIS_URL", "memory://")
    limiter = Limiter(
        key_func=get_remote_address,
        default_limits=[],
        storage_uri=storage_uri,
    )
    def _rate(limit_str):
        return limiter.limit(limit_str)
else:
    limiter = None
    def _rate(limit_str):
        def decorator(f): return f
        return decorator
