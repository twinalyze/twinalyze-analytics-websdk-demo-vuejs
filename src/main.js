import TwinalyzeAnalytics from '@twinalyze/web-analytics';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import './styles.css';

TwinalyzeAnalytics.init({
  apiKey: 'ADD YOUR API KEY HERE',
  secretKey: 'ADD YOUR SECRET KEY HERE',

  fcm: {
    enabled: true,
    configUrl: '/twinalyze-fcm-sw.js',
    serviceWorkerPath: '/twinalyze-fcm-sw.js',
  },

});

createApp(App)
  .use(router)
  .mount('#app');