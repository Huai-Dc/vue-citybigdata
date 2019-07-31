/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './registerServiceWorker'

/**
 * 样式表重置
 */
import 'normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './permission' // 权限控制
import './assets/icons/iconfont.css' // 引入自定义图标库
import './styles/index.scss'

import './mock'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
