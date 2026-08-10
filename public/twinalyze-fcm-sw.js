self.TWINALYZE_FCM_CONFIG = {
  firebaseConfig: {
    apiKey: "AIzaSyBwpViv1gBVayOmy6Q4HfQ1_t6WwQ29ZcQ",
    authDomain: "web-fcm-test-61379.firebaseapp.com",
    projectId: "web-fcm-test-61379",
    storageBucket: "web-fcm-test-61379.firebasestorage.app",
    messagingSenderId: "518057654616",
    appId: "1:518057654616:web:f451a1f48eb40119448d2d",
  },
  vapidKey:
    "BF7cjf90T2uaWJAV4Z1XAKcrYdRPPwtVZt_IMm_2lSsI8ByXVkIiBADN8QLpSOK9SFTTCDeGA8t6hDyWMuoGqRQ",
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