<template>
  <div>
    <!--:on-refresh="refresh" :on-infinite="loadMore"接口优化以后绑定到scroll上面  -->
    <!-- <scroller> -->
    <div :class="{'listDiv':showTop,'listDiv1':showTop1}">
      <ul style="padding-left:0.2rem;">
        <li class="listoLi" :key="index" v-for="(item,index) in list" v-on:click="buildDetial(item.id,item.buildname)">

          <div class='listLeftImg'>
            <img :src='item.firstpicture' />
          </div>
          <div class="listRightDiv">
            <!-- <div class="shareBtn" @click.stop="buildShare(item)"></div> -->
            <div class="imRevertion" v-if="item.housestatenumber > 0" @click.stop="immRevertion(item.id)"></div>
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
            <div class="addressLocation">
              <div class="listaddress">
                {{item.address}}
              </div>
              <!-- <div class="addLocation" @click.stop="buildLocation(index)"></div> -->
              <div></div>
            </div>
            <div class="listarearegion">
              <span>{{item.arearegion}}</span>
              <span>㎡</span>
            </div>
            <div class="listaverage">
              <span>{{item.averageprice}}</span>
            </div>
          </div>
        </li>
         <div style="clear:both;height:0;line-height:0;"></div>
      </ul>
      <div style="width:100%;height:1.5rem;" v-if="$route.meta.isShow || !this.$store.state.showWxTitle"></div>
      <div class="market" v-show="market" @click="markedClick" v-transfer-dom></div>
      <div class="righthorn" v-show="shareImg" v-transfer-dom>点击右上角进行分享</div>
    </div>
     <!-- 分享时候的底部弹出框 -->
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
                <div class="exitShare" @click="exitShareClick">取消</div>
            </div>
        </div>
        
  </div>
</template>

