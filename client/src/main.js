import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import VueLocalStorage from 'vue-ls'
import VueResource from 'vue-resource'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueLocalStorage)
Vue.http.options.root = 'http://localhost:8081'

Vue.http.interceptors.push((request, next) => {
  if (Vue.ls.get('logged')) {
    request.headers.set('Authorization', Vue.ls.get('logged').token)
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
