// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import 'babel-polyfill'

FastClick.attach(document.body);

Vue.config.productionTip = false;

/*---------------------------------------------------*/
//判断是否是生产环境，生产环境下，将console方法重写
if (process.env.NODE_ENV === 'production') {
    window.console.log = () => {};
    window.console.info = () => {};
    //window.console.error = () => {};
    Vue.config.silent = true;
}
// import "./script/vconsole.min";
//安装页面上拉刷新下拉加载组件
import VueScroller from 'vue-scroller'
Vue.use(VueScroller);

//安装滚动组件
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo);

//改变页面title插件
Vue.use(require('vue-wechat-title'))

//全局安装promise
import { install } from 'promise-es6'
install();

//全局安装fetch
import 'whatwg-fetch'
//安装微信sdk
import { WechatPlugin } from 'vux'
// 将微信的jssdk挂载到vue的原型上面
Vue.use(WechatPlugin)

// 安装swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//安装自定义组件
import GaPlugin from './script/GaPlugin'
Vue.use(new GaPlugin());



//应用全局样式
import './rent/style/public.scss';
import './new/common/public.css';

//安装vux全局插件
import VuxRegister from './script/VuxRegister'
Vue.use(new VuxRegister());

import store from './store/new'

//全局注册分享
import share from './new/components/newhouse/share/share.js';
Vue.use(share);

/* eslint-disable no-new */
var vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')
vm.post('/jsapi/getJsapiSignature?local_url=' + encodeURIComponent(location.href.split('#')[0]), {}, {
    interfaceType: "weichat"
}).then(response => {
    vm.$wechat.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: response.appid, // 必填，公众号的唯一标识
        timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
        nonceStr: response.noncestr, // 必填，生成签名的随机串
        signature: response.signature, // 必填，签名，见附录1
        jsApiList: [
                'onMenuShareAppMessage',
                'onMenuShareTimeline'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    vm.$wechat.ready(function() {
        // self.wxShare();
        vm.$wechat.onMenuShareAppMessage({
            title: "国安家", //标题
            desc: '国安家，为每一个家的梦想全力以赴！', //描述
            link: "https://www.guoanfamily.com/guoanjiaApp", //连接地址指打开分享时页面地址
            imgUrl: 'https://media.guoanfamily.com/xixi.png',
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },

        });
        // 分享到朋友圈
        vm.$wechat.onMenuShareTimeline({
            title: "国安家", //标题
            desc: '国安家，为每一个家的梦想全力以赴！', //描述
            link: "https://www.guoanfamily.com/guoanjiaApp", //连接地址指打开分享时页面地址
            imgUrl: 'https://media.guoanfamily.com/xixi.png', //图片
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
        });
    })
}, response => {
    alert(JSON.stringify(err))
})
