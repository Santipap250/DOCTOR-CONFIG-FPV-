# tests/test_downloads_hardening.py
import os
import pytest
from flask import url_for

class TestDownloadsHardening:

    def test_downloads_index_returns_200(self, client):
        """หน้า downloads index ต้องโหลดได้ปกติ."""
        response = client.get("/downloads")
        assert response.status_code == 200

    def test_download_file_with_spaces_success(self, client, app):
        """ทดสอบการดาวน์โหลดไฟล์ที่มีเว้นวรรคในชื่อไฟล์."""
        # สร้างไฟล์จำลองใน static/downloads/diff_all/test_cat/test file with space.txt
        base_dir = os.path.join(app.root_path, 'static', 'downloads', 'diff_all', 'test_cat')
        os.makedirs(base_dir, exist_ok=True)
        file_path = os.path.join(base_dir, 'test file with space.txt')
        with open(file_path, 'w') as f:
            f.write("test content")

        try:
            # ทดสอบเรียก route
            # URL encoded: /downloads/test_cat/test%20file%20with%20space.txt
            response = client.get("/downloads/test_cat/test file with space.txt")
            assert response.status_code == 200
            assert response.data == b"test content"
            assert "attachment" in response.headers.get("Content-Disposition", "")
        finally:
            # ลบไฟล์จำลอง
            if os.path.exists(file_path):
                os.remove(file_path)

    def test_download_file_with_special_chars_success(self, client, app):
        """ทดสอบการดาวน์โหลดไฟล์ที่มีอักขระพิเศษที่อนุญาต (.-_())."""
        base_dir = os.path.join(app.root_path, 'static', 'downloads', 'diff_all', 'test_cat')
        os.makedirs(base_dir, exist_ok=True)
        file_name = 'test-file_v1.0(final).txt'
        file_path = os.path.join(base_dir, file_name)
        with open(file_path, 'w') as f:
            f.write("special chars content")

        try:
            response = client.get(f"/downloads/test_cat/{file_name}")
            assert response.status_code == 200
            assert response.data == b"special chars content"
        finally:
            if os.path.exists(file_path):
                os.remove(file_path)

    @pytest.mark.parametrize("malicious_filename", [
        "../../etc/passwd",
        "test..file.txt",
        "test/file.txt",
        "test;file.txt",
        "test&file.txt",
        "test|file.txt",
        "test<file.txt",
        "test>file.txt",
        "test`file.txt",
        "test$file.txt",
        "test'file.txt",
        'test"file.txt',
    ])
    def test_download_malicious_filename_returns_404(self, client, malicious_filename):
        """ทดสอบว่าอักขระอันตรายหรือความพยายามทำ Traversal ต้องถูกบล็อก (404)."""
        response = client.get(f"/downloads/test_cat/{malicious_filename}")
        assert response.status_code == 404

    def test_download_non_existent_file_returns_404(self, client):
        """ดาวน์โหลดไฟล์ที่ไม่มีอยู่จริงต้องได้ 404."""
        response = client.get("/downloads/test_cat/non_existent_file.txt")
        assert response.status_code == 404

    def test_download_non_existent_category_returns_404(self, client):
        """ดาวน์โหลดจากหมวดหมู่ที่ไม่มีอยู่จริงต้องได้ 404."""
        response = client.get("/downloads/non_existent_cat/file.txt")
        assert response.status_code == 404
