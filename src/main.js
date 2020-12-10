import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {},
  },
  getters: {
    userInfo: state => state.userInfo,
  },
  mutations: {
    changeUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
