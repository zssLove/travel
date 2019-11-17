// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决300ms延迟问题
import fastClick from 'fastclick'
import 'styles/reset.css'
// border.css是为了解决高分辨率下的1px边框问题
import 'styles/border.css'
import 'styles/iconfont.css'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 所依赖的样式
import 'swiper/dist/css/swiper.css'
// 使用轮播图插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
