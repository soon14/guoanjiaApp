<template>
  <div>
    <!--:on-refresh="refresh" :on-infinite="loadMore"接口优化以后绑定到scroll上面  -->
    <!-- <scroller> -->
    <div :class="{'listDiv':showTop,'listDiv1':showTop1}">
      <ul style="padding-left:0.25rem;">
        <li class="listoLi" :key="index" v-for="(item,index) in list" v-on:click="buildDetial(item.id)">
          
          <div class='listLeftImg'>
            <img :src='item.firstpicture' />
          </div>
          <div class="listRightDiv">
            <div class="shareBtn" v-if="!fjStatus" @click.stop="buildShare(item)"></div>
            <div class="imRevertion" v-if="item.housestatenumber > 0 && !fjStatus" @click.stop="immRevertion(item.id)"></div>
            <div class='listRightName'>
              <span>[</span>
              <span>{{item.city}}</span>
              <span>]</span>
              <span>{{item.buildname}}</span>
            </div>
            <div class="listRightTagName" v-if="item.housestatenumber > 0">
              <!-- <ul style="padding:0;">
                        <li :key="index" v-for="(tag,index) in item.buildtagnameList">{{tag}}</li>
                      </ul> -->
              <span>可售</span>
              <span>{{item.housestatenumber}}套</span>
            </div>
            <div class="addressLocation" v-if="!fjStatus">
              <div class="listaddress">   
                {{item.address}}
              </div>
              <div class="addLocation" @click.stop="buildLocation(index)"></div>
              <div></div>
            </div>
            <div class="listarearegion" v-if="!fjStatus">
              <span>{{item.arearegion}}</span>
              <span>/㎡</span>
            </div>
            <div class="listaverage" :class="{priceMargin: fjStatus}">
              <span>{{item.averageprice}}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="market" v-show="market" @click="markedClick"></div>
      <div class="righthorn" v-show="shareImg">点击右上角进行分享</div>
    </div>
    <!-- </scroller> -->
    <!-- <div class="map" style="display:none;" ref="maps"></div> -->

  </div>
</template>

