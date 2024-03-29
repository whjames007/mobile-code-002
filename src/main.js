// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vant from 'vant'
import 'vant/lib/index.css'
// 愿君多留神，此物最坑爹（必须最后引入）
import router from './router'

// 引入公共js
import utilCommon from '../static/js/utilCommon.js'
import utilDate from '../static/js/utilDate.js'

Vue.prototype.utilCommon = utilCommon
Vue.prototype.utilDate = utilDate

Vue.config.productionTip = false
Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
