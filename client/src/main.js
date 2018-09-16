// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuex from 'vuex'
import TimeRange from 'vue-time-range'
import Buefy from 'buefy'
import 'buefy/lib/buefy.min.css'

Vue.use(VueAxios, axios)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(Buefy)
const store = new Vuex.Store()
Vue.use(TimeRange, {
  store
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
