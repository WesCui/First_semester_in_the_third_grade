//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件

//关闭Vue的生产提示
Vue.config.productionTip = false
import VueRouter from "vue-router";
//引入路由器
import router from "./router";

Vue.use(VueRouter)
//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})