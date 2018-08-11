self.addEventListener("install", function(event) {
  console.log("[ServiceWorker] Installing SW ...", event);
});

self.addEventListener("acitivate", function(event) {
  console.log("[ServiceWorker] Installing SW ...", event);
  return self.clients.claim();
});
