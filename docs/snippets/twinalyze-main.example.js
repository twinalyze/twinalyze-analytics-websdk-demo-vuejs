import TwinalyzeAnalytics from '@twinalyze/web-analytics';
import { createApp } from 'vue';
import App from '../../src/App.vue';
import router from '../../src/router';
import '../../src/styles.css';

TwinalyzeAnalytics.init({
  apiKey:'YOUR_API_KEY',
  clientId:'YOUR_CLIENT_ID',
  apiBaseUrl:'https://api.twinalyze.com',
  version:'YOUR_SDK_VERSION',
  debug:true,
  persistSession:true,
  fcm:{enabled:true,configUrl:'/twinalyze-fcm-sw.js',serviceWorkerPath:'/twinalyze-fcm-sw.js'},
  enhancedMeasurement:{pageView:true,scrollDepth:true,elementClick:true,searchResultsView:{params:['q','s','search','query']},formInteractions:true,fileDownloads:{extensions:['pdf','zip','apk','doc','docx','xls','xlsx','ppt','pptx']}}
});
createApp(App).use(router).mount('#app');
