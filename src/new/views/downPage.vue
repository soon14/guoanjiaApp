<template>
       <div  class="fixContent" >
        <div class="topBuildInfor" style="margin-top:60px;">
            <div style="margin-left:.25rem;">
                <div class="nameLeft">
                    <span>楼盘名称：</span>
                    <span>{{buildInfo.buildname}}</span>
                </div>
                <div class="nameLeft">
                    <span>楼盘地址：</span>
                    <span>{{buildInfo.buildaddress}}</span>
                </div>
                <div class="nameLeft">
                    <span>房号全称：</span>
                    <span>{{buildInfo.roomnumberfullname}}</span>
                </div>
                <div class="nameLeft">
                    <span>建筑面积：</span>
                    <span>{{buildInfo.buidingarea}}</span>
                    <span>㎡</span>
                </div>
                <div class="nameLeft">
                    <span>套内建筑面积：</span>
                    <span>{{buildInfo.roombuildingarea}}</span>
                    <span>㎡</span>
                </div>
                <div class="nameLeft">
                    <span>房屋单价：</span>
                    <span>{{buildInfo.unitprice}}</span>
                    <span>元/㎡</span>
                </div>
                <div class="nameLeft" style="margin-bottom:.25rem;">
                    <span>房屋总价：</span>
                    <span>{{buildInfo.totalprices}}</span>
                    <span>元</span>
                </div>
            </div>
        </div>
        <!-- 输入框 -->
        <div style="border-bottom:.125rem solid #ccc;">
            <group class="GGroup">
                <x-input style="font-size:.325rem;" title="购房人姓名" name="username" v-model="username" placeholder="请输入姓名"></x-input>
                <div class="sexd">
                    <div style="font-size:0.325rem;">性别</div>
                    <input style="margin-left:-2rem;" type='radio' name="0" :checked='man' @click="sexClick">
                    <span class="man">男</span>
                    </input>
                    <input style="margin-left: .5rem;" type='radio' name="0" @click="sexClick">
                    <span>女</span>
                    </input>
                </div>
                <x-input style="font-size:.325rem;" title="身份证号码" name="card" v-model="card" placeholder="请输入身份证号"></x-input>
                <x-input style="font-size:.325rem;" title="手机号码　" name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                <x-input style="font-size:.325rem;" title="通讯地址　" name="address" v-model="address" placeholder="请输入通讯地址"></x-input>
            </group>
            <!-- <div class="lianming" v-show="showLianmin" @click="lianmingClick">增加联名买受人</div> -->
            <!-- <group v-show="lmmsr" class="GGroup">
                                                <x-input style="font-size:.65rem;" title="购房人姓名" name="lmusername" v-model="lmusername" placeholder="请输入姓名"></x-input>
                                                <div class="sexd">
                                                    <div style="font-size:0.65rem;">性　　别</div>
                                                    <input style="margin-left:-4rem;" type='radio' name="1" :checked='man1' @click="sexClick1">
                                                    <span class="man">男</span>
                                                    </input>
                                                    <input style="margin-left: 1rem;" type='radio' name="1" @click="sexClick1">
                                                    <span>女</span>
                                                    </input>
                                                </div>
                                                <x-input style="font-size:.65rem;" title="身份证号码" name="lmcard" v-model="lmcard" placeholder="请输入身份证号"></x-input>
                                                <x-input style="font-size:.65rem;" title="手机号码　" name="lmmobile" v-model="lmmobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                                                <x-input style="font-size:.65rem;" title="通讯地址　" name="address" v-model="lmaddress" placeholder="请输入通讯地址"></x-input>
                                            </group> -->
            <!-- <div class="lianming" v-show="shouqiLianmin" @click="shouqiClick">收起</div> -->

        </div>
        <!-- 底部方式 -->
        <div class="topBuildInfor" style="border-bottom:none;padding-bottom:2rem;">
            <div style="margin-left:5%;">
                <div class="nameLeft">
                    <span>需支付款项类别：</span>
                    <span>认购定金</span>
                </div>
                <div class="nameLeft">
                    <span>支付金额：</span>
                    <span>{{zonge}}元</span>
                </div>
                <div class="nameLeft">
                    <span>支付方式：</span>
                    <span>微信支付</span>
                </div>
            </div>
        </div>
        <div class="bottomBtn">
            <x-button class="immeditBookingPay" type="primary" action-type="button" @click.native='btnPayMent'>确定下单并支付定金</x-button>
        </div>
    </div>
