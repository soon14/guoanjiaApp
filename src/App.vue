<template>
    <div id="app" v-wechat-title="title">
        <view-box ref="viewBox">
            <div v-show="!this.$store.state.showWxTitle">
                <ga-page-header slot="header" :title="title" :needBack="showBack" v-if="watchTitle"></ga-page-header>
            </div>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" style="overflow-y:scroll;"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" style="overflow-y:scroll;"></router-view>
            <buttonGroup v-if="this.$store.state.isShowBottom"></buttonGroup>
            <login style="z-index:1100;" v-transfer-dom></login>
            <Screenshot class="aaa" style="z-index:1100;"  v-transfer-dom></Screenshot>
            <ga-loading-tip></ga-loading-tip>
        </view-box>
    </div>
</template>

<script>
import login from "./new/views/login1";
import "./script/wxjump";
import { ViewBox } from "vux";
import buttonGroup from "./new/components/buttonGroup"; //底部导航栏


import Screenshot from './rent/components/home/Screenshot'
import { TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      fadeIn: true,
      historyStack: [],
      direction: "forward",
      tostack: []
    };
  },

  created() {
  },

  mounted() {
  	
    // //去除链接上的用户信息
    // if (this.isECTouch() && !this.getStorage(this.KEYS.OPENID)) {
    //   this.getOpenId();
    // }
    this.isECTouch();
    if (this.$store.state.showWxTitle) {
      window.$wxjump.getUserInfo();
    }
    this.$router.beforeEach((to, from, next) => {
      //初始化时放入当前地址,多数为'/'
      if (this.tostack.length == 0) {
        this.tostack.push(from.path);
      }
      if (
        this.tostack.length > 1 &&
        this.tostack[this.tostack.length - 2] == to.path
      ) {
        this.tostack.pop();
        this.direction = "backward";
      } else {
        this.tostack.push(to.path);
        this.direction = "forward";
      }
      next();
    });
  },

  methods: {},
	
  watch: {
  	
  },
  computed: {
  	
    // 控制页面标题文字
    title() {
      if (!this.$route.meta.title) {
        return this.$route.query.title;
      } else {
        return this.$route.meta.title;
      }
    },
    // 控制回退按钮显示隐藏
    showBack() {
      return (
        this.$route.path !== "/" &&
        this.$route.path !== "/onLineHouse" &&
        this.$route.path !== "/personalCenter" &&
        this.$route.query.title !== "在线租房"
      );
    },
    // 控制头部显示隐藏
    watchTitle() {
        //别再直接删了，注释一下
      if (
        this.$route.path =='/newhousehome' ||
        this.$route.path =='/search' ||
        this.$route.path == '/newbuildList' ||
        this.$route.path == '/newhousebuilddetail' ||
        this.$route.path == '/housetypedetail' ||
        this.$route.path == "/" ||
        this.$route.path == "/personalCenter" ||
        this.$route.path == "/HouseList" ||
        this.$route.path == "/HomePage" ||
        this.$route.path == "/HouseList/HotSearch" ||
        this.$route.path == "/threeDLookHouse" ||
        this.$route.path == "/Delegation" ||
        this.$route.path == "/HouseList/houseDetail"
      ) {
        return false;
      } else {
        return true;
      }
      // return this.$route.path == '/HomePage' ;
    }
  },

  components: {
    buttonGroup,
    login,
    ViewBox,
    Screenshot
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
</style>

<style lang="scss">
@import "rent/style/theme.scss";
#app {
  height: 100%;
  width: 100%;
  overflow: auto;
  // background-color:$greyColor;
  background-color: #fff;
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(0, 0, 0);
  display: flex;
  $S: 0.5s;
  .headerHome {
    width: 100%;
    height: 1.3rem;
    background: #e24e59;
  }
  .headerHomeAndro {
    width: 100%;
    height: 1.1rem;
    background: #e24e59;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .HomeContent {
    overflow-y: scroll;
    position: absolute;
    top: 1.3rem;
    bottom: 0;
    width: 100%;
  }
  .HomeContentndroid {
    overflow-y: scroll;
    position: absolute;
    top: 1.1rem;
    bottom: 0;
    width: 100%;
  }
  .slide-block {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .slide-fade-in-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-in-in $S;
  }
  .slide-fade-in-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-in-out $S;
  }

  @keyframes fade-in-in {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
  @keyframes fade-in-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  .slide-fade-out-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-out-in $S;
  }

  .slide-fade-out-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-out-out $S;
  }

  @keyframes fade-out-in {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }
  @keyframes fade-out-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(100%);
    }
  }
}
body .wx_content{
    top: 0;
}
</style>
<style>
.weui-tab__panel {
  padding-bottom: 0 !important;
}
</style>
