# Hướng dẫn deploy & cập nhật landing page

Trang này là **HTML tĩnh** — không cần build, không cần server. Vercel chỉ việc phục vụ file.

---

## Phần 1 — Đưa code lên GitHub (làm 1 lần)

### 1.1. Cài GitHub CLI

```bash
winget install --id GitHub.cli -e
```

Cài xong **mở cửa sổ terminal mới** (để máy nhận lệnh `gh`).

### 1.2. Đăng nhập GitHub

```bash
gh auth login
```

Chọn theo thứ tự:

1. `GitHub.com`
2. `HTTPS`
3. `Authenticate Git with your GitHub credentials?` → **Yes**
4. `Login with a web browser` → copy mã hiện trên màn hình, Enter, dán mã vào trình duyệt

> ⚠️ Đăng nhập bằng tài khoản **lehungmanh0502@gmail.com** (username `NGHTMRE0502`), không phải tài khoản khác đang đăng nhập sẵn trên máy.

Kiểm tra đúng tài khoản chưa:

```bash
gh auth status
```

### 1.3. Tạo repo và đẩy code lên

Chạy trong thư mục `D:\AppThuChi-Landing`:

```bash
gh repo create NGHTMRE0502/appthuchi-landing --public --source=. --remote=origin --push
```

Xong bước này, code đã nằm ở `https://github.com/NGHTMRE0502/appthuchi-landing`.

---

## Phần 2 — Deploy lên Vercel (làm 1 lần, khoảng 1 phút)

1. Vào <https://vercel.com> → **Sign Up / Log in** → chọn **Continue with GitHub** (dùng đúng tài khoản `NGHTMRE0502`).
2. Bấm **Add New…** → **Project**.
3. Tìm repo `appthuchi-landing` → bấm **Import**.
4. Màn hình cấu hình:
   - **Framework Preset**: `Other`
   - **Root Directory**: để nguyên (`./`)
   - **Build Command**: để trống
   - **Output Directory**: để trống
   - **Install Command**: để trống
5. Bấm **Deploy**, đợi ~30 giây.

Link nhận được có dạng `https://appthuchi-landing.vercel.app`.

### Gắn tên miền riêng (nếu sau này mua)

Vercel → chọn project → **Settings** → **Domains** → **Add** → nhập tên miền → làm theo hướng dẫn trỏ DNS mà Vercel hiện ra.

---

## Phần 3 — Sửa nội dung sau này

### Ba thứ hay phải sửa nhất — nằm ở đầu file `main.js`

```js
var ZALO = '0392774522';                        // số Zalo nhận đơn
var DEADLINE = new Date(2026, 7, 1, 23, 59);    // lúc hết ưu đãi
var SLOTS_LEFT = 50;                            // số suất còn lại hiện trên trang
```

> ⚠️ **Tháng trong JavaScript đếm từ 0**: `new Date(2026, 7, 1)` nghĩa là **ngày 01/08/2026**.
> Muốn hạn là 15/09/2026 thì viết `new Date(2026, 8, 15, 23, 59)`.

Khi hết hạn, trang **tự** đổi sang trạng thái “Đợt 1 đã đóng — nhắn Zalo để giữ chỗ đợt sau”, không cần sửa gì thêm.

### Sửa giá

Mở `index.html`, tìm khối `<section ... id="price">`:

- `299.000đ` — giá gạch ngang
- `59.000` — giá đang bán
- Danh sách quyền lợi nằm trong `<ul class="price-list">`

### Đẩy thay đổi lên

```bash
git add -A
git commit -m "Cap nhat noi dung landing page"
git push
```

Vercel tự deploy lại sau khoảng 30 giây, link giữ nguyên.

---

## Phần 4 — Xem thử ở máy trước khi push

```bash
node tools/preview.js
```

Mở <http://localhost:4300>. Bấm `Ctrl + C` để tắt.

---

## Ghi chú quan trọng

- Repo này **chỉ chứa trang bán hàng**. Mã nguồn App Thu Chi (đặc biệt là phần khoá bản quyền)
  **không** nằm ở đây và **không được** đẩy lên GitHub public — ai tải được mã nguồn thì
  có thể tự tạo mã kích hoạt.
- Ảnh trong `images/` chụp từ bản **1.2.2** với **dữ liệu mẫu**, không phải số liệu thật của ai.
- Trang không gọi ra internet: không CDN, không font ngoài, không tracking. Mở được cả khi mất mạng.
