<template>
	<div  class=" personalCenter">
     <IosorAndroid></IosorAndroid>
      <div>
        <div>
        <!--头部部分  -->
        <div class="header">
          <div class="title_info">
            个人中心
          </div>
          <div class="user_box">
            <div class="user_info">
              <div class="user_img_box">
                <div class="user_img" @click="modifyinfo">
                  <img :src="headimgurl" />
                </div>
              </div>

              <div class="user_info_box">
                <div class="name_info" v-show="isLogin"  @click="ToLogin">
                  请登录/注册
                  <span class="user_sign" @click.stop="singnClick">签到</span>
                </div>
                <div class="name_info" v-show="(!isLogin)&&usersName ==''" @click="modifyinfo">
                  用户姓名
                  <span class="user_sign" @click.stop="singnClick">签到</span>
                </div>
                <div class="name_info" v-show="(!isLogin)&&usersName!=''">
                  <span class="user_name">
                    {{usersName}}

                  </span>
                  <span class="user_sign" @click.stop="singnClick">签到</span>
                </div>
                <div class="user_phone" v-show="isLogin">
                  <!-- v-show="isLogin" -->
                  您的手机号我们将为您严格保密
                </div>
                <div class="user_phone" v-show="!isLogin">
                  {{usersPhone}}
                </div>
              </div>
              <div class="edit" @click="modifyinfo">

              </div>
            </div>
          </div>
          <div class="mine_box">
            <flexbox class="mine_box_flexbox">
              <flexbox-item>
                <div class="mine_btn" @click="Myintegral" >
                  <div class="mine_icon mineIntegral">
                  </div>
                  <div class="mine_msg ">
                    我的积分
                  </div>
                  <i></i>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="mine_btn" @click="MyCardClick">
                  <div class="mine_icon myCards">
                  </div>
                  <div class="mine_msg">
                    我的卡券
                  </div>
                   <i></i>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="mine_btn" @click="tousu">
                  <div class="mine_icon Complaint">
                  </div>
                  <div class="mine_msg">
                    投诉建议
                  </div>
                   <i></i>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="mine_btn" @click="collent">
                  <div class="mine_icon Collection">

                  </div>
                  <div class="mine_msg">
                    我的收藏
                  </div>
                </div>
              </flexbox-item>
             </flexbox>
          </div>
        </div>

        <!-- 新房部分 -->
        <div class='product'>
          <span style="font-size:0.32rem;font-weight:500;font-family: 'Source Han Sans CN';line-height:0.7rem;color:#000;margin-left:0.20rem;">新房</span>
        </div>
        <flexbox class="new_house">
          <flexbox-item @click.native="orderList">
            <div class="card_box">
              <div class="bg_box">
                <div class="card_icon orders"></div>
                <div class="card_name">
                  我的订单
                </div>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item style="margin-left:6px;">
            <div class="card_box">
              <div class="bg_box">
                <div class="card_icon builds"></div>
                <div class="card_name">
                  约看楼盘
                </div>
            </flexbox-item>
            <flexbox-item style="margin-left:0">
                <div class="flex-demo" style="border-right:none;" @click="myratings">
                    <img class="personal_header" style="width:60%;margin-left:20%;" src='../../../static/new/img/myratings.png' />
                </div>
            </flexbox-item>
            <flexbox-item></flexbox-item>
        </flexbox>
        <div style="width:94%;height:1px;background:#f3f3f3;margin:.3rem auto 0;"></div>
        <!--租房部分-->
        <div class='product'>
          <span style="font-size:0.32rem;font-weight:500;color:#000;font-family: 'Source Han Sans CN';line-height:0.7rem;margin-left:0.20rem;">租房</span>
        </div>
        <div class="ren_box">
          <div class="rent_info" @click="yuekan">
            <div class="card_box">
                <div class="bg_box">
                  <div class="card_icon showHouse"></div>
                  <div class="card_name">
                    约看房间
                  </div>
                </div>
              </div>
          </div>
          <div class="rent_info"  @click="hetong">
            <div class="card_box">
                <div class="bg_box">
                  <div class="card_icon contract"></div>
                  <div class="card_name">
                    房租合同
                  </div>
                </div>
              </div>
          </div>
          <div class="rent_info" @click="weituo">
            <div class="card_box">
                <div class="bg_box">
                  <div class="card_icon Entrust"></div>
                  <div class="card_name">
                    业主委托
                  </div>
                </div>
              </div>
          </div>
          <div class="rent_info" @click="zuyue">
            <div class="card_box">
                <div class="bg_box">
                  <div class="card_icon tenancy"></div>
                  <div class="card_name">
                    我的租约
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="middle_img"></div>
        <!-- 投诉和退出部分 -->
        <div class="Btn_bottom">


          <div class='product product1' style="height:1rem;" >
              <span class="searchName">
                服务热线
              </span>
              <a href="tel:400-900-2225" class="tel_box">400 900 2225</a>
          </div>

          <div class='product product1' style="height:1rem;" @click="buildShare">
            <span class="searchName">
              分享国安家
            </span>
          </div>
          <div class='product product1' style="height:1rem;">
            <span class="searchName">
              关于我们
            </span>
          </div>
          <!-- <div class='product product1' style="height:1rem;" @click="Toversion">
            <span class="searchName">
              版本信息
            </span>
          </div>
          <div class='product product1' style="height:1rem;" @click="buildShare">
            <span class="searchName">
              检查更新
            </span>
          </div> -->
          <div class='product product1' style="height:1rem;" @click="confirm">
            <span class="searchName">
              清除缓存
            </span>
          </div>
        <!--分享按钮-->
        </div>
      </div>
      <div class="market" v-transfer-dom v-show="showMarket" @click="marketClick"></div>
      <div class="singnSuccess" v-transfer-dom v-show="showSuccess" @click="marketClick">
        <span style="color:#333333;margin-top:4.4rem;font-size:.35rem;display:block;text-align:center;overflow:hidden;">{{showText}}</span>
        <span style="text-align:center;font-size:.6rem;margin-top:.25rem;display:block;color:rgb(254, 81, 55);font-weight:500;">{{showNum}}</span>
        <span class="qdBtn" @click="qdBtnClick()">查看积分</span>
      </div>
    </div>

			<!--分享的底部弹窗-->
        	<!--遮罩层-->
			<div class="marketShadow" v-show="marketNum" @click.stop="markedClick" v-transfer-dom>

        <!-- 分享时候的底部弹出框 -->
        <div class="shareAlert" :class="{'shareAlert1':shareAlert}">
          <div class="shareIcon">
              <div class="weixinBox" @click="weixinhaoyoufenxiangClick">
                  <span>微信</span>
              </div>
              <div class="pengyouBox" @click="weixinFriendsClick">
                  <span>朋友圈</span>
              </div>
          </div>
          <div class="exitShare" @click="exitShareClick">取消</div>
        </div>
      </div>



		<div class="righthorn" v-show="shockAlert" v-transfer-dom  @click="closeShockAlert">点击右上角进行分享</div>

	</div>
