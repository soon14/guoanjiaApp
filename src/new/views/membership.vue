<template>
    <div  class="fixContent" >
        <!-- 标题 -->
        <div :class="{'topM':!this.$store.state.showWxTitle}">
            <!-- <div style="width:100%;height:.125rem;background:#ccc;"></div> -->
            <div class="topName" style="border-bottom:none;">
                <div class="topNameLeft" >
                    <!-- <span class="leftImg1"></span> -->
                    <span style="border-left:5px solid #da1618;marign-left:10px;display:block;font-weight:600;">入会信息</span>
                </div>
            </div>
            <div class="name">
                <div class="labelStyle">
                    <x-input class="leftName" title="姓　　名　" name="username" v-model='username' placeholder="请输入姓名"></x-input>
                </div>
                <div class="labelStyle">
                    <x-input class="leftName" title="身份证号码" name="idCard" v-model="idCard" placeholder="请输入身份证号码"></x-input>
                </div>
                <div class="labelStyle">
                    <x-input class="leftName" title="手机号码　" :show-clear='false' name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                </div>
                <div class="labelStyle">
                    <x-input class="leftName" title="通讯地址　" name="address" v-model="quyu" placeholder="请输入通讯地址"></x-input>
                    <!-- <x-address class="leftName" ref="quyu" raw-value @on-hide="logHide" @on-show="logShow" value-text-align="right" :title="title" v-model="quyu" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择居住区域"></x-address> -->
                </div>
            </div>

            <div class="userange">
                <span>支付总额:</span>
                <span>{{subMoneys}}</span>
                <span style="padding-right:.5rem;">元</span>
            </div>
            <div style="width:100%;height:.125rem;background:#ccc;"></div>
       
        <div class="bottomBtn">
            <x-button class="immeditBookingPay" type="primary"  action-type="button" :disabled='buttonflag' @click.native='submit'>提交</x-button>
        </div>
        </div>
    </div>
