import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import Toasted from 'vue-toasted'
import 'nprogress/nprogress.css'
import './style.css'
import VueProgressBar from 'vue-progressbar'
const options = {
  position: 'bottom-right',
  duration:4000,
  theme:'bubble',
  className:'app'
};
Vue.config.productionTip = false
Vue.use(Toasted , options);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(VueProgressBar, options)