# Vue npm integration locations

Initialization: `src/main.js` (copy-ready example: `docs/snippets/twinalyze-main.example.js`)

Identify calls:
- `src/views/SignupView.vue`
- `src/views/LoginView.vue`
- `src/views/TestingLabView.vue`

Manual events:
- `src/stores/cart.js` → `addToCart`
- `src/views/CartView.vue` → `beginCheckout`
- `src/views/CheckoutView.vue` → `purchaseCompleted`
- `src/views/TestingLabView.vue` → custom event

Notification worker: `public/twinalyze-fcm-sw.js`
Browser URL: `http://localhost:5173/twinalyze-fcm-sw.js`
