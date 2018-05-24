<template>
      <div  class="fixContent" >
       
        <div :class="{'body_top':IosTop,'body_tops':AndroidTop,'wx_top':wxTop}" >
          <!--轮播图  -->
          <div class="swipertop">
              <swiper :options="swiperOption" ref="mySwiper">
                  <swiper-slide :key='index' v-for="(item,index) in demo06_list"><img style="width:100%; height:5rem" :src='item.img' /></swiper-slide>
              </swiper>
              <!-- 图片头部标记 -->
              <div slot="bottom" class="ImgHeader" :class="{'ImgHeader1':AndroidTop}">
                  <div  class="EffectImg" @click="show(0)">
                      <img src="../../../static/new/img/xiaoguotu.png" />
                      <span>效果图</span>
                      <span style="right:0rem;">{{EffectImg}}</span>
                      <div>
                          <div v-transfer-dom>
                              <previewer :list="List" ref="previewer" @on-close='close' @on-change='changes'></previewer>
                          </div>
                      </div>
                  </div>
                  <div class="ApartMentImg" @click="showImg(0)">
                      <img src="../../../static/new/img/huxing.png" />
                      <span>户型图</span>
                      <span style="right:-0rem;">{{ApartMentImg}}</span>
                  </div>
              </div>
          </div>
        
          <!-- 楼盘头部信息 -->
          <div class="buildDetial">
              <!-- 分享图标 -->
              <div class="share" @click="ShareClick"></div>
              <!-- 标题加标签 -->
              <div class="topNmae">
                  <span class="buildName">{{buidDetial.buildname}}</span>
                  <span class="buildTag">
                      <ul>
                          <li :key="index" v-for="(item,index) in buidDetial.buildtagnameList">{{item}}</li>
                      </ul>
                  </span>
              </div>
              <!-- 查看全部房源 -->
              <div class="allHouse" @click="allHouse">
                  <img src="../../../static/new/img/quanbufangyuan.png">
                  <span>查看全部房源</span>
              </div>
              <div class="detial">
                  <div class="kaitime">均价
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="price">{{buidDetial.averageprice}}</span>
                      <span>元/㎡</span>
                  </div>

              </div>
              <div class="detial" style="width:100%;">
                  <div class="kaitime">开盘时间
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.openquotationtime}}</span>
                  </div>
              </div>
              <div class="detial">
                  <div class="kaitime">交房时间
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.launchtime}}</span>
                  </div>
              </div>
              <!-- --------楼盘定位---------------------------------------------- -->
              <div class="location" @click="addressLocation"></div>
              <div class="detial">
                  <div class="kaitime">地址
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.address}}</span>
                  </div>
              </div>
              <div class='housTypeHeader' v-show="isLand" style="position:relative;" @click="Membership">
                  <img src="../../../static/new/img/ka.png" style="margin-top:.35rem;">
                  <span style="color:red;margin-left:.25rem;">旅居卡</span>
                  <span style="color:red">丨意向登岛</span>
                  <img src="../../../static/new/img/baoming.png" style="postion:absolute;right:0;top:.25rem;width:.5rem;margin-left:39%;">
              </div>
          </div>
          <!-- 户型信息 -->
          <div class="buildDetial">
              <div class='housTypeHeader'>
                  <img src="../../../static/new/img/huxing2.png">
                  <span class="types">在售户型(</span>
                  <span>{{houseTypelen}}</span>
                  <span>)套</span>
              </div>
              <!-- <scroller> -->
              <div class="housTypeImgScroll">
                  <ul>
                      <li :key="index" v-for="(item,index) in housTypeImg" @click="houseTyeImgClick(item.id)">
                          <div class="HousTypeTop">
                              <div class="HousTypeTopLeft">
                                  <span>{{item.housetypecode}}</span>
                                  <span>{{item.salearea}}</span>
                              </div>
                              <div class="HousTypeTopRight">
                                  <span>{{item.housetypedescribe}}</span>
                                  <span>{{item.housetypedetail}}</span>
                              </div>
                          </div>
                          <div class="HousTypeBottomImg">
                              <img :src='item.housetypefilename'>
                          </div>
                      </li>
                  </ul>
              </div>
              <!-- </scroller> -->
          </div>
          <div class="buildDetial">
              <!-- 楼盘基础信息 -->
              <div class="housTypeHeader">
                  <div class='housTypeHeader'>
                      <img src="../../../static/new/img/lou.png">
                      <span class="types">楼盘基础信息</span>
                  </div>
              </div>
              <div class="detial" style="width:100%;">
                  <div class="kaitime">开盘时间
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.openquotationtime}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.tenementtypename !== ''">
                  <div class="kaitime">物业类型
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.tenementtypename}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.newbuildtype !== ''">
                  <div class="kaitime">建筑类型
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.newbuildtype}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.totalhouseholdnumber!== ''">
                  <div class="kaitime">总户数
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.totalhouseholdnumber}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.carportmatching !== ''">
                  <div class="kaitime">车位配比
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.carportmatching}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.volumefraction !== ''">
                  <div class="kaitime">容积率
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.volumefraction }}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.greenrate !== ''">
                  <div class="kaitime">绿化率
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.greenrate}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.hardcoverstandard !== '' && this.buidDetial.hardcoverstandard !== null">
                  <div class="kaitime">装修情况
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.hardcoverstandard }}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.developers != ''">
                  <div class="kaitime">开发商
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.developers}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.tenementcompany !== ''">
                  <div class="kaitime">物业顾问
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.tenementcompany}}</span>
                  </div>
              </div>
              <div class="detial" v-if="this.buidDetial.tenementfee !== ''">
                  <div class="kaitime">物业费
                      <span/>
                  </div>
                  <span class="ovaspan">：</span>
                  <div class="rightContent">
                      <span class="priceContent">{{buidDetial.tenementfee}}</span>
                  </div>
              </div>
              <!-- ---------隐藏的楼盘基础信息部分------------------------------------------------- -->
              <div class="buildingInfor" v-show="showBuilDetial">
                  <div class="detial" v-if="this.buidDetial.country !== ''">
                      <div class="kaitime">区域
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.country}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.foolernumber !== ''">
                      <div class="kaitime">层数
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.foolernumber}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.foolerhight !== ''">
                      <div class="kaitime">层高
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.foolerhight}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.housepotial !== ''">
                      <div class="kaitime">医院
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{housepotial}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.school !== ''">
                      <div class="kaitime">学校
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{school}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.restRant !== ''">
                      <div class="kaitime">餐饮
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{restRant}}</span>
                      </div>
                  </div>

                  <div class="detial" v-if="this.shoppingCenter !== ''">
                      <div class="kaitime">购物
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{shoppingCenter}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.othter !==''">
                      <div class="kaitime">其他
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{othter}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.occupiedarea !==''">
                      <div class="kaitime">占地面积
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.occupiedarea}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.buildingarea!==''">
                      <div class="kaitime">建筑面积
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.buildingarea}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.buildinfo!==''">
                      <div class="kaitime">建筑信息
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.buildinfo}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="buidDetial.noopsychefurnishing!=''">
                      <div class="kaitime">智能家居
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.noopsychefurnishing}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.threeconstantsys!==''">
                      <div class="kaitime">三恒系统
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.threeconstantsys}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.landcertificate!==''">
                      <div class="kaitime">土地证
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.landcertificate}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.builddesigncompany !==''">
                      <div class="kaitime">建筑设计
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.builddesigncompany}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.parkdesigncompany !==''">
                      <div class="kaitime">园林设计
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.parkdesigncompany}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.buildingexecutionlicence">
                      <div class="kaitime">建筑施工
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.buildingexecutionlicence}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.hardbackdesigncompany !== ''">
                      <div class="kaitime">精装设计
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.hardbackdesigncompany}}</span>
                      </div>
                  </div>
                  <!-- <div class="detial" v-if="this.buidDetial.Volumeratio !== undefined ">
                      <div class="kaitime">智能系统
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.Volumeratio}}</span>
                      </div>
                  </div> -->
                  <div class="detial" v-if="this.buidDetial.buildingplanlicence!==''">
                      <div class="kaitime">工规证
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.buildingplanlicence}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.buildingexecutionlicence !=='' ">
                      <div class="kaitime">施工证
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.buildingexecutionlicence}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.buildingopenlicence!==''">
                      <div class="kaitime">开工证
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.buildingopenlicence}}</span>
                      </div>
                  </div>
                  <div class="detial" v-if="this.buidDetial.commodityhousedeallicence !== ''" >
                      <div class="kaitime">预售证
                          <span/>
                      </div>
                      <span class="ovaspan">：</span>
                      <div class="rightContent">
                          <span class="priceContent">{{buidDetial.commodityhousedeallicence}}</span>
                      </div>
                  </div>
              </div>
              <div class="showBackBtn">
                  <button v-show="fadeInShow" @click="showBtn">查看更多</button>
                  <button v-show="fadeInOut" @click="outBtn">收起</button>
              </div>
          </div>

          <div class="lastBottom">
              <span>专享服务</span>
          </div>
          <div class="bottomBig">
              <div style="float:left;">
                  <div class="phoneNumber ">400-900-2225转1</div>
                  <div class="explain">最新政策、更多优惠详情，请致电展示中心</div>
              </div>
              <a href="tel:400-900-2225"></a>
          </div>
          <!-- ----------------弹出层------------------------------------------ -->
          <div class="dialog" v-show="shows" v-transfer-dom>
              <!-- <x-dialog hide-on-blur v-model="show" class="dialog-demo"> -->
              <div class="dialogTop">我要看房</div>
              <div style="border-radius:.25rem;overflow:hidden;">
                  <group class="GGroup">
                      <x-input class="labelStyle" style="font-size:.275rem" title="预约看房" placeholder="预约看房" v-model="rooms" :show-clear="false" placeholder-align="left"></x-input>
                      <x-input class="labelStyle" style="font-size:.275rem" title="姓　　名" name="username" v-model="username" placeholder="请输入姓名"></x-input>
                      <x-input class="labelStyle" style="font-size:.275rem" title="人　　数" name="numberPeople" type="number" v-model="numberPeople" placeholder="请输入看房人数"></x-input>
                      <x-input class="labelStyle" style="font-size:.275rem" title="手机号码" name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                      <datetime-range class="labelStyle" style="margin-left:.2rem;font-size:.275rem" title="预约时间" :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange"></datetime-range>
                      <button class="btnYuyue" @click="btnSubClick">立即预约</button>
                  </group>
              </div>
              <!-- </x-dialog> -->
          </div>
          <div class="righthorn" style="z-inex:150;" v-show="shareImg" v-transfer-dom>点击右上角进行分享</div>
          <!-- ---------------底部图片缩放tab------------------------------------------------------- -->
          <div class="bottomTab" v-show="bottomShows" v-transfer-dom>
              <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
                  <tab style="float:left;" bar-active-color="red" :line-width="1">
                      <tab-item :selected="itemOne" @on-item-click="onItemClick">效果图
                          <span>
                              <span>(</span>{{EffectImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item :selected="itemTwo" @on-item-click="onItemHouseTypeClcik">户型图
                          <span>
                              <span>(</span>{{ApartMentImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item :selected="itemThr" @on-item-click="onGuihuaClick">规划图
                          <span>
                              <span>(</span>{{GuihuaImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item :selected="itemFor" @on-item-click="yangbanjiaClick">样板间
                          <span>
                              <span>(</span>{{YangbanImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item :selected="itemFive" @on-item-click="shijingClick">实景图
                          <span>
                              <span>(</span>{{ShijingImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item :selected="itemSix" @on-item-click="shapanClick">沙盘图
                          <span>
                              <span>(</span>{{ShapanImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item :selected="itemSeven" @on-item-click="niaokanClick">鸟瞰图
                          <span>
                              <span>(</span>{{NiaokanImg}}</span>
                          <span>)</span>
                      </tab-item>
                      <tab-item @on-item-click="allClick">全部</tab-item>
                  </tab>
              </div>
          </div>
          
      
        </div>
       <!-- -----------------------遮罩层---------------------------------------------- -->
        <div class="market" style="z-index:149;" v-show="market" @click="markedClick"></div>
        <!-- 收藏,预约看房 -->
        <div class="bottom">
            <div class="collentDiv">
                <button v-show="quitCollent" class="collent" @click="quitCollentClick">已收藏</button>
                <button v-show="collent" class="quitCollent" @click="collentClick">收藏</button>
            </div>
            <button class="yuyue" @click="appointmentClick">预约看房</button>
            <button class="dingfang" @click="onlineBooking">在线订房</button>
        </div>
          <!-- 分享时候的底部弹出框 -->
          <div class="shareAlert" :class="{'shareAlert1':shareAlert}">
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
// import swipers from '../components/Swiper';//引入轮播图组件
import { TransferDom, Tab, TabItem } from "vux";
import Previewer from "../components/previewer";
export default {
  name: "building_detail",
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Tab,
    TabItem
  },
  data() {
    return {
      IosTop: false,
      AndroidTop: false,
      wxTop: false,
      swiperOption: {
        loop: true,
        autoplay: true
      },
      showMap: false,
      acitves: false,
      // selected:true
      baseList: [], //轮播图数据
      urlList: [],
      demo06_list: [],
      demo06_index: 0,
      houseTypeList: [],
      buidID: "",
      buidDetial: {},
      school: "", //学校
      housepotial: "", //医院
      shoppingCenter: "", //购物
      othter: "", //其他
      restRant: "", //餐饮
      houseTypelen: "",
      housTypeImg: [],
      showBuilDetial: false, //跟多信息的隐藏状态
      fadeInShow: true, //查看跟多按钮
      fadeInOut: false, //收起按钮
      collent: true, //取消收藏按钮
      quitCollent: false, //收藏按钮
      shows: false, //遮罩弹窗
      market: false, //遮罩层
      isLand: false, //旅居卡
      rooms: "", //预约楼盘
      username: "", //看房人姓名
      numberPeople: "", //看房人数
      mobile: "", //手机号码
      Showingsdate: [], //预约时间
      selecteddate: null,
      startdate: "", //开始的时间
      enddate: "", //结束的时间
      // 图片放大功能默认属性
      List: [], //效果图
      List1: [], //户型图
      bottomShows: false,
      buildName: "", //楼盘名称
      buildPrice: "",
      EffectImg: "", //效果图长度
      ApartMentImg: "", //户型图长度
      GuihuaImg: "", //规划图长度
      YangbanImg: "", //样板间长度
      ShijingImg: "", //实景图长度
      ShapanImg: "", //沙盘图长度
      NiaokanImg: "", //鸟瞰图长度
      huxing: "", //户型图index
      xiaoguo: "", //效果图index
      guihua: "", //规划图
      niaokan: "", //鸟瞰图
      shapan: "", //沙盘图
      shijing: "", //实景图
      yangbanjian: "", //样板间
      peitao: "", //配套图
      flag: false,
      collectImg: "", //收藏图片
      shareImg: false, //分享按钮图片
      shareLeftImg: "", //分享图片
      shareTitle: "", //标题
      shareDesc: "", //描述
      shareLink: "", //分享链接

      itemOne: false,
      itemTwo: false,
      itemThr: false,
      itemFor: false,
      itemFive: false,
      itemSix: false,
      itemSeven: false,
      // 分享部分展示
      shareAlert: false
    };
  },
  methods: {
    // 关闭图片放大事件
    close() {
      this.bottomShows = false;
    },
    changes(index) {
      // console.log(index);
      // console.log(this.huxing);
      // console.log(this.guihua);
      // console.log(this.yangbanjian);
      // console.log(this.shijing);
      // console.log(this.shapan);
      // console.log(this.niaokan);
      // console.log(this.huxing);

      if (index >= 0 && index < this.huxing) {
        this.itemOne = true;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }

      if (index >= this.huxing && index <= this.guihua) {
        this.itemOne = false;
        this.itemTwo = true;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.guihua && index <= this.yangbanjian) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = true;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.yangbanjian && index <= this.shijing) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = true;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.shijing && index <= this.shapan) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = true;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.shapan && index <= this.niaokan) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = true;
        this.itemSeven = false;
      }
      if (index >= this.niaokan) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = true;
      }
      // this.showImg();
      //this.onItemHouseTypeClcik();
    },

    // 效果图放大事件
    show() {
      this.$vux.loading.show({
        text: "Loading"
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 500);
      this.changes(0);
      this.bottomShows = true;
      this.$refs.previewer.show(this.xiaoguo);
    },
    showImg() {
      this.$vux.loading.show({
        text: "Loading"
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 500);
      this.changes(this.huxing);
      this.bottomShows = true;
      this.$refs.previewer.show(this.huxing);
    },
    // 各种缩放图片的点击事件
    // 效果图
    onItemClick() {
      this.$refs.previewer.goto(this.xiaoguo);
    },
    // 户型图
    onItemHouseTypeClcik() {
      this.$refs.previewer.goto(this.huxing);
    },
    // 规划图
    onGuihuaClick() {
      if (this.guihua !== -1) {
        this.$refs.previewer.goto(this.guihua);
      } else {
        this.msgalert("该楼盘还没有规划图");
      }
    },
    // 鸟瞰图
    niaokanClick() {
      if (this.niaokan !== -1) {
        this.$refs.previewer.goto(this.niaokan);
      } else {
        this.msgalert("该楼盘还没有鸟瞰图");
      }
    },
    // 沙盘图
    shapanClick() {
      if (this.shapan !== -1) {
        this.$refs.previewer.goto(this.shapan);
      } else {
        this.msgalert("该楼盘还没有沙盘图");
      }
    },
    // 实景图
    shijingClick() {
      if (this.shijing !== -1) {
        this.$refs.previewer.goto(this.shijing);
      } else {
        this.msgalert("该楼盘还没有实景图");
      }
    },
    // 样板间
    yangbanjiaClick() {
      if (this.yangbanjian !== -1) {
        this.$refs.previewer.goto(this.yangbanjian);
      } else {
        this.msgalert("该楼盘没有样板间");
      }
    },

    // 全部的点击事件
    allClick() {
      this.$router.push({
        path: "buildImgList",
        query: { buildId: this.buidID }
      });
    },

    // 筛选各个图片集合长度的方法
    onFilterImg(arr, type, num) {
      let arroy = arr.filter(items => {
        return items[type] == num;
      });
      return arroy;
    },
    // 楼盘数据加载的方法
    buidingLoade() {
      let post = this.buidID;
      // console.log(post);
      this.get("palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=" + post, {
        interfaceType: "newHouse"
      }).then(
        response => {
          // console.log(response);
          if (response.status == 200) {
            // 将楼盘地址存入vuex
            this.$store.state.location = response.data.address;
            // 全部的图片
            let ImgArray = response.data.buildPictureList;
            for (let i = 0; i < ImgArray.length; i++) {
              // ImgArray[i].picturename = this.ImgSrc + ImgArray[i].picturename;
              ImgArray[i].picturename = this.concatFileUrl(
                ImgArray[i].picturename
              );
            }
            // console.log(ImgArray);
            // 样板间图片长度
            let picturetype = "picturetype";
            this.YangbanImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "2"
            ).length;
            // 实景图长度
            this.ShijingImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "3"
            ).length;
            // 沙盘图长度
            this.ShapanImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "4"
            ).length;
            // 鸟瞰图长度
            this.NiaokanImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "5"
            ).length;
            // 规划图长度
            this.GuihuaImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "6"
            ).length;
            // 筛选效果图
            let Swiper = response.data.buildPictureList.filter(item => {
              return item.picturetype == "0";
            });
            // 效果图图片长度
            this.EffectImg = Swiper.length;
            this.baseList = Swiper; //response.data.buildPictureList;
            // 轮播图集合
            this.urlList = this.baseList.map(item => ({
              img: item.picturename
            }));
            this.collectImg = this.urlList[0].img;
            this.demo06_list = this.urlList;
            //转换物业类型
            // console.log(response.data.tenementTypeListApp);
            // response.data.tenementtype = response.data.tenementtype.split(",");
            // 户型图图片长度
            this.ApartMentImg = response.data.buildTypepictureList.length;
            // 查询当前楼盘是否可以入会
            if (response.data.buildinstate == "1") {
              this.isLand = true;
            } else {
              this.isLand = false;
            }
            //楼盘信息集合
            this.buidDetial = response.data;
            // console.log(this.buidDetial)
            if (this.buidDetial.buildPerpheralList.length != 0) {
              // this.school = this.buidDetial.buildPerpheralList[2].perpheralname
              // this.housepotial = this.buidDetial.buildPerpheralList[3].perpheralname
              // this.shoppingCenter = this.buidDetial.buildPerpheralList[1].perpheralname
              // this.othter = this.buidDetial.buildPerpheralList[0].perpheralname
              var schArr = [];
              var houspotialArr = [];
              var shopArr = [];
              var othArr = [];
              for (
                let i = 0;
                i < this.buidDetial.buildPerpheralList.length;
                i++
              ) {
                if (this.buidDetial.buildPerpheralList[i].perpheraltype == 3) {
                  houspotialArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                } else if (
                  this.buidDetial.buildPerpheralList[i].perpheraltype == 2
                ) {
                  shopArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                } else if (
                  this.buidDetial.buildPerpheralList[i].perpheraltype == 1
                ) {
                  schArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                } else if (
                  this.buidDetial.buildPerpheralList[i].perpheraltype == 0
                ) {
                  othArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                }
              }
              // console.log(schArr,houspotialArr,shopArr,othArr)
              this.school = schArr.toString();
              this.housepotial = houspotialArr.toString();
              this.shoppingCenter = shopArr.toString();
              this.othter = othArr.toString();
            }
            // school:'',//学校
            // housepotial:'',//医院
            // shoppingCenter:'',//购物
            // othter:'',//其他
            // restRant:'',//餐饮
            this.buildName = response.data.buildname; //楼盘名称
            this.buildPrice = response.data.averageprice; //楼盘价格
            this.housTypeImg = response.data.buildTypeList;
            // console.log(this.housTypeImg);
            this.houseTypelen = this.housTypeImg.length;
            // 户型图图片集合
            this.houseTypeList = response.data.buildTypepictureList;
            // 将户型图片和其他图片合并为一个对象
            let typeArr = [];
            let obj = {};
            for (let i = 0; i < this.houseTypeList.length; i++) {
              // this.houseTypeList[i] = this.ImgSrc + this.houseTypeList[i];
              this.houseTypeList[i] = this.concatFileUrl(this.houseTypeList[i]);
              obj.picturetype = "7";
              obj.picturename = this.houseTypeList[i];
              typeArr.push(obj);
            }
            // console.log(typeArr);
            // 处理销售面积,图片
            // console.log(this.housTypeImg);
            let houseImgArr = [];
            for (let i = 0; i < this.housTypeImg.length; i++) {
              // console.log(this.housTypeImg[i].housetypefilename);
              if (!this.notEmpty(this.housTypeImg[i].housetypefilename)) {
                houseImgArr.push(this.housTypeImg[i]);
                // this.housTypeImg[i].housetypefilename = this.ImgSrc + this.housTypeImg[i].housetypefilename.split(',')[0];
                this.housTypeImg[i].housetypefilename = this.concatFileUrl(
                  this.housTypeImg[i].housetypefilename.split(",")[0]
                );
                this.housTypeImg[i].salearea =
                  parseInt(this.housTypeImg[i].salearea) + "㎡";
              }
            }
            this.housTypeImg = houseImgArr;
            // console.log(houseImgArr);
            // 图片放大集合
            // console.log(ImgArray)
            ImgArray = ImgArray.concat(typeArr);
            this.List = ImgArray.map((item, index) => ({
              src: item.picturename,
              type: item.picturetype
            }));
            //重新将数组排序
            let v1 = [];
            let v2 = [];
            let v3 = [];
            let v4 = [];
            let v5 = [];
            let v6 = [];
            let v7 = [];
            let v8 = [];
            for (let i = 0; i < this.List.length; i++) {
              if (this.List[i].type == "0") {
                v1.push(this.List[i]);
              } else if (this.List[i].type == "7") {
                v2.push(this.List[i]);
              } else if (this.List[i].type == "6") {
                v3.push(this.List[i]);
              } else if (this.List[i].type == "2") {
                v4.push(this.List[i]);
              } else if (this.List[i].type == "3") {
                v5.push(this.List[i]);
              } else if (this.List[i].type == "4") {
                v6.push(this.List[i]);
              } else if (this.List[i].type == "5") {
                v7.push(this.List[i]);
              } else if (this.List[i].type == "1") {
                v8.push(this.List[i]);
              }
            }
            this.List = [];
            this.List = this.List.concat(v1, v2, v3, v4, v5, v6, v7, v8);
            // console.info(this.List)
            // 效果图index
            this.xiaoguo = this.List.findIndex((value, index, arr) => {
              return value.type == "0";
            });
            // 户型图index
            this.huxing = this.List.findIndex((value, index, arr) => {
              return value.type == "7";
            });
            // 规划图index
            this.guihua = this.List.findIndex((value, index, arr) => {
              return value.type == "6";
            });
            this.guihua =
              this.guihua == -1 ? v1.length + v2.length : this.guihua;
            // 样板间index
            this.yangbanjian = this.List.findIndex((value, index, arr) => {
              return value.type == "2";
            });
            this.yangbanjian =
              this.yangbanjian == -1
                ? v1.length + v2.length + v3.length
                : this.yangbanjian;
            // 实景图index
            this.shijing = this.List.findIndex((value, index, arr) => {
              return value.type == "3";
            });
            this.shijing =
              this.shijing == -1
                ? v1.length + v2.length + v3.length + v4.length
                : this.shijing;
            // 沙盘图index
            this.shapan = this.List.findIndex((value, index, arr) => {
              return value.type == "4";
            });
            this.shapan =
              this.shapan == -1
                ? v1.length + v2.length + v3.length + v4.length + v5.length
                : this.shapan;
            // 鸟瞰图index
            this.niaokan = this.List.findIndex((value, index, arr) => {
              return value.type == "5";
            });
            this.niaokan =
              this.niaokan == -1
                ? v1.length +
                  v2.length +
                  v3.length +
                  v4.length +
                  v5.length +
                  v6.length
                : this.niaokan;

            // 配套图index
            this.peitao = this.List.findIndex((value, index, arr) => {
              return value.type == "1";
            });
            this.peitao =
              this.peitao == -1
                ? v1.length +
                  v2.length +
                  v3.length +
                  v4.length +
                  v5.length +
                  v6.length +
                  v7.length
                : this.peitao;
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 定位的点击事件
    addressLocation() {
      // this.showMap =  true;
      this.addLocation = this.$store.state.location;
      this.$router.push({ path: "map", query: { address: this.addLocation } });
    },

    // 旅居卡的点击事件
    Membership() {
      let src = "https://www.guoanfamily.com/MemberShipExplain/#/";
      let title = "入会说明";
      this.$router.push({
        path: "/MemberIfream",
        query: { buildid: this.buidID, title: title, src: src }
      });
    },
    // 户型图的点击事件
    houseTyeImgClick(val) {
      // console.log(val);
      let id = val;
      this.$router.push({
        path: "houseType",
        query: { typeid: id, buildid: this.buidID }
      });
    },
    //查看更多按钮的点击事件
    showBtn() {
      this.showBuilDetial = true; //跟多信息的隐藏状态
      this.fadeInShow = false; //查看跟多按钮
      this.fadeInOut = true; //收起按钮
    },
    // 查看全部房源的点击事件
    allHouse() {
      // this.showalert('敬请期待')
      // let userPhone = localStorage.getItem('userPhone');
      if (!this.LoToken() && !this.UserPhone()) {
        // this.$router.push({ path: 'house_resource', query: { buildid: this.buidID } })
        if (this.buidDetial.buildname == "北海第一城") {
          this.msgalert("暂无房源信息");
          return false;
        }
        this.Buildonload();
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 在线订房的点击事件
    onlineBooking() {
      if (this.buidDetial.buildname == "北海第一城") {
        this.msgalert("暂无房源信息");
        return false;
      }
      // this.showalert('敬请期待')

      if (!this.LoToken() && !this.UserPhone()) {
        this.Buildonload();
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 查询楼盘是否有房源的方法
    Buildonload() {
      let buildid = this.buidID;
      let housebaseinfoport = this.buidDetial.housebaseinfoport;
      if (housebaseinfoport == "国安家服务端") {
        // alert(buildid);
        this.get(
          "palmsaleapp/api/v1/build/buildhousenumber?buildid=" +
            buildid +
            "&housetypeid=",
          { interfaceType: "newHouse" }
        ).then(
          response => {
            if (response.status == 200) {
              if (response.data.error == "暂无房源信息") {
                this.msgalert(response.data.error);
                return false;
              } else {
                this.$router.push({
                  path: "house_resource",
                  query: { buildid: this.buidID }
                });
              }
            }
          },
          response => {
            this.showalert(response.msg);
          }
        );
      } else {
        this.msgalert("暂无房源信息");
      }
    },
    //收起按钮的点击事件
    outBtn() {
      this.showBuilDetial = false; //跟多信息的隐藏状态
      this.fadeInShow = true; //查看跟多按钮
      this.fadeInOut = false; //收起按钮
    },
    //收藏按钮的点击事件
    collentClick() {
      // let userPhone = localStorage.getItem('userPhone');
      // if (!this.notEmpty(userPhone)) {
      if (!this.LoToken() && !this.UserPhone()) {
        let post_data = {
          collectTitle: this.buidDetial.buildname, //楼盘名
          collectResume: this.buidDetial.averageprice, //价格
          collectContent: this.buidDetial.address, //地址
          adjunctContent: this.buidDetial.buildingarea, //建筑面积
          imageName: this.collectImg, //图片名称
          collectUrl: window.location.hash, //当前url
          type: "1" //收藏的类型,楼盘为1,户型为2
        };
        // console.log('参数',post_data);
        this.post("CollectController/saveCollectInfo", post_data, {interfaceType: "collect"}).then(response => {
              // console.log('进来接口'+JSON.stringify(response));
            if (response.code == 200) {
              this.msgalert("收藏成功");
              let a = JSON.parse(localStorage.getItem("userInfroMap"));
              a.collectList.push(window.location.hash);
              localStorage.setItem("userInfroMap", JSON.stringify(a));
              this.collent = false; //取消收藏按钮
              this.quitCollent = true; //收藏按钮
            } else {
              this.showalert(response.msg);
            }
          },
          response => {
            this.showalert(response.msg);
          }
        );
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 取消收藏的点击事件
    quitCollentClick() {
      let post_data = {
        collectUrl: window.location.hash
      };
      this.post("CollectController/delCollectInfo", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          // console.log(response);
          if (response.code == 200) {
            this.msgalert("取消收藏成功");
            let a = JSON.parse(localStorage.getItem("userInfroMap"));
            let arr = a.collectList;
            let hrefs = window.location.href;
            arr.splice(arr.indexOf(hrefs), 1);
            a.collectList = arr;
            localStorage.setItem("userInfroMap", JSON.stringify(a));
            this.collent = true; //取消收藏按钮
            this.quitCollent = false; //收藏按钮
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 时间选择框
    onChange(val) {
      // console.log('change', val)
      this.selecteddate = val[0] + " " + val[1] + ":" + val[2] + ":" + "00";
    },
    // 预约看房的点击事件
    appointmentClick() {
      // let userPhone = localStorage.getItem('userPhone');
      if (!this.LoToken() && !this.UserPhone()) {
        this.rooms = this.buidDetial.buildname;
        let username = localStorage.getItem("userName");
        if (!this.notEmpty(username)) {
          this.username = username;
        } else {
          this.username = "";
        }
        this.mobile = localStorage.getItem("userPhone");
        this.shows = true;
        this.market = true;
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 立即预约的点击事件
    btnSubClick() {
      if (this.notEmpty(this.username)) {
        // this.showalert('请输入姓名');
        this.msgalert("请输入姓名");
        return false;
      }
      if (this.notEmpty(this.mobile)) {
        this.msgalert("请输入电话");
        return false;
      }
      if (this.notEmpty(this.numberPeople)) {
        this.msgalert("请输入带看人数");
        return false;
      }
      if (this.notEmpty(this.selecteddate)) {
        this.msgalert("请选择看房时间");
        return false;
      }

      let post_data = {
        custname: this.username, //姓名
        phonenum: this.mobile, //客户电话
        custphone: localStorage.getItem("userPhone"), //注册手机号
        scancount: this.numberPeople, //看房人数
        buildid: this.buidID, //楼盘id
        scantime: this.selecteddate, //预约时间
        myappointmentUrl: window.location.href,
        buildname: this.rooms
      };
      // console.log(JSON.stringify(post_data))
      this.post("palmsaleapp/api/v1/build/collectsave", post_data, {
        interfaceType: "newHouse"
      }).then(
        response => {
          if (response.status == 200) {
            this.msgalert(response.msg);
            this.market = false;
            this.shows = false;
          } else {
            this.msgalert(response.msg);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 遮罩层的点击事件
    markedClick() {
      this.shows = false;
      this.market = false;
      this.shareImg = false;
      this.shareAlert = false;
    },
    // 分享的点击事件
    ShareClick() {
      if (this.$store.state.showWxTitle) {
        this.market = true;
        this.shareImg = true;
        this.wxduanShare();
      } else {
        this.shareAlert = true;
        this.market = true;
      }
      // console.log(this.buidDetial.buildname);
      if (this.buidDetial.buildname == "晋唐海湾") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/jintang.html";
        this.shareTitle = "晋唐海湾";
        this.shareDesc = "晋唐海湾";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "北海第一城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/northSea.html";
        this.shareTitle = "中信国安 · 北海第一城";
        this.shareDesc = "中信国安 · 北海第一城";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "山海龙城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/shanhailongcheng.html";
        this.shareTitle = "山海龙城";
        this.shareDesc = "山海龙城";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "峨眉国安公馆") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareTitle = "峨眉国安公馆";
        this.shareDesc = "峨眉国安公馆";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "华亚欢乐城") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/huaya.html?";
        this.shareTitle = "华亚欢乐城";
        this.shareDesc = "华亚欢乐城";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "平海·美龄湾") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/meilingwan.html";
        this.shareTitle = "平海·美龄湾";
        this.shareDesc = "平海·美龄湾";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else {
        if(this.$store.state.showWxTitle){
           this.shareLink = window.location.href;
           this.shareTitle = this.buidDetial.buildname;
           this.shareDesc = this.buidDetial.buildname;
           this.shareLeftImg = this.collectImg;
        }else{
           this.shareLink = 'https://www.guoanfamily.com/guoanjiaApp/#/building_detial?buildID=' + this.buidID;
           this.shareTitle = this.buidDetial.buildname;
           this.shareDesc = this.buidDetial.buildname;
           this.shareLeftImg = this.collectImg;
        }
      }
    },
    // 分享到微信的点击事件
    weixinhaoyoufenxiangClick() {
      this.wxShare();
    },
    // 分享到朋友圈的点击点击事件
    weixinFriendsClick() {
      this.friendShare();
    },
    // 取消分享的点击事件
    exitShareClick() {
      let setTime = setTimeout(() => {
        this.market = false;
      }, 900);
      this.shareAlert = false;
    },
    //分享到朋友圈方法
    friendShare() {
      let self = this;
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
    // 分享到微信朋友方法
    wxShare() {
      let self = this;
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
          //    this.msgalert('已取消分享');
        }
      );
    },
    // 微信端的分享
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
          self.market = false;
          self.shareImg = false;
        },
        cancel: function(res) {
          self.msgalert("已取消");
          self.market = false;
          self.shareImg = false;
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      // 分享到朋友圈
      self.$wechat.onMenuShareTimeline({
        title: self.shareTitle, //标题
        desc: self.shareDesc, //描述
        link: self.shareLink, //连接地址指打开分享时页面地址
        imgUrl: self.shareLeftImg, //图片
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.market = false;
          self.shareImg = false;
        },
        cancel: function(res) {
          self.msgalert("已取消");
          self.market = false;
          self.shareImg = false;
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      self.$wechat.error(function(res) {});
    },

    //alert弹窗
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
    // 获取从上个页面传过来的楼盘id
    this.buidID = this.$route.query.buildID;
    this.buidingLoade();
    // alert(this.buidID);
    // 日期时间处理
    let date = new Date();
    let nowmonth = date.getMonth() + 1;
    this.startdate = date.getFullYear() + "/" + nowmonth + "/" + date.getDate();
    date.setMonth(date.getMonth() + 1);
    let nextmonth = date.getMonth() + 1;
    this.enddate = date.getFullYear() + "/" + nextmonth + "/" + date.getDate();
    // 获取localstorage
    let user = JSON.parse(localStorage.getItem("userInfroMap"));
    if (!this.notEmpty(user)) {
      let userArr = user.collectList;
      // alert('收藏列表'+userArr.toString())
      let hres = window.location.hash;
      // console.log('地址',hres);
      for (let i = 0; i < userArr.length; i++) {
        if (hres == userArr[i]) {
          this.collent = false; //取消收藏按钮
          this.quitCollent = true; //收藏按钮
          return;
        }
      }
    }
    // 判断类型
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped lang='less'>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/close";
@import "~vux/src/styles/center.less";

.body_top {
  margin-top: 0.6rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 1.2rem;
  right: 0;
  overflow: auto;
  transform: translate3d(0, 0, 0);
}
.body_tops {
  margin-top: 0.6rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}
.wx_top {
  margin-top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 1.2rem;
  right: 0;
  overflow-y: scroll;
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

// 图片放大功能的外层样式
.blackmarket {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.9;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 11;
}
// 头部轮播图部分
.swipertop {
  width: 100%;
  height: 5rem;
  // background: red;
  position: relative;
}
// 头部样式
.ImgHeader {
  width: 100%;
  height: 1rem;
  background: rgba(51, 51, 51, 0.8);
  position: absolute;
  bottom: 0rem;
  left: 0;
  z-index: 80;
  line-height: 1rem;
  .EffectImg {
    width: 50%;
    height: 100%;
    float: left;
    position: relative;
    border-right: 0.05rem solid #fff;
  }
  .ApartMentImg {
    width: 49%;
    height: 100%;
    float: right;
    position: relative;
  }
  img {
    width: 0.5rem;
    margin-top: 0.25rem;
    position: absolute;
    left: 0.75rem;
  }
  span {
    font-size: 0.3rem;
    color: #ffffff;
    margin-bottom: 10px;
    display: block;
    position: absolute;
    top: 0em;
    left: 1.5rem;
  }
}
.ImgHeader1 {
  width: 100%;
  height: 1rem;
  background: rgba(51, 51, 51, 0.5);
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 2;
  line-height: 1rem;
  .EffectImg {
    width: 50%;
    height: 100%;
    float: left;
    position: relative;
    border-right: 0.05rem solid #fff;
  }
  .ApartMentImg {
    width: 49%;
    height: 100%;
    float: right;
    position: relative;
  }
  img {
    width: 0.5rem;
    margin-top: 0.25rem;
    position: absolute;
    left: 0.75rem;
  }
  span {
    font-size: 0.3rem;
    color: #ffffff;
    margin-bottom: 10px;
    display: block;
    position: absolute;
    top: 0em;
    left: 1.5rem;
  }
}

.buildDetial {
  width: 100%;
  position: relative;
  border-bottom: 0.25rem solid #f0f0f0;
  position: relative;
  .allHouse {
    position: absolute;
    right: 0;
    top: 1rem;
    font-size: 0.3rem;
    img {
      width: 0.4rem;
      float: left;
    }
    span {
      display: block;
      float: right;
      margin-left: 0.1rem;
      margin-right: 0.5rem;
      font-size: 0.25rem;
      line-height: 0.5rem;
      font-weight: bold;
    }
  }
  .location {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../../../static/new/img/dingwei.png") no-repeat;
    background-size: 75%;
    position: absolute;
    bottom: 1.25rem;
    right: 0.5rem;
  }
  .share {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    z-index: 0;
    right: 0.25rem;
    top: 0.25rem;
    background: url("../../../static/new/img/shares.png") no-repeat;
    background-size: 80%;
  }
  .topNmae {
    width: 100%;
    height: 1rem;
    .buildName {
      font-weight: 600;
      line-height: 1rem;
      font-size: 0.4rem;
      color: #323232;
      display: block;
      float: left;
      padding-left: 0.25rem;
    }
    .buildTag {
      display: block;
      float: left;
      height: 1rem;
      ul {
        margin-top: 0.25rem;
        margin-left: 0.5rem;
        li {
          float: left;
          border: 1px solid #d53340;
          color: #d53340;
          border-radius: 0.075rem;
          padding: 0.05rem;
          font-size: 0.25rem;
          margin-left: 0.125rem;
        }
      }
    }
  }
  .detial {
    overflow: hidden;
    // padding-left: 0.25rem;
    height: 0.75rem;
    .kaitime {
      line-height: 0.5rem;
      width: 1.5rem;
      text-align: justify;
      float: left;
      padding-left: 0.25rem;
      font-size: 0.25rem; // height: 1.6rem;
      span {
        display: inline-block;
        padding-left: 100%;
      }
    }
    .ovaspan {
      float: left;
      line-height: 0.5rem;
    }
    .rightContent {
      height: 100%;
      float: left;
      line-height: 0.03rem;
      width: 70%;
      text-align: left;
      overflow: hidden;
      .price {
        font-weight: 600;
        color: #d7000f;
        font-size: 0.3rem;
      }
      .priceContent {
        font-size: 0.25rem;
        display: block;
        height: 0.5rem;
        line-height: 0.5rem;
        overflow: hidden;
      }
    }

    span {
      font-size: 0.3rem;
    }
  }
}

// 户型样式
.housTypeHeader {
  width: 100%;
  height: 1rem;
  text-align: left;
  // padding-left: .25rem;
  line-height: 0.75rem;
  img {
    margin-top: 0.25rem;
    width: 0.45rem;
    float: left;
    margin-left: 0.25rem;
  }
  .types {
    margin-left: 0.25rem;
  }
  span {
    font-size: 0.35rem;
    display: block;
    float: left;
    line-height: 1.1rem;
  }
}

.housTypeImgScroll {
  ul {
    width: 100%;
    overflow-x: auto;
    display: flex;
    li {
      margin-left: 0.25rem;
    }
  }
  .HousTypeTop {
    width: 5rem;
    height: 1.5rem;
    background: rgb(240, 240, 240);
    .HousTypeTopLeft {
      width: 1.5rem;
      float: left;
      background: rgb(154, 116, 79);
      padding-bottom: 0.25rem;
      padding-left: 0.2rem;
      padding-top: 0.25rem;
      span {
        width: 100%;
        display: block;
        color: #ffffff;
        font-size: 0.3rem;
        text-align: left;
      }
    }
    .HousTypeTopRight {
      padding-left: 0.2rem;
      float: left;
      width: 2.5rem;
      padding-top: 0.25rem; // background: red;
      span {
        width: 100%;
        display: block;
        color: #333333;
        font-size: 0.275rem;
        line-height: 0.6rem;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  .HousTypeBottomImg {
    clear: left;
    text-align: center;
    width: 100%;
    padding-top: 10px;
    img {
      width: 4.5rem;
    }
  }
}

// 按钮样式
.showBackBtn {
  width: 100%;
  height: 0.75rem;
  margin-bottom: 0.25rem;
  position: relative;
  button {
    font-size: 0.35rem;
    border: 1px solid #e00019;
    color: #e00019;
    border-radius: 0.2rem;
    display: inline-block;
    width: 50%;
    height: 100%;
    line-height: 0.8rem;
    padding-bottom: 41px;
    background: #ffffff;
    position: absolute;
    left: 25%;
    top: 0;
  }
}

// 最底部样式
.lastBottom {
  padding: 0 14px;
  margin-bottom: 10px;
  border-bottom: 1px dashed #f8f8f8;
  line-height: 42px;
  height: 41px;
  text-align: left;
  span {
    color: #606060;
    font-size: 14px;
    border-left: 4px solid #ffd273;
    padding-left: 5px;
  }
}

.bottomBig {
  overflow: hidden;
  padding: 0 0.35rem 1.5rem 0.4rem;
  position: relative;
  .phoneNumber {
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: rgb(84, 152, 4);
    text-align: left;
  }
  a {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    background: url("../../../static/new/img/callPhone.png");
    background-size: cover;
    position: absolute;
    right: 0.5rem;
    bottom: 1.5rem;
  }
  .explain {
    font-size: 12px;
    padding-top: 3px;
  }
}
.shareAlert {
  width: 100%;
  height: 0rem;
  position: fixed;
  transition: 0.9s;
  bottom: 0;
  background: #fff;
  z-index: 200;
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
        text-align: center;
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
        text-align: center;
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
  height: 3rem;
}
.bottom {
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
    background: url("../../../static/new/img/collent1.png") no-repeat;
    background-position: 20%;
    background-size: 30%;
    padding-left: 0.75rem;
    font-size: 0.35rem;
  }
  .quitCollent {
    width: 100%;
    height: 1.2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: url("../../../static/new/img/quitCollent.png") no-repeat;
    background-position: 20%;
    background-size: 30%;
    padding-left: 0.75rem;
    font-size: 0.35rem;
  }
  .yuyue {
    width: 35%;
    height: 100%;
    background: rgba(249, 117, 0, 0.7);
    text-align: center;
    color: #ffffff;
    font-size: 0.35rem;
  }
  .dingfang {
    width: 35%;
    height: 100%;
    background: url("../../../static/new/img/btnbj.png") no-repeat;
    background-size: cover;
    text-align: center;
    color: #ffffff;
    font-size: 0.35rem;
  }
}

//遮罩层样式
.dialog {
  background: #ffffff;
  position: fixed;
  width: 90%;
  top: 20%;
  left: 5%;
  z-index: 150;
  border-radius: 0.25rem;
}

//遮罩内部样式
.dialogTop {
  position: relative;
  text-align: center;
  line-height: 1.05rem;
  background: #ff8a00;
  border-radius: 0.125rem 0.125rem 0 0;
  color: #fff;
  font-size: 0.4rem; // border-radius: .4rem .4rem 0 0;
}

// 底部图片缩放栏
.bottomFixed {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 12; // background: red;
  background: red;
  overflow-x: auto;
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

// 分享提示文字样式
.righthorn {
  width: 100%;
  font-size: 0.75rem;
  text-align: center;
  height: 0.8rem; // background: red;
  color: #ffffff;
  position: fixed;
  z-index: 12;
  left: 0;
  top: 0;
  line-height: 0.75rem;
  font-weight: 500;
  margin-top: 3.5rem;
}

.btnYuyue {
  width: 100%;
  height: 1rem;
  text-align: center;
  color: #ff8a00;
  font-size: 0.35rem;
  background: #ffffff;
  border: none;
  border-top: 1px solid #ccc;
  border-radius: 0.125rem; // margin-bottom: 1rem;
}

// tab样式
.bottomTab {
  width: 100%;
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem; // background: red;
  position: fixed;
  left: 0;
  bottom: -0.35rem;
  z-index: 100005;
  overflow-x: auto;
}

.box {
  padding: 15px;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: red;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}

.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}

.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}

.tab-swiper {
  background-color: #333333;
  color: #ffffff;
  height: 100px;
}

.vux-tab {
  background: #333333; // color: #ffffff;
}

.vux-tab .vux-tab-item {
  color: #fff;
  font-size: 0.3rem;
  width: 2rem;
  text-align: center;
}
</style>
<style lang =  'less'>
.weui-cells {
  font-size: 0.35rem !important;
}
.vux-swiper-desc {
  display: none;
}
</style>
