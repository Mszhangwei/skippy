import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import mint from 'mint-ui'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import 'mint-ui/lib/style.css'
import './assets/css/neat-min.css'
import './assets/css/style.css'
Vue.use(mint)
Vue.use(VueResource)
import {api} from './assets/js/common'

Vue.config.debug = true;
Vue.http.options.emulateJSON = true; 
//降低延时
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
