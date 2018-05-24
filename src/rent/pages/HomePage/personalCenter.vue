<style scoped lang ='scss'>

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */
{
    opacity: 0
}
.centerTop{
    width:100%;
    height:3rem;
    background: url('../../../../static/personalCenter/centerbg.png') no-repeat;
    background-size: cover;
    position: relative;
    .personMsg{
        width: 0.8rem;
        position: absolute;
        left: 0;
        top: 0.8rem;
        bottom: 1rem;
        right: 0;
        margin: auto;
    }
    .custname{
        width:100%;
        font-size:0.28rem;
        position:absolute;
        top:1.8rem;
        text-align: center;
        font-weight: bold;
    }
    .custname1{
        width:100%;
        font-size:0.22rem;
        position:absolute;
        top:2.4rem;
        text-align: center;
        span:nth-child(1){
            float:left;
            margin-left:3rem;
        }
        .editmsg{
            float:left;
            width:0.24rem;
            height:0.3rem;
            display:block;
            background: url('../../../../static/personalCenter/edit.png') no-repeat;
            background-size:100%;
            margin-left:0.1rem;
        }
    }
}
    .product{
        width:100%;
        height:0.88rem;
        border-bottom: 1px solid #e6e6e6;
        span {
            display: block;
            float: left;
            height: 100%;
            img{
                margin-top:0.2rem;
            }
        }
        .button-exit{
            margin-bottom: 0.4rem;
        }
    }
    .flex-demo{
        text-align: center;
        color: #333333;
        background-color: #fff;
        border-radius: 4px;
        background-clip: padding-box;
        .personal_header {
            width: 30%;
            margin: 0.2rem 0.85rem;
        }
        .personal_img{
            width: 30%;
            margin: 0.2rem 0.85rem;
        }
    }
    .personal_font{
        text-align: center;
        width: 100%;
        font-size: 0.22rem;
        background: #fff;
        /* margin-bottom:0.1rem; */
    }
    .servicePhone {
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        font-size: 0.24rem;
        a{
            color: #fd9b6c;
        }
    }
    .market {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin: auto;
    z-index: 11;
    /* display: none; */
}

