export default class {
    constructor() {

        }
        // 测试全局地址
        // Utils = "http://ntest.guoanfamily.com/"
        //    Utils =  "http://172.16.43.166:8002/";
        //    Utils =  "http://192.168.1.104:8002/";
        //    Utils =  "http://192.168.1.108:8002/";
        //    Utils =  "http://172.16.43.166:8002/";
    Utils = "http://rtest.guoanfamily.com/"
        // 正式环境地址
        // Utils = "https://www.guoanfamily.com/";

    install(Vue, options) {
            this.isBlank(Vue); //非空验证
            this.idCard(Vue); //身份验证
            this.installPrototype(Vue); //ajax
        }
        // 验证值是否为空，undefined 或者为字符串空值
    isBlank(Vue) {
            Vue.prototype.notEmpty = (value) => {
                if (value === null || value === undefined || value === "null" || value === "undefined" || value === "") {
                    return true;
                } else {
                    return false;
                }
            }
        }
        // 身份证号码规则验证
    idCard(Vue) {
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
    }
    installPrototype(Vue) {
        /**
         * get请求
         * @param url
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.get = url => {
            let token = localStorage.getItem('token');
            // alert(token)
            return fetch(this.Utils + url, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
            }).then(function(response) {
                // Vue.$vux.loading.hide();
                return response.json();
            }).then(res => {
                // Vue.$vux.loading.hide();
                if (res.code === 10003) {
                    let standbyToken = localStorage.getItem('standbyToken');
                    return fetch(this.Utils + `user/userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                        method: 'get',
                        headers: {
                            "Content-Type": "application/json",
                        }
                    }).then(function(response) {
                        // Vue.$vux.loading.hide();
                        return response.json();
                    }).then(res => {
                        // Vue.$vux.loading.hide();
                        //1.用res更新本地数据
                        // console.log(res);
                        // localStorage.setItem('userID', res.data.userId); //将用户id存入本地
                        localStorage.setItem('userPhone', res.data.phoneNum); //将用户电弧存入本地
                        localStorage.setItem('token', res.data.token); //将用户token存入本地
                        localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地
                        localStorage.setItem('userName', res.data.userName) //如果有姓名，则存入localStorage
                        localStorage.setItem('userInfroMap', JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                            //2.重新用新的token获取需要请求的数据
                        let token = localStorage.getItem('token');
                        return fetch(this.Utils + url, {
                            method: 'get',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": token
                            },
                            // body: JSON.stringify(data)
                        }).then(function(response) {
                            return response.json();
                        }).then(res => {
                            // Vue.$vux.loading.hide();
                            // console.info(url + "：", data, JSON.parse(JSON.stringify(res)));
                            return res;
                        }).catch(function(e) {
                            // Vue.$vux.loading.hide();
                            console.error(e);
                        })
                    })
                } else {
                    return res;
                }
                console.info(url + "：", data, JSON.parse(JSON.stringify(res)));
                return res;
            }).catch(function(e) {
                Vue.$vux.loading.hide();
                console.error(e);
            })
        };

        /**
         * post请求
         * @param url
         * @param data
         * @returns {Promise.<TResult>}
         */
        Vue.prototype.post = (url, data = {}) => {
            let token = localStorage.getItem('token');
            Vue.$vux.loading.show();

            return fetch(this.Utils + url, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify(data),
            }).then(function(response) {
                return response.json();
            }).then(res => {
                Vue.$vux.loading.hide()
                    // console.log(res);
                if (res.code === 10003) {
                    let standbyToken = localStorage.getItem('standbyToken');
                    return fetch(this.Utils + `user/userLoginController/unionloginByToken?standbyToken=${standbyToken}`, {
                        method: 'get',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": token
                        }
                    }).then(function(response) {
                        return response.json();
                    }).then(res => {
                        //1.用res更新本地数据
                        localStorage.setItem('userPhone', res.data.phoneNum); //将用户电弧存入本地
                        localStorage.setItem('token', res.data.token); //将用户token存入本地
                        localStorage.setItem('standbyToken', res.data.standbyToken) //将用户备用token存入本地
                        localStorage.setItem('userName', res.data.userName) //如果有姓名，则存入localStorage
                        localStorage.setItem('userInfroMap', JSON.stringify(res.data.userInfo)) //将客户的基本信息，收藏的楼盘放入localstorage
                            //2.重新用新的token获取需要请求的数据
                        let token = localStorage.getItem('token');
                        return fetch(this.Utils + url, {
                            method: 'post',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": token
                            },
                            body: JSON.stringify(data),
                        }).then(function(response) {
                            return response.json();
                        }).then(res => {
                            console.info(url + "：", data, JSON.parse(JSON.stringify(res)));
                            return res;
                        }).catch(function(e) {
                            console.error(e);
                        })
                    })
                } else {
                    return res;
                }
                console.info(url + "：", data, JSON.parse(JSON.stringify(res)));
                return res;
            }).catch(function(e) {
                Vue.$vux.loading.hide()
                console.error(e);
            })
        };
        Vue.prototype.Utils = this.Utils
            // Vue.prototype.Utils2 = this.Utils2

    }
}