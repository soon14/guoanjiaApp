<template>

    <div  class="fixContent" >
            <!-- 标题 -->
        <div :class="{'body_top':IosTop,'body_tops':AndroidTop,'wx_top':wxTop}">
          <!-- <div class="personhead">
            我的资料
          </div> -->
        <!-- <div :class="{'topHead':wxTop2,'topHead1':wxTop1}" @click="ImgLoad">
            <span class="test">头像</span>
            <span class="spanImage">
                <img :src="headimgurl">
            </span>
        </div> -->
        <div class="name">
            <div class="labelStyle">
                <x-input text-align="left" class="leftName" title="姓　　名　" name="username" v-model='username' placeholder="请输入姓名"></x-input>
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="手机号码　" :show-clear='false' name="mobile" v-model="mobile" disabled='disabled' placeholder="请输入手机号码" keyboard="number" ></x-input>
            </div>
            <div class="labelStyle">
                <!-- <x-address class="leftName" ref="quyu"  @on-hide="logHide" @on-show="logShow" value-text-align="right" :title="title" v-model="quyu" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择居住区域" :show.sync="showAddress"></x-address> -->
                <x-address class="leftName" ref="quyu" @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址"></x-address>
                <!-- <x-address @on-hide="logHide"  @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址"></x-address> -->
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="详细地址　" name="address" v-model="address" placeholder="请输入详细地址"></x-input>
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="身份证号" name="idCard" v-model="idCard" placeholder="请输入身份证号码"></x-input>
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="银行名称　" name="openingBank" v-model="openingBank" placeholder="请输入开户行名称"></x-input>
            </div>
            <div class="labelStyle">
                <x-input class="leftName" title="银行卡号　" name="bankCardNumber" v-model="bankCardNumber" keyboard="number" placeholder="请输入银行卡号"></x-input>
            </div>
            <div class="labelStyle" style="border-bottom:1px solid #e6e6e6;">
                <selector class="leftNamesCard" title="性　　别"  placeholder="请选择性别"  :options="xingbie" v-model="man"></selector>
            </div>
            <!-- <div class="sexd">
                <div>性　　别</div>
                <input style="margin-left: -.25rem;" type='radio' name="sex" :checked='man' @click="sexClick">
                <span class="man">男</span>
                </input>
                <input style="margin-left: -1rem;" type='radio' name="girl" @click="sexClick">
                <span  class="women">女</span>
                </input>
            </div> -->
        </div>
        <div class="bottomDiv">
            <x-button class="immeditBookingPay" type="primary" action-type="button" @click.native='submit'>保存</x-button>
        </div>

        <!-- <button class="sub" @click="submit">保存</button>
                <div class="logoImg"></div> -->
        </div>
    </div>
</template>

