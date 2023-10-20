import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n';
import en from '../src/en.json';
import es from '../src/es.json';
//import * as VueGoogleMaps from 'vue2-google-maps' 
Vue.use(VueI18n);
/*Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_GOOGLE_MAPS_API_KEY',  
    libraries: 'places', 
  },
});*/

Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'en',  
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
});
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')