</template>

<script>
import IosorAndroid from '../components/IosorAndroid'
import topHeader from "../../../static/new/img/topHeader.png";
import { TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  components:{
    IosorAndroid
  },
  name: "personalCenter",
  data() {
    return {
      isLogin:false,
      userName: "",
      userPhone: "",
      market: false,
      showaAl: false,
      headimgurl: "",
      show: false,
      show1: false,
      show2: false,
      alertlook: false,
      AndroidTop: false,
      IosTop:false,
      wxTop:false,
      // ExitLoginShow: true,
      showMarket:false,
      showSuccess:false,
      showText: "",
      showNum:"",
      marketNum: false,
	  shareAlert:false,
	  shockAlert:false
    };
  },
  methods: {
    modifyinfo() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("modifyInfo");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    ToLogin(){
      this.$store.state.loginShow = true;
    },
    // 预约看房的点击事件
    appointement() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("appointement");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 我的评论的点击事件
    myratings() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("myratings");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 跳转我的积分
    Myintegral(){
      if (!this.LoToken() && !this.UserPhone()) {
         this.$router.push('Myintegral')
      } else {
        this.$store.state.loginShow = true;
      }

    },
    // 收藏的点击事件
    collent() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("collent");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 跳转到餐厅
    tureToRestaurant() {
      this.$router.push({ name: "addOrder" });
    },
    // 跳转到场地
    tureToMeetingPlace() {
      this.$router.push({ name: "placeChouse" });
    },

    // 我的订单的点击事件
    orderList() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("orderList");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 约看房间的点击事件
    yuekan() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("/appointList");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 我的合同的点击事件
    hetong() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("MyContract");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 业主委托的点击事件
    weituo() {
      this.$router.push("Delegation");
    },
    // 我的租约的点击事件
    zuyue() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("Lease");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 我的卡券的点击事件
    MyCardClick(){
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push('cardCoupons');
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 我要投诉的点击事件
    tousu() {
      if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("Complaint");
      } else {
        this.$store.state.loginShow = true;
      }
      // let token = localStorage.getItem('token');
      // window.location.href = "https://www.guoanfamily.com/rentHouse/wap/#/Complaint?token=" + token;
    },

    // 弹窗确定的点击事件
    BtnClick() {
      // localStorage.clear();
    },
    // 签到的点击事件
    singnClick(){
      if (this.$store.state.showWxTitle) {
        this.onLineSign();
      } else {
        if (this.LoToken() && this.UserPhone()) {
          this.$store.state.loginShow = true;
        }else{
          this.onLineSign();
        }
      }

    },
    //签到方法
    onLineSign() {
      let post_data = {
        userid: "",
        agenttype: "1"
      };
      let integralurl = "commonPoint/pointDailySign/userPointDailySing";
      this.post(integralurl, post_data, {
        interfaceType: "intergral"
      }).then(
        response => {
          if (response.code == 2002) {
            this.showSuccess = true;
            this.showMarket = true;
            this.showNum = "+3";
            this.showText = "签到成功，获取积分";
          } else {
            this.showSuccess = true;
            this.showMarket = true;
            this.showNum = "已签到";
            this.showText = "";
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 遮罩层点击事件
    marketClick() {
      this.showMarket = false;
      this.showSuccess = false;
    },
     // 查看积分的点击事件
    qdBtnClick() {
       if (!this.LoToken() && !this.UserPhone()) {
        this.$router.push("myintegral");
      } else {
        this.$store.state.loginShow = true;
      }
    },
    //弹窗提示

    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    },
    confirm() {
      let me = this;
      me.$vux.confirm.show({
        title: "提示信息",

        content: "您确定清除缓存并退出？",
        // 组件除show外的属性
        onCancel() {},
        onConfirm() {
          localStorage.removeItem("token");
          localStorage.removeItem("standbyToken");
          localStorage.removeItem("userInfroMap");
          localStorage.removeItem("userName");
          localStorage.removeItem("userPhone");
          localStorage.removeItem("headImg");
          localStorage.removeItem("city");
          localStorage.removeItem("province");
          me.userName = "";
          me.userPhone = "";
          me.$store.commit("login",false);
          me.$store.state.userName = "";
          me.$store.state.userPhone = "";
          me.$store.state.ExitLoginShow = false,
          me.isLogin = true;
          me.$vux.toast.show({
            text: '退出成功',
            type:"text",
            width:"2em",
          })

          me.$store.state.loginData = false;
          // me.$store.state.buttonGroup = 0;
          // me.$router.push("first");
        }
      });
    },
    //关闭提示微信右上角分享的遮罩层
    closeShockAlert(){
      this.shockAlert = false;
    },
    buildShare(){
        if(this.$store.state.showWxTitle){
          //提示在右上角点击分享
        this.shockAlert = true;
        //console.log("提示右上角分享");
        }else{
          let setTime = setTimeout(()=>{
            this.shareAlert = true;
            this.$store.state.isShowBottom = false;
          },200)
           this.marketNum = true;
        }

    },
  // 检测版本
    Toversion(){
      if(chcp){
        chcp.getVersionInfo((err, data)=>{
          console.log('Application build version: ' + data.buildVersion);
        })
      }
    },
    // 遮罩层的点击事件
    markedClick() {
      	this.$store.state.isShowBottom = true;

      	this.shareAlert =  false;
      	setTimeout( () =>{
      		this.marketNum = false;
      	},500)

    },
    // 微信好友分享
    weixinhaoyoufenxiangClick(){
        this.wxShare();
    },
    // 分享到微信朋友方法
    wxShare(){
        Wechat.share({
            message: {
                title:"【国安家】为每个家的梦想全力以赴！", //标题
                description:"帮您发现最优质旅居产品和高品质服务公寓产品的专业App！", //描述
                thumb: "https://pp.myapp.com/ma_icon/0/icon_52608633_1518330452/96", //图片
                media: {
                    type: Wechat.Type.WEBPAGE,
                    webpageUrl: "https://www.guoanfamily.com/guoanjiaApp/#/?from=true", //连接地址指打开分享时页面地址
                }
            },
            scene: Wechat.Scene.SESSION   // share to Timeline
        }, function () {
            this.msgalert('已成功分享给朋友');
        }, function (reason) {
        //    this.msgalert('已取消分享');
        });
    },
    // 微信朋友圈分享
    weixinFriendsClick(){
      	this.friendShare();
    },
    //分享到朋友圈方法
    friendShare(){
        let self = this;
        Wechat.share({
            message: {
                title:"【国安家】为每个家的梦想全力以赴！", //标题
                description:"帮您发现最优质旅居产品和高品质服务公寓产品的专业App！", //描述
                thumb: "https://pp.myapp.com/ma_icon/0/icon_52608633_1518330452/96", //图片
                media: {
                    type: Wechat.Type.WEBPAGE,
                    webpageUrl:"https://www.guoanfamily.com/guoanjiaApp/#/?from=true", //连接地址指打开分享时页面地址
                }
            },
            scene: Wechat.Scene.TIMELINE   // share to Timeline
        }, function () {
            this.msgalert('已成功分享到朋友圈');
        }, function (reason) {
            // this.msgalert('已取消分享');
        });
    },
    // 取消分享的点击事件
    exitShareClick(){
        this.$store.state.isShowBottom = true;

        this.shareAlert = false;
        setTimeout( () =>{
          this.marketNum = false;
        },500)
    },
    wxconfig() {
         this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(window.location.href.split('#')[0]),
             {},{
                 interfaceType: "weichat"
             }).then(response => {
             this.$wechat.config({
                 debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                 appId: response.appid, // 必填，公众号的唯一标识
                 timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                 nonceStr: response.noncestr, // 必填，生成签名的随机串
                 signature: response.signature, // 必填，签名，见附录1
                 jsApiList: [
                         'onMenuShareTimeline',
                         'onMenuShareAppMessage',
                         'onMenuShareQQ',
                         'onMenuShareWeibo',
                         'onMenuShareQZone']// 必填，需要使用的JS接口列表
             });
             this.$wechat.ready(() =>{
                 this.wechatStationShare();
             })
         });
    },
     wechatStationShare() {
        this.$wechat.onMenuShareAppMessage({
            title: "【国安家】为每个家的梦想全力以赴！", //标题
            desc: "帮您发现最优质旅居产品和高品质服务公寓产品的专业App！", //描述
            link:"https://www.guoanfamily.com/guoanjiaApp/#/?from=true",
            imgUrl: "https://pp.myapp.com/ma_icon/0/icon_52608633_1518330452/96", //图片
            trigger: (res) => {
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: (res) =>{
            this.market = false;
            // this.shareImg = false;
            },
            cancel: (res) =>{
                this.$vux.confirm.show({
                     content:"已取消",
                    onCancel () {//取消执行
                  },
                   onConfirm () {//确定执行
                   }
                 })
                this.market = false;
                // this.shareImg = false;
            },
            fail: (res) => {
                 this.$vux.confirm.show({
                     content:"分享失败",
                    onCancel () {//取消执行
                  },
                   onConfirm () {//确定执行
                   }
                 })
            }
        });
            // 分享到朋友圈
	    this.$wechat.onMenuShareTimeline({
	        title: "【国安家】为每个家的梦想全力以赴！", //标题
            desc: "帮您发现最优质旅居产品和高品质服务公寓产品的专业App！", //描述
            link:"https://www.guoanfamily.com/guoanjiaApp/#/?from=true",
            imgUrl: "https://pp.myapp.com/ma_icon/0/icon_52608633_1518330452/96", //图片
	        trigger: (res) => {
	        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
	    },
        success: (res) => {
            this.market = false;
            // this.shareImg = false;
        },
            cancel: (res) => {
                this.$vux.confirm.show({
                     content:"已取消",
                    onCancel () {//取消执行
                  },
                   onConfirm () {//确定执行
                   }
                 })
                this.market = false;
                // this.shareImg = false;
            },
            fail: (res) => {
               this.$vux.confirm.show({
                     content:"分享失败",
                     onCancel () {//取消执行
               },
                    onConfirm () {//确定执行
                   }
              })
            }
            });
              this.$wechat.error(function(res) {
        });

        },

  },
  computed:{
    usersName(){
      console.log(213,this.$store.state.userName)
      return this.$store.state.userName
    },
    usersPhone(){
      console.log(2134,this.$store.state.userPhone)
      return this.$store.state.userPhone
    }
  },
  watch:{

    usersPhone(){

      if(this.usersPhone){
        console.log(123,this.usersPhone)
        this.isLogin = false;
      }
    }
  },
  mounted() {
    if(!this.LoToken() && !this.UserPhone()){
      this.isLogin = false;
      this.$store.state.userName = localStorage.getItem('userName');
      let phone = localStorage.getItem('userPhone');
      this.$store.state.userPhone = this.EnCryption('this.$store.state.userPhone',phone);
    }else{
       this.isLogin = true;

    }
    if (this.LoToken()) {
      this.$store.state.ExitLoginShow = true;
      if(!this.$store.state.showWxTitle){
       this.$store.state.ExitLoginShow = false;
      }else{
        this.$store.state.ExitLoginShow = true;
      }
    } else {
      this.$store.state.ExitLoginShow = true;
      if(!this.$store.state.showWxTitle){
       this.$store.state.ExitLoginShow = true;
      }else{
        this.$store.state.ExitLoginShow = false;
      }
    }
    // 全局控制底部按钮颜色
    this.$store.state.buttonGroup = 2;
    // 页面加载的时候从本地获取用户的基本资料信息
    var userName = this.$store.state.userName; //localStorage.getItem("userName");
    let headimgurl = localStorage.getItem("headImg");
    // alert(headimgurl);
    if (!this.notEmpty(headimgurl)) {
      this.headimgurl = headimgurl;
    } else {
      // // alert('2');
      // this.headimgurl = 'http://Img.guoanfamily.com/touxiang.jpg';
      this.headimgurl = topHeader;
    }
    if (!this.notEmpty(userName)) {
      this.userName = this.$store.state.userName;
      if(this.notEmpty(this.userName)){
        let userNames =localStorage.getItem('userName');
        if(this.notEmpty(userNames)){
          this.$store.state.userName = '';
        }else{
          this.$store.state.userName = userNames;
        }
      }
    } else {
       this.$store.state.userName = '';
    }


    if(!this.$store.state.showWxTitle){
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop =  false;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop =  false;
      }
    }else{
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
    }
    //判断是否是微信浏览器
    if(this.isECTouch()){
      //调用微信config
      this.wxconfig();
    }
  }
};
</script>

<style lang ='less' scoped>
@import "~vux/src/styles/1px.less";
.personalCenter{
  transform: translate3d(0,0,0);
  overflow-x: hidden;
  height: 100%;
  box-sizing: border-box;
  padding-bottom:1.3rem;
  font-size: 14px;
  *{
    box-sizing:border-box;
    font-size: 14px;
    font-family: 'Source Han Sans CN';
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.header{
  height: 6rem;
  background-color: #fff;
  border-bottom: 8px solid #f3f3f3;
  .title_info{
    height: 1rem;
    line-height: 1rem;
    font-size: 0.48rem;
    font-family: "Source Han Sans CN";
    text-align: left;
    padding-left: 0.2rem;
    color: #000;
  }
  .user_box{
    height: 3.2rem;
    padding: 0 0.2rem;
    .user_info{
      position: relative;
      background: url("../../../static/new/img/personalInfo.png") center no-repeat;
      background-size: 100% 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0.75rem 0.4rem;
      .user_img_box{
        box-sizing: border-box;
        float: left;
        padding: 0.1rem;
        /* border:1px solid #fff; */
        border-radius: 50%;
        text-align: center;
      }
      .user_img{
        overflow: hidden;
        padding: 0;
        margin: 0;
        height: 1.5rem;
        width: 1.5rem;
        box-sizing: border-box;
        border-radius: 50%;
        img{
          height: 1.5rem;
          width: 1.5rem;
        }

      }
      .user_info_box{
        min-width: 50%;
        text-align: center;
        padding: 0.2rem 0 0.2rem 0.2rem;
        box-sizing: border-box;
        float: left;
        .name_info{

          height: 0.8rem;
          line-height: 0.82rem;
          font-size: 0.36rem;
          text-align: left;
          color: #fff;
          vertical-align: middle;
          .user_name{
            display: inline-block;
            line-height: 0.82rem;
            font-size: 0.36rem;
            text-align: left;
            color: #fff;
            vertical-align: middle;
          }
          /* text-align: center; */
          .user_sign{
            vertical-align: middle;
            display: inline-block;
            line-height: 0.3rem;
             font-size: 0.28rem;
             background-color: #fff;
             color: #e34b3e;
             padding: 0.08rem 0.2rem;
             border-radius: 0.4rem;


          }
        }
        .user_phone{
          width: 100%;
          height: 0.8rem;
          line-height: 0.4rem;
          font-size: 0.26rem;
          text-align: left;
          color: #fff;
        }
      }
      .edit{
        width: 40px;
        height: 40px;
        background: url("../../../static/new/img/Setedit.png") center no-repeat;
        background-size:50%;
        position: absolute;
        right: 3px;
        top: 3px;
      }
    }
  }
  .mine_box{
    height: 1.8rem;
    box-sizing: border-box;
    .mine_box_flexbox{
      height: 80%;
      padding: 0.2rem 0;
      .mine_btn{

        width: 100%;
        position: relative;
        .mine_icon{
           height: 0.8rem;
          &.mineIntegral{
            background: url("../../../static/new/img/mineIntegral.png") center no-repeat;
            background-size: 32%;
          }
          &.myCards{
            background: url("../../../static/new/img/myCards.png") center no-repeat;
            background-size: 32%;
          }
          &.Complaint{
            background: url("../../../static/new/img/Complaint.png") center no-repeat;
            background-size: 32%;
          }
          &.Collection{
            background: url("../../../static/new/img/Collection.png") center no-repeat;
            background-size: 32%;
          }
        }
        .mine_msg{
          height: 0.3rem;
          font-size: 14px;
          line-height: 0.3rem;
          font-family: 'Source Han Sans CN';
          text-align: center;
          width: 100%;
          color: #000;
          display: block;
        }
        i{
          position: absolute;
          right: 0;
          top: 45%;
          height: 0.4rem;
          width: 0;
          border-left:1px solid #ccc;
        }

      }

    }
  }
}
.new_house{
  padding: 0 0.1rem;
  height: 1.8rem;
  overflow: hidden;

}
.ren_box{
  padding: 0 0.1rem;
  height: 1.8rem;
  overflow: hidden;
  .rent_info{
    width: 25%;
    float: left;
  }
}
.card_box{
  padding: 0.1rem;
  .bg_box{
    width: 1.6rem;
    height: 1.6rem;
    background-color: #f3f3f3;
    .card_icon{
      height: 1rem;
      &.orders{
        background: url("../../../static/new/img/orders.png") center no-repeat;
        background-size: 24%;
      }
      &.builds{
        background: url("../../../static/new/img/builds.png") center no-repeat;
        background-size: 30%;
      }
      &.showHouse{
        background: url("../../../static/new/img/showHouse.png") center no-repeat;
        background-size: 30%;
      }
      &.contract{
        background: url("../../../static/new/img/contract.png") center no-repeat;
        background-size: 28%;
      }
      &.Entrust{
        background: url("../../../static/new/img/Entrust.png") center no-repeat;
        background-size: 26%;
      }
      &.tenancy{
        background: url("../../../static/new/img/tenancy.png") center no-repeat;
        background-size: 24%;
      }
    }
    .card_name{
      height: 0.4rem;
      font-size: 14px;
      color: #000;
      line-height:0.4rem;
      text-align: center;
    }
  }
}
.middle_img{
  height: 1.6rem;
  width: 94%;
  margin: 20px auto;
  background: url("../../../static/new/img/HainanCity.png") center no-repeat;
  background-size: 100% 100%;
}
.singnSuccess {
  width: 80%;
  height: 8rem;
  background: url("../../../static/new/img/qdSuccess.png") no-repeat center;
  background-size: 100%;
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 151;
}
.qdBtn {
  position: absolute;
  background-size: 50%;
  font-size: 0.4rem;
  width: 5rem;
  background: url("../../../static/new/img/qdlook.png") no-repeat center;
  background-size: 100%;
  color: #fe5137;
  margin-left: 25%;
  width: 50%;
  line-height: 0.9rem;
  height: 1rem;
  bottom: 1.1rem;
  border-radius: 1.5rem;
  text-align: center;
}
.Btn_bottom {
  padding: 0 0.2rem;
}

.product {
  position: relative;
  width: 100%;
  height: 0.6rem;
  /* background:red; */
  line-height: 0.6rem;
  /* border-bottom: 1px solid #e6e6e6; */
  .searchName{
    padding: 0.1rem 0 0 0.1rem;
    color: #000;
    font-size: 0.34rem;
  }
  .tel_box{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 1rem;
    font-size:0.28rem;
    color: #999999;
    font-family: "Century Gothic" ;
    text-align: right;
    padding-right:1rem;
  }
}
.product1 {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #e6e6e6;
  background: url("../../../static/new/img/jump.png") no-repeat right;
  background-position: 98%;
  background-size: 3%;

}
.product span {
  display: block;
  float: left;
  height: 100%;
  line-height: 0.8rem;
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
  height: 4rem;
  /* opacity: 1; */
  max-width: 300px;
  top: 30%;
  left: 10%;
  /* -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); */
  background-color: #ffffff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  .top {
    font-size: 18px;
    margin-top: 0.75rem;
    font-weight: 400;
  }
  .msg {
    font-size: 16px;
    margin-top: 0.5rem;
    font-weight: 400;
    color: #999999;
    padding-bottom: 0.5rem;
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
      font-size: 0.4rem;
      line-height: 0.65rem;
      margin-top: 0.25rem;
      color: #999999;
    }
  }
}
.alertDiv1 {
  position: fixed;
  z-index: 5000;
  width: 70%;
  height: 3rem;
  background-color: #ffffff;
  border-radius: 10px;
  left: 15%;
  top: 35%;
  div {
    width: 40%;
    height: 80%;
    float: left;
    margin-left: 6.5%;
    margin-top: 5%;
    /* background:yellow; */
    img {
      width: 1.7rem;
    }
    span {
      display: block;
      font-size: 0.4rem;
    }
  }
}
.marketShadow {
  width: 100%;
  height: 100%;
  background: transparent;
	position: fixed;
	left: 0;
	bottom: 0;
	top: 0;
	right: 0;
	margin: auto;
	z-index: 998;
}
.shareAlert{
    width:100%;
    height: 3rem;
    position: fixed;
    transition: .9s;
    /*bottom: -3rem;*/
   	bottom: -4rem;
    background:#fff;
    border-top: 2px solid #f2f2f2;
    border-bottom: 2px solid #f2f2f2;
    z-index: 999;
   .shareIcon{
       width:100%;
       height: 1.5rem;
       .weixinBox,.pengyouBox {
           float: left;
           width:1.5rem;
           height: 1.5rem;
           margin-left: .3rem;
           span{
           		width:100%;
              font-size:.3rem;
              display: block;
              margin-top:1.2rem ;
              text-align: center;
           }
       }
       .weixinBox{
           background:url(../../../static/new/img/Wx.png) no-repeat;
           background-size: 60%;
           background-position: 50% 26%;
       }
       .pengyouBox{
           background:url(../../../static/new/img/friends.png) no-repeat;
           background-size: 60%;
           background-position: 50% 26%;
       }
   }
   .exitShare{
   	 		width:100%;
   	 		height: 0.6rem;
        padding-top:5px;
        font-size: .4rem;
        border-top:1px solid #e6e6e6;
        margin-top: .6rem;
        text-align: center;
   }
}
.shareAlert1{

    transition: .9s;
    z-index: 999;
    bottom: 0rem;
}
// 分享提示文字样式
.righthorn {
  width: 100%;
  height: 100%;
  font-size: 0.75rem;
  text-align: center;
  background: rgba(0,0,0,.5);
  color: #ffffff;
  position: fixed;
  z-index: 20000;
  line-height: 6.5rem;
  font-weight: 500;
}
</style>
<style lang="less">
.weui-dialog{
  .weui-dialog__hd {
    padding-top: 0rem;
  }
}
.weui-dialog__btn_primary {
  color: #e40011;
}
.labelStyle {
  .leftName {
    .weui-label {
      width: 5rem;
      text-align: left;
      color: #0052c2;
      font-weight: 500;
    }
  }
  .leftNamesCard {
    .weui-label {
      width: 3.5rem;
      text-align: left;
      //   background:red;
      color: #0052c2;
      font-weight: 500;
    }
  }
}
</style>