<script>
import { TransferDom} from "vux";
// import { ftruncate } from 'fs';
export default {
  props: ["child"],
  name: "build",
  directives: {
    TransferDom
  },
  // components: {addLocation},
  data() {
    return {
      list: [], //楼盘数据
      listArr: [], //楼盘筛选数据
      obj: {}, //要传的参数
      shareList:{},
      //showmin:true,//控制标签的显示隐藏
      addLocation: "",
      market: false,
      shareImg: false,
      shareTitle: "", //标题
      shareDesc: "", //描述
      shareLink: "", //连接地址指打开分享时页面地址
      shareLeftImg: "", //分享图片地址
      shareAlert: false,
      shareMarket: true,
      showTop:false,
      showTop1:false,
    };
  },
  methods: {
    // 页面数据加载
    onLoade() {
      this.get(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        {
          interfaceType: "newHouse"
        }
      ).then(
        response => {
          if (response.status == 200) {
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
                } else if (
                  response.data[i].averageprice.substr(
                    response.data[i].averageprice.length - 2
                  ) == "/㎡"
                ) {
                  response.data[i].averageprice =
                    "¥" + response.data[i].averageprice;
                } else if (response.data[i].averageprice == "") {
                  response.data[i].averageprice = "售价待定";
                } else {
                  response.data[i].averageprice =
                    "¥" + response.data[i].averageprice + "/㎡";
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
    buildDetial(id,buildname) {
      var a  = buildname;
      this.$router.push({ path: "building_detial", query: { buildID: id } });
    },
    // 地址的点击事件
    buildLocation(val) {
      this.addLocation = this.$store.state.buildListLocation[val];
      this.$router.push({ path: "map", query: { address: this.addLocation } });
    },
    // 分享按钮的点击事件
    buildShare(item) {
      
      if(this.$store.state.showWxTitle){
        this.market = true;
        this.shareImg = true;
        this.wxduanShare();
      }else{
        this.shareAlert = true;
      }
      if (item.buildname == "晋唐海湾") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/jintang.html";
        this.shareTitle = "晋唐海湾";
        this.shareDesc = "晋唐海湾";
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      } else if (item.buildname == "北海第一城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/northSea.html";
        this.shareTitle = "中信国安 · 北海第一城";
        this.shareDesc = "中信国安 · 北海第一城";
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      } else if (item.buildname == "山海龙城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/shanhailongcheng.html";
        this.shareTitle = "山海龙城";
        this.shareDesc = "山海龙城";
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      } else if (item.buildname == "峨眉国安公馆") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareTitle = "峨眉国安公馆";
        this.shareDesc = "峨眉国安公馆";
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      } else if (item.buildname == "华亚欢乐城") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/huaya.html?";
        this.shareTitle = "华亚欢乐城";
        this.shareDesc = "华亚欢乐城";
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      } else if (item.buildname == "平海·美龄湾") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/meilingwan.html";
        this.shareTitle = "平海·美龄湾";
        this.shareDesc = "平海·美龄湾";
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      } else {
        this.shareLink =
          "http://www.guoanfamily.com/newHouseTest/?from=singlemessage&isappinstalled=0#/building_detial?buildID=" +
          item.id;
        this.shareTitle = item.buildname;
        this.shareDesc = item.buildname;
        this.shareLeftImg = item.firstpicture;
        // this.onLoadWx();
      }
      // this.$emit("receive", this.shareMarket);
    },
    // 微信端分享方法分享
    wxduanShare() {
        // 分享给朋友
        let self = this;
        this.$wechat.onMenuShareAppMessage({
            title: self.shareTitle, //标题
            desc: self.shareDesc, //描述
            link: self.shareLink, //连接地址指打开分享时页面地址
            imgUrl: self.shareLeftImg, //图片
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
            success: function(res) {
                this.market = false;
                this.shareImg = false;
            },
            cancel: function(res) {
                this.msgalert('已取消')
                this.market = false;
                this.shareImg = false;
            },
            fail: function(res) {
                this.msgalert('分享失败')
            }
        });
        // 分享到朋友圈
        this.$wechat.onMenuShareTimeline({
            title: self.shareTitle, //标题
            desc: self.shareDesc, //描述
            link: self.shareLink, //连接地址指打开分享时页面地址
            imgUrl: self.shareLeftImg, //图片
            trigger: function(res) {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
            success: function(res) {
                this.market = false;
                this.shareImg = false;
            },
            cancel: function(res) {
                this.msgalert('已取消')
                this.market = false;
                this.shareImg = false;
            },
            fail: function(res) {
                this.msgalert('分享失败')
            }
        });
        this.$wechat.error(function(res) {
        });

    },
    // APP微信好友分享
    weixinhaoyoufenxiangClick() {
      this.wxShare();
    },
    // APP微信朋友圈分享
    weixinFriendsClick() {
      this.friendShare();
    },
    // 微信分享方法
    // 判断安卓Ios分享方法
    // 朋友圈
    friendShare() {
      let self =  this;
        Wechat.share(
          {
            message: {
              title: self.shareTitle, //标题
              description: self.shareDesc, //描述
              thumb: self.shareLeftImg, //图片
              media: {
                type: Wechat.Type.WEBPAGE,
                webpageUrl: self.shareLink //连接地址指打开分享时页面地址
              }
            },
            scene: Wechat.Scene.TIMELINE // share to Timeline
          },
          function() {
            this.msgalert("已成功分享到朋友圈");
          },
          function(reason) {
            // alert("Failed: " + reason);
            // this.msgalert('已取消分享');
          }
        );
    },
    // 好友
    wxShare() {
      let self =  this;
        Wechat.share(
          {
            message: {
              title: self.shareTitle, //标题
              description: self.shareDesc, //描述
              thumb: self.shareLeftImg, //图片
              media: {
                type: Wechat.Type.WEBPAGE,
                webpageUrl: self.shareLink //连接地址指打开分享时页面地址
              }
            },
            scene: Wechat.Scene.SESSION // share to Timeline
          },
          function() {
            this.msgalert("已成功分享给朋友");
          },
          function(reason) {
            // alert("Failed: " + reason);
            // this.msgalert('已取消分享');
          }
        );
    },
    // 取消分享的点击事件
    exitShareClick() {
      let setTime = setTimeout(() => {
        this.market = false;
      }, 900);
      this.shareAlert = false;
    },
    // 立即订房的点击事件
    immRevertion(item) {
      // console.log(item);
      this.$router.push({ path: "house_resource", query: { buildid: item } });
    },
    
    // 遮罩层的点击事件
    markedClick() {
      this.shows = false;
      this.market = false;
      this.shareImg = false;
      this.shareAlert = false;
    }
    // 用于处理下拉刷新和一直加载的事件
    // refresh() {

    // },
    // loadMore() {}
  },
  created() {
    this.onLoade();
    // 微信环境，APP环境判断
    if(this.$store.state.showWxTitle && this.$route.path == '/buildList'){
      this.showTop1 = false;
      this.showTop =  false;
    }else if(!this.$store.state.showWxTitle && this.$route.path == '/buildList'){
      this.showTop1 = false;
      this.showTop =  true;
    }else if(this.$store.state.showWxTitle && this.$route.path !== '/buildList'){
      this.showTop1 = true;
      this.showTop =  false;
    }else if(!this.$store.state.showWxTitle && this.$route.path !== '/buildList'){
      this.showTop1 = false;
      this.showTop =  true;
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
<style lang='less' scoped>
html,
body {
  background: #ffffff;
}
ul li {
  list-style-type: none;
}
.listDiv{
  padding-top:2.3rem;padding-bottom:.1rem;
}
.listDiv1{
  padding-top: 1rem;
  padding-bottom: .1rem;
}
.listoLi {
  width: 98%; // height: 4rem;
  float: left;
  position: relative; // padding-bottom: .3rem;
  margin-top: 0.25rem;
  border-bottom: 1px solid #ccc;
}

.listoLi .shareBtn {
  position: absolute;
  right: 0.1rem;
  top: -0.075rem;
  width: 1.25rem;
  height: 1.5rem;
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
  height: 2.1rem;
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
  line-height: 0.3rem; // color: #de0319;
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
      margin-right: 0.4rem;
      padding-left: 0.3rem;
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
  .addLocation {
    width: 30%; // float: right;
    background: url("../../../static/new/img/dingwei.png") no-repeat;
    background-size: 23%;
    background-position: center;
    height: 1rem;
    position: absolute;
    right: 30%;
    // z-index: 100;
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
  font-size: 0.75rem;
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
      background: url(../../../static/new/img/Wx.png) no-repeat;
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
      background: url(../../../static/new/img/friends.png) no-repeat;
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
</style>
<style>
.vux-swiper-desc {
  display: none;
}
</style>
