self.TWINALYZE_FCM_CONFIG = {
  firebaseConfig: {
    apiKey: "ENTER API KEY",
    authDomain: "ENTER AUTH DOMAIN",
    projectId: "ENTER PROJECTID",
    storageBucket: "ENTER STORAGEBUCKET",
    messagingSenderId: "ENTER MESSAGING SENDERID",
    appId: "ENTER APP ID",
  },
  vapidKey:
    "ENTER VAPID KEY",
};

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp(
  self.TWINALYZE_FCM_CONFIG.firebaseConfig
);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[Twinalyze SW] Background message:",
    payload
  );

  const data = payload.data || {};
  const notificationData =
    payload.notification || {};

  const title =
    notificationData.title ||
    data.title ||
    "Notification";

  const body =
    notificationData.body ||
    data.body ||
    data.description ||
    "";

  const icon =
    notificationData.icon ||
    data.icon ||
    data.iconURL ||
    data.largeIconURL ||
    "/favicon.ico";

  const clickURL =
    data.clickURL ||
    data.url ||
    "/";

  return self.registration.showNotification(
    title,
    {
      body,
      icon,

      data: {
        ...data,
        clickURL,
      },
    }
  );
});

self.addEventListener(
  "notificationclick",
  (event) => {
    event.notification.close();

    const clickURL =
      event.notification.data?.clickURL ||
      event.notification.data?.url ||
      "/";

    event.waitUntil(
      clients.openWindow(clickURL)
    );
  }
);
