self.addEventListener("install", (event) => {
    console.log("Service Worker installing...");
    self.skipWaiting(); // 立即啟用新的 service worker
  });
  
  self.addEventListener("activate", (event) => {
    console.log("Service Worker activated!");
    event.waitUntil(self.clients.claim()); // 讓新的 service worker 立即接管所有 clients
  });
  
  self.addEventListener("push", function (event) {
    const options = {
      body: event.data ? event.data.text() : "你有一則新通知！",
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-192x192.png",
      vibrate: [200, 100, 200],
      actions: [
        { action: "open", title: "打開 App" },
        { action: "close", title: "關閉通知" }
      ]
    };
  
    event.waitUntil(
      self.registration.showNotification("CallMe 通知", options)
    );
  });
  
  self.addEventListener("notificationclick", function (event) {
    event.notification.close();
    if (event.action === "open") {
      event.waitUntil(clients.openWindow("/"));
    }
  });
  