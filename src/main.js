// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/global.css'
import VueAxios from "vue-axios";
import Axios from 'axios'


Vue.prototype.$https = Axios;
Vue.config.productionTip = false;
//使用里面的功能
Vue.use(Element);
Vue.use(VueAxios,Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render:h => h(App)
});
