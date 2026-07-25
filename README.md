# App Thu Chi — Landing page

Trang bán hàng cho **App Thu Chi 1.2.2** — ứng dụng quản lý thu chi cá nhân gồm bot Telegram +
dashboard biểu đồ chạy cục bộ trên máy người dùng.

👉 Cách deploy và cách sửa nội dung: xem [DEPLOY.md](DEPLOY.md)

## Cấu trúc

```
index.html        toàn bộ nội dung trang
styles.css        giao diện (dùng lại bảng màu của app)
main.js           số Zalo, đếm ngược ưu đãi, chuyển ảnh màn hình
images/           9 ảnh chụp thật từ bản 1.2.2 (dữ liệu mẫu) + icon app
tools/preview.js  server xem thử ở máy (Vercel không dùng)
```

## Chạy thử ở máy

```bash
node tools/preview.js
```

Mở <http://localhost:4300>.

## Nguyên tắc khi sửa nội dung

- **Chỉ quảng cáo tính năng có thật trong bản 1.2.2.** Các tính năng đang phát triển
  (Đầu tư, Báo cáo tài chính, điểm sức khoẻ tài chính, hỏi đáp AI) chưa có trong bản bán ra —
  khi nào phát hành mới bổ sung lên trang.
- **Không gọi tài nguyên ngoài**: không CDN, không font Google, không script tracking.
  Trang phải mở được cả khi mất mạng.
- Ảnh màn hình chụp từ dữ liệu mẫu, không dùng số liệu thật của người dùng nào.