</template>
<script>
// import { XInput, Group, AlertPlugin } from 'vux'
export default {
    // components: {
    //     XInput, Group, AlertPlugin
    // },
    data() {
        return {
            buildInfo: {},
            id: '',
            username: '',//姓名
            mobile: '',//电话
            card: '',//身份证号码
            address: '',//地址
            man: true,//性别
            money: '',//金额
            orderid: '',//订单号
            buildid: '',//楼盘id
            roomnumberid: '',//房间id
            housenumber:'',//楼盘号
            unitnumber:'',//单元号
            housetypeid:'',//户型id
            orderid: '',//订单id
            notifyurl: '',//微信回调url
            totalFee: '',//支付zonge
            body: '下定金额',
            callBackUrl: this.Utils + 'login/Center.html',
            zonge:'',
        }
    },
    methods: {
        // 页面数据加载
        buildonLoad() {
            this.get('palmsaleapp/api/v1/build/buildhousefloor?roomnumberid=' + this.roomnumberid + "&buildid=" + this.buildid + '&housenumber='+ this.housenumber + '&unitnumber=' + this.unitnumber + "&housetypeid=" + this.housetypeid,{ interfaceType: "newHouse"}).then(response => {
                if (response.status == 200) {
                    console.log(response);
                    this.buildInfo = response.data[0];
                    this.zonge = (this.buildInfo.totalprices*0.1).toFixed(0);
                    // console.log(this.zonge);
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        // 截取ID
        slitID() {
            var reg = new RegExp("(^|&)id=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return unescape(r[2]);
            return null;
        },
        // 控制联名买受人显示隐藏
        lianmingClick() {
            this.showLianmin = false;
            this.shouqiLianmin = true;
            this.lmmsr = true;
        },
        // 收起
        shouqiClick() {
            this.showLianmin = true;
            this.shouqiLianmin = false;
            this.lmmsr = false;
        },
        // 控制性别
        sexClick() {
            this.man = !this.man;
        },

        //保存信息并支付
        btnPayMent() {
            // 判断性别
            let sex = '';
            if (this.man == true) {
                sex = '男'
            } else if (this.man == false) {
                sex = '女'
            } else {
                sex = '男'
            };
            if (this.notEmpty(this.mobile)) {
                this.msgalert('请输入电话');
                return false;
            }
            if (this.notEmpty(this.username)) {
                this.msgalert('请输入姓名');
                return false;
            }
            if (this.notEmpty(this.address)) {
                this.msgalert('请输入地址');
                return false;
            }
            if (this.notEmpty(this.card)) {
                this.msgalert('请输入身份证号码');
                return false;
            }
            let post_data = {
                "custphonenumber": this.mobile,//电话
                "custname": this.username,//客户姓名
                "custphone": this.mobile,//电话
                "subtotalprice": this.zonge,//认购订金
                "submoney":this.buildInfo.totalprices,//认购总价
                "buildid": this.buildid,//楼盘id
                "houseresourceid": this.roomnumberid,//房源id
                "orderstate": "10",	//订单状态
                "origin": '1',	//订单来源
                "contactaddress": this.address,//通讯地址
                "idcard": this.card//身份证
            }
            this.post('palmsaleapp/api/v1/custom/initiation/saveInitCust', post_data,{ interfaceType: "newHouse"}).then(response => {

                if (response.status == 200) {
                    this.orderid = response.data.orderid;//订单id
                    this.openid = localStorage.getItem('openid');//'',
                    this.notifyUrl = response.data.returnUrl;//微信回调url
                    this.totalFee = this.zonge*100;//response.data.totalFee;//总额
                    // alert(this.orderid+" "+this.openid+" "+this.notifyUrl+" "+ this.totalFee)
                    // alert('http://act.guoanfamily.com/commonPlatform/pay/membershipPayment.html?id=' + this.openid + '&notifyUrl=' + this.notifyUrl + '&totalFee=' + this.totalFee + '&orderid=' + this.orderid + '&body=' + encodeURIComponent(this.body) + '&callBackUrl=' )
                    window.location.href = 'http://act.guoanfamily.com/commonPlatform/pay/membershipPayment.html?time='+((new Date()).getTime())+'&id=' + this.openid + '&notifyUrl=' + this.notifyUrl + '&totalFee=' + this.totalFee + '&orderid=' + this.orderid + '&body=' + encodeURIComponent('下定金额') + '&callBackUrl=' + this.callBackUrl;
                    // window.location.href = 'http://act.guoanfamily.com/commonPlatform/pay/membershipPayment.html?id=' + this.openid + '&notifyUrl=' + this.notifyUrl + '&totalFee=' + this.totalFee + '&orderid=' + this.orderid + '&body=' + encodeURIComponent(this.body) + '&callBackUrl=' + this.callBackUrl;
                }
            }, response => {
                // alert(JSON.stringify(response))
                this.showalert(response.msg);
            });

        },

        // 弹窗
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: '提示信息',
                content: msg
            })
        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            })
        }
    },
    mounted() {
        this.buildid = this.$route.query.buildid;
        this.roomnumberid = this.$route.query.roomnumberid;
        this.housenumber =  this.$route.query.housenumber;
        this.unitnumber = this.$route.query.unitnumber;
        this.housetypeid = this.$route.query.housetypeid;
        this.buildonLoad();
        let username = localStorage.getItem('userName');
        if (!this.notEmpty(username)) {
            this.username = username;
        } else {
            this.username == '';
        }
        this.mobile = localStorage.getItem('userPhone');
        let custinfo = JSON.parse(localStorage.getItem('userInfroMap'));
        this.card =  custinfo.infoByUserIdList.card;
        // 默认获取微信的地址
        let city =  localStorage.getItem('city');
        let province = localStorage.getItem('province')
        // 产看本地是否有客户修改过后的地址，如果有则使用用户修改过的地址
        var quyu  = localStorage.getItem('quyu');
        if(!this.notEmpty(quyu)){
            this.address =  quyu;
        }else{
            this.address = province + city;
        }
        // if(!this.notEmpty(custinfo.infoByUserIdList.quyu) && !this.notEmpty(custinfo.infoByUserIdList.address)){
        //     this.address = custinfo.infoByUserIdList.quyu + custinfo.infoByUserIdList.address;
        // }else{
        //     this.address =  city +  province;
        // }
    }
}
</script>
<style scoped lang = "less">
.topBuildInfor {
    width: 100%;
    margin-top: .35rem;
    border-bottom: .125rem solid #ccc;
    color: #403d3d;
    background-attachment: #fff;
    text-align: left;
    .nameLeft {
        width: 100%;
        font-size: .35rem;
        /* padding-left: .5rem; */
        line-height: .75rem;
    }
}

.sexd {
    width: 100%;
    margin-left: 3%;
    margin-right: 3%;
    line-height: .6rem;
    font-size: .35rem;
    border-top: 1px solid #e6e6e6;
    /* border-bottom: 1px solid #e6e6e6; */
    line-height: .8rem;
    div {
        width: 1rem;
        float: left;
        margin-left: .1rem;
    }
    .man {
        margin-right: .5rem;
    }
}

.lianming {
    width: 100%;
    height:.6rem;
    line-height: .6rem;
    color: #d7000f;
    text-align: center;
    font-size: .35rem;
}

.bottomBtn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    font-size: .3rem;
    z-index: 10;
    background: #fff;
}

.immeditBookingPay {
    background: url('../../../static/new/img/btnbj.png') no-repeat !important;
    background-size: 100% !important;
    font-size: .4rem !important;
    line-height: 1.1rem;
}
</style>
<style lang="less">
.weui-label::before {
    content: "*";
    position: absolute;
    color: red; // line-height: 3rem;
    left: 10px;
}
</style>
