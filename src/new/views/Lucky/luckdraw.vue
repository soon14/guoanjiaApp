<template>
  <div class="bj luckdraw" :class="{phoneBj:phoneTop}">
      <!-- <button class="buttons" @click="seeruleClick">查看规则</button> -->
      <div class="buttons" @click="seeruleClick">抽奖规则</div>
      <img style="width:100%;position:absolute;left:0; height:24rem" src="https://img.guoanfamily.com/newYearActivity/bj.png" alt="">
      <div class="topbj">
        <div class="outerplyer">
          <img class="big" src="https://img.guoanfamily.com/newYearActivity/title.png" alt="">
          <div>
             <img class = 'middle' :class="{'middle1':one,'middle2':two,'middle3':three,'middle4': four,'middle5':five,'middle6':six}"  src="https://img.guoanfamily.com/newYearActivity/pan1.png" alt="">
          </div>
         
          <img class = "pointer" src="https://img.guoanfamily.com/newYearActivity/pointer.png" alt="" @click="pointerClick">
        </div>
      </div>
      <img class="share" src="https://img.guoanfamily.com/newYearActivity/shareDraw.png" alt="" @click="shareClick" >
      <div class="explain"></div>
      <div class="close"  :class="{phoneClose:phoneTop}" v-transfer-dom v-show="market" @click="closeClick"></div>
      <div class="market" v-transfer-dom  v-show="market"  @click="marketClick"></div>
      <div class="market" v-transfer-dom  v-show="market1"></div>
      <!-- 一等奖弹窗 -->
      <div class="result resultStyle" v-transfer-dom :class="{phoneresultStyle:phoneTop}" v-show="num1">
        <div class="award" >{{results}}</div>
      </div>
      <!-- 二等奖弹窗 -->
      <div class="result1 resultStyle" v-transfer-dom :class="{phoneresultStyle:phoneTop}" v-show="num2">
        <div class="award">{{results}}</div>
      </div>
      <!-- 三等奖弹窗 -->
      <div class="result2 resultStyle" v-transfer-dom :class="{phoneresultStyle:phoneTop}" v-show="num3">
        <div class="award">{{results}}</div>
      </div>
      <!-- 四等奖弹窗 -->
      <div class="result3 resultStyle" v-transfer-dom :class="{phoneresultStyle:phoneTop}" v-show="num4">
        <div class="award">{{results}}</div>
      </div>
      <!--五等奖弹窗-->
      <div class="result5 resultStyle" v-transfer-dom :class="{phoneresultStyle:phoneTop}" v-show="num6">
        <div class="award">{{results}}</div>
      </div>
      <!-- 未中奖弹窗 -->
       <div class="result4 resultStyle" v-transfer-dom :class="{phoneresultStyle:phoneTop}" v-show="num5">
        <div class="award">{{results}}</div>
      </div>
      <!-- 确定领取的弹窗 -->
      <div class="receive" v-show="isLogin" v-transfer-dom >
        <div style="width:100%;height:100%;position:relative;">
          <div class="lineClose" @click="closeClick"></div>
          <x-input style="width: 77%;margin-left:7%;margin-right:7%;margin-top:50px;font-size:16px;float:left;border-bottom:1px solid #ccc;" placeholder='请输入手机号' title="电话：" v-model="phoneNumber" :show-clear='false'>
            
          </x-input>
          <div class="code">
            <x-input style="margin-left:7%;margin-right:7%;font-size:16px;float:left;border-bottom:1px solid #ccc;" placeholder='请输入验证码' title="验证码：" v-model="vistionCode" :show-clear='false'>
              <x-button slot="right" type="primary" :class="{veritionCode:VeritionCode}" :disabled="disable001" mini @click.native="secondOutClick">{{secondOut}}</x-button>
            </x-input>
          </div>
          
          <div class="prompt">
            <p class="msg">温馨提示：</p>
            <div class="msgTxt"> 
              您还未注册过国安家请输入电话号码领取奖品。
            </div>
            
          </div>
          <x-button class="subLogin" type='primary' @click.native="loginClick">确认</x-button>
        </div>
      </div>
      <div class="receiveSuccess" v-show="showReceiveSu" v-transfer-dom>
        <div style="width:100%;height:100%;position:relative">
          <div class="closeLine1" :class="{closeLine1Phone:phoneTop}"  @click="exitClick"></div>
          <div class="grant">{{grant}}</div>
          <x-button class="grantBtn" type='primary' @click.native="exitClick">确认</x-button>
        </div>
      </div>
      <div class="market" v-show="shareBtnC" v-transfer-dom>
        <div class="sharbj" >
          <x-button class="sharbtn" type='primary' @click.native="exitShareClick"></x-button>
        </div>
      </div>
       <!-- 领取和再来一次的按钮 -->
      <div class="buttonDiv" v-transfer-dom v-show="market">
        <div>
          
          <x-button class="onceMore" type='primary' v-if="btnstate == '6'" @click.native="onceMoreClick">再来一次</x-button>
          <div class="onceMoreMethod"> 
            分享朋友圈多获得一次抽奖机会
          </div>
          <x-button class="onceMore" type='primary' v-if="btnstate !== '6'" @click.native="confirmclaimClick" >确认领取</x-button>
          <x-button class="onceMore1" type='primary'  @click.native.stop="AskApp" >下载APP</x-button>
          <div class="erweimaInfo">
            扫码一键关注
          </div>
          <div class="erweima">
            <img src="../../../assets/luck/erweima.jpg" alt="">
          </div>
        </div>
      </div>
      <!-- app端分享时候的底部弹出框 -->
      <div class="shareAlert" :class="{'shareAlert1':shareAlert}" v-transfer-dom>
          <div style="width:100%;height:100%;positon:releative;">
              <div class="shareIcon">
                    <div class="weixin" @click="weixinhaoyoufenxiangClick">
                      <span>微信</span>
                  </div>
                  <div class="pengyou" @click="weixinFriendsClick">
                      <span>朋友圈</span>
                  </div>
              </div>
              <div class="exitShare" @click="exitShareClick1">取消</div>
          </div>
      </div>
  </div>
