import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { apolloProvider } from './apollo'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({
  render: h => h(App),
  router,
  apolloProvider
}).$mount('#app')
