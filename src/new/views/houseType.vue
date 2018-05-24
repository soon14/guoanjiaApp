<template>
    <div  class="fixContent" >
       <view-box ref="viewBox">
        <div :class="{'pApp':onApp,'wxApp':inApp}">
        <!-- 轮播图 -->
         <!--<swiper loop auto :show-dots='false' :list="demo06_list" :index="demo06_index" dots-position="center" height="4.25rem" @on-index-change="demo06_onIndexChange" @on-click-list-item="show"></swiper>-->
        <swiper :options="swiperOption" ref="mySwiper" v-if="demo06_list.length > 0">
            <swiper-slide :key='index' v-for="(item,index) in demo06_list"><img style="width:100%; height:4rem"  @click.stop="show(index)" :src='item.img'  /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div style="display:none;">
            <img class="previewer-demo-img" :key="index" v-for="(item, index) in List" :src="item.src" style="width:0;">
            <div v-transfer-dom>
                <previewer :list="List" ref="previewer" :options="options"></previewer>
            </div>
        </div>
        <!-- 图片数量个数显示 -->
        <div class="houseTypeImgNumber">
            <span>{{bannerItem}}</span>
            <span>/</span>
            <span style="padding-right: .5rem;">{{bannerLen}}</span>
        </div>
        <!-- 户型信息 -->
        <div class="typeInfo">
            <div class="allHouse1" @click="allHouse1">
                    <img src="../../../static/new/img/suanjian.png">
                    <span>立即算价</span>
                </div>
            <div class="detial" style="margin-top:.35rem;">
                <div class="kaitime">建筑面积
                    <span/>
                </div>
                <span class="ovaspan">：</span>
                <div class="rightContent" >
                    <span class="priceContent" style="color:#f74b4b;font-size:.4rem;font-weight:bold;">{{typeInformation.salearea}}</span>
                    <span style="color:#f74b4b;font-weight:bold;">㎡</span>
                </div>
            </div>
            <div class="detial">
                <div class="kaitime">套内面积
                    <span/>
                </div>
                <span class="ovaspan">：</span>
                <div class="rightContent">
                    <span class="priceContent"></span>
                    <span style="color:#808080;font-weight:bold;font-size:.3rem;">㎡</span>
                </div>
            </div>
            <div class="detial">
                <!-- <div class="allHouse" @click="allHouse">
                        <img src="../../../static/new/img/quanbufangyuan.png">
                        <span>查看房源</span>
                    </div> -->
                
                <!-- <div class="allHouse2" @click="allHouse2">

                    <img src="../../../static/new/img/duibi.png">
                    <span>户型对比</span>
                </div> -->
                <div class="kaitime">户型
                    <span/>
                </div>
                <span class="ovaspan">：</span>
                <div class="rightContent">
                    <span class="priceContent">{{typeInformation.housetypecode}}</span>
                    <span style="color:#ccc;margin-left:.25rem;font-size:.3rem;color:#808080;">{{typeInformation.towards}}</span>
                </div>
            </div>
            <div class="detial">

                <div class="kaitime">厅室卫
                    <span/>
                </div>
                <span class="ovaspan">：</span>
                <div class="rightContent">
                    <span class="priceContent">{{typeInformation.housetypedescribe}}</span>
                    <!-- <span style="color:#ccc;margin-left:.5rem;">朝南</span> -->
                </div>
            </div>
            <div class="detial">
                <div class="kaitime">户型描述
                    <span/>
                </div>
                <span class="ovaspan">：</span>
            </div>
            <div class="discribe" style=" padding-bottom: 1.35rem;font-size:.3rem;color:#808080;text-align:left;padding-left:.25rem;margin-right:.25rem;">
                {{typeInformation.housetypedetail}}
            </div>
        </div>
        

        <!-- ----------------弹出层------------------------------------------ -->
        <div class="dialog" v-show="shows" style="">

            <div class="dialogTop">我要看房</div>
            <div style="border-radius:.125rem;overflow:hidden;">
                <group class="GGroup">
                    <x-input title="预约看房" class="labelStyle" style="font-size:.275rem" placeholder="预约看房" v-model="rooms" :show-clear="false" placeholder-align="left"></x-input>
                    <x-input title="姓　　名" class="labelStyle" style="font-size:.275rem" name="username" v-model="username" placeholder="请输入姓名"></x-input>
                    <x-input title="人　　数" class="labelStyle" style="font-size:.275rem" name="numberPeople" type="number" v-model="numberPeople" placeholder="请输入看房人数"></x-input>
                    <x-input title="手机号码" class="labelStyle" style="font-size:.275rem" name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                    <datetime-range class="labelStyle" style="margin-left:.2rem;font-size:.275rem;" title="看房时间" :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange"></datetime-range>
                    <button class="btnYuyue" @click="btnSubClick">立即预约</button>
                </group>
            </div>

        </div>
        <!-- -----------------------遮罩层---------------------------------------------- -->
        <div class="market" v-show="market" @click="markedClick"></div>
        </div>
        <!-- ---------------底部部分------------------------- -->
            <div class="bottom" slot="bottom">
                <div class="collentDiv">
                    <button v-show="quitCollent" class="quitCollent" @click="quitCollentClick">已收藏</button>
                    <button v-show="collent" class="collent" @click="collentClick">收藏</button>
                </div>
                <button class="yuyue" @click="appointmentClick">预约看房</button>
                <button class="dingfang" @click="onlineBooking">在线订房</button>
            </div>
       </view-box>
    </div>