.alertDiv {
    position: fixed;
    z-index: 5000;
    width: 80%;
    height: 0.8rem;
    /* opacity: 1; */
    max-width: 300px;
    top: 30%;
    left: 10%;
    /* -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); */
    background-color: #FFFFFF;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;
    .top {
        font-size: 18px;
        margin-top: 0.3rem;
        font-weight: 400;
    }
    .msg {
        font-size: 16px;
        margin-top: 0.2rem;
        font-weight: 400;
        color: #999999;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #999999;
    }
    .bottomBtn {
        width: 100%;
        float: left;
        bottom: 0;
        button {
            width: 50%;
            background: #fff;
            float: left;
            border: none;
            font-size: 0.16rem;
            line-height: 0.26rem;
            margin-top:.1rem;
            color: #999999;
        }
    }
}
</style>
<template>
    <div style="background:#fff;height: 100%;overflow: scroll;">
        <!--头部部分  -->
    <!-- <div style="height:100%;"> -->
        <div class="centerTop">
            <div class="personMsg">
                <img :src="headimgurl" style="width:100%;" />
            </div>
            <div class="custname">
                <span>用户姓名/</span>
                <span>{{userName||""}}</span>
                <span>账号</span>
                <span>{{userPhone||""}}</span>
            </div>
            <!-- <div class="custname1" @click="modifyinfo">
                <span>编辑资料...</span>
                <span class="editmsg"></span>
            </div> -->
        </div>
        <!-- 产品部分 -->
        <div class='product'>
            <span>
                <img src='../../../../static/personalCenter/product.png' style="height:50%;margin-left:0.1rem;" />
            </span>
            <span style="font-size:0.24rem;line-height:0.88rem;margin-left:0.1rem;">产品服务</span>
            <span style="float:right;">
                <img src='../../../../static/personalCenter/jump.png' style="height:50%;margin-right:0.2rem;" />
            </span>
        </div>
        <div style="width:100%;">
            <flexbox>
                <flexbox-item>
                    <div class="flex-demo" @click="appointement">
                        <img class="personal_header" src='../../../../static/personalCenter/approom.png' />
                    </div>
                    <div class="personal_font">预约看房</div>
                </flexbox-item>
                <flexbox-item @click.native="Collent">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../../static/personalCenter/collent.png' />
                    </div>
                    <div class="personal_font">收藏</div>
                </flexbox-item>
                <flexbox-item @click.native="helpYourFindRoom">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../../static/personalCenter/helpYourHouse.png' />
                    </div>
                    <div class="personal_font" >帮你找房</div>
                </flexbox-item>
                <!-- <flexbox-item @click.native="tureToMeetingPlace">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../../static/personalCenter/sityReservation.png' />
                    </div>
                    <div class="personal_font">场地预定</div>
                </flexbox-item>
                <flexbox-item @click.native="tureToRestaurant">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../../static/personalCenter/restService.png' />
                    </div>
                    <div class="personal_font">餐厅服务</div>
                </flexbox-item> -->
            </flexbox>
        </div>
        <div style="width:100%;height:0.1rem;background:#f0f0f0;"></div>
        <!-- 交易部分 -->
        <div class='product'>
            <span>
                <img src='../../../../static/personalCenter/mydeal.png' style="height:50%;margin-left:0.1rem;" />
            </span>
            <span style="font-size:0.24rem;line-height:0.88rem;margin-left:0.1rem;">我的交易</span>
            <span style="float:right;">
                <img src='../../../../static/personalCenter/jump.png' style="height:50%;margin-right:0.2rem;" />
            </span>
        </div>
        <!--积分，合同，订单  -->
        <flexbox>
            <flexbox-item @click.native="myIntegral">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/mypoints.png' />
                </div>
                <div class="personal_font">我的积分</div>
            </flexbox-item>
            <flexbox-item @click.native="hetong">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/mycontract.png' />
                </div>
                <div class="personal_font">我的合同</div>
            </flexbox-item>
            <flexbox-item @click.native="orderList">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/myorder.png' />
                </div>
                <div class="personal_font">我的订单</div>
            </flexbox-item>
        </flexbox>

        <!--交租，门锁，反馈  -->
        <flexbox>
            <flexbox-item @click.native="zuyue">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/payrent.png' />
                </div>
                <div class="personal_font">我的租约</div>
            </flexbox-item>
            <flexbox-item @click.native="doorLocksonly">
                <div class="flex-demo" >
                    <img class="personal_img" src='../../../../static/personalCenter/doorlock.png' />
                </div>
                <div class="personal_font">智能门锁</div>
            </flexbox-item>
            <flexbox-item @click.native="tousu">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/feedback.png' />
                </div>
                <div class="personal_font">我要投诉</div>
            </flexbox-item>
        </flexbox>
        <!--出租，卖方，委托  -->
        <flexbox>
            <flexbox-item @click.native="chuzuClick">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/leaseroom.png' />
                </div>
                <div class="personal_font">我要出租</div>
            </flexbox-item>
            <flexbox-item @click.native="realClick">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/realroom.png' />
                </div>
                <div class="personal_font">我要卖房</div>
            </flexbox-item>
            <flexbox-item @click.native="housingCommsion">
                <div class="flex-demo">
                    <img class="personal_img" src='../../../../static/personalCenter/houseCommsion.png' />
                </div>
                <div class="personal_font">房源委托</div>
            </flexbox-item>
        </flexbox>
        <div style="width:100%;height:0.1rem;background:#f0f0f0;"></div>
        <div class="servicePhone">
            <span>服务热线：</span>
            <a href="tel:400-900-2225">400-900-2225</a>
        </div>
        <div style="width:100%;height:0.1rem;background:#f0f0f0;"></div>
        <div class='product button-exit' @click="clearLocal">
            <span>
                <img src='../../../../static/personalCenter/exit.png' style="height:50%;margin-left:0.1rem;" />
            </span>
            <span style="font-size:0.24rem;line-height:0.88rem;margin-left:0.1rem;">退出登录</span>
            <span style="float:right;">
                <img src='../../../../static/personalCenter/jump.png' style="height:50%;margin-right:0.2rem;" />
            </span>
        </div>
    <!-- </div> -->
        <div style="height:0.9rem;"></div>
        <div class="market" v-show="market" @click="marketClick"></div>
        <ga-page-bottom></ga-page-bottom>
    </div>
</template>