<script>
// 传参判断是否显示,是否增加class更改css样式,在buildDetial里面判断跳转
export default {
  props: ["child", "fjStatus"],
  // components: {addLocation},
  data() {
    return {
      list: [], //楼盘数据
      listArr: [], //楼盘筛选数据
      obj: {}, //要传的参数
      //showmin:true,//控制标签的显示隐藏
      showMap: false,
      addLocation: "",
      market: false,
      shareImg: false,
      shareTitle: "", //标题
      shareDesc: "", //描述
      shareLink: "", //连接地址指打开分享时页面地址
      shareLeftImg: "", //分享图片地址
      showTop: false,
      showTop1: false
    };
  },
  methods: {
    // 页面数据加载
    onLoade() {
      this.get(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList=&porttype",
        { interfaceType: "newHouse" }
      ).then(
        response => {
          if (response.status == 200) {
            // console.log(response);
            //  console.log(this.$store.state.buildListLocation);
            // 进行图片路径的拼接
            for (let i = 0; i < response.data.length; i++) {
              // response.data[i].firstpicture = this.ImgSrc + response.data[i].firstpicture;
              response.data[i].firstpicture = this.concatFileUrl(
                response.data[i].firstpicture
              );
              this.$store.state.buildListLocation.push(
                response.data[i].address
              );
              //  console.log(this.$store.state.buildListLocation);
              if (response.data[i].averageprice !== null) {
                if (response.data[i].averageprice == "售价待定") {
                  response.data[i].averageprice = "售价待定";
                } else if (response.data[i].averageprice == "") {
                  response.data[i].averageprice = "售价待定";
                } else {
                  response.data[i].averageprice =
                    "¥" + response.data[i].averageprice + "元/㎡";
                }
              }
            }
            this.list = response.data;
            this.listArr = response.data;
            this.obj = {
              list: this.list,
              listArr: this.listArr
            };
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 楼盘列表的点击事件
    buildDetial(id) {
      if (this.fjStatus) {
        this.$router.push({ path: "housingPriceInfo", query: { buildID: id } });
        return;
      }
      this.$router.push({ path: "building_detial", query: { buildID: id } });
    },
    // 地址的点击事件
    buildLocation(val) {
      // console.log(val);
      this.addLocation = this.$store.state.buildListLocation[val];
      // console.log(this.addLocation);
      this.$router.push({ path: "map", query: { address: this.addLocation } });
    },
    // 分享按钮的点击事件
    buildShare(item) {
      this.market = true;
      this.shareImg = true;
      if (item.buildname == "晋唐海湾") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/jintang.html";
        this.shareTitle = "晋唐海湾";
        this.shareDesc = "晋唐海湾";
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      } else if (item.buildname == "北海第一城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/northSea.html";
        this.shareTitle = "中信国安 · 北海第一城";
        this.shareDesc = "中信国安 · 北海第一城";
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      } else if (item.buildname == "山海龙城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/shanhailongcheng.html";
        this.shareTitle = "山海龙城";
        this.shareDesc = "山海龙城";
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      } else if (item.buildname == "峨眉国安公馆") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareTitle = "峨眉国安公馆";
        this.shareDesc = "峨眉国安公馆";
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      } else if (item.buildname == "华亚欢乐城") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/huaya.html?";
        this.shareTitle = "华亚欢乐城";
        this.shareDesc = "华亚欢乐城";
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      } else if (item.buildname == "平海·美龄湾") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/meilingwan.html";
        this.shareTitle = "平海·美龄湾";
        this.shareDesc = "平海·美龄湾";
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      } else {
        this.shareLink =
          "http://www.guoanfamily.com/newHouseTest/?from=singlemessage&isappinstalled=0#/building_detial?buildID=" +
          item.id;
        this.shareTitle = item.buildname;
        this.shareDesc = item.buildname;
        this.shareLeftImg = item.firstpicture;
        this.onLoadWx();
      }
    },
    // 立即订房的点击事件
    immRevertion(item) {
      // console.log(item);
      this.$router.push({ path: "house_resource", query: { buildid: item } });
    },
    // onLoadWx() {
    //   this.post('openweixin/jsapi/getJsapiSignature?local_url=' + encodeURIComponent(location.href.split('#')[0]),
    //     {}).then(response => {
    //       this.$wechat.config({
    //         debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: response.appid, // 必填，公众号的唯一标识
    //         timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
    //         nonceStr: response.noncestr, // 必填，生成签名的随机串
    //         signature: response.signature, // 必填，签名，见附录1
    //         jsApiList: [
    //           'onMenuShareAppMessage',
    //           'onMenuShareTimeline'
    //         ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    //       });
    //       var self = this;
    //       this.$wechat.ready(function() {
    //         self.wxShare();
    //       })
    //     }, response => {
    //       alert(JSON.stringify(err))
    //     })
    // },
    // wxShare() {
    //   // 分享给朋友
    //   let self = this;
    //   this.$wechat.onMenuShareAppMessage({
    //     title: self.shareTitle, //标题
    //     desc: self.shareDesc, //描述
    //     link: self.shareLink, //连接地址指打开分享时页面地址
    //     imgUrl: self.shareLeftImg, //图片
    //     trigger: function(res) {
    //       // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    //     },
    //     success: function(res) {
    //       this.market = false;
    //       this.shareImg = false;
    //     },
    //     cancel: function(res) {
    //       this.msgalert('已取消')
    //       this.market = false;
    //       this.shareImg = false;
    //     },
    //     fail: function(res) {
    //       this.msgalert('分享失败')
    //     }
    //   });
    //   // 分享到朋友圈
    //   this.$wechat.onMenuShareTimeline({
    //     title: self.shareTitle, //标题
    //     desc: self.shareDesc, //描述
    //     link: self.shareLink, //连接地址指打开分享时页面地址
    //     imgUrl: self.shareLeftImg, //图片
    //     trigger: function(res) {
    //       // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
    //     },
    //     success: function(res) {
    //       this.market = false;
    //       this.shareImg = false;
    //     },
    //     cancel: function(res) {
    //       this.msgalert('已取消')
    //       this.market = false;
    //       this.shareImg = false;
    //     },
    //     fail: function(res) {
    //       this.msgalert('分享失败')
    //     }
    //   });
    //   this.$wechat.error(function(res) {
    //   });

    // },
    // 遮罩层的点击事件
    markedClick() {
      this.shows = false;
      this.market = false;
      this.shareImg = false;
    }
    // 用于处理下拉刷新和一直加载的事件
    // refresh() {

    // },
    // loadMore() {}
  },
  created() {
    this.onLoade();
    // 微信环境，APP环境判断
    if (this.$store.state.showWxTitle) {
      this.showTop1 = true;
      this.showTop = false;
    } else if (
      !this.$store.state.showWxTitle &&
      this.$route.path == "/housingPrice"
    ) {
      this.showTop1 = false;
      this.showTop = true;
    } else if (
      !this.$store.state.showWxTitle &&
      this.$route.path !== "/housingPrice"
    ) {
      this.showTop1 = true;
      this.showTop = false;
    }
  },
  // 监听
  watch: {
    list() {
      this.$emit("receive", this.obj);
    },
    child() {
      this.list = this.child;
    }
  }
};
</script>
<style lang='less'>
ul li {
  list-style-type: none;
}

