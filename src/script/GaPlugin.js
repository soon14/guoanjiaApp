/**
 * Created by Administrator on 2017/4/10 0010.
 */

import { config } from '../config';
import Bottom from '../new/components/buttonGroup'; //底部导航
import PageHeader from '../rent/components/public/PageHeader'; //公共头部
import LoadingTip from '../rent/components/public/LoadingTip';
import echarts from 'echarts'
import store from '../store/new/index';
import { debug } from 'util';

//保存所有的广播事件
window.EVENT_STORAGE = window.EVENT_STORAGE === undefined ? {} : window.EVENT_STORAGE;

export default class {

    constructor() {

    }

    install(Vue, options) {
        this.installMixin(Vue);

        this.installExtendsFunction();

        this.installComponent(Vue);

        this.installPrototype(Vue);

        this.installFilter(Vue);
    }

    /*------------------安装扩展方法------------------*/
    installMixin(Vue) {
        // Vue.mixin({
        //     mounted() {
        //         //让页面加载好后滚动到顶部
        //         window.scrollTo(0, 0);
        //     },

        //     methods: {

        //     },
        // })
    }

    installExtendsFunction() {
        /**
         * 扩展时间对象，增加Format方法
         */
        (function() {
            /*对Date的扩展，将 Date 转化为指定格式的String
             月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
             年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
             例子：
             (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
             (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
             支持时间格式化*/
            Date.prototype.Format = function(fmt) { //author: meizz
                let o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds(), //秒
                    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                    "S": this.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        }())
    }

    /*------------------添加vue组件------------------*/
    installComponent(Vue) {
        Vue.component("ga-page-header", PageHeader);
        Vue.component("ga-page-bottom", Bottom);
        Vue.component("ga-loading-tip", LoadingTip);
    }

    /*------------------添加vue过滤器------------------*/
    installFilter(Vue) {
        Vue.filter('date-time-filter', function(time) {
            if (!time) {
                return "";
            }
            return new Date(time).Format("yyyy-MM-dd hh:mm");
        });
    }

    /*------------------添加vue实例方法------------------*/
    installPrototype(Vue) {
        Vue.prototype.$echarts = echarts

        //定义storage里面的key
        Vue.prototype.KEYS = {
            //记录当前登录的用户信息
            USER_INFO: 'USER_INFO',

            USER_TOKEN: "token",
            USER_STAND_BY_TOKEN: "standbyToken",

            //记录用户搜索
            SEARCH_LOG: 'SEARCH_LOG',
            SEARCH_CONTENT: 'SEARCH_CONTENT',

            OPENID: "openid",
            USER_INFO_MAP: 'userInfroMap', //登陆者收藏的房间列表
        };

        //定义全局事件
        Vue.prototype.EVENTS = {
            "PAGE_LOADING_START": "PAGE_LOADING_START",
            "PAGE_LOADING_END": "PAGE_LOADING_END"
        };
        //收藏房间使用的地址（#号之前）
        // Vue.prototype.CON_URL = "https://www.guoanfamily.com/rentHouse/wap/";
        Vue.prototype.CON_URL = "https://www.guoanfamily.com/";
        // Utils = "https://www.guoanfamily.com/";
        //		Vue.prototype.CON_URL="http://172.16.4.12:8092/user/";

        /**
         * 定义上传图片的地址
         * @type {string}
         */
        Vue.prototype.UPLOAD_IMAGE = config.UPLOAD_IMAGE;

        /**
         * 获取session中的对象
         * @param key
         */
        Vue.prototype.getSession = key => {
            let value = window.sessionStorage.getItem(key);
            if (value === "") {
                return null;
            }
            try {
                value = JSON.parse(value);
            } catch (e) {
                //console.error(e, key, value);
                return value;
            }

            return value;
        };

        /**
         * 设置、清空session中的对象
         * @param key
         * @param value
         */
        Vue.prototype.setSession = (key, value) => {
            if (value === undefined) {
                window.sessionStorage.removeItem(key);
            } else {

                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }

                window.sessionStorage.setItem(key, value);
            }
        };

        /**
         * 获取storage中的对象
         * @param key
         */
        Vue.prototype.getStorage = key => {
            let value = window.localStorage.getItem(key);
            if (value === "") {
                return null;
            }
            try {
                value = JSON.parse(value);
            } catch (e) {
                //console.error(e, key, value);
                return value;
            }

            return value;
        };

        /**
         * 设置、清空Storage中的对象
         * @param key
         * @param value
         */
        Vue.prototype.setStorage = (key, value) => {
            if (value === undefined) {
                window.localStorage.removeItem(key);
            } else {

                if (typeof value === "object") {
                    value = JSON.stringify(value)
                }

                window.localStorage.setItem(key, value);
            }
        };

        /**
         * get请求
         * @param url
         * @param opinion
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.get = function(url, opinion = {
            interfaceType: ""
        }) {

            let requestUrl;
            let Authorization = "";
            let platform =  localStorage.getItem('platform');
            if(platform == null || platform == 'null' || platform == 'undefined'){
                var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    platform = 'weixin';
                }else{
                    platform = 'webPage';
                }
            }
            _hmt.push(['_trackEvent', platform, url]);
            switch (opinion.interfaceType) {
                case "newhouse":
                    requestUrl = config.INTERFACE_NEW1 + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
                case "newHouse":
                    requestUrl = config.INTERFACE_NEW + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
                case "collect":
                    requestUrl = config.COLLECT + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
                case "intergral":
                    requestUrl = config.intergral + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
                case "luckdraw":
                    requestUrl = config.luckdraw + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
                case "metorRest":
                    requestUrl = config.metRest + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
                case "default":
                default:
                    requestUrl = config.INTERFACE_RENT + url;
                    Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);
                    break;
            }
            return fetch(requestUrl, {
                method: 'get',
                headers: { "Content-Type": "application/json", "Authorization": Authorization },
            }).then(function(response) {

                return response.json();
            }).then(function(res) {
                // console.log('this',store);
                // console.group(`请求接口：${url}`);
                // console.log("响应结果：", JSON.parse(JSON.stringify(res)));
                // console.groupEnd();
                if(res.status == 130001){
                    //判断是否有standbyToken
                    // console.log(res.code);
                    // let standbyToken = this.getStorage(this.KEYS.USER_STAND_BY_TOKEN);
                    let standbyToken = localStorage.getItem('standbyToken');
                    if (!standbyToken) {
                        //如果没有刷新token则跳转到登录
                        store.state.loginShow = true;
                        // console.log(store.state.loginShow);
                        return false;
                    } else {
                        // //有刷新token则重新登录
                        return Vue.prototype.get(`userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                            interfaceType: "collect"
                        }).then(res => {
                            // console.log('res',res);
                            //保存登录信息
                            // this.setStorage(this.KEYS.USER_STAND_BY_TOKEN, res.data.standbyToken);
                            // this.setStorage(this.KEYS.USER_TOKEN, res.data.token);
                            // localStorage.setItem(this.KEYS.USER_INFO_MAP, JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                            localStorage.setItem('standbyToken', res.data.standbyToken);
                            localStorage.setItem('token', res.data.token)
                            localStorage.setItem('userInfroMap', JSON.stringify(res.data.userInfo));
                            localStorage.setItem('userPhone', res.data.phoneNum); //将用户电话存入本地
                            //localStorage.setItem('token', res.data.token); //将用户token存入本地
                            //localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地
                            localStorage.setItem('userName', res.data.userName) //如果有姓名，则存入localStorage

                            return Vue.prototype.get(url, opinion);
                        })

                    }
                }

                /**
                 * 0: 成功
                 * -1: 未知错误
                 * 3: 接口权限校验失败
                 * 4: 参数错误或用户未登录
                 * 5: 用户信息缺失
                 */
                //判断接口权限校验结果
                switch (res.code) {
                    case 4:
                        //判断是否有standbyToken
                        // console.log(res.code);
                        // let standbyToken = this.getStorage(this.KEYS.USER_STAND_BY_TOKEN);
                        let standbyToken = localStorage.getItem('standbyToken');
                        if (!standbyToken) {
                            //如果没有刷新token则跳转到登录
                            store.state.loginShow = true;
                            // console.log(store.state.loginShow);
                            return false;
                        } else {
                            // //有刷新token则重新登录
                            return Vue.prototype.get(`userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                                interfaceType: "collect"
                            }).then(res => {
                                // console.log('res',res);
                                //保存登录信息
                                // this.setStorage(this.KEYS.USER_STAND_BY_TOKEN, res.data.standbyToken);
                                // this.setStorage(this.KEYS.USER_TOKEN, res.data.token);
                                // localStorage.setItem(this.KEYS.USER_INFO_MAP, JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                                localStorage.setItem('standbyToken', res.data.standbyToken);
                                localStorage.setItem('token', res.data.token)
                                localStorage.setItem('userInfroMap', JSON.stringify(res.data.userInfo));
                                localStorage.setItem('userPhone', res.data.phoneNum); //将用户电话存入本地
                                //localStorage.setItem('token', res.data.token); //将用户token存入本地
                                //localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地
                                localStorage.setItem('userName', res.data.userName) //如果有姓名，则存入localStorage

                                return Vue.prototype.get(url, opinion);
                            })

                        }
                        break;
                    case 10030:
                        //window.location.href = config.LOGIN_PAGE_URL();
                        // window.location.hash = "#/login"
                        store.state.loginShow = true;
                        break;
                    default:
                        return res;
                }

            }).catch(function(e) {
                console.error(e);

            })
        };

        Vue.prototype.getShare = url => {

            let Authorization = Vue.prototype.getStorage(Vue.prototype.KEYS.USER_TOKEN);

            return fetch(url, {
                method: 'get',
                headers: { "Content-Type": "application/json", "Authorization": Authorization },
            }).then(function(response) {
                return response.json();
            }).then(function(res) {
                // console.group(`请求接口：${url}`);
                // console.log("响应结果：", JSON.parse(JSON.stringify(res)));
                // console.groupEnd();
                return res;
            }).catch(function(e) {
                console.error(e);
            })
        };
        /**
         * post请求
         * @param url
         * @param data
         * @param opinion
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.post = function(url, data = {}, opinion = {
            interfaceType: ""
        }) {

            let requestUrl;
            let Authorization = this.getStorage(this.KEYS.USER_TOKEN);
            let platform =  localStorage.getItem('platform');
            if(platform == null || platform == 'null' || platform == 'undefined'){
                var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    // console.log('weixin');
                    platform = 'weixin';
                }else{
                    // console.log('webPage');
                    platform = 'webPage';
                }
            }
            // console.log('xixi',url.split('?')[0])
            _hmt.push(['_trackEvent', platform, url.split('?')[0]]);
            switch (opinion.interfaceType) {
                case "newhouse":
                    requestUrl = config.INTERFACE_NEW1 + url;
                    break;
                case "newHouse":
                    requestUrl = config.INTERFACE_NEW + url;
                    break;
                case "weichat":
                    requestUrl = config.WECHAT + url;
                    break;
                case "collect":
                    requestUrl = config.COLLECT + url;
                    break;
                case "intergral":
                    requestUrl = config.intergral + url;
                    break;
                case "luckdraw":
                    requestUrl = config.luckdraw + url;
                    break;
                case "metorRest":
                    requestUrl = config.COLLECT + url;
                    break;
                case "pay":
                    requestUrl = config.PAY_WAY + url;
                    break;
                case "default":
                default:
                    requestUrl = config.INTERFACE_RENT + url;
                    break;
            }

            return fetch(requestUrl, {
                method: 'post',
                headers: { "Content-Type": "application/json", "Authorization": Authorization },
                body: new Blob([JSON.stringify(data)], { type: 'application/json' }),
            }).then(function(response) {
                return response.json();
            }).then((res) => {
                // console.group(`请求接口：${url}`);
                // console.log("求情参数：", data);
                // console.log("响应结果：", JSON.parse(JSON.stringify(res)));
                // console.groupEnd();
                if(res.status == 130001){
                    //判断是否有standbyToken
                    // console.log(res.code);
                    // let standbyToken = this.getStorage(this.KEYS.USER_STAND_BY_TOKEN);
                    let standbyToken = localStorage.getItem('standbyToken');
                    if (!standbyToken) {
                        //如果没有刷新token则跳转到登录
                        store.state.loginShow = true;
                        // console.log(store.state.loginShow);
                        return false;
                    } else {
                        // //有刷新token则重新登录
                        return Vue.prototype.get(`userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                            interfaceType: "collect"
                        }).then(res => {
                            // console.log('res',res);
                            //保存登录信息
                            // this.setStorage(this.KEYS.USER_STAND_BY_TOKEN, res.data.standbyToken);
                            // this.setStorage(this.KEYS.USER_TOKEN, res.data.token);
                            // localStorage.setItem(this.KEYS.USER_INFO_MAP, JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                            localStorage.setItem('standbyToken', res.data.standbyToken);
                            localStorage.setItem('token', res.data.token)
                            localStorage.setItem('userInfroMap', JSON.stringify(res.data.userInfo));
                            localStorage.setItem('userPhone', res.data.phoneNum); //将用户电话存入本地
                            //localStorage.setItem('token', res.data.token); //将用户token存入本地
                            //localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地
                            localStorage.setItem('userName', res.data.userName) //如果有姓名，则存入localStorage

                            return Vue.prototype.get(url, opinion);
                        })

                    }
                }
                /**
                 * 0: 成功
                 * -1: 未知错误
                 * 3: 接口权限校验失败
                 * 4: 参数错误或用户未登录
                 * 5: 用户信息缺失
                 */
                //判断接口权限校验结果
                switch (res.code) {
                    case 4:
                        //判断是否有standbyToken
                        // let standbyToken = this.getStorage(this.KEYS.USER_STAND_BY_TOKEN);
                        let standbyToken = localStorage.getItem('standbyToken');
                        if (!standbyToken) {
                            //如果没有刷新token则跳转到登录
                            //window.location.href = config.LOGIN_PAGE_URL();
                            // this.$router.push("/login");
                            // this.$store.state.loginShow = true;
                            store.state.loginShow = true;
                            return false;
                        } else {

                            //有刷新token则重新登录
                            return Vue.prototype.get(`userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                                interfaceType: "collect"
                            }).then(res => {
                                //保存登录信息
                                // this.setStorage(this.KEYS.USER_STAND_BY_TOKEN, res.data.standbyToken);
                                // this.setStorage(this.KEYS.USER_TOKEN, res.data.token);
                                // localStorage.setItem(this.KEYS.USER_INFO_MAP, JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                                localStorage.setItem('standbyToken', res.data.standbyToken);
                                localStorage.setItem('token', res.data.token);
                                localStorage.setItem('userInfroMap', JSON.stringify(res.data.userInfo)); //将客户的基本信息，收藏的楼盘放入localstorage
                                localStorage.setItem('userPhone', res.data.phoneNum); //将用户电弧存入本地
                                //localStorage.setItem('token', res.data.token); //将用户token存入本地
                                //localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地
                                localStorage.setItem('userName', res.data.userName) //如果有姓名，则存入localStorage

                                return Vue.prototype.post(url, data, opinion);
                            })
                        }

                        break;
                    case 5:
                        //用户信息缺失跳转到信息补全页面
                        break;
                    case 10030:
                        //当前登陆者userId丢失，跳转至登录页
                        //window.location.href = config.LOGIN_PAGE_URL();
                        // window.location.hash = "#/login"
                        store.state.loginShow = true;
                        break;
                    default:
                        return res;
                }

            }).catch(function(e) {
                console.error(e);
            })
        };
        /**
         * 获取微信openid
         * @returns {string}
         */
        Vue.prototype.getOpenId = function() {
            if (config.WECHAT_AUTH) { //判断是测试还是正式
                if (this.getStorage(this.KEYS.OPENID)) { //判断session里是否有openid
                    return this.getStorage(this.KEYS.OPENID)
                } else {
                    let url = window.location.href; //获取url中openid
                    let theRequest = {};
                    if (url.indexOf("?") !== -1) {
                        let str = url.substr(1);
                        str = str.replace(/\?/g, '&');
                        let strs = str.split("&");
                        for (let i = 0; i < strs.length; i++) {
                            theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
                        }
                    }
                    if (theRequest.openid) { //判断url中是不否有openid
                        this.setStorage(this.KEYS.OPENID, theRequest.openid);
                        return theRequest.openid;
                    } else {
                        window.location.href = config.WECHAT_AUTH_URL(window.location.href);
                    }

                }
            } else {
                return this.getStorage(this.KEYS.OPENID);
            }
        };

        /**
         * 获取展示文件的url
         * @param fileName
         * @param w
         * @param h
         * @returns {string}
         */
        Vue.prototype.concatFileUrl = (fileName, w, h) => {
            let size = "";
            if (w !== undefined && h !== undefined) {
                size = `?imageView2/0/w/${w}/h/${h}`;
            }
            return config.IMAGE_PATH + `${fileName}${size}`;
        };

        /**
         * 新增一条订阅记录（用于组件间通信）
         *
         * @param eventName
         * @param owner
         * @param cb
         */
        Vue.prototype.subscribe = (eventName, owner, cb) => {
            let queue = window.EVENT_STORAGE[eventName];

            if (queue === undefined) {
                queue = [];
            }

            queue.push({
                owner: owner,
                cb: cb,
            });

            window.EVENT_STORAGE[eventName] = queue;
        };

        /**
         * 订阅者取消订阅消息（用于组件间通信）
         *
         * @param eventName
         * @param owner
         * @returns {boolean}
         */
        Vue.prototype.unsubscribe = (eventName, owner) => {
            let queue = window.EVENT_STORAGE[eventName];

            if (queue === undefined) {

                console.error(`取消订阅事件失败：${eventName},事件不存在`);
                return false;
            }

            window.EVENT_STORAGE[eventName] = queue.filter(obj => {
                return obj.owner !== owner;
            });
        };

        /**
         * 推送一条全局消息（用于组件间通信）
         *
         * @param eventName
         * @param sender
         * @param parameter
         * @param cb
         */
        Vue.prototype.broadcast = (eventName, sender, parameter, cb) => {
            let queue = window.EVENT_STORAGE[eventName];
            console.group("广播消息：", eventName);

            if (queue === undefined　 || queue.length === 0) {
                console.error(`推送事件：${eventName},不存在订阅者`);
                console.groupEnd();
                return false;
            }

            queue.map(obj => {
                obj.cb(parameter);
                // console.log(`推送人：${sender},推送事件：${eventName},参数：${parameter},接收者：${obj.owner}`);
            });

            if (cb) {
                cb();
            }

            // console.log(`接收者共：${queue.length}`);
            // console.groupEnd();
        };

        /**
         * 下载一个文件
         *
         * @param url
         */
        Vue.prototype.downloadFile = (url) => {
            //默认在新窗口打开图片
            window.open(url);

            //开始下载
            let anchor = document.createElement("a");
            anchor.href = url;
            anchor.setAttribute("download", "");
            anchor.style.display = "none";
            document.body.appendChild(anchor);
            setTimeout(function() {
                anchor.click();
                document.body.removeChild(anchor);
            }, 66);
        }

        /**
         * 文件上传拦截
         * @param file
         * @param type :  图片（pic）, 文档(file)
         */
        Vue.prototype.fileFilter = function(file, type = "pic") {
            let name = file.name;
            let arr = [];

            switch (type) {
                case "pic":
                    arr = ['.jpeg', '.jpg', '.png'];
                    break;
                case "file":
                    arr = ['.doc', '.docx', '.xls', '.xlsx', '.pdf', '.jpeg', '.png', '.jpg'];
                    break;
            }

            let ext = name.toLowerCase().split(".")[1];
            return arr.indexOf(`.${ext}`) !== -1;
        }

        /**
         * 校验客户是否是登录状态
         * @param login 是否需要跳转到登录页面
         * @param options 跳转到登录页面的附加参数
         * @returns {boolean}
         */
        Vue.prototype.verifyLogin = function(login = true, options = {
                query: "",
            }) {
                //不为空则为登录状态
                if (!!this.getStorage(this.KEYS.USER_TOKEN)) {
                    return true
                }
                if (login) {
                    //window.location.href = config.LOGIN_PAGE_URL() //+ options.query;
                    // this.$router.push("/login")
                    window.location.hash = "#/login"
                }

                return false;
            }
            /**
             * 判断是否是在微信端
             */
        Vue.prototype.isECTouch = function() {
                var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    localStorage.setItem('platform','weixin');
                    //在微信中打开
                    store.state.showWxTitle = true;
                    return true;
                } else {
                    store.state.showWxTitle = false;
                    return false;
                }
            }
            /*判断是安卓还是ios登录*/

        Vue.prototype.AndroidOrIos = function() {
            //安卓返回true,ios返回false
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid === true && isiOS === false) {
                return false;
            }
            if (isAndroid === false && isiOS === true) {
                return false;
            }
        }


        /*---------------------------------------------新房---------------------------------------------*/
        Vue.prototype.notEmpty = (value) => {
                if (value === null || value === undefined || value === "null" || value === "undefined" || value === "") {
                    return true;
                } else {
                    return false;
                }
            }
            // 身份认证
        Vue.prototype.IC = (field) => {
            let value = field;
            if (value === "") {
                return true;
            }
            let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
            let arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
            let reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            if (reg.test(value)) {
                let sum = 0,
                    idx;
                for (let i = 0; i < value.length - 1; i++) {
                    // 对前17位数字与权值乘积求和
                    sum += parseInt(value.substr(i, 1), 10) * arrExp[i];
                }
                // 计算模（固定算法）
                idx = sum % 11;
                // 检验第18为是否与校验码相等
                return arrValid[idx] == value.substr(17, 1).toUpperCase();
            } else {
                return false;
            }
        }

        // 是否有token
        Vue.prototype.LoToken = () => {
                let LoToken = localStorage.getItem('token');
                if (LoToken === null || LoToken === undefined || LoToken === "null" || LoToken === "undefined" || LoToken === "") {
                    return true;
                } else {
                    return false;
                }
            }
            // 电话号码验证
        Vue.prototype.UserPhone = () => {
                let UserPhone = localStorage.getItem('userPhone');
                if (UserPhone === null || UserPhone === undefined || UserPhone === "null" || UserPhone === "undefined" || UserPhone === "") {
                    return true;
                } else {
                    return false;
                }
            }
            // 电话号码验证
        Vue.prototype.EnCryption = (val, item) => {
            val = ''
            for (var i = 0; i < item.length; i++) {
                if (i < 3 || i >= item.length - 3) {
                    val += item[i];
                } else {
                    val += '*';
                }
            }
            return val;
        }
    }
}