</template>
<script>
import { Selector, XAddress, ChinaAddressV3Data, Checklist } from "vux";
export default {
  name: "membership",
  components: {
    Selector,
    XAddress,
    ChinaAddressV3Data,
    Checklist,
    topM: false
    // trues:true,
  },
  data() {
    return {
      // 下拉选择
      initiationinfo: {},
      buildId: "",
      selects: 1,
      list1: ["1", "2", "3", "4", "5", "6"],
      title: "通讯地址",
      username: "", //姓名
      mobile: "",
      idCard: "",
      quyu: "",
      addressData: ChinaAddressV3Data,
      slel: false, //选择规则
      // 微信必须的参数
      openid: "", //微信openid
      notifyUrl: "", //微信响应回调地址
      orderid: "", //订单ID
      totalFee: "", //支付金额
      subMoneys: "",
      unitPrice: "", //单价
      body: "入会金额",
      callBackUrl: "",
      arrInfo: [],
      shuoming: [],
      buttonflag: false
    };
  },
  methods: {
    // ckl() {
    //     this.orderid = "876524";
    //     this.notifyUrl = 'www.guoanfamilay.com';
    //     this.totalFee = '100';
    //     this.openid = 'o8awnwtP8efh2X1mTblRj_x5FGVs'
    //     window.location.href = 'http://act.guoanfamily.com/commonPlatform/pay/membershipPayment.html?id=' + this.openid + '&notifyUrl' + this.notifyUrl + '&totalFee' + this.totalFee + '&orderid' + this.orderid;
    // },
    onMemberLoad() {
      let post = this.buildId;
      // let post = '2c90ab265dedc19f015deeced6760001';
      this.get(
        "palmsaleapp/api/v1/custom/initiation/searchInfoByBuildId?id=" + post,
        { interfaceType: "newHouse" }
      ).then(
        response => {
          // console.log(response);
          if (response.status == 200) {
            this.initiationinfo = response.data.initiationinfo;
            let fanwei = this.initiationinfo.probationrange;
            this.arrInfo = fanwei.split("。");
            let shuomingguize = this.initiationinfo.instructions;
            this.shuoming = shuomingguize.split("。");
            this.unitPrice = this.initiationinfo.money;
            this.subMoneys = this.initiationinfo.money;
            // console.log(this.subMoneys);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    onChange(val) {
      this.selects = val;
      // console.log(this.initiationinfo.money);
      this.subMoneys = (this.selects * this.initiationinfo.money).toFixed(2);
    },
    chackClick() {
      this.slel = !this.slel;
      // console.log(this.slel);
    },
    // 提交事件
    submit() {
      this.buttonflag = true;
      if (this.notEmpty(this.mobile)) {
        this.msgalert("请输入电话");
        this.buttonflag = false;
        return false;
      }
      if (this.notEmpty(this.username)) {
        this.msgalert("请输入姓名");
        this.buttonflag = false;
        return false;
      }
      if (this.notEmpty(this.quyu)) {
        this.msgalert("请输入地址");
        this.buttonflag = false;
        return false;
      }
      if (!this.IC(this.idCard)) {
        this.msgalert("请输入身份证号码");
        this.buttonflag = false;
        return false;
      }
      let post_data = {
        custphonenumber: localStorage.getItem("userPhone"), //电话
        custname: this.username, //abstract	客户姓名
        custphone: this.mobile, //电话
        submoney: this.initiationinfo.money, //入会金额
        signtotalmoney: this.subMoneys, //总金额
        buildid: this.$route.query.buildid, //楼盘id
        promotioncount: this.selects, //入会人数
        orderstate: "11", //入会待支付状态
        contactaddress: this.quyu,
        idcard: this.idCard
      };
      // console.log(post_data);
      // return false;
      this.post(
        "palmsaleapp/api/v1/custom/initiation/saveInitCust",
        post_data,
        { interfaceType: "newHouse" }
      ).then(
        response => {
          if (response.status == 200) {
            this.buttonflag = false;
            // return false;
            this.orderid = response.data.orderid; // 订单ids
            this.openid = localStorage.getItem('openid'); //自己的openid
            // this.notifyUrl = response.data.returnUrl;     //微信回调url
            this.totalFee = response.data.totalFee; //支付总额
            if (!this.$store.state.showWxTitle) {
              this.AliPayFn();
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 微信环境下调用支付宝的环境
    wxAliPanyFn() {
      this.get(
        "palmsaleapp/api/InitPay/alipayForWap?urlId=" +
          "8903" +
          "&outTradeNo=" +
          this.orderid +
          "&totalAmount=" +
          this.totalFee +
          "&subject=" +
          "登岛金额支付",
        { interfaceType: "newHouse" }
      ).then(
        response => {
          var self = this;
          if (response.status == 200) {
            // alert(JSON.stringify(response));
            let payInfo = response.data;
            document.body.innerHTML = payInfo;
            //通过innerHTML添加的script代码不会自动执行，需要我们手动来执行
            var scripts = document.body.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
              //一段一段执行script
              eval(scripts[i].innerHTML);
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 支付宝调用接口
    AliPayFn() {
      let post_data = {
        urlId: "8903", //回调接口id
        outTradeNo: this.orderid, //订单id
        totalAmount: this.totalFee, //总金额
        subject: "登岛金额支付" //订单名称
      };
      this.get(
        "palmsaleapp/api/InitPay/alipay?urlId=" +
          "8903" +
          "&outTradeNo=" +
          this.orderid +
          "&totalAmount=" +
          this.totalFee +
          "&subject=" +
          "登岛金额支付",
        { interfaceType: "newHouse" }
      ).then(
        response => {
          var self = this;
          if (response.status == 200) {
            let payInfo = JSON.parse(response.data).data;
            try {
              cordova.plugins.alipay.payment(
                payInfo,
                function success(e) {
                  if (e.resultStatus == "9000") {
                    self.msgalert("支付成功");
                  } else if (e.resultStatus == "8000") {
                    self.msgalert("处理中");
                  } else if (e.resultStatus == "4000") {
                    self.msgalert("订单支付失败");
                  } else if (e.resultStatus == "6001") {
                    self.msgalert("用户中途取消");
                  } else if (e.resultStatus == "6002") {
                    self.msgalert("网络连接出错");
                  }
                },
                function error(e) {
                  self.msgalert("失败");
                }
              );
            } catch (err) {
              // window.location.href="http://act.guoanfamily.com/commonPlatform/pay/wxpay.html?tradeNo="+this.orderid+"&payMoney="+this.totalFee+"&userID="+ "001" +"&nameGoods="+"登岛金额支付"+"&urlId=8903&openid="+ this.openid; //测试
              window.location.href="http://act.guoanfamily.com/common/AlipayController/toPay/8903?tradeNo="+this.orderid+"&payMoney="+this.totalFee+"&nameGoods=登岛金额支付&userId="+"001";
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
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
    }
  },
  mounted() {
    this.buildId = this.$route.query.buildid;
    this.onMemberLoad();
    let username = localStorage.getItem("userName");
    if (!this.notEmpty(username)) {
      this.username = username;
    } else {
      this.username == "";
    }
    this.mobile = localStorage.getItem("userPhone");
    let custinfo = JSON.parse(localStorage.getItem("userInfroMap"));
    this.idCard = custinfo.infoByUserIdList.card;
    // 默认获取微信的地址
    let city = localStorage.getItem("city");
    let province = localStorage.getItem("province");
    // 产看本地是否有客户修改过后的地址，如果有则使用用户修改过的地址
    var quyu = localStorage.getItem("quyu");
    if (!this.notEmpty(quyu)) {
      this.quyu = quyu;
    } else {
      this.quyu = "";
    }
  }
};
</script>

<style lang="less" scoped>
html,
body {
  background: #eee;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.topM {
  margin-top: 60px;
}
.topName {
  width: 100%;
  height: 1.2rem;
  font-weight: 500;
  font-size: 0.35rem;
  border-bottom: 1px solid #e6e6e6;
  .topNameLeft {
    width: 60%;
    height: 100%; // background: red;
    float: left;
    margin-left: 10px;
    span {
      margin-top: 12px;
      display: block;
      float: left;
      line-height: 0.8rem;
      padding-left: 10px;
    }
    .leftImg {
      width: 1rem;
      height: 100%;
      line-height: 1rem;
      background: url("../../../static/new/img/membership1.png") no-repeat;
      background-size: 50%;
      background-position: center;
    }
    .leftImg1 {
      width: 1rem;
      height: 100%;
      line-height: 1rem;
      background: url("../../../static/new/img/membeship.png") no-repeat;
      background-size: 50%;
      background-position: center;
    }
  }
  .topNameRight {
    width: 40%;
    height: 100%; // background: yellow;
    float: right;
    line-height: 1rem;
    text-align: right;
    // padding-right: .5rem;
  }
}

.sumMoney {
  width: 100%;
  text-align: right;
  font-size: 0.35rem;
  color: red;
  padding-right: 0.9rem;
}

.memberExplain {
  width: 100%;
  height: 1rem;
  font-size: 0.35rem;
  border-top: 1px solid #d9d9d9;
  line-height: 1rem;
  font-weight: 500;
  color: #333333;
  text-align: left;
}

.member_detial {
  font-size: 0.325rem;
  width: 100%;
  word-wrap: break-word;
  border-top: 1px solid #d9d9d9;
  text-align: left;
  padding: 0.25rem;
}

.userange {
  width: 95%;
  border-top: 1px solid #d9d9d9; // height: 2rem;
  line-height: 1rem;
  font-size: 0.325rem;
  text-align: left;
  padding-left: 0.35rem;
}

.name {
  width: 100%;
  // margin-top: 0.25rem;
  line-height: 0.6rem;
  font-size: 0.35rem;
}

.labelStyle {
  width: 94%; // margin-left: 10px;
  border-top: 1px solid #e6e6e6;
}

.sub {
  width: 100%;
  height: 1.2rem;
  background: #e32024;
  color: #fff;
  text-align: center;
  font-size: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.45rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  border: none;
}

.bottomBtn {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.1rem;
  font-size: 0.3rem;
  z-index: 10;
  background: #fff;
}

.immeditBookingPay {
  background: url("../../../static/new/img/btnbj.png") no-repeat !important;
  background-size: 100% !important;
  font-size: 0.4rem !important;
  line-height: 1.1rem;
}
</style>
<<style lang= 'less'>
.labelStyle {
    .leftName {
        .weui-label {
            width: 2.5rem;
            /* background:red; */
            text-align: left;
            color:#333333;
        }
        .weui-label::before {
            content: "*";
            position: absolute;
            color: red; // line-height: 3rem;
            left: 5px;
        }
    }
}
</style>


