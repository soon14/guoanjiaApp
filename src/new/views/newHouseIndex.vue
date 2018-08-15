<template>
    <div class="fixContent">
      <IosorAndroid></IosorAndroid>
	    <div  class='newHomeContent'>
            <div class="topTest"><span>新房首页</span></div>
            <!-- <div class="topImgdiv"></div> -->
            <swipers></swipers>
            <div class="buildLabel">
                <flexbox class="box-flex">
                    <flexbox-item :key="index" v-for="(item,index) in lableData">
                        <div class="flex-demo" @click="handleSkipRoute(index)">
                            <p>{{item.name}}</p>
                            <p>{{item.Ename}}</p>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>
             <!-- 横线 -->
            <div class="Division"></div>
            <!-- 列表 -->
            <div class="listContent">
                <ul>
                    <li class="buildLi" :key="index" v-for="(item,index) in buildListArr">
                        <div class="buildLiTop">
                            <span></span>
                            <span>{{item.city}}</span>
                            <span v-if="item.averageprice !=='售价待定'" style='line-height:.32rem;font-size:.18rem;margin-top:1px;'>均价</span>
                            <span style="font-family:font01">{{item.averageprice}}</span>
                            <span v-if="item.averageprice !=='售价待定'" style='font-size:.18rem;line-height:.32rem;margin-top:1px;'>起</span>
                        </div>
                        <div class='buildName'><span>{{item.buildname}}</span></div>
                        <div class='slideImg'>
                            <swiper :options="swiperOption" ref="mySwiper">
                                <!-- <swiper-slide :key="index1" v-for="(items,index1) in item.buildPictureList"  @click.native='slideImgClickFn(item.id)'>
                                    <div style="width:4.8rem;height:3.2rem;">
                                        <img style="width:100%;height:100%;border-radius:.1rem;" :src='`https://img.guoanfamily.com/${items.picturename}`'  alt=""/>
                                    </div>
                                </swiper-slide> -->
                                <swiper-slide @click.native='slideImgClickFn(item.id)'>
                                    <div style="width:4.8rem;height:3.2rem;">
                                        <img style="width:100%;height:100%;border-radius:.1rem;" :src='item.firstpicture'  alt=""/>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div style="width:4.8rem;height:3.2rem;">
                                        <img style="width:100%;height:100%;border-radius:.1rem;" :src='item.firstpicture'  alt=""/>
                                    </div>
                                </swiper-slide>
                            </swiper>
                        </div>
                        <div class='divLine'></div>
                    </li>
                </ul>
                <div class="clearfloat"></div>
            </div>
        </div>
    </div>
</template>

<script>
import IosorAndroid from "../components/IosorAndroid"; //引入导航栏
import swipers from "../components/Swiper"; //引入轮播图组件
export default {
   components: {
       IosorAndroid,
       swipers,
   },
   data() {
    return {
        // 头部写死的数据
        lableData:[
            {name:'海南',Ename:'HAINAN'},
            {name:'北海',Ename:'BEIHAI'},
            {name:'葫芦岛',Ename:'HULUDAO'},
            {name:'昆仑山',Ename:'KUNLUNSHAN'}
        ],
        // 楼盘列表的数组
        buildListArr:[],
        // 楼盘图片展示
        swiperOption: {
            slidesPerView: "auto",
            spaceBetween: 31,
            pagination: {
                el: ".swiper-number",
                clickable: true,
                type: "fraction"
            }
        },
    }
   },
   methods:{
    //    加载页面数据方法
    loadePageContentFn(){
        this.get(
            "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList=&porttype",
            { interfaceType: "newHouse" }
        ).then(response=>{
            if(response.status == 200){
                for (let i = 0; i < response.data.length; i++) {
                    response.data[i].firstpicture = this.concatFileUrl(
                        response.data[i].firstpicture
                    );
                    if (response.data[i].averageprice !== null) {
                        if (response.data[i].averageprice == "售价待定") {
                        response.data[i].averageprice = "售价待定";
                        } else if (response.data[i].averageprice == "") {
                        response.data[i].averageprice = "售价待定";
                        } else {
                        response.data[i].averageprice =
                            response.data[i].averageprice + "元/㎡";
                        }
                    }
                }
                this.buildListArr = response.data;
            }   
        })
    },
    //    楼盘图片的点击事件
    slideImgClickFn(id){
         this.$router.push({ path: "building_detial", query: { buildID: id } });
    },
    handleSkipRoute(i) {
        this.$router.push({path: '/arealist', query: { index: i}})
    }
   },
   mounted(){
       this.loadePageContentFn();
   }

}
</script>

<style scoped lang="less">
@font-face{
	font-family:font01;
	src:url("../../fonts/BEBASNEUE.otf");
}
    .newHomeContent{
        width:100%;
        height:100%;
        overflow-y:auto;
        padding-bottom:1rem;
        .topTest{
            width:100%;
            height:.8rem;
            font-size:0.48rem;
            color:#000000;
            line-height:40px;
            text-align:left;
            font-weight:500;
            span{
                padding-left:.3rem;
            }
        }
        .topImgdiv{
            height:4rem;
            margin-top:.1rem;
            margin-left:.3rem;
            margin-right:.3rem;
            background:url('.././../../static/new/reversionimg/indexTop.jpg') no-repeat center;
            background-size:100%;
        }
        .buildLabel{
            margin:.4rem .3rem 0 .3rem;
            height:.8rem;
            background:#fff;
            .box-flex{
                height:100%;
                overflow:hidden;
                text-align:center;
                // background:#ffffff;
                .flex-demo{
                    border-radius:5px;
                    height:.8rem;
                    background:#eeeeee;
                    p{
                        font-size:.28rem;
                        font-weight:500;
                    }
                    p:nth-child(1){
                        padding-top:.1rem;
                        color:#000000;
                    }
                    p:nth-child(2){
                        color:#cccccc;
                        font-size:.18rem;
                    }
                }
            }
        }
        .Division{
            width:100%;
            height:.2rem;
            background:#eeeeee;
            margin-top:.4rem;
        }
        .listContent{
            margin:.59rem 0rem 0 .3rem;
            height:auto;
            .buildLi{
                width:100%;
                margin-bottom:.4rem;
                .buildLiTop{
                    width:100%;
                    height:.32rem;
                    // background:green;
                    color:#000000;
                    span{
                        display:inline-block;
                        float:left;
                        font-size:.32rem;
                        line-height:.32rem;
                    }
                    span:nth-child(1){
                        width:.32rem;
                        height:.32rem;
                        margin-left:.1rem;
                        background:url('../../../static/new/img/location.png') no-repeat center;
                        background-size:100%;
                    }
                    span:nth-child(2){
                        font-size:.32rem;
                        line-height:.32rem;
                        margin-left:.15rem;
                    }
                    span:nth-child(3){
                        margin-left:.7rem;
                    }
                }
                .buildName{
                    width:100%;
                    margin-top:.2rem;
                    text-align:left;
                    font-size:.42rem;
                    color:#000000;
                    span{
                        display:inline-block;
                        margin-left:.6rem;
                    }
                }
                .slideImg{
                    height:3.2rem;
                    margin-top:.28rem;
                    margin-left:.2rem;
                    margin-right:0;
                    border-radius:.1rem 0 0 .1rem;
                }
                .divLine{
                    margin:0 .3rem 0 .3rem;
                    height:.4rem;
                    border-bottom:1px solid #ccc;
                }
                .swiper-slide{
                    width:auto;
                }
            }
            .clearfloat{
                clear:both;
                height:0;
                font-size: 1px;
                line-height: 0px;
            } 
        }
    }
</style>
