<template>
    <div class="button-group" :class="{'button-group-show': buttonGroupShow}">
        <tabbar>
            <tabbar-item @click.native="index">
                <img slot="icon" :src="getHomeImg">
                <span></span>
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isIndexTrue}">首页</span>
            </tabbar-item>
            <tabbar-item @click.native="xuanfang">
                <img slot="icon" :src="getOnLineImg">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isonLineTrue}">新房</span>
            </tabbar-item>
            <tabbar-item @click.native="zufang">
                <img slot="icon" :src="getOnLinerentImg">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isonLinerent}">租房</span>
            </tabbar-item>
            <tabbar-item @click.native="personalCenter">
                <img slot="icon" :src="getPersonImg" style="">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isMyTrue}">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import renting from "../../../static/new/img/onlineSroom.png";
import renting1 from "../../../static/new/img/onlineSroom1.png";
import index1 from "../../../static/new/img/index1.png";
import index from "../../../static/new/img/index.png";
import onlineSroom from "../../../static/new/img/onlinerent.png";
import onlineSroom1 from "../../../static/new/img/onlinerent1.png";
import personCenter1 from "../../../static/new/img/personCenter1.png";
import personCenter from "../../../static/new/img/personCenter.png";
export default {
  name: "app",
  data() {
    return {
      activeTab: 0,
      buttonGroupShow: true
    };
  },
  methods: {
    // 路由到首页
    index() {
      this.$router.push("/");
      // this.activeTab = 0;
      this.$store.state.buttonGroup = 0;
      this.flag = null;
      this.$store.state.isIndexTrue = true;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    },
    // 路由到个人中心
    personalCenter() {
      // let userPhone = localStorage.getItem("userPhone");
      // if (!this.notEmpty(userPhone)) {
      this.$router.push("personalCenter");
      this.$store.state.buttonGroup = 2;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = true;
      this.$store.state.isonLinerent = false;
    },
    // 路由到新房
    xuanfang() {
      this.$router.push("newHouseIndex");
      this.$store.state.buttonGroup = 1;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = true;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    },
    // 路由到租房
    zufang() {
      this.$router.push("HomePage");
      this.$store.state.buttonGroup = 3;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = true;
    },
    //路由加载判断方法
    onLoade() {
      let href = window.location.href;
      if (href.indexOf("personalCenter") !== -1) {
        this.$store.state.buttonGroup = 2;
        this.$store.state.isIndexTrue = false;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = true;
        this.$store.state.isonLinerent = false;
      } else if (href.indexOf("newHouseIndex") !== -1) {
        this.$store.state.buttonGroup = 1;
        this.$store.state.isIndexTrue = false;
        this.$store.state.isonLineTrue = true;
        this.$store.state.isMyTrue = false;
        this.$store.state.isonLinerent = false;
      } else if (href.charAt(href.length - 1) == "/") {
        this.$store.state.buttonGroup = 0;
        this.$store.state.isIndexTrue = true;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = false;
         this.$store.state.isonLinerent = false;
      } else if (href.indexOf("HouseList") !== -1) {
        this.$store.state.buttonGroup = 3;
        this.$store.state.isIndexTrue = false;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = false;
        this.$store.state.isonLinerent = true;
      }
    }
  },
  created() {
    let href = window.location.href;
    if (href.indexOf("personalCenter") !== -1) {
      this.$store.state.buttonGroup = 2;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = true;
      this.$store.state.isonLinerent = false;
    } else if (href.indexOf("newHouseIndex") !== -1) {
      this.$store.state.buttonGroup = 1;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = true;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    } else if (href.charAt(href.length - 1) == "/") {
      this.$store.state.buttonGroup = 0;
      this.$store.state.isIndexTrue = true;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    } else if (href.indexOf("HouseList") !== -1) {
      this.$store.state.buttonGroup = 3;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = true;
    }
  },
  computed: {
    // 首页的点击事件
    getHomeImg() {
      return this.$store.state.buttonGroup === 0 ? index1 : index;
    },
    //在线选房的点击事件
    getOnLineImg() {
      return this.$store.state.buttonGroup === 1 ? onlineSroom1 : onlineSroom;
    },
    // 个人中心的点击事件
    getPersonImg() {
      return this.$store.state.buttonGroup === 2 ? personCenter1 : personCenter;
    },
    // 在线租房的点击事件
    getOnLinerentImg() {
      return this.$store.state.buttonGroup === 3 ? renting1 : renting;
    }
  },
  watch: {
    $route: function() {
      this.onLoade();
      //console.log(this.$route.meta);
      this.buttonGroupShow = !!this.$route.meta.isShow;
    }
  }
};
</script>

<style lang='less' scoped>
@import "~vux/src/styles/reset.less";

.bottomColor {
  color: #d91c06;
}
.button-group {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  transition: 0.9s;
  z-index: 10;

  .weui-tabbar {
    position: static;
  }
}

.button-group-show {
  height: 1rem;
  background:#F7F7FA;
}

.tablename {
  font-size:.20rem;
  text-align: center;
}
// mxx代码
.weui-tabbar__icon {
  width: 25px !important;
  height: 23px !important;
  margin-top: 6px !important;
}
</style>
<style>
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #999999;
}

</style>