</template>

<script>
import { Previewer, TransferDom,ViewBox } from 'vux'
export default {
    name: 'houseType',
    directives: {
        TransferDom
    },
    components: {
        Previewer,
        ViewBox
    },
    data() {
        var swiperThis = this;
        return {
            swiperOption: {
                autoplay:true,
                // loop:true,
                pagination: {
                    el: '.swiper-pagination'
                },
                // onTransitionStart(swiper){
                //     var index = document.getElementsByClassName("swiper-slide-active")[0].getAttribute("data-swiper-slide-index");
                //     swiperThis.bannerItem = index;
                //     console.log(swiper);
                // },
                on: { slideChangeTransitionStart: function(){swiperThis.bannerItem = this.activeIndex+1 },},
            },
            onApp:false,
            inApp:false,
            houseID: '',//户型ID
            // 轮播图数据
            baseList: [],//轮播图数据
            urlList: [],
            demo06_list: [],
            demo06_index: 0,
            bannerLen: '',
            bannerItem: 1,
            // 图片放大功能默认属性
            List: [],//效果图
            // 弹窗表单数据
            rooms: '',//预约楼盘
            username: '',//看房人姓名
            numberPeople: '',//看房人数
            mobile: '',//手机号码
            Showingsdate: [],//预约时间
            startdate: "",//开始的时间
            enddate: "",//结束的时间
            // 户型数据
            typeInformation: {},
            // 收藏控制
            collent: true,//取消收藏按钮
            quitCollent: false,//收藏按钮
            shows: false,//遮罩弹窗
            market: false,//遮罩层
            collectImg: '',
            selecteddate: null,
            // 图片放大的默认属性
            options: {
                getThumbBoundsFn(index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
        }
    },
    methods: {
        // 户型数据加载接口调用
        houseTyeonLoad() {
            this.get('palmsaleapp/api/v1/buildtype/findTypeinfoId?typeid=' + this.houseID,{ interfaceType: "newHouse"}).then(response => {
                // 轮播图
                if (response.status == 200) {
                    this.typeInformation = response.data[0];
                    this.baseList = this.typeInformation.housetypefilename.split(',');
                    this.bannerLen = this.baseList.length;
                    var ImgObj = {};
                    var arr = [];
                    for (let i = 0; i < this.baseList.length; i++) {
                        // this.baseList[i] = this.ImgSrc + this.baseList[i];
                        this.baseList[i] = this.concatFileUrl( this.baseList[i]);
                        ImgObj.img = this.baseList[i];
                        arr.push(ImgObj);
                    }
                    // 轮播图
                    this.urlList = arr.map((item, index) => ({
                        img: item.img,
                    }))
                    this.collectImg = this.urlList[0].img;
                    // 图片放大遍历
                    this.List = this.baseList.map((item, index) => ({
                        src: item,
                    }))
                    this.demo06_list = this.urlList;
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        // 图片放大方法
        show(index) {
            this.$refs.previewer.show(this.demo06_index);
        },
        // l轮播图的点击事件
        demo06_onIndexChange(index) {
            this.demo06_index = index;
            this.bannerItem = index + 1;
            // console.log(index);
        },
        //收藏按钮的点击事件
        collentClick() {
          
                let post_data = {
                    "collectTitle": this.typeInformation.housetypecode,//户型
                    "collectResume": this.typeInformation.salearea,//大小
                    "collectContent": this.typeInformation.housetypedescribe,//厅室卫
                    "adjunctContent": this.typeInformation.towards,//朝向
                    "imageName": this.collectImg,//图片名称
                    "collectUrl": window.location.hash,//当前url
                    "type": '2',//收藏的类型,楼盘为1,户型为2
                }
                // console.log(post_data);
                this.post('CollectController/saveCollectInfo', post_data,{ interfaceType: "collect"}).then(response => {
                    // console.log(response);
                    if (response.code == 200) {
                        this.msgalert('收藏成功');
                        let a = JSON.parse(localStorage.getItem('userInfroMap'));
                        a.collectList.push(window.location.hash);
                        localStorage.setItem('userInfroMap', JSON.stringify(a));
                        this.collent = false;//取消收藏按钮
                        this.quitCollent = true;//收藏按钮
                    } else {
                        // this.showalert(response.msg);
                    }
                }, response => {
                    this.showalert(response.msg);
                });
            
            // this.collent = false;//取消收藏按钮
            // this.quitCollent = true;//收藏按钮
        },
        // 取消收藏的点击事件
        quitCollentClick() {
            let post_data = {
                collectUrl: window.location.hash,
            }
            this.post('CollectController/delCollectInfo', post_data,{ interfaceType: "collect"}).then(response => {
                // console.log(response);
                if (response.code == 200) {
                    this.msgalert('取消收藏成功')
                    let a = JSON.parse(localStorage.getItem('userInfroMap'));
                    let arr = a.collectList;
                    let hrefs = window.location.hash;
                    arr.splice(arr.indexOf(hrefs), 1);
                    a.collectList = arr;
                    localStorage.setItem('userInfroMap', JSON.stringify(a));
                    this.collent = true;//取消收藏按钮
                    this.quitCollent = false;//收藏按钮
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        // 查看全部房源的点击事件
        allHouse() {
            // this.showalert('敬请期待')
            // let userPhone = localStorage.getItem('userPhone');
            if (!this.LoToken() && !this.UserPhone()) {
                // this.$router.push({ path: 'house_resource', query: { buildid: this.buidID } })
                this.Buildonload();
            } else {
                this.$store.state.loginShow = true;
            }
        },
        allHouse1() {
            // this.msgalert('敬请期待')
            // window.location.href = 'https://guoanfamily.github.io/houseloan/example/#/';
            // let src = 'https://guoanfamily.github.io/houseloan/example/#/';
            // let title =  '房贷计算器'
            // this.$router.push({ path: 'framePage', query: { src: src,title:title } })
             this.$router.push({name:'Calculator'});

        },
        allHouse2() {
            this.msgalert('敬请期待')
        },
        // 预约看房的点击事件
        appointmentClick() {
            
            if (!this.LoToken() && !this.UserPhone()) {
                this.rooms = this.typeInformation.buildname;
                let username = localStorage.getItem('userName');
                if (!this.notEmpty(username)) {
                    this.username = username;
                } else {
                    this.username = '';
                }
                this.mobile = localStorage.getItem('userPhone');
                this.shows = true;
                this.market = true;
            } else {
                 this.$store.state.loginShow = true;
            }

            // this.shows = true;
            // this.market = true;
        },
        // 时间选择框
        onChange(val) {
            // console.log('change', val)
            this.selecteddate = val[0] + " " + val[1] + ":" + val[2] + ":" + "00";
        },
        // 立即预约的点击事件
        btnSubClick() {
            // this.shows = false;
            // this.market = false;
            if (this.notEmpty(this.username)) {
                // this.showalert('请输入姓名');
                this.msgalert('请输入姓名');
                return false;
            }
            if (this.notEmpty(this.mobile)) {
                this.msgalert('请输入电话');
                return false;
            }
            if (this.notEmpty(this.numberPeople)) {
                this.msgalert('请输入带看人数');
                return false;
            }
            if (this.notEmpty(this.selecteddate)) {
                this.msgalert('请选择看房时间')
                return false;
            }

            let post_data = {
                "custname": this.username,//姓名
                "phonenum": this.mobile,//客户电话
                "custphone": localStorage.getItem('userPhone'),//注册手机号
                "scancount": this.numberPeople,//看房人数
                "buildid": this.$route.query.buildid,//楼盘id
                // "scantime": this.selecteddate,//预约时间
                "myappointmentUrl": window.location.href,
                "scantime": this.selecteddate//预约时间

            }
            // console.log(post_data);
            this.post('palmsaleapp/api/v1/build/collectsave', post_data,{ interfaceType: "newHouse"}).then(response => {
                if (response.status) {
                    this.showalert(response.msg);
                    this.market = false;
                    this.shows = false;
                } else {
                    this.showalert(response.msg);
                };

            }, response => {
                this.showalert(response.msg);
            });

        },
        // 立即订房的点击事件
        onlineBooking() {
            // this.showalert('敬请期待')
            // let userPhone = localStorage.getItem('userPhone');
            if (!this.LoToken() && !this.UserPhone()) {
                if (this.typeInformation.buildname == '北海第一城') {
                this.msgalert('暂无房源信息');
                return false;
            }
                this.Buildonload();
            } else {
                this.$store.state.loginShow = true;
            }
        },
        // 查询楼盘是否有房源的方法
        Buildonload() {
            let buildid = this.$route.query.buildid;
            // alert(buildid);
            this.get('palmsaleapp/api/v1/build/buildhousenumber?buildid=' + buildid + "&housetypeid=" + this.houseID,{ interfaceType: "newHouse"}).then(response => {
                if (response.status == 200) {
                    if (response.data.error == '暂无房源信息') {
                        this.msgalert(response.data.error);
                        return false;
                    } else {
                        this.$router.push({ path: 'house_resource', query: { buildid: this.$route.query.buildid, housetypeid: this.houseID } })
                    }
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        // 遮罩层的点击事件
        markedClick() {
            this.shows = false;
            this.market = false;
        },
        slitID(args) {
            var reg = new RegExp("(^|&)" + args + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
                return decodeURI(r[2])
            return null;
        },
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: '提示信息',
                content: msg
            })
        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            })
        }

    },
    mounted() {
        if(this.$store.state.showWxTitle){
            this.onApp =  false;
            this.inApp = true;
        }else{
            this.onApp = true;
            this.inApp =  false;
        }
        // document.title =  '户型详情'
        // console.log(this.slitID('typeid'));
        // 获取从上个页面传过来的楼盘id
        this.houseID = this.$route.query.typeid;
        // this.houseID =  this.slitID('typeid');
        // console.log(this.houseID);
        this.houseTyeonLoad();
        // 日期时间处理
        let date = new Date();
        let nowmonth = date.getMonth() + 1
        this.startdate = date.getFullYear() + '/' + nowmonth + '/' + date.getDate();
        date.setMonth(date.getMonth() + 1);
        let nextmonth = date.getMonth() + 1;
        this.enddate = date.getFullYear() + '/' + nextmonth + '/' + date.getDate();
        let user = JSON.parse(localStorage.getItem('userInfroMap'));
        // console.log(user);
        if (!this.notEmpty(user)) {
            let userArr = user.collectList;
            let hres = window.location.hash;
            for (let i = 0; i < userArr.length; i++) {
                if (hres == userArr[i]) {
                    this.collent = false;//取消收藏按钮
                    this.quitCollent = true;//收藏按钮
                    return;
                }
            }
        }

    }
}
</script>

<style scoped lang='less'>
@import '~vux/src/styles/1px.less';
.wxApp{
    margin-top:0px;
}
.pApp{
    margin-top:80px;
}
// @import '~vux/src/styles/close';
.houseTypeImgNumber {
    width: 100%;
    height: .5rem; //   background:red;
    margin-top: .25rem;
    text-align: right;
    font-size: .35rem;
    // padding-right: .25rem;
    line-height: .5rem;
    font-weight: bold;
}

.typeInfo {
    position: relative;
    .allHouse {
        position: absolute;
        right: 1rem;
        top: 0rem;
        font-size: .3rem;
        img {
            width: .4rem;
        }
        span {
            display: block;
            float: right;
            margin-left: .1rem;
            margin-right: .5rem;
            font-size: .25rem;
            line-height: .5rem;
            font-weight: bold;
        }
    }
    .allHouse1 {
        position: absolute;
        right: 0rem;
        top: 0rem;
        font-size: .3rem;
        img {
            width: 0.75rem;
            padding-left: 8px;
        }
        span {
            display: block; // float: right;
            // padding-left: .4rem;
            margin-right: .5rem;
            font-size: .25rem;
            line-height: .5rem; // font-weight: bold;
            color: #ccc;
            font-size: .25rem;
            color:#808080;
        }
    }
    .allHouse2 {
        position: absolute;
        right: -0.25rem;
        top: 1.5rem;
        font-size: .25rem;
        img {
            padding-left: 8px;
            width: .75rem;
        }
        span {
            display: block; // float: right;
            // padding-left: .4rem;
            margin-right: .5rem;
            font-size: .25rem;
            line-height: .5rem; // font-weight: bold;
            color: #ccc;
            font-size: .25rem;
            color:#808080;
        }
    }
    .detial {
        overflow: hidden;
        
        .kaitime {
            padding-left: 0.25rem;
            width: 1.5rem;
            line-height: .7rem;
            height: .7rem;
            text-align: justify;
            float: left;
            font-weight: bold;
            font-size: .3rem;
            span {
                display: inline-block;
                padding-left: 100%;
                font-weight: bold;
            }
        }
        .ovaspan {
            float: left;
            line-height: .7rem;
        }
        .rightContent {
            // height: 1.6rem;
            float: left;
            line-height: .25rem;
            width: 60%;
            text-align: left;
            .price {
                font-weight: 600;
                color: #d7000f;
                font-size: .3rem;
            }
            .priceContent {
                font-size: .3rem;
                color: #808080;
            }
        }

        span {
            font-size: 0.3rem;
        }
        .discribe {
            width: 100%;
        }
    }
}

// 遮罩样式
.dialog {
    background: #ffffff;
    position: fixed;
    width: 90%;
    top: 20%;
    left: 5%;
    z-index: 12;
    border-radius: .25rem;
}

.btnYuyue {
    width: 100%;
    height: 1rem;
    text-align: center;
    color: #ff8a00;
    font-size: .35rem;
    background: #ffffff;
    border: none;
    border-top: 1px solid #ccc;
    border-radius: .175rem; // margin-bottom: 1rem;
}

.bottom {
    // -webkit-transform: translateZ(0);
    // width: 100%;
    // height: 1.2rem;
    // position: absolute;
    // left: 0;
    // bottom: 0;
    // z-index: 10;
    // background: #ffffff; // background:red;
    // border-top: 1px solid #ccc;
     -webkit-transform: translateZ(0);
  width: 100%;
  height: 1.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: #ffffff; // background:red;
  float: left; // border-top: 1px solid #ccc;
  border-top: 1px solid #ccc;
    button {
        border: none;
        float: left;
    }
    .collentDiv {
        width: 30%;
        height: 100%;
        position: relative;
        float: left;
    }
    .collent {
        width: 100%;
        height: 100%;
        background: #fff;
        background: url('../../../static/new/img/quitCollent.png') no-repeat;
        background-position: 20%;
        background-size: 30%;
        padding-left: 0.75rem;
        font-size: .35rem;
    }
    .quitCollent {
        width: 100%;
        height: 1.2rem;
        position: absolute;
        left: 0;
        bottom: 0;
        background: url('../../../static/new/img/collent1.png') no-repeat;
        background-position: 20%;
        background-size: 30%;
        padding-left: .75rem;
        font-size: .35rem;
    }
    .yuyue {
        width: 35%;
        height: 100%;
        background: rgba(249, 117, 0, 0.7);
        text-align: center;
        color: #ffffff;
        font-size: .35rem;
    }
    .dingfang {
        width: 35%;
        height: 100%;
        background: rgba(224, 0, 25, 0.7);
        text-align: center;
        font-size: .35rem;
        color: #ffffff;
    }
}

.dialogTop {
    position: relative;
    text-align: center;
    line-height: 1.05rem;
    background: #ff8a00;
    border-radius: .175rem .25rem 0 0;
    color: #fff;
    font-size: .4rem; // border-radius: .4rem .4rem 0 0;
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

// 轮播图样式
.copyright {
    font-size: 0.3rem;
    color: #ccc;
    text-align: center;
}

.text-scroll {
    border: 1px solid #ddd;
    border-left: none;
    border-right: none;
}

.text-scroll p {
    font-size: 0.3rem;
    text-align: center;
    line-height: 30px;
}

.black {
    background-color: #000;
}

.title {
    line-height: 100px;
    text-align: center;
    color: #fff;
}
</style>
<style>
    .vux-swiper-desc{
        display:none;
    }
</style>
