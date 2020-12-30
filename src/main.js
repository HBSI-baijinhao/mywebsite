import Vue from "vue";
import App from "./App.vue";
import vuetify from '@/plugins/vuetify'
import router from "@/router/index";
import {get,post} from "@/utils/myAxios"
import {api} from "@/api/index"
Vue.prototype.$get = get//暴露默认请求方法
Vue.prototype.$post = post//暴露默认请求方法
Vue.prototype.$api = api//暴露请求库方法
// router.beforeEach((to, from, next) => {
//   document.title = to.name
//   const userInfo = sessionStorage.getItem('userInfo') || null
//   if (!userInfo && to.meta.auth) {
//     next('/login')
//   } else {
//     next()
//   }
// })

Vue.config.productionTip = true;

new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
