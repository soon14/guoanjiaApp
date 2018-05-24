<template>
    <div style="background:#fff;">
        <!--轮播图下面的导航栏  -->
        <flexbox>
            <flexbox-item @click.native="newHouse">
                <div class="flex-demo">
                    <img style="margin-left:5%;" class="navigation_img" src='../../../static/new/img/newHouse.png' />
                </div>
            </flexbox-item>
            <flexbox-item @click.native="rentHouse">
                <div class="flex-demo">
                    <img style="margin-right:5%;" class="navigation_img" src='../../../static/new/img/rentHouse.png' />
                </div>
            </flexbox-item>
            
        </flexbox>
        <flexbox>
            <flexbox-item @click.native="showCcenter">
                <div class="flex-demo">
                    <img style="margin-left:5%;" class="navigation_img" src='../../../static/new/img/ExCnter.png' />
                </div>
            </flexbox-item>
            <flexbox-item @click.native="housePrice">
                <div class="flex-demo">
                    <img style="margin-right:5%;" class="navigation_img" src='../../../static/new/img/housePrice.png' />
                </div>
            </flexbox-item>
        </flexbox>
        <div style="width:100%;height:.15rem;background:#f8f8f8;margin-top:.2rem;"></div>
        <flexbox>
            <flexbox-item>
                <img src="../../../static/new/img/indexLogo.png" alt="">
            </flexbox-item>
        </flexbox>
        <div style="width:100%;height:.15rem;background:#f8f8f8;margin-top:.2rem;"></div>
        <div style="width:100%;background:#f8f8f8;">
            <flexbox style="width:96%;margin-left:2%;">
                <flexbox-item @click.native="yuyuekanfang" style="margin-left:4px;">
                    <img src="../../../static/new/img/bookingRoom.png" alt="">
                </flexbox-item>
                <flexbox-item @click.native="dingfang" style="margin-left:4px;">
                    <img src="../../../static/new/img/bookingImmediate.png" alt="">
                </flexbox-item>
                <flexbox-item @click.native="Entrust" style="margin-left:4px;">
                    <img src="../../../static/new/img/entursedOwer.png" alt="">
                </flexbox-item>
            </flexbox>
        </div>
        <div style="width:100%;height:.15rem;background:#f8f8f8;"></div>
        <flexbox>
            <flexbox-item>
                <img src="../../../static/new/img/newadver.jpg" alt="">
            </flexbox-item>
        </flexbox>
    </div>

</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      market: false,
      shows: false,
      rooms: "", //预约楼盘
      username: "", //看房人姓名
      numberPeople: "", //看房人数
      mobile: "", //手机号码
      Showingsdate: [], //预约时间
      startdate: "", //开始的时间
      enddate: "" //结束的时间
    };
  },
  methods: {
    //  新房的点击事件
    newHouse() {
        // this.$router.push('buildList');
        this.$router.push('newhousehome');
    },
    //租房的点击事件
    rentHouse() {
      // this.msgalert('敬请期待！');
      // window.location.href = 'https://www.guoanfamily.com/rentHouse/wap';
      this.$router.push("HomePage");
    },
    // 展示中心的点击事件
    showCcenter() {
      let src = "https://beyond.3dnest.cn/play/?m=zhq_gaj_83";
      let title = "展示中心";
      this.$router.push({
        path: "framePage",
        query: { src: src, title: title }
      });
    },
    // 房价的点击事件
    housePrice() {
      this.$router.push("housingPrice");
    },
    // 预约看房
    yuyuekanfang() {
      this.$router.push("HouseList");
    },
    // 房训点击
    fangxun() {
      this.msgalert("敬请期待");
    },
    //业主委托
    Entrust() {
      this.$router.push("Delegation");
    },
    // 立即订房
    dingfang() {
      this.$router.push("buildList");
    },
    // 公共方法
    getLocalStorage(item) {
      let sign = localStorage.getItem(item);
      // console.log(sign);
      if (
        sign === null ||
        sign === undefined ||
        sign === "null" ||
        sign === "undefined" ||
        sign === ""
      ) {
        return true;
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
  }
};
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.flex-demo {
  text-align: center;
  background-color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
}

.navigation_img {
  width: 95%;
  margin-top: 10px;
}

.navigation_names {
  text-align: center;
  width: 100%;
  font-size: 0.3rem;
  background: #fff;
}

.navigation_img1 {
  width: 90%;
  margin-top: 0.3rem;
  margin-left: 10%;
}
//遮罩层样式
.dialog {
  background: #ffffff;
  position: fixed;
  width: 90%;
  top: 20%;
  left: 5%;
  z-index: 12;
  border-radius: 0.5rem;
}

//遮罩内部样式
.dialogTop {
  position: relative;
  text-align: center;
  line-height: 2.1rem;
  background: #ff8a00;
  border-radius: 0.25rem 0.25rem 0 0;
  color: #fff;
  font-size: 0.8rem; // border-radius: .4rem .4rem 0 0;
}

// 遮罩样式
.market {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 11;
}
.btnYuyue {
  width: 100%;
  height: 2rem;
  text-align: center;
  color: #ff8a00;
  font-size: 0.7rem;
  background: #ffffff;
  border: none;
  border-top: 1px solid #ccc;
  border-radius: 0.25rem; // margin-bottom: 1rem;
}
</style>