</template>

<script>
import { TransferDom } from "vux";
import { clearTimeout } from 'timers';
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      drawClicked: false, //抽奖中
      historyId: "", //奖项id
      phoneTop: false, //手机端
      prizeId: "",
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      // 遮罩层控制
      market: false,
      market1: false,
      // 中奖与否弹窗提示控制
      num1: false,
      num2: false,
      num3: false,
      num4: false,
      num5: false,
      num6: false,
      btnstate: "",
      // 中奖名额控制
      results: "恭喜您，中奖了！",
      setTime: "",
      secondOut: "发送验证码",
      // 电话，验证码
      phoneNumber: "",
      vistionCode: "",
      disable001: false,
      VeritionCode: false,
      times: 60,
      isLogin: false,
      showReceiveSu: false,
      grant: "",
      shareBtnC: false,
      shareAlert: false,
    };
  },
  methods: {
    // 延时器
    delayTime(num, market) {
      this.setTime = setTimeout(() => {
        this[num] = true;
        this[market] = true;
      }, 3500);
    },
    // 抽奖的点击事件
    pointerClick() {
   // 防止多次点击
      if (this.drawClicked) {
        return false;
      }
      this.drawClicked = true;
      this.get("user/integral/getPrize", { interfaceType: "luckdraw" }).then(
        response => {
          if (response.code == 200) {
            let timer2 = setTimeout(() => {
              this.drawClicked = false;
              clearTimeout();
            }, 3500);
            if (response.data.lotterCount == 0 && response.data.isShare == 0) {
              this.msgalert("您今天的抽奖次数已用完,分享可获得一次抽奖机会");
              return false;
            } else if (
              response.data.lotterCount == 0 &&
              response.data.isShare == 1
            ) {
              this.msgalert("您今天的抽奖次数已用完，请明天再来");
              return false;
            } else {
              this.prizeId = response.data.prize.id;
              if (response.data.prize.id == 5) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.three = false;
                this.one = false;
                this.two = false;
                this.four = false;
                this.five = true;
                this.six = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime("num6", "market");
              } else if (response.data.prize.id == 2) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.two = true;
                this.four = false;
                this.five = false;
                this.three = false;
                this.one = false;
                this.six = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime("num2", "market");
              } else if (response.data.prize.id == 3) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.two = false;
                this.five = false;
                this.four = false;
                this.three = false;
                this.one = false;
                this.six = true;
                this.results = "恭喜您，中奖了！";
                this.delayTime("num3", "market");
              } else if (response.data.prize.id == 4) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.four = true;
                this.five = false;
                this.two = false;
                this.three = false;
                this.one = false;
                this.six = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime("num4", "market");
              } else if (response.data.prize.id == 1) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.one = true;
                this.four = false;
                this.five = false;
                this.two = false;
                this.three = false;
                this.six = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime("num1", "market");
              } else if (response.data.prize.id == 6) {
                this.historyId = "";
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.four = false;
                this.five = false;
                this.two = false;
                this.three = true;
                this.six = false;
                this.results = "很遗憾，您没抽中！";
                this.delayTime("num5", "market");
              }
            }
          } else if (response.code == 201) {
            this.delayTime("num5", "market");
            this.three = true;
            this.four = false;
            this.five = false;
            this.two = false;
            this.one = false;
            this.six = false;
          } else {
            this.msgalert(response.msg);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 再来一次的点击事件
    onceMoreClick() {
      this.market = false;
      this.num1 = false;
      this.num2 = false;
      this.num3 = false;
      this.num4 = false;
      this.num5 = false;
      this.num6 = false;
      this.three = false;
      this.one = false;
      this.two = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.btnstate = "";
    },
    // 确定领取的点击事件
    confirmclaimClick() {
      let phone = localStorage.getItem("userPhone");
      if(this.notEmpty(phone)){
        // this.$store.state.loginShow = true;
         this.isLogin = true;
         this.market1 = true;
      }
      let phones = this.EnCryption("phone", phone);
      if (this.notEmpty(phone)) {
        this.isLogin = true;
        this.market1 = true;
        this.market = false;
        this.num1 = false;
        this.num2 = false;
        this.num3 = false;
        this.num4 = false;
        this.num5 = false;
        this.num6 = false;
        this.three = false;
        this.one = false;
        this.two = false;
        this.four = false;
        this.five = false;
        this.six = false;
        this.btnstate = "";
      } else {
        this.post( "user/integral/getLottery", { historyId: this.historyId },{ interfaceType: "luckdraw" }).then(res => {
          this.showReceiveSu = true;
          this.market1 = true;
          this.market = false;
          this.num1 = false;
          this.num2 = false;
          this.num3 = false;
          this.num4 = false;
          this.num5 = false;
          this.num6 = false;
          this.three = false;
          this.one = false;
          this.two = false;
          this.four = false;
          this.five = false;
          this.six = false;
          this.btnstate = "";
          this.grant = "您的奖品已发放至" + phones + "的账号请注意查收";
        });
      }
    },
    //下载App
    AskApp() {
      this.one = false;
      this.four = false;
      this.five = false;
      this.two = false;
      this.three = false;
      this.six = false;
      window.location.href =
        "http://a.app.qq.com/o/simple.jsp?pkgname=com.guoanfamily.guoanjiaApp&fromcase=40002";
    },
    // 关闭按钮的点击事件
    closeClick() {
      this.isLogin = false;
      this.market1 = false;
      this.market = false;
      this.num1 = false;
      this.num2 = false;
      this.num3 = false;
      this.num4 = false;
      this.num5 = false;
      this.num6 = false;
      this.three = false;
      this.one = false;
      this.two = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.btnstate = "";
    },
    // 领取成功后确认按钮的点击事件
    exitClick() {
      this.num1 = false;
      this.num2 = false;
      this.num3 = false;
      this.num4 = false;
      this.num5 = false;
      this.num6 = false;
      this.three = false;
      this.one = false;
      this.two = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.btnstate = "";
      this.showReceiveSu = false;
      this.market1 = false;
      this.prizeId = Number(this.prizeId);
      if (this.prizeId < 4) {
        // 积分
        this.$router.push("MyIntegral");
      } else if (this.prizeId == 4 || this.prizeId == 5) {
        // 点券

        this.$router.push("cardCoupons");
      }
    },
    // 遮罩层的点击事件
    marketClick() {},
    // 查看规则的点击事件
    seeruleClick() {
      this.$router.push("drawrules");
    },
    // 发送验证码的点击事件
    secondOutClick() {
      // 电话号码正则验证
      if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phoneNumber)) {
        this.msgalert("电话号码有误");
        return false;
      }
      // this.setTime();
      let post_data = { phoneNum: this.phoneNumber };
      this.post("smsAuthCodeController/unionSMSAuthCOde", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.msgalert("信息发送成功,请注意查收");
            this.VeritionCode = true;
            this.setTimeing();
            this.secondOut = this.secondOut;
            this.disable001 = true;
          } else {
            this.showalert(response.msg);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 验证码计时器
    setTimeing() {
      let me = this;
      let setTimeout = setInterval(function() {
        me.times--;
        me.secondOut = "(" + me.times + ")" + "重新获取";
        if (me.times === 0) {
          me.disable001 = false;
          me.secondOut = "获取验证码";
          me.times = 60;
          clearInterval(setTimeout);
        }
      }, 1000);
    },
    // 确定登录的点击事件
    loginClick() {
      if (this.notEmpty(this.phoneNumber)) {
        this.msgalert("请输入电话号码");
        return false;
      }
      if (this.notEmpty(this.vistionCode)) {
        this.msgalert("请输入验证码");
      }
      let post_data = {
        phoneNum: this.phoneNumber,
        authCode: this.vistionCode,
        openId: localStorage.getItem("openid"), //'jyhrtgdfhshgarethrty',,
        source: "8"
      };
      this.post("userLoginController/unionlogin", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.$store.state.IndexMarketShow = true;
            localStorage.setItem("headImg", response.data.headImg);
            localStorage.setItem("userPhone", response.data.phoneNum); //将用户电话存入本地
            localStorage.setItem("token", response.data.token); //将用户token存入本地
            localStorage.setItem("standbyToken", response.data.standbyToken); //将用户备用token存入本地
            localStorage.setItem("userName", response.data.realName); //如果有姓名，则存入localStorage
            localStorage.setItem("userPhone", response.data.phoneNum);
            localStorage.setItem(
              "userInfroMap",
              JSON.stringify(response.data.userInfo)
            ); //将客户的基本信息，收藏的楼盘放入localstorage
            this.post(
              "user/integral/getLottery",
              { historyId: this.historyId },
              { interfaceType: "luckdraw" }
            ).then(res => {
              if (res.code == 200) {
                this.isLogin = false;
                let phones = this.EnCryption("phone", this.phoneNumber);
                this.grant = this.grant =
                  "您的奖品已发放至" + phones + "的账号请注意查收";
                this.showReceiveSu = true;
              }
            });
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 分享的图片的点击事件
    shareClick() {
      if(this.$store.state.showWxTitle){
        this.shareBtnC = true;
        this.wxShare();
      }else{
        this.shareAlert = true;
      }
      
    },
    // 我知道了的点击事件
    exitShareClick() {
      this.shareBtnC = false;
    },
    // app端取消分享
    exitShareClick1(){
      this.shareAlert = false;
    },
    // 微信端分享的方法
    wxShare() {
      // 分享给朋友
      let self = this;
      this.$wechat.onMenuShareAppMessage({
        title: "幸运大转盘", //标题
        desc: "新春好彩头，国安家送大礼！", //描述
        link: "https://www.guoanfamily.com/guoanjiaApp/#/luckdraw", //连接地址指打开分享时页面地址
        imgUrl:'https://img.guoanfamily.com/newYearActivity/shares.jpg',
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.shareFn();
        },
        cancel: function(res) {
          self.msgalert("已取消");
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      // 分享到朋友圈
      this.$wechat.onMenuShareTimeline({
        title: "新春好彩头，国安家送大礼！", //标题
        desc: "新春好彩头，国安家送大礼！", //描述
        link: "https://www.guoanfamily.com/guoanjiaApp/#/luckdraw", //连接地址指打开分享时页面地址
        imgUrl:'https://img.guoanfamily.com/newYearActivity/shares.jpg',
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.shareFn();
        },
        cancel: function(res) {
          self.msgalert("已取消");
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      this.$wechat.error(function(res) {});
    },
    // APP微信好友分享
    weixinhaoyoufenxiangClick() {
      this.AppwxShare();
    },
    // APP微信朋友圈分享
    weixinFriendsClick() {
      this.friendShare();
    },
     // 朋友圈
    friendShare() {
      let self =  this;
        Wechat.share(
          {
            message: {
              title: '新春好彩头，国安家送大礼！', //标题
              description: '新春好彩头，国安家送大礼！', //描述
              thumb: 'https://img.guoanfamily.com/newYearActivity/shares.jpg', //图片
              media: {
                type: Wechat.Type.WEBPAGE,
                webpageUrl: 'https://www.guoanfamily.com/guoanjiaApp/#/luckdraw' //连接地址指打开分享时页面地址
              }
            },
            scene: Wechat.Scene.TIMELINE // share to Timeline
          },
          function() {
            self.msgalert("已成功分享到朋友圈");
            self.shareFn();
          },
          function(reason) {
            // alert("Failed: " + reason);
            // this.msgalert('已取消分享');
          }
        );
    },
    // 好友
    AppwxShare() {
      let self =  this;
        Wechat.share(
          {
            message: {
              title: '幸运大转盘', //标题
              description: '新春好彩头，国安家送大礼！', //描述
              thumb: 'https://img.guoanfamily.com/newYearActivity/shares.jpg', //图片
              media: {
                type: Wechat.Type.WEBPAGE,
                webpageUrl: 'https://www.guoanfamily.com/guoanjiaApp/#/luckdraw' //连接地址指打开分享时页面地址
              }
            },
            scene: Wechat.Scene.SESSION // share to Timeline
          },
          function() {
            self.msgalert("已成功分享给朋友");
            self.shareFn();
          },
          function(reason) {
            // alert("Failed: " + reason);
            // this.msgalert('已取消分享');
          }
        );
    },
    // 分享成功后的方法
    shareFn() {
      this.get("userShare/share",{interfaceType: "collect"}).then(
        response => {
          if (response.code == 200) {
            // alert('124');
            console.log("分享成功");
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 弹窗提示
    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg,
        width: "4em"
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text",
        width: "4em"
      });
    }
  },

  created() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/micromessenger/i) == "micromessenger") {
      this.phoneTop = true;
    }
  },
  mounted() {
    this.$vux.loading.hide();
    // let myData = new Date();
    // let newYear =  myData.getFullYear();//年
    // let newMonth = myData.getMonth() + 1;//月
    // let newDate = myData.getDate();//日
    // let newHouse = myData.getHours();//时
    // let newMinutes = myData.getMinutes();//分
    // let newSeconds =  myData.getSeconds(); //秒
    // // console.log(newYear,'',newMonth,'',newDate,'',newHouse,'',newMinutes,newSeconds);
    // //  + newHouse + ':' + newMinutes + ':' + newSeconds;
    // // 获取当前系统事件，转货为时间戳，判断活动是否开始
    // let SpecificDate = newYear + '-' + newMonth + '-' + newDate;
    // // 获取指定日期的时间戳儿
    // let date = new Date('2018-02-14 00:00:00');
    // let time1 = date.getTime();
    // // console.log('开始时间',time1);
    // let date2 =  new Date(SpecificDate);
    // let time2 = date2.getTime(SpecificDate);
    // // console.log('当前时间',time2);
    // let date3 = new Date('2018-02-28 00:00:00');
    // let time3 = date3.getTime()
    // // console.log('结束时间',time3);
    // if(time2 < time1){
    //   this.msgalert('活动还没有开始');
    //   this.drawClicked =  true;
    // }else if((time2 > time1) && (time2 < time3)){
    //   this.drawClicked = false;
    // }else if(time2 > time3){
    //   this.drawClicked = true;
    //   this.msgalert('活动已结束');
    // }
  }
};
</script>

<style lang="less" scoped>
// 微信分享样式
.shareAlert {
  width: 100%;
  height: 0rem;
  position: fixed;
  transition: 0.9s;
  bottom: 0;
  background: #fff;
  z-index: 300;
  .shareIcon {
    width: 100%;
    height: 1.5rem;
    //    background:yellow;
    div {
      float: left;
      width: 1.5rem;
      height: 1.5rem;
      background: red;
      margin-left: 0.3rem;
      position: relative;
    }
    div:nth-child(1) {
      background: url('https://img.guoanfamily.com/newYearActivity/Wx.png') no-repeat;
      background-size: 60%;
      background-position: 50% 26%;
      span {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
      }
    }
    div:nth-child(2) {
      background: url('https://img.guoanfamily.com/newYearActivity/friends.png') no-repeat;
      background-size: 60%;
      background-position: 50% 26%;
      span {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
      }
    }
  }
  .exitShare {
    padding-top: 5px;
    font-size: 0.4rem;
    border-top: 1px solid #e6e6e6;
    margin-top: 0.6rem;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
}
.shareAlert1 {
  transition: 0.9s;
  height: 25%;
}
.market {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
}
.bj {
  margin-top: 1.3rem;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  left: 0;
  top: 0;
  right: 0;
  &.phoneBj {
    margin-top: 0;
  }
  .buttons {
    position: absolute;
    z-index: 1;
    font-size: 16px;
    right: 20px;
    top: 15px;
    width: 25%;
    height: 32px;
    line-height: 32px;
    color: #e9af45;
    font-weight: 400;
    text-shadow: 2px 2px 0.5px #222;
  }
  width: 100%;
  .topbj {
    width: 90%;
    height: 7rem;
    margin: 2.2rem auto;
    .outerplyer {
      width: 100%;
      height: 100%;
      background-size: 100%;
      position: relative;
      .big {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .middle {
        position: absolute;
        width: 70%;
        z-index: 1;
        top: 1.3rem;
        left: 15.5%;
        transform-origin: 50% 50%;
      }
      .middle1 {
        animation: rotate 3s both ease;
      }
      .middle2 {
        animation: rotate2 3s both ease;
      }
      .middle3 {
        animation: rotate3 3s both ease;
      }
      .middle4 {
        animation: rotate4 3s both ease;
      }
      .middle5 {
        animation: rotate5 3s both ease;
      }
      .middle6 {
        animation: rotate6 3s both ease;
      }
      .pointer {
        position: absolute;
        width: 20%;
        z-index: 2;
        left: 40%;
        top: 39%;
      }
    }
  }
  .share {
    position: absolute;
    z-index: 3;
    width: 60%;
    top: 9rem;
    left: 20%;
  }
  .explain {
    width: 100%;

    height: 589px;
    background: url("../../../assets/luck/explain1.png") no-repeat top;

    background-size: 90%;
    position: absolute;
    top: 12rem;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    z-index: 4;
  }
  .close {
    width: 0.7rem;
    height: 0.7rem;
    position: fixed;
    right: 20px;
    top: 70px;
    background: url("https://img.guoanfamily.com/newYearActivity/close.png") no-repeat center;
    background-size: 100%;
    z-index: 16;
    &.phoneClose {
      top: 20px;
    }
  }
  .resultStyle {
    width: 80%;
    height: 40%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 32%;
    z-index: 12;
    margin: auto;
    &.phoneresultStyle {
      bottom: 50%;
    }
    .award {
      width: 100%;
      height: 1rem;
      font-size: 30px;
      font-weight: bold;
      color: #f6bb41;
      text-align: center;
    }
  }

  
  .receive {
    width: 90%;
    height: 360px;
    background: url("https://img.guoanfamily.com/newYearActivity/receive.png") no-repeat center;
    background-size: 100% 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 14;
    .lineClose {
      width: 0.7rem;
      height: 100px;
      background: url("https://img.guoanfamily.com/newYearActivity/close1.png") no-repeat center;
      background-size: 100%;
      position: absolute;
      right: 0;
      top: -90px;
    }
    .msg {
      width: 100%;
      height: 20px;
      color: red;
      line-height: 20px;
    }
    .prompt {
      width: 100%;
      height: 60px;
      float: left;
      line-height: 30px;
      text-align: left;
      margin-left: 7%;
      margin-top: 20px;
      margin-right: 7%;
      color: #333333;
      font-size: 14px;
      .msgTxt {
        width: 88%;
        height: 30px;
        text-align: center;
      }
    }
    .subLogin {
      width: 40%;
      border-radius: 5px;
      position: absolute;
      left: 30%;
      bottom: 40px;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
      background-size: cover;
    }
  }
  .veritionCode {
    background: #ccc;
    border-radius: 0.25rem;
  }
  .receiveSuccess {
    width: 80%;
    height: 300px;
    // background:red;
    background: url("https://img.guoanfamily.com/newYearActivity/receveSu.png") no-repeat center;
    background-size: 100% 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 15;
    .grant {
      font-size: 18px;
      text-align: left;
      width: 80%;
      margin: 50% auto;
      color: #333333;
      font-weight: 500;
    }
    .closeLine1 {
      width: 0.7rem;
      height: 100px;
      background: url("https://img.guoanfamily.com/newYearActivity/close1.png") no-repeat;
      background-size: 100%;
      position: absolute;
      right: 10px;
      top: -165px;
      &.closeLine1Phone {
        top: -150px;
      }
    }
    .grantBtn {
      width: 35%;
      border-radius: 5px;
      position: absolute;
      left: 30%;
      bottom: 55%;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
      background-size: cover;
    }
  }
 
}
.buttonDiv {
    width: 100%;
    height: 6rem;
    position: fixed;
    left: 0;
    bottom: 0%;
    z-index: 13;
    div {
      width: 100%;
      height: 100%;
      position: relative;
      .onceMoreMethod {
        position: absolute;
        top: 0.79rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 12px;
        color: #f3af0d;
      }
      .onceMore {
        width: 50%;
        text-align: center;
        position: absolute;
        left: 25%;
        top: 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
        margin: 0 !important;
      }
      .onceMore1 {
        width: 50%;
        text-align: center;
        position: absolute;
        left: 25%;
        top: 70px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
        margin: 0 !important;
      }
      .erweimaInfo {
        position: absolute;
        top: 2.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 14px;
        color: #f3af0d;
      }
      .erweima {
        width: 40%;
        position: absolute;
        left: 30%;
        top: 2.8rem;
        img {
          width: 100%;
        }
      }
    }
  }
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(2160deg);
  }
}
@keyframes rotate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(2100deg);
  }
}
@keyframes rotate3 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(2040deg);
  }
}
@keyframes rotate4 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(2340deg);
  }
}
@keyframes rotate5 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(2640deg);
  }
}
@keyframes rotate6 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(2580deg);
  }
}
</style>
<style lang='less'>
.market{
   .sharbj {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("https://img.guoanfamily.com/newYearActivity/sharejinatou.png") no-repeat;
    background-size: 80%;
    background-position: 80% 0%;
    .sharbtn {
      width: 40%;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 20%;
      bottom: 0;
      right: 0;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background: url("https://img.guoanfamily.com/newYearActivity/shareBtn.png") no-repeat 100% center;
      background-size: 90%;
      margin: 0 !important;
    }
  }
}
.luckdraw {
  .receive {
    * {
      font-size: 14px;
    }
    .weui-btn_mini {
      font-size: 12px;
      padding: 0 0.8em;
    }
  }
}

