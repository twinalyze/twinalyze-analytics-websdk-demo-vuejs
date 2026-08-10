<<<<<<< HEAD
# Nivora Living — Vue npm Test Store

A redesigned Vue 3 + Vite ecommerce test website for Twinalyze npm integration.

## Included

- New Nivora Living branding and editorial UI
- Vue Router SPA
- Product catalog, details, cart, checkout
- Signup, login, account, logout
- Direct npm `identify()` and `track()` calls
- Email as Twinalyze `userId`
- `addToCart`, `beginCheckout`, `purchaseCompleted`
- Testing Lab custom event
- Notification permission and local notification testing
- FCM worker check, downloads, forms, search, scroll depth

Twinalyze initialization and live credentials are intentionally not configured.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Configure Twinalyze

Open `src/main.js` and import:

```js
import TwinalyzeAnalytics from '@twinalyze/web-analytics';
```

Add this before `createApp(...)`:

```js
TwinalyzeAnalytics.init({
  apiKey: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  apiBaseUrl: 'https://api.twinalyze.com',
  version: 'YOUR_SDK_VERSION',
  debug: true,
  persistSession: true,

  fcm: {
    enabled: true,
    configUrl: '/twinalyze-fcm-sw.js',
    serviceWorkerPath: '/twinalyze-fcm-sw.js',
  },

  enhancedMeasurement: {
    pageView: true,
    scrollDepth: true,
    elementClick: true,
    searchResultsView: {
      params: ['q', 's', 'search', 'query'],
    },
    formInteractions: true,
    fileDownloads: {
      extensions: [
        'pdf','zip','apk','doc','docx',
        'xls','xlsx','ppt','pptx',
      ],
    },
  },
});
```

A copy-ready example is available at `docs/snippets/twinalyze-main.example.js`.

## Identify calls

Signup: `src/views/SignupView.vue`

```js
TwinalyzeAnalytics.identify(sessionUser.email, {
  name: sessionUser.name,
  authenticationEvent: 'signup',
});
```

Login: `src/views/LoginView.vue`

The first argument is email, so it becomes the Twinalyze `userId`.

## Manual events

- `src/stores/cart.js` → `addToCart`
- `src/views/CartView.vue` → `beginCheckout`
- `src/views/CheckoutView.vue` → `purchaseCompleted`
- `src/views/TestingLabView.vue` → custom event

There is no analytics helper or wrapper.

## Notifications

Worker location:

```text
public/twinalyze-fcm-sw.js
```

Replace Firebase and VAPID placeholders. Keep the SDK paths as:

```js
configUrl: '/twinalyze-fcm-sw.js',
serviceWorkerPath: '/twinalyze-fcm-sw.js',
```

Verify `http://localhost:5173/twinalyze-fcm-sw.js` returns HTTP 200.

Open `http://localhost:5173/testing-lab` and click **Enable notifications**. The button calls `Notification.requestPermission()`.

Expected flow:

```text
User clicks button
→ permission becomes granted
→ SDK registers worker
→ Firebase generates FCM token
→ Twinalyze sends token through identify
```

## DevTools checks

Use Network → Fetch/XHR for init, identify, and eventsBatch. Use Application → Service Workers to confirm `/twinalyze-fcm-sw.js` is active.








## Steps

1). Install npm of twinalyze
2). Add twinalyze script in main.js
3). Add identify properties in signupView
4). Add manual event in cartView
=======
# twinalyze-analytics-websdk-demo-vuejs
>>>>>>> 82efcdcae3c5fcfcb6979fa5bad1a667a138445e