<script>
// import { TransferDom, Actionsheet, XSwitch, Toast } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'
export default {
    // directives: {
    //     TransferDom
    // },
    components: {
         Flexbox,
        FlexboxItem,
        // Actionsheet,
        // XSwitch,
        // Toast
    },
    data() {
        return {
            userName: '',
            userPhone: '',
            market: false,
            showaAl: false,
            headimgurl: '',
            show: false,
            show1: false,
            show2: false,
            alertlook:false,
            back:false,
        }
    },
    created(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo(){
            this.post("common/getUserInfo",{                
            }).then((res)=>{
                localStorage.setItem("phone",res.data.phone);
                localStorage.setItem("name",res.data.name);
                this.userPhone = res.data.phone;
                this.userName = res.data.name;
                this.headimgurl = res.data.portrait || 'http://Img.guoanfamily.com/touxiang.jpg';
            });
        },
        // modifyinfo() {
        //     // alert('1')
        //     this.$router.push('modifyInfo');
        // },
        // 预约看房的点击事件
        appointement() {
            // this.alertlook = true;
            // this.market =  true;
            // this.$router.push('appointement');
             this.$router.push('appointList');
        },
        newHouseLook(){
            this.$router.push('appointement');
        },
        // rentHouseLook(){
        //     window.location.href = 'https://www.guoanfamily.com/rentHouse/wap/#/appointList';
        // },
        // 收藏的点击事件
        Collent() {
            // this.show1 =  !this.show1;
            // this.show2 = false;
            // this.show  = false;
            this.$router.push('collent');
        },
        // 帮你找房
        helpYourFindRoom(){
            this.$router.push('Homepage/HouseList');
            // this.msgalert('敬请期待');
        },
        // 我的积分的点击事件
        myIntegral(){
            this.msgalert('敬请期待');
        },
        // 我的订单的点击事件
        orderList() {
            this.$router.push('MyContract');
        },
        // 我的合同的点击事件
        hetong() {
            this.$router.push('MyContract');
        },
        // 我的租约的点击事件
        zuyue() {
            this.$router.push('Lease');
            // window.location.href = "https://www.guoanfamily.com/rentHouse/wap/#/Lease";
        },
        // 智能门锁的点击事件
        doorLocksonly(){
            this.msgalert('敬请期待');
        },
        // 我要投诉的点击事件
        tousu() {
            let token = localStorage.getItem('token');
            this.$router.push('Complaint');
            // window.location.href = "https://www.guoanfamily.com/rentHouse/wap/#/Complaint?token=" + token;
        },
        // 出租的点击事件
        chuzuClick(){
           this.msgalert('敬请期待');
        },
        // 我要卖房的点击事件
        realClick(){
            this.msgalert('敬请期待');
        },
        // 房源委托的点击事件
        housingCommsion(){
            this.$router.push('Delegation');
            // this.msgalert('敬请期待');
        },
        // 清除缓存
        clearLocal() {
            // this.showalert('确定退出登录?')
            // localStorage.clear();
            // this.showaAl = true;
            // this.market = true;
            // this.realName = "";
            let _this = this;
            this.$vux.confirm.show({
               content:"您确定退出登录？",
               onCancel () {//取消执行
                    this.back= false;
               },
               onConfirm () {//确定执行
                    localStorage.setItem("token","");//清空localstorage
                    localStorage.setItem("standbyToken","");//清空localstorage
                    localStorage.setItem("userId","");
                    // localStorage.setItem("collectList","");//清空收藏数组
                    _this.$router.push("/")
               }

            })
        },
        // 弹窗确定的点击事件
        BtnClick() {
            this.$router.push("/")//首页
        },
        // 弹窗取消的点击事件
        exit() {
            this.showaAl = false;
            this.market = false;
        },
        // 遮罩层的点击事件
        marketClick() {
            this.showaAl = false;
            this.market = false;
            this.alertlook =  false;
        },
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
        // 全局控制底部按钮颜色
        // this.$store.state.buttonGroup = 2;
        // 页面加载的时候从本地获取用户的基本资料信息
        // var userName = localStorage.getItem('userName');
        // let headimgurl = localStorage.getItem('headImg');
        // // // alert(headimgurl);
        // if (headimgurl) {
        //     this.headimgurl = headimgurl;
        // } else {
        //     // alert('2');
        //     this.headimgurl = 'http://Img.guoanfamily.com/touxiang.jpg';
        // }
        // if (!this.notEmpty(userName)) {
        //     this.userName = localStorage.getItem('userName');
        // } else {
        //     this.userName = '';
        // }
        // this.userPhone = localStorage.getItem('userPhone');
    }
}
</script>


