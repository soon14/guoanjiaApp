<template>
	<div  class="fixContent">
      <div class="fixContent">
        <div style="height:16rem;">
        <!-- 标题 -->
        <!--头部部分  -->
        <div class="centerTop">
            <div class="personMsg">
                <div class="headerImg" @click="modifyinfo">
                    <img :src="headimgurl" style="width:100%;" />
                </div>
            </div>
            <div class="custname" @click="modifyinfo">
                <span v-show="this.$store.state.userName ==''">用户姓名</span>
                <span>{{this.$store.state.userName}}</span>

            </div>
            <div class="custname1" @click="modifyinfo">
                <div class="bigdiv" style="">
                <span>{{this.$store.state.userPhone}}</span>
                </div>
            </div>
            <div class="edit" @click="singnClick"></div>
        </div>

        <div style="width:100%;">
            <flexbox>
                <flexbox-item @click.native="collent">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../static/new/img/collentCenter1.png' style="width:44%;"/>
                    </div>
                </flexbox-item>
                <flexbox-item @click.native="tureToMeetingPlace">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../static/new/img/sityReservation.png' style="width:44%;"/>
                    </div>
                </flexbox-item>
                <flexbox-item @click.native="tureToRestaurant">
                    <div class="flex-demo">
                        <img class="personal_header" src='../../../static/new/img/restService.png' style="width:44%;"/>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
        <div style="width:100%;height:0.15rem;background:#f0f0f0;margin-top:.3rem;"></div>
        <!-- 新房部分 -->
        <div class='product'>
            <span style="font-size:0.32rem;font-weight:500;line-height:0.86rem;margin-left:0.20rem;">新房</span>
        </div>
        <flexbox>
            <flexbox-item @click.native="orderList">
                <div class="flex-demo">
                    <img class="personal_header" style="width:60%;margin-left:20%;" src='../../../static/new/img/myorder.png' />
                </div>
            </flexbox-item>
            <flexbox-item style="margin-left:0;">
                <div class="flex-demo" style="border-right:none;" @click="appointement">
                    <img class="personal_header" style="width:60%;margin-left:20%;" src='../../../static/new/img/approom.png' />
                </div>
            </flexbox-item>
            <flexbox-item style="margin-left:0">
                <div class="flex-demo" style="border-right:none;" @click="myratings">
                    <img class="personal_header" style="width:60%;margin-left:20%;" src='../../../static/new/img/myratings.png' />
                </div>
            </flexbox-item>
            <flexbox-item></flexbox-item>
        </flexbox>
        <div style="width:100%;height:0.15rem;background:#f0f0f0;margin-top:.3rem;"></div>
        <!--租房部分-->
        <div class='product'>
            <span style="font-size:0.32rem;font-weight:500;line-height:0.86rem;margin-left:0.20rem;">租房</span>
        </div>
        <flexbox>
            <flexbox-item @click.native="yuekan">
                <div class="flex-demo">
                    <img style="margin-left:20%;width:60%;" class="personal_img" src='../../../static/new/img/mycontract.png' />
                </div>
            </flexbox-item>
            <flexbox-item @click.native="hetong">
                <div class="flex-demo">
                    <img style="margin-left:20%;width:60%;" class="personal_img"  src='../../../static/new/img/rentcontract.png' />
                </div>
            </flexbox-item>
            <flexbox-item @click.native="weituo">
                <div class="flex-demo">
                    <img style="margin-left:20%;width:60%;"  class="personal_img" src='../../../static/new/img/Entrust.png' />
                </div>
            </flexbox-item>
            <flexbox-item @click.native="zuyue">
                <div class="flex-demo">
                    <img style="margin-left:20%;width:60%;" class="personal_img" src='../../../static/new/img/payrent.png' />
                </div>
            </flexbox-item>
        </flexbox>
        <div style="width:100%;height:0.15rem;background:#f0f0f0;margin-top:.3rem;"></div>
        <!-- 投诉和退出部分 -->
        <div class='product product1' style="height:1rem;" @click="Myintegral" >
            <span>
                <img src='../../../static/new/img/Myjifen.png' style="height:45%;margin-left:0.25rem;margin-top:.3rem;" />
            </span>
        </div>
        <div class='product product1' style="height:1rem;" @click="MyCardClick">
            <span>
                <img src='../../../static/new/img/cardC.png' style="height:40%;margin-left:0.25rem;margin-top:.3rem;" />
            </span>
        </div>
        <div class='product product1' style="height:1rem;" @click="tousu">
            <span>
                <img src='../../../static/new/img/jianyi.png' style="height:40%;margin-left:0.25rem;margin-top:.3rem;" />
            </span>
        </div>
        <!--分享按钮-->
        <div class='product product1' style="height:1rem;" @click="buildShare">
            <span>
                <img src='../../../static/new/img/gajShare.png' style="height:40%;margin-left:0.25rem;margin-top:.3rem;" />
            </span>
        </div>
        <!--  -->
        <div class='product product1' v-show="this.$store.state.ExitLoginShow"  style="height:1rem;" @click="confirm">
            <span>
                <img src='../../../static/new/img/exitApp.png' style="height:38%;margin-left:0.25rem;margin-top:.25rem;" />
            </span>
            <!-- <span style="font-size:0.32rem;line-height:1rem;margin-left:0.25rem;">退出登录</span> -->
        </div>

        <div style="width:100%;height:0.15rem;background:#f0f0f0;"></div>
        <div class="servicePhone">
            <span>服务热线：</span>
            <a href="tel:400-900-2225">400-900-2225</a>
        </div>
        </div>
        <div class="market" v-transfer-dom v-show="showMarket" @click="marketClick"></div>
        <div class="singnSuccess" v-transfer-dom v-show="showSuccess" @click="marketClick">
          <span style="color:#333333;margin-top:4.4rem;font-size:.35rem;display:block;text-align:center;">{{showText}}</span>
          <span style="text-align:center;font-size:.6rem;margin-top:.25rem;display:block;color:rgb(254, 81, 55);font-weight:500;">{{showNum}}</span>
          <span class="qdBtn" @click="qdBtnClick()">查看积分</span>
        </div>
      </div>

		<div>
			<!--分享的底部弹窗-->
        	<!--遮罩层-->
			<div class="marketShadow" v-show="marketNum" @click.stop="markedClick"></div>
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
import topHeader from "../../../static/new/img/topHeader.png";
import { TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  name: "personalCenter",
  data() {
    return {
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
        // this.$router.push("luckdraw");
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
        content: "确定退出？",
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
          me.msgalert("退出成功");
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
		       this.marketNum = true;
		    },200)
     		this.shareAlert = true;
     		this.$store.state.isShowBottom = false;
    	}

	},
    // 遮罩层的点击事件
    markedClick() {
      	this.marketNum = false;
      	this.shareAlert =  false;
      	setTimeout( () =>{
      		this.$store.state.isShowBottom = true;
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
	    this.marketNum = false;
	    this.shareAlert = false;
	    setTimeout( () =>{
	  		this.$store.state.isShowBottom = true;
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
  mounted() {
    if(!this.LoToken() && !this.UserPhone()){
      this.$store.state.userName = localStorage.getItem('userName');
      let phone = localStorage.getItem('userPhone');
      this.$store.state.userPhone = this.EnCryption('this.$store.state.userPhone',phone);
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.newHouse {
  width: 100%;
  text-align: center;
  font-size: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 0.175rem;
}

.headerImg {
  width: 1.5rem;
  overflow: hidden;
  height: 1.5rem;
}

.centerTop {
  width: 100%;
  height: 4rem;
  /* background: #e24e59; */
  background:url('../../../static/new/img/centerTopBj.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  /* margin-top: 60px; */
  .edit {
    width: 2rem;
    height: 1rem;
    background: url("../../../static/new/img/myselfInfo.png") no-repeat;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: 2rem;
  }
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
  display: block;
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
  margin-top: 0.1rem;
  border-radius: 1.5rem;
  text-align: center;
}
.AndroidTop {
  width: 100%;
  height: 4rem;
  margin-top:0;
  background: #e24e59;
  border-top: 1px solid #ccc;
  position: relative;
  .edit {
    width: 2rem;
    height: 1rem;
    background: url("../../../static/new/img/myselfInfo.png") no-repeat;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: 0.5rem;
  }
}
.weixinTop{
  width: 100%;
  height: 4rem;
  background: #e24e59;
  border-top: 1px solid #ccc;
  position: relative;
  margin-top: 0;
}
.quit {
  width: 0.625rem;
  height: 0.625rem;
  position: absolute;
  left: 0.5rem;
  top: 0.25rem;
  background: url("../../../static/new/img/quit.png") no-repeat;
  background-size: cover;
}

.message {
  width: 1.3rem;
  height: 0.625rem;
  position: absolute;
  right: 0.5rem;
  top: 0.25rem;
  background: url("../../../static/new/img/information.png") no-repeat;
  background-size: cover;
}

.personMsg {
  width: 1.5rem;
  position: absolute;
  left: 0;
  top: 0.5rem;
  bottom: 0.5rem;
  right: 0;
  margin: auto;
}

.custname {
  width: 100%;
  height: 0.75rem;
  position: absolute;
  top: 2rem;
  text-align: center;
  font-size: 0.32rem;
  line-height: 0.75rem;
  font-weight: bold;
}

.custname1 {
  width: 100%;
  height: 0.75rem;
  position: absolute;
  top: 2.25rem;
  font-size: 0.3rem;
  line-height: 0.75rem;
}

.bigdiv {
  margin: 16px auto;
  height: 100%;
  width: 3rem;
  .editmsg {
    margin-right: 0.75rem;
    width: 0.5rem;
    height: 0.6rem;
    display: block;
    float: right;
    background: url("../../../static/new/img/edit.png") no-repeat;
    background-size: 80%;
    background-position: center;
  }
}

.product {
  width: 100%;
  height: 0.6rem;
  /* background:red; */
  line-height: 0.6rem;
  /* border-bottom: 1px solid #e6e6e6; */
}
.product1 {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #e6e6e6;
  background: url("../../../static/new/img/jump.png") no-repeat right;
  background-position: 95%;
  background-size: 3%;
}
.product span {
  display: block;
  float: left;
  height: 100%;
  line-height: 0.8rem;
}

.flex-demo {
  text-align: center;
  color: #333333;
  background-color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
  border-right: 1px solid #f8f8f8;
  border-radius: 0;
}

.personal_header {
  width: 44%;
  height: 30%;
  margin-top: 0.25rem;
  margin-left: 28%;
}

.personal_img {
  width: 30%;
  margin-top: 0.25rem;
  margin-left: 0.8rem;
}

.personal_font {
  text-align: center;
  width: 100%;
  font-size: 0.3rem;
  background: #fff;
}

.servicePhone {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-size: 0.32rem;
  padding-bottom: 1.2rem;
}

.servicePhone a {
  color: #fd9b6c;
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
   	bottom: -3rem;
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
.weui-dialog__hd {
  padding-top: 0.5rem;
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
