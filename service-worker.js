self.addEventListener("install", event => {
  console.log("Service Worker установлен");
});

self.addEventListener("fetch", event => {
  // Здесь можно кешировать ресурсы или обрабатывать запросы
});
