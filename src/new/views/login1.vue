<template>
    <div :class="[this.$store.state.loginShow ? 'login_show' :'login_top' ]"> 
          <!-- 头部 -->
        <div class="loginTop" ref="loginTop" :style="{'height':loginBox+'px'}"  >
          <div class="close">
            <img class="img1" src="../../../static/new/img/cloase1.png" alt="" @click="logoTitleClick">
          </div>
        </div>
        <div class="loginCenter" ref="loginCenter" :style="{'height':centerBox+'px'}">
            
            <div class="inputBox">
              <div class="close2">
                <img class="img0" src="../../../static/new/img/cloase2.png" alt="">
                <img class="img2" :src="faceImg" alt="">
              </div>              
              <div class="box">
                <div class="inputTel animated" :class="{flipInX:isanimated}">
                  <div class="inio">
                    <img src="../../../static/new/img/loginPhone.png" alt="">
                  </div>
                  <input type="tel" pattern="\d" v-model.number="phoneNumber" maxlength="11" @input="handleTel"  placeholder="请输入手机号码" id="inputBlur" @click="phoneClick('1')">
                </div>
                <div class="henggang"></div>
                <div class="inputVerify animated" :class="{flipInX:isanimated}">
                  <div class="inio">
                    <img src="../../../static/new/img/loginSuo.png" alt="">
                  </div>
                  <input type="number" v-model.number="vistionCode" maxlength="6" @input="authCodeInput" placeholder="请输入验证码" id="inputBlur2" @click="phoneClick('2')">
                  <div v-if="issecond === 1" class="second" @click="processButton001">获取验证码</div>
                  <div v-else-if="issecond === 2" class="secondTwo animated flipInY">{{timesCount}}</div>
                </div>
              </div>              
            </div>
            <div class="buttonBox">
              <div v-if="isbutton === 1" class="button animated" :class="[{bounceInLeft:isanimated},{wrapper:isClick},{wrapper2:isClick2}]" @click='login'>安全登录</div>
              <img v-else-if="isbutton === 2" class="animated bounceIn" src="../../../static/new/img/loginYes.png" alt="">
            </div>
            <div class="telBox">
              <a href="tel:400-900-2225" class="animated" :class="{bounceInRight:isanimated}"><span>服务热线：</span>400-900-2225</a>
            </div>
        </div>
        <div class="shade" v-show="isshades" @click="isShade">
            <p>{{shdeModel}}</p>
        </div>
    </div>
</template>