.listoLi {
  width: 98%; // height: 4rem;
  float: left;
  position: relative; // padding-bottom: .3rem;
  margin-top: 0.25rem;
  border-bottom: 1px solid #ccc;
}
.listDiv {
  padding-top: 2.3rem;
  padding-bottom: 0.1rem;
}
.listDiv1 {
  padding-top: 1rem;
  padding-bottom: 0.1rem;
}
.listoLi .shareBtn {
  position: absolute;
  right: 0.1rem;
  top: -0.3rem;
  width: 1.25rem;
  height: 0.75rem;
  background: url("../../../static/new/img/shares.png") no-repeat;
  background-position: right;
  background-size: 40%;
}

.listoLi .imRevertion {
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
  background: url("../../../static/new/img/imRevertion.png") no-repeat;
  background-position: right;
  background-size: 75%;
}

.listoLi .listLeftImg {
  float: left;
  width: 40%;
}

.listoLi .listLeftImg img {
  // width: 100%;
  // height: 100%;
  width: 3.1rem;
  height: 2.25rem;
  border-radius: 5px;
}

.listoLi .listRightDiv {
  width: 57%;
  float: right;
  text-align: left;
  position: relative;
}

.listRightName {
  font-size: 0.3rem;
  width: 100%;
}

.listRightTagName {
  font-size: 0.3rem;
  width: 100%;
  height: 0.4rem;
  overflow: hidden;
  line-height: 0.4rem; // color: #de0319;
  text-align: left;
  margin-top: 0.05rem;
  span {
    display: block;
    float: left;
    &:nth-child(1) {
      display: block;
      float: left;
      border: 1px solid #a0cf81;
      border-radius: 3px;
      height: 0.4rem;
      font-size: 0.2rem;
      color: #a0cf81;
      line-height: 0.4rem;
      margin-right: 0.1rem;
      padding-left: 0.15rem;
      padding-right: 0.15rem;
    }
  }
}

.addressLocation {
  .listaddress {
    font-size: 0.3rem;
    float: left;
    width: 50%;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: left;
    font-size: 0.25rem;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .fjStyle {
    float: none;
  }
  .addLocation {
    width: 30%; // float: right;
    background: url("../../../static/new/img/dingwei.png") no-repeat;
    background-size: 23%;
    background-position: center;
    height: 1rem;
    position: absolute;
    right: 30%;
    z-index: 100;
  }
}

.listarearegion {
  font-size: 0.3rem;
  width: 70%; // height: 1rem;
  // line-height: 1rem;
  text-align: left;
  font-size: 0.25rem;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.listaverage {
  // background: red;
  // position: absolute;
  // right: 1rem;
  // bottom: 0;
  color: red;
  font-size: 0.3rem;
  font-weight: bold;
}

.priceMargin {
  margin-top: 0.25rem;
}

.map {
  width: 100%;
  height: 100%;
  background: #ccc;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}

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
  z-index: 150;
}

// 分享提示文字样式
.righthorn {
  width: 100%;
  font-size: 0.65rem;
  text-align: center;
  height: 0.8rem; // background: red;
  color: #ffffff;
  position: fixed;
  z-index: 151;
  left: 0;
  top: 0;
  line-height: 0.75rem;
  font-weight: 500;
  margin-top: 3.5rem;
}
</style>
