import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import $ from 'jquery';
import './mock/index.js'; // 该项目所有请求使用mockjs模拟
import './login.js'
import './ui.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import 'bootstrap/js/bootstrap.min.js'
// import 'bootstrap/css/bootstrap.min.css'
Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.prototype.HOST = '/api'
var vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    render: h => h(App),
    components: { App }
})