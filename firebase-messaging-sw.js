importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyCvrgWg2XVVSBl8F7l7t9FycQJkq2jC9rU",
    authDomain: "come-f28c2.firebaseapp.com",
    projectId: "come-f28c2",
    storageBucket: "come-f28c2.appspot.com",
    messagingSenderId: "13504861373",
    appId: "1:13504861373:web:eff92168509ed3d38e13d4",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("📩 收到背景推播:", payload);
    const notification = payload.notification || payload.data;

    self.registration.showNotification(notification.type === "CALL" ? "您有訂單來囉！" : "您有訊息來囉", {
        body: notification.type === "CALL" ? `用戶${notification.user_id}撥電話給您` : "你有一則新訊息",
        icon: notification.icon || "/firebase-logo.png",
        requireInteraction: true,
    });

});