<script>
// import { XInput, XButton} from 'vux'
import face00 from '../../../static/rent/login/00.png';
import face01 from '../../../static/rent/login/01.png';
import face02 from '../../../static/rent/login/02.png';
import face03 from '../../../static/rent/login/03.png';
import face04 from '../../../static/rent/login/04.png';
import face05 from '../../../static/rent/login/05.png';
import face06 from '../../../static/rent/login/06.png';
import face07 from '../../../static/rent/login/07.png';
import face08 from '../../../static/rent/login/08.png';
import face09 from '../../../static/rent/login/09.png';
import face10 from '../../../static/rent/login/10.png';
import face11 from '../../../static/rent/login/11.png';
import face12 from '../../../static/rent/login/12.png';
import face13 from '../../../static/rent/login/13.png';
//解决安卓软键盘遮挡问题
// alert(navigator.appVersion);
if(/Android [4-8]/.test(navigator.appVersion)) {
   window.addEventListener("resize", function() {
      if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
         window.setTimeout(function() {
            document.activeElement.scrollIntoViewIfNeeded();
         },0);
      }
   })
}
export default {
  name: "login",
  data() {
    return {
      phoneNumber: "",
      vistionCode: "",
      times: 60,
      VeritionCode: false,
      AndroidTop: false,
      isanimated: false, //打开组件显示效果
      isClick: false, //控制登录按钮变化
      isClick2: true, //控制登录按钮变化
      isbutton: 1, //控制显示成功图片
      issecond: 1, //控制读秒显示隐藏
      isshades: false, //控制弹窗的显示隐藏
      shdeModel: "", //弹窗提示话术
      loginBox: "", //动态调整top高度，保证安卓软键盘不变形
      centerBox: "", //动态调整center高度，保证安卓软键盘不变形
      RegistrationID:"",//极光推送的id
      faceImg:face00,//变换表情
    };
  },
  methods: {
    //调节安卓软键盘问题
    phoneClick(e) {
      this.phoneNumber=this.phoneNumber;
      if(e == '1'){
        this.faceImg=face00;
      }else if(e == '2'){
        this.faceImg=face12;
      }
      let bodyHeight =
        window.document.documentElement.clientHeight ||
        document.body.clientHeight;
      let topHeight = this.$refs.loginTop.offsetHeight;
      let centerHeight = this.$refs.loginCenter.offsetHeight;
      this.loginBox = topHeight;
      this.centerBox = centerHeight;
    },
    //实时判断电话号
    handleTel(e) {
      var tel = null;
      var faceLength = e.target.value.length;
      if (!/^\d+$/.test(e.target.value)) {
        this.isshades = true;
        this.shdeModel = "电话号码有误,请重新输入";
        this.phoneNumber = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      if(faceLength == 1){
        this.faceImg=face01;
      }else if(faceLength == 2){
        this.faceImg=face02;
      }else if(faceLength == 3){
        this.faceImg=face03;
      }else if(faceLength == 4){
        this.faceImg=face04;
      }else if(faceLength == 5){
        this.faceImg=face05;
      }else if(faceLength == 6){
        this.faceImg=face06;
      }else if(faceLength == 7){
        this.faceImg=face07;
      }else if(faceLength == 8){
        this.faceImg=face08;
      }else if(faceLength == 9){
        this.faceImg=face09;
      }else if(faceLength == 10){
        this.faceImg=face10;
      }else if (faceLength == 11) {
        tel = e.target.value;
        this.faceImg=face11;
        if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(tel)) {
          this.isshades = true;
          this.shdeModel = "电话号码有误,请重新输入";
          this.phoneNumber = "";
          this.hiddenShade(); //两秒自动关闭弹出层          
          return false;          
        } else {
          let input = document.getElementById("inputBlur");
          input.blur();
        }
      }else if(faceLength > 11){
        const slicePhone = String(this.phoneNumber).slice(0,11);
        this.phoneNumber = slicePhone;
      }
    },
    //弹出层两秒自动关闭
    hiddenShade() {
      setTimeout(() => {
        this.isShade();
      }, 1000);
    },
    //关闭弹窗
    isShade() {
      this.isshades = false;
    },
    //实时判断验证码
    authCodeInput(e) {
      if (!/^\d+$/.test(e.target.value)) {        
        this.isshades = true;
        this.shdeModel = "验证码有误,请重新输入";
        this.vistionCode = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      if (e.target.value.length == 6) {
        const authCodeValue = e.target.value;
        this.vistionCode = e.target.value;
        let input2 = document.getElementById("inputBlur2");
        input2.blur();
        this.login();
      }
    },
    // 获取验证码的点击事件
    processButton001() {
      if (this.phoneNumber == "") {
        this.isshades = true;
        this.shdeModel = "请输入电话号码";
        this.phoneNumber = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phoneNumber)) {
        this.isshades = true;
        this.shdeModel = "电话号码有误,请重新输入";
        this.phoneNumber = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      let input = document.getElementById("inputBlur");
      input.blur();
      let post_data = { phoneNum: this.phoneNumber };
      this.post("smsAuthCodeController/unionSMSAuthCOde", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.isshades = true;
            this.shdeModel = "信息发送成功,请注意查收";
            this.hiddenShade(); //两秒自动关闭弹出层
            this.VeritionCode = true;
            this.times = 60;
            this.issecond = 2;
            this.setTime(); //倒计时显示
          } else {
            this.isshades = true;
            this.shdeModel = response.msg;
          }
        },
        response => {
          this.isshades = true;
          this.shdeModel = response.msg;
        }
      );
    },
    // 验证码计时器
    setTime() {
      let me = this;
      let setTimeout = setInterval(function() {
        me.times--;
        if (me.times === 0) {
          me.issecond = 1;
          clearInterval(setTimeout);
        }
      }, 1000);
    },
    // 登录的点击事件
    login() {
      if (this.phoneNumber == "") {
        this.isshades = true;
        this.shdeModel = "请输入电话号码";
        this.phoneNumber = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      if (this.vistionCode == "") {
        this.isshades = true;
        this.shdeModel = "请输入验证码";
        this.vistionCode = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phoneNumber)) {
        this.isshades = true;
        this.shdeModel = "请输入电话号码";
        this.vistionCode = "";
        this.phoneNumber = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      if (this.vistionCode.length != 6) {
        let input2 = document.getElementById("inputBlur2");
        input2.blur();
        this.isshades = true;
        this.vistionCode = "请输入验证码";
        this.vistionCode = "";
        this.hiddenShade(); //两秒自动关闭弹出层
        return false;
      }
      let erweima = this.$route.query.erweima;
      if (!this.notEmpty(erweima)) {
        let post_data = {
          phoneNum: this.phoneNumber,
          authCode: this.vistionCode,
          openId: localStorage.getItem("openid"), //'jyhrtgdfhshgarethrty',,
          source: "9"
        };
        this.post("user/userLoginController/register", post_data, {
          interfaceType: "collect"
        }).then(
          response => {
            if (response.code == 200) {
              this.isClick = true; //安全登录宽度变小
              this.isClick2 = false; //安全登录宽度关闭
              this.isanimated = false; //关闭css3效果；
              setTimeout(() => {
                this.isbutton = 2;
                this.$store.state.loginData = true;
              }, 500);
              setTimeout(() => {
                this.$store.state.IndexMarketShow = true;
                localStorage.setItem("headImg", response.data.headImg);
                localStorage.setItem("userPhone", response.data.phoneNum); //将用户电话存入本地
                localStorage.setItem("token", response.data.token); //将用户token存入本地
                localStorage.setItem(
                  "standbyToken",
                  response.data.standbyToken
                ); //将用户备用token存入本地
                localStorage.setItem("userName", response.data.realName); //如果有姓名，则存入localStorage
                this.$store.state.userName = response.data.realName;
                this.$store.state.userPhone = response.data.phoneNum;
                localStorage.setItem(
                  "userInfroMap",
                  JSON.stringify(response.data.userInfo)
                ); //将客户的基本信息，收藏的楼盘放入localstorage
                this.$router.push("/");
              }, 700);
            }
          },
          response => {
            this.isshades = true;
            this.shdeModel = response.msg;
            this.vistionCode = "";
            this.hiddenShade(); //两秒自动关闭弹出层
          }
        );
      } else {
        let post_data = {
          phoneNum: this.phoneNumber,
          authCode: this.vistionCode,
          headimgurl: localStorage.getItem("headimgurl"),
          openId: localStorage.getItem("openid")
        };
        this.post("userLoginController/unionlogin", post_data, {
          interfaceType: "collect"
        }).then(
          response => {
            if (response.code == 200) {
              this.isClick = true; //安全登录宽度变小
              this.isClick2 = false; //安全登录宽度关闭
              this.isanimated = false; //关闭css3效果；
              setTimeout(() => {
                this.isbutton = 2;
                this.$store.state.loginData = true;
              }, 500);
              setTimeout(() => {
                this.phoneNumber = "";
                this.vistionCode = "";
                this.$store.state.loginShow = false;
                
                localStorage.setItem("headImg", response.data.headImg);
                localStorage.setItem("userPhone", response.data.phoneNum); //将用户电话存入本地
                localStorage.setItem("token", response.data.token); //将用户token存入本地
                localStorage.setItem(
                  "standbyToken",
                  response.data.standbyToken
                ); //将用户备用token存入本地
                // 获取极光推送的id 判断有没有值，没有调用推送接口，有了直接调用保存接口
                // let inObj  = response.data.userInfo.infoByUserIdList;
                // this.RegistrationID = inObj.RegistrationID;
                // if(this.notEmpty(this.RegistrationID)){
                  this.RegistrationIDfn();
                // }
                localStorage.setItem("userName", response.data.realName); //如果有姓名，则存入localStorage
                this.$store.state.userName = response.data.realName;
                this.$store.state.userPhone = response.data.phoneNum;
                this.$store.state.ExitLoginShow = true;
                localStorage.setItem(
                  "userInfroMap",
                  JSON.stringify(response.data.userInfo)
                ); //将客户的基本信息，收藏的楼盘放入localstorage
              }, 700);
            } else {
              this.faceImg=face13;
              this.isshades = true;
              this.shdeModel = response.msg;
              this.vistionCode = "";
              this.hiddenShade(); //两秒自动关闭弹出层
            }
          },
          response => {
            this.isshades = true;
            this.shdeModel = response.msg;
            this.vistionCode = "";
            this.hiddenShade(); //两秒自动关闭弹出层
          }
        );
      }
    },
    logoTitleClick() {
      this.$store.state.loginShow = false;
    },
    // 获取极光推送的id
    RegistrationIDfn() {
      window.JPush.getRegistrationID((rId)=> {
        this.saveReg(rId);
      });
      // let rId = '1232423';
      // this.saveReg(rId);
    }, 
    // 保存推送id接口
    saveReg(rId){
      let platform = localStorage.getItem('platform');
      if (platform == null || platform == 'null' || platform == 'undefined') {
          var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
          if (ua.match(/MicroMessenger/i) == "micromessenger") {
              platform = 'weixin';
          } else {
              platform = 'webPage';
          }
      }
      let deviceType = null;
      if(platform == 'iOS'){
        deviceType = 1;
      }else{
         deviceType = 0;
      }
      let url  = '/agenthouseCutomer/OwnerController/updOwnerByToken';
      let post_data = {
        deviceType:deviceType,
        registerId:rId,
      }
      this.post(url,post_data,{interfaceType: "tongji"}).then(response => {
        if(response.code == 200){
          console.log('保存成功');
        }
      },
        response => {
          this.showalert(response.msg);
        }
      );
    }
  },
  created() {
    
  },
  watch: {
    myValue: function(newVal, oldVal) {
      if (this.$store.state.loginData == false) {
        this.isClick = false;
        this.isClick2 = true;
        this.isbutton = 1;
      }
    },
    myLoginShow: function() {
      if (this.$store.state.loginShow == true) {
        this.faceImg=face00;
        this.isanimated = true; //关闭css3效果；
        this.issecond = 1; //不读秒倒计时
      } else {
        this.isanimated = false; //关闭css3效果
        this.issecond = 2; //读秒倒计时
      }
    }
  },
  mounted() {
    if (!this.AndroidOrIos()) {
      this.AndroidTop = false;
    } else {
      this.AndroidTop = true;
    }
    // let platform = 'IOS';
    //   this.RegistrationID = '12343';
    //   let url = 'userInfoController/unionSaveJpushID?RegistrationID=' + this.RegistrationID + '&Platform=' + platform;
    //   this.get(url,{interfaceType: "collect"}
    //   ).then(response => {
    //     if(response.code == 200){
    //       console.log('保存成功');
    //     }
    //   },
    //     response => {
    //       this.showalert(response.msg);
    //     }
    //   );
  },
  computed: {
    timesCount() {
      return this.times + "s后重新获取";
    },
    myValue() {
      //监听点击退出后重置安全登录效果
      return this.$store.state.loginData;
    },
    myLoginShow() {
      return this.$store.state.loginShow;
    },
    phoneNumberS(e) {}
  }
};
</script>

