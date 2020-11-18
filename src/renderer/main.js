import Vue from 'vue'
// import axios from 'axios'
// import axios from './utils/axiosService'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css'
import Win from 'electron-vue-windows'

// import './assets/icon/iconfont.css'
// 引入动画样式css
import './assets/transform/transform.css'
//导入图标
import "./assets/icon/iconfont.js"
// import db from '../renderer/Commom/datastore.js'
// Vue.prototype.$db = db;





Win.init(router, {
    freeWindowNum: 2,
    port: 9080
})
Vue.prototype.$Win = Win
Vue.use(ViewUI);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
    // Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')