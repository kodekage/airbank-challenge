import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Transaction from './components/Transaction.vue'
import VueApollo from 'vue-apollo'
import { apolloProvider } from './apollo'

Vue.config.productionTip = false
Vue.use(VueApollo)

const routes = [
  { path: '/', component: App },
  { path: '/transaction/:id', Transaction }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
