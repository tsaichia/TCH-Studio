import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'

import '../src/css/base.css'
import '../src/css/style.css'
import 'hooper/dist/hooper.css'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Hooper, Slide } from 'hooper'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faPlayCircle, faBriefcase, faClipboardList, faCog, faAlignJustify, faHammer } from '@fortawesome/free-solid-svg-icons'
import vuetify from './plugins/vuetify'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

import VuePageTransition from 'vue-page-transition'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Photoswipe from 'vue-pswipe'

Vue.use(VuePageTransition)

// import demo from '../public/js/demo'
// import bezierEasing from '../public/js/bezier-easing.min'
// import charming from '../public/js/charming.min'
// import imagesloaded from '../public/js/imagesloaded.pkgd.min'
// import TweenMax from '../public/js/TweenMax.min'

Vue.config.productionTip = false

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faPlayCircle, faBriefcase, faClipboardList, faCog, faAlignJustify, faHammer)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
Vue.component('kinesis-element', KinesisElement)

Vue.component('Hooper', Hooper)
Vue.component('Slide', Slide)

axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
Vue.use(Photoswipe)

new Vue({
  router,
  store,
  vuetify,
  KinesisContainer,
  KinesisElement,

  // demo,
  // bezierEasing,
  // charming,
  // imagesloaded,
  // TweenMax,

  render: h => h(App)
}).$mount('#app')
