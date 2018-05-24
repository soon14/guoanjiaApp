<template>
    <div>
      <!-- 头部 -->
      <ga-page-header title="首页" :needBack="false"></ga-page-header>
        <!--轮播图  -->
        <swipers></swipers>
        <!--导航栏  -->
        <navigation></navigation>
        <!--推荐楼盘-->
        <div class='addCustomer' v-on:click="addNewHouse">
            <span>
                <img src='../../../static/new/img/smallBuild.png' style="height:70%;margin-top:5px;margin-left:.5rem;" />
            </span>
            <span style="font-size:0.35rem;line-height:40px;margin-left:0.5rem;">推荐楼盘</span>
        </div>
        <!-- 跳转链接 -->
        <flexbox>
            <flexbox-item @click.native="newHouse">
                <div class="flex-demo">
                    <img style="margin-left:5%;" class="navigation_img1" src='../../../static/new/img/hotbuilding.jpg' />
                </div>
            </flexbox-item>
        </flexbox>
        <flexbox class="bottom-margin">
            <flexbox-item @click.native="rentHouse">
                <div class="flex-demo">
                    <img style="margin-left:5%;" class="navigation_img1" src='../../../static/new/img/qualityHouse.jpg' />
                </div>
            </flexbox-item>
        </flexbox>
        <!-- 签到图标
                    <div class='signo' @click="signClick"></div> -->
    </div>
</template>

<script>
import swipers from "../components/Swiper"; //引入轮播图组件
import navigation from "../components/navigation"; //引入导航栏
// import{ViewBox} from 'vux'
export default {
  components: {
    swipers,
    navigation
  },
  data() {
    return {
      defaultValue: ""
    };
  },
  methods: {
    //推荐楼盘的点击事件
    addNewHouse() {},
    newHouse() {
      this.$router.push("buildList");
    },
    rentHouse() {
      // window.location.href = "https://www.guoanfamily.com/rentHouse/wap/#/";
      this.$router.push('HomePage');
    },
    //  调用登录接口，传入openid
    onLogin() {
      var openid = localStorage.getItem("openid");
      if (!this.notEmpty(openid)) {
        let post_data = {
          phoneNum: "",
          authCode: "",
          headimgurl: "",
          // "openId": "o8awnwtP8efh2X1mTblRj_x5FGVs",
          openId: localStorage.getItem("openid")
        };
        this.post("userLoginController/unionlogin", post_data,{ interfaceType: "newHouse"}).then(
          response => {
            // console.log(response);
            if (response.code == 200) {
              localStorage.setItem("headImg", response.data.headImg);
              localStorage.setItem("userPhone", response.data.phoneNum); //将用户电话存入本地
              localStorage.setItem("token", response.data.token); //将用户token存入本地
              localStorage.setItem("standbyToken", response.data.standbyToken); //将用户备用token存入本地
              localStorage.setItem("userName", response.data.realName); //如果有姓名，则存入localStorage
              localStorage.setItem(
                "userInfroMap",
                JSON.stringify(response.data.userInfo)
              ); //将客户的基本信息，收藏的楼盘放入localstorage
              // history.go(-1);
            } else {
              this.showalert(response.msg);
            }
          },
          response => {
            this.showalert(response.msg);
          }
        );
      }
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
    this.$store.state.bottomNative == false;
    this.$store.state.buttonGroup = 0;
    this.onLogin();
  }
};
</script>

<style lang='less' scoped>
@import "~vux/src/styles/1px.less";
.flex-demo {
  text-align: center;
  color: #333333;
  background-color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
}

.addCustomer {
  width: 100%;
  background:#fff;
  height: .8rem;
  line-height: 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.addCustomer span {
  display: block;
  float: left;
  height: 100%;
  line-height: 1.3rem;
}

.signo {
  position: fixed;
  top: 60%;
  right: 0;
  width: 5rem;
  height: 2.3rem;
  background: url("../../../static/new/img/sign.png") no-repeat;
  background-position: right;
  background-size: 70%;
}

.searchDiv {
  position: absolute;
  top: 0.2rem;
  width: 100%;
  height: 1.5rem; // background:red;
}

.selectOptions {
  width: 25%;
  background: #fff;
  height: 100%;
  font-size: 0.7rem;
  margin-left: 1rem;
  float: left;
}

.bottom-margin {
  margin-bottom: 75px;
}
</style>
<style>
    .vux-swiper-desc{
        display:none;
    }
</style>
