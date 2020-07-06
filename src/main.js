// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);
Vue.use(ElementUI);


export default new Vuex.Store({
    //所有的数据都放在state中
    state: {},

    //操作数据，唯一的通道是mutations
    mutations: {},

    //actions,可以来做异步操作，然后提交给mutations，而后再对state(数据)进行操作
    actions: {}
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})