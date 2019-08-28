import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Plugins
import Snotify, { SnotifyPosition } from 'vue-snotify'

const options = {
	toast: {
    icon: false,
    showProgressBar: false,
    timeout: 750,
		position: SnotifyPosition.centerTop
	}
}

Vue.use(Snotify, options)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
