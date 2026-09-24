self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Cho phép app tải dữ liệu bình thường từ Sheets và internet
  event.respondWith(fetch(event.request));
});
