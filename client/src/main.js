import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:8081'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
