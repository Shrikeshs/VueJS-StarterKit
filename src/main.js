import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
Vue.config.productionTip = false
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