.code {
  .weui-cell__hd {
    width: 1rem;
    margin-left: -12px;
  }
  input {
    margin-left: 20px;
  }
}
.weui-cell:before {
  border-top: none !important;
}
.weui-cell__ft {
  .weui-btn_primary {
    background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center !important;
    background-size: 100%;
    border-radius: 5px;
  }
}
.close {
  width: 0.7rem;
  height: 0.7rem;
  position: fixed;
  right: 20px;
  top: 70px;
  background: url("https://img.guoanfamily.com/newYearActivity/close.png") no-repeat center;
  background-size: 100%;
  z-index: 16;
  &.phoneClose {
    top: 20px;
  }
}
.buttonDiv {
  width: 100%;
  height: 6rem;
  position: fixed;
  left: 0;
  bottom: 0%;
  z-index: 13;
  div {
    width: 100%;
    height: 100%;
    position: relative;
    .onceMoreMethod {
      position: absolute;
      top: 45px;
      height: 26px;
      line-height: 26px;
      font-size: 12px;
      text-align: center;
      color: #f3af0d;
    }
    .onceMore {
      width: 50%;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 10px;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
      margin: 0 !important;
    }
    .onceMore1 {
      width: 50%;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 70px;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
      margin: 0 !important;
    }
    .erweimaInfo {
      position: absolute;
      top: 2.2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 14px;
      text-align: center;
      color: #f3af0d;
    }
    .erweima {
      width: 40%;
      position: absolute;
      left: 30%;
      top: 2.8rem;
      img {
        width: 100%;
      }
    }
  }
}
.resultStyle {
  width: 80%;
  height: 40%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 32%;
  z-index: 12;
  margin: auto;
  &.phoneresultStyle {
    bottom: 50%;
  }
  .award {
    width: 100%;
    height: 1rem;
    font-size: 30px;
    font-weight: bold;
    color: #f6bb41;
    text-align: center;
  }
}
.receiveSuccess {
  width: 80%;
  height: 300px;
  // background:red;
  background: url("https://img.guoanfamily.com/newYearActivity/receveSu.png") no-repeat center;
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 15;
  .grant {
    font-size: 18px;
    text-align: left;
    width: 80%;
    margin: 50% auto;
    color: #333333;
    font-weight: 500;
  }
  .closeLine1 {
    width: 0.7rem;
    height: 100px;
    background: url("https://img.guoanfamily.com/newYearActivity/close1.png") no-repeat;
    background-size: 100%;
    position: absolute;
    right: 10px;
    top: -180px;
    &.closeLine1Phone {
      top: -150px;
    }
  }
  .grantBtn {
    width: 40%;
    border-radius: 5px;
    position: absolute;
    left: 30%;
    bottom: 60%;
    background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
    background-size: cover;
  }
}
.receive {
  width: 90%;
  height: 360px;
  background: url("https://img.guoanfamily.com/newYearActivity/receive.png") no-repeat center;
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 14;
  .lineClose {
    width: 0.7rem;
    height: 100px;
    background: url("https://img.guoanfamily.com/newYearActivity/close1.png") no-repeat center;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: -90px;
  }
  .msg {
    width: 100%;
    height: 20px;
    color: red;
    line-height: 20px;
  }
  .prompt {
    width: 100%;
    height: 60px;
    float: left;
    line-height: 30px;
    text-align: left;
    margin-left: 7%;
    margin-top: 20px;
    margin-right: 7%;
    color: #333333;
    font-size: 14px;
    .msgTxt {
      width: 88%;
      height: 30px;
      text-align: center;
    }
  }
  .subLogin {
    width: 40%;
    border-radius: 5px;
    position: absolute;
    left: 30%;
    bottom: 40px;
    background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
    background-size: cover;
  }
}
.result {
  background: url("https://img.guoanfamily.com/newYearActivity/one.png") no-repeat center;
  background-size: 80%;
}
.result1 {
  background: url("https://img.guoanfamily.com/newYearActivity/two.png") no-repeat center;
  background-size: 80%;
}
.result2 {
  background: url("https://img.guoanfamily.com/newYearActivity/three.png") no-repeat center;
  background-size: 80%;
}
.result3 {
  background: url("https://img.guoanfamily.com/newYearActivity/four.png") no-repeat center;
  background-size: 80%;
}
.result4 {
  background: url("https://img.guoanfamily.com/newYearActivity/none.png") no-repeat center;
  background-size: 80%;
}
.result5 {
  background: url("https://img.guoanfamily.com/newYearActivity/six.png") no-repeat center;
  background-size: 80%;
}
</style>

