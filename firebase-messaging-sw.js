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

    self.registration.showNotification(notification.type === "CHAT" ? `您有來自${notification.name}的訊息！` : notification.type === "CALL" ? `${notification.name}打電話給你囉！` : `${notification.name}打視訊給你囉！`, {
        body: notification.type === "CALL" ? `用戶${notification.name}撥電話給您` : notification.type === "VIDEO" ? `用戶${notification.name}撥視訊給您` : `用戶${notification.name}傳訊息給您`,
        icon: notification.icon || "/firebase-logo.png",
        requireInteraction: true,
    });

});