<style lang='less' scoped>
@import "../../rent/style/animate.min.css"; //引入效果css
@import "~vux/src/styles/1px.less";
html,
body {
  background: #eee;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.loginTop {
  width: 100%;
  height: 30%;
  background: url("https://media.guoanfamily.com/www/loginTop1.jpg") no-repeat
    center;
  background-size: 100% 100%;
  position: relative;
  .close {
    width: 100%;
    height: 48%;
    position: absolute;
    bottom: 0;
    .img1 {
      height: 30px;
      width: 28px;
      position: absolute;
      right: 14.5%;
      bottom: -16%;
      z-index: 10;
    }    
  }
}
.loginCenter {
  width: 100%;
  height: 70%;  
  .inputBox {
    width: 100%;
    height: 56%;
    overflow: hidden;
    .close2 {
      width: 100%;
      height: 39%;
      position: relative;
      overflow:hidden;
      .img0 {
        width: 2px;
        height: 100%;
        right: 18%;
        position: absolute;
        z-index: 0;
      }
      .img2{
        width:1.4rem;
        height:1.4rem;
        margin:0.25rem auto;
      }
    }
    .box {
      width: 80%;
      height: 2.4rem;
      margin-left: 10%;
      margin-top:1%;
      border-radius: 10px;
      border: solid 1px #d8d8d8;
      position: relative;
      .inio {
        width: 20%;
        height: 100%;
        float: left;
        position: relative;
        img {
          width: 30%;
          height: 44%;
          position: absolute;
          margin: auto;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      }
      .henggang{
        width:100%;
        height: 1px;
        background:#d8d8d8;
        position: absolute;
        top:1.2rem;
        z-index: 1000;
      }
      .inputTel {
        width: 100%;
        height: 1.2rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        -webkit-animation-duration: 1.4s; //动画持续时间
        -webkit-animation-delay: 0.4s; //动画延迟时间
        input {
          width: 80%;
          height: 1.15rem;
          border: none;
          text-indent: 10px;
          font-size: 14px;
          margin: 0;
          padding: 0;
          outline: none;
          float: left;
          overflow: hidden;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
      .inputVerify {
        width: 100%;
        height: 1.2rem;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        -webkit-animation-duration: 1.4s; //动画持续时间
        -webkit-animation-delay: 0.8s; //动画延迟时间
        input {
          width: 37%;
          height: 1.17rem;
          border: none;
          text-indent: 10px;
          font-size: 14px;
          margin: 0;
          padding: 0;
          outline: none;
          float: left;
          overflow: hidden;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        .second {
          width: 33%;
          height: 100%;
          float: right;
          font-size: 14px;
          line-height: 1.2rem;
          overflow: hidden;
        }
        .secondTwo {
          width: 35%;
          height: 98%;
          float: right;
          font-size: 14px;
          line-height: 1.1rem;
          overflow: hidden;
          background: #f3f3f3;
          border-bottom-right-radius: 10px;
          text-align: center;
        }
      }
    }
  }
  .buttonBox {
    width: 100%;
    height: 14%;
    margin-top:2%;
    position: relative;
    .button {
      width: 80%;
      height: 1rem;
      background: #c9151d;
      border-radius: 50px;
      position: absolute;
      margin: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      line-height: 1rem;
      font-size: 14px;
      color: #fff;
      letter-spacing: 4px;
      transition-property: width; //表示对那个属性进行变化
      transition-duration: 0.5s; /*表示动画的持续时间*/
      transition-timing-function: ease-in; /*表示动画的播放方式由快到慢*/
      transition-delay: 0s; /*表示动画的延时时间*/
      animation-duration: 1.4s; //动画持续时间
      animation-delay: 1s; //动画延迟时间
    }
    .wrapper {
      width: 10%;
    }
    .wrapper2 {
      width: 80%;
    }
    img {
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      margin: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  .telBox {
    width: 100%;
    height: 15%;
    position: relative;
    a {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      text-align: center;
      color: #ce5606;
      letter-spacing: 1px;
      line-height: 2rem;
      font-size: 16px;
      -webkit-animation-duration: 1.4s; //动画持续时间
      -webkit-animation-delay: 1s; //动画延迟时间
      span {
        color: #202020;
      }
    }
  }
}
.shade {
  width: 3.6rem;
  height: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  p {
    font-size: 14px;
    text-align: center;
    width: 90%;
    height: auto;
    overflow: hidden;
    color: #fff;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    word-wrap: break-word;
    word-break: break-all;
    margin-top: 0.3rem;
  }
}
</style>
