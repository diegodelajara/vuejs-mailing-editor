import Vue from 'vue'
import App from './App.vue'
//import {store} from './store'

import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(ToggleButton)
Vue.use(VModal)

new Vue({
  el: '#app',
  //store: store,
  render: h => h(App)
})
