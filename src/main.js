import pdfmakeCustom from '@cdglib/js-pdfmake-custom'
import Vue from 'vue'
import './axios'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(pdfmakeCustom)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