<script>
import {
  Group,
  XAddress,
  ChinaAddressV4Data,
  XButton,
  Selector,
  Value2nameFilter as value2name
} from "vux";
// import headImgs1 from '../../../static/new/img/touxiang.png'
import headImgs1 from "../../../static/new/img/topHeader.png";
export default {
  name: "modifyInfo",
  components: {
    Group,
    XAddress,
    XButton,
    Selector
  },
  data() {
    return {
      AndroidTop: false,
      IosTop: false,
      wxTop: false,
      wxTop1: false,
      wxTop2: false,
      headimgurl: "",
      username: "",
      mobile: "",
      mobile1: "",
      quter: "",
      address: "",
      idCard: "",
      idCard1: "",
      openingBank:'',
      bankCardNumber:'',
      title: "所在区域　",
      value: [],
      addressData: ChinaAddressV4Data,
      man: "",
      headImgs: "",
      showAddress: false,
      xingbie: [{ key: "男", value: "男" }, { key: "女", value: "女" }]
    };
  },
  methods: {
    getHeadImg() {
      this.headImgs = localStorage.getItem("headImg");
      // alert(this.headImgs);
      // console.log(headImgs);
      if (!this.notEmpty(this.headImgs)) {
        // alert('111');
        this.headimgurl = this.headImgs;
      } else {
        // alert('222');
        this.headimgurl = headImgs1;
      }
    },

    onShadowChange(ids, names) {
      //   console.log(ids, names)
    },
    logHide(str) {
      //   console.log('on-hide', str)
      // console.log(this.$refs.quyu.nameValue);
    },
    logShow(str) {
      // console.log('on-show')
    },

    sexClick() {
      this.man = !this.man;
    },
    // 获取用户基本信息
    onLoaduserInformation() {
      this.get("userInfoController/getUserInfo", {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            //this.value = [];
            if (response.data !== null) {
              this.username = response.data.accountListEntity.realName;
              this.bankCardNumber = response.data.accountListEntity.bankCardNumber;
              this.openingBank =  response.data.accountListEntity.bankName;
              if (!this.notEmpty(this.username)) {
                localStorage.setItem("userName", this.username);
              }
              let quyu = response.data.quyu;
              if (!this.notEmpty(quyu)) {
                localStorage.setItem("quyu", quyu);
                this.value = response.data.quyu.split(" ");
              }
              //  else {
              //     let city = localStorage.getItem('city');
              //     let province = localStorage.getItem('province');
              //     this.value = (province + "|" + city).split("|");
              //     // this.value.push(city);
              //     // this.value.push(province);
              //     // alert((this.value).toString());
              // }

              this.address = response.data.address;
              // this.idCard = response.data.card;

              if (!this.notEmpty(response.data.card)) {
                this.idCard1 = response.data.card;
                let theCard = response.data.card;
                this.idCard = this.EnCryption("idCard", theCard);
              }
              this.man = response.data.sex;
              // if (response.data.sex == '男') {
              //     this.man = true;
              // } else {
              //     this.man = false;
              // }
            } else {
              // let city = localStorage.getItem('city');
              // let province = localStorage.getItem('province');
              // this.value.push("朝阳区");
              //   this.value=["北京","市辖","朝区"]
              //     alert((this.value).toString());
              this.username = "";
              this.address = "";
              this.quter = "";
              this.idCard = "";
              this.man = "";
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },

    submit() {
      // let sex = ''
      // if (this.man == true) {
      //     sex = '男'
      // } else {
      //     sex = '女'
      // }
      let post_data = {
        realName: this.username, //姓名
        quyu: this.$refs.quyu.nameValue, //区域
        address: this.address, //详细地址
        card: this.idCard1, //身份证号码
        sex: this.man, //性别，如果为true则为男，否则为女
        headImg: '',//this.headimgurl, //头像
        openId: localStorage.getItem("openid"),
        bankCardNumber:this.bankCardNumber,
        bankName:this.openingBank
      };
      // console.log(post_data);
      // 保存个人信息接口
      this.post("userInfoController/saveUnionUserInfo", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          //  alert('111');
          //  console.log(response);
          if (response.code == 200) {
            this.msgalert(response.msg);
            // 如果保存成功，将用户基本信息保存到本地
            localStorage.setItem("userPhone", this.mobile1); //将用户电话存入本地
            localStorage.setItem("userName", this.username); //将姓名存入本地
            this.$store.state.userName =  this.username;
            localStorage.setItem("quyu", this.$refs.quyu.nameValue); //将居住区域存入本地
            this.$router.push({ name: "personalCenter" });
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

    ImgLoad() {
      // this.$router.push('ImgLoad');
      // this.$router.push({ path: 'ImgLoad', query: { headimgurl: encodeURIComponent(this.headimgurl) } })
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    }

    // 判断值是否为空或则undefined公共方法
  },

  mounted() {
    //调用获取用户头像方法
    this.getHeadImg();
    // 调用获取用户基本信息方法
    this.onLoaduserInformation();
    // 回显信息
    let phone = localStorage.getItem("userPhone");
    if (!this.notEmpty(phone)) {
      var phones = this.EnCryption("userphone", phone);
      this.mobile = phones;
      this.mobile1 = phone;
    } else {
      this.mobile = "";
    }
    // 判断环境
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
        this.wxTop1 = true;
        this.wxTop2 = false;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
        this.wxTop1 = false;
        this.wxTop2 = true;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
      this.wxTop1 = true;
      this.wxTop2 = false;
    }
  }
};
</script>

 <style lang="less" scoped>
.personhead{
  font-size: .42rem;
  padding-left: .4rem;
  color: #e34b3e;
  line-height: .42rem;
  text-align: left;
  margin-bottom: 1.05rem;

}
.body_top {
  margin-top: 90px;
}
.body_tops {
  margin-top: 90px;
}
.wx_top {
  margin-top: 0px;
}
.name /deep/ .weui-cell {
  padding-left: 0;
}
.topHead {
  width: 94%;
  height: 1.15rem;
  margin-top: 1.25rem;
  margin-left: 3%;
  line-height: 1.15rem; // border-bottom: 1px solid #ccc;
  .test {
    display: block;
    float: left;
    line-height: 1.1rem;
    font-size: 0.35rem;
    color: #333333;
    margin-left: 0.2rem;
  }
  .spanImage {
    width: 0.85rem; // height: 2rem;
    float: right;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 1px;
    }
  }
}
.topHead1 {
  margin-top: .3rem;
  width: 94%;
  height: 1.15rem;
  margin-left: 3%;
  line-height: 1.15rem; // border-bottom: 1px solid #ccc;
  .test {
    display: block;
    float: left;
    line-height: 1.1rem;
    font-size: 0.35rem;
    color: #333333;
    margin-left: 0.2rem;
  }
  .spanImage {
    width: 0.85rem; // height: 2rem;
    float: right;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 1px;
    }
  }
}
.labelStyle {
  width: 100%; // margin-left: 10px;
  border-top: 1px solid #e6e6e6;
}

.name {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.25rem;
  padding-left: .5rem;
  padding-right: .3rem;
  overflow: hidden;
  line-height: 0.6rem;
  font-size: 0.35rem; // background: red;
}

.sexd {
  width: 100%; // margin-left: 3%;
  line-height: 0.6rem;
  font-size: 0.35rem;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  line-height: 1.2rem;
  div {
    width: 2rem;
    float: left;
    margin-left: 0.2rem;
    padding-left: 0.15rem;
    text-align: left;
  }
  div::before {
    // content: "*";
    position: absolute;
    color: red; // line-height: 3rem;
    left: 0.35rem;
  }
  .man {
    margin-right: 1.5rem;
  }
  .women {
    padding-right: 2rem;
  }
}

.sub {
  width: 100%;
  height: 1.2rem;
  background: #e32024;
  color: #fff;
  text-align: center;
  font-size: 0.35rem;
  line-height: 0.35rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  border: none;
}

.bottomDiv {
  // position: fixed; // background: red;
  margin-top: .6rem;
  box-sizing: border-box;
  padding: 0 .3rem;
  // left: 0;
  // bottom: 0;
  width: 100%;
  height: .9rem;
  font-size: 0.3rem;
  z-index: 10;
}

.immeditBookingPay {
  background: #e34b3e;
  background-size: 100% !important;
  font-size: 0.32rem !important;
  line-height: .9rem;
  margin-top: 0;
  border-radius: .1rem;
}
</style>
<style lang = 'less'>
.labelStyle {
  .leftName {
    .weui-label {
      width: 2.5rem;
      /* background:red; */
      text-align: left;
      color: #333333 !important;
    }
    .vux-cell-box::before{
      border-top:0;
    }
    .weui-label::before {
      /* content: "*"; */
      position: absolute;
      color: red; // line-height: 1.5rem;
      left: 5px;
    }
  }
  .leftNamesCard {
    .weui-label {
      width: 1.5rem;
      text-align: left;
      color: #333333;
    }
    /* .weui-select {
      padding-left: 0.7rem;
    } */
    .weui-label::before {
      /* content: "*"; */
      position: absolute;
      color: #333333 !important;
      left: 5px;
    }
  }
}
.labelStyle /deep/ .weui-cell_access{
  padding-left: 0rem !important;
}
.labelStyle /deep/ .weui-label{
  width: 6em !important;
  color: #333 !important;
}
.labelStyle /deep/ .vux-popup-picker-select{
  text-align:left !important;
  .vux-cell-placeholder{
    float: left;
  }
}
</style>




