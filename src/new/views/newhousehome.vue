<template>
    <div style='height:100%'>
        <div :class="[AndroidOrIos() ? 'headerHomeAndro' : 'headerHome']" >
            <div v-if="!AndroidOrIos()" style="height: 0.2rem;"></div>
            <div class='search' :style="{paddingLeft:isECTouch()?'0.45rem':'0.9rem'}">
                <span @click="jumproute('/')" v-if='!isECTouch()'></span>
                <div class='search_wrap'>
                    <div class="vux-1px-r" @click="jumproute('searchcity')">
                        <span>{{$store.state.area}}</span>
                        <span></span>
                    </div>
                    <div  @click="jumproute('search')">
                        <img src="../../../static/new/newhouseimg/search.png" alt="">
                        <span>输入城市名称进行搜索</span>
                    </div>
                </div>
            </div>
        </div>
        <div style='background-color:#f8f8f8;z-index:1000;' :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent']">
            <div style="height: 3.8rem;">
                <swiper v-if='baseList.length != 0' :options="swiperOption" style="height: 3.8rem;">
                    <swiper-slide v-for="(item,index) in baseList" :key="index">
                        <img :src="item.multimefileName" @click='transformOut(item)' style="height:100%;width:100%;"/>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <img v-else :src="img" alt="" style="height:100%;width:100%;"/>
            </div>
            <home-nav></home-nav>
            <div>
                <div class="common" @click="jumproute('newbuildList')">
                    <div class='title'>
                        <div>
                            <span></span>
                            <span>热门楼盘</span>
                        </div>
                        <div>随时随地掌握最新资讯</div>
                    </div>
                    <img src="../../../static/new/newhouseimg/arrowright.png" alt="">
                </div>
                <hot-house></hot-house>
            </div>

            <div>
                <div class="common" @click="jumproute('information')">
                    <div class='title'>
                        <div>
                            <span></span>
                            <span>房产头条</span>
                        </div>
                        <div>随时随地掌握最新资讯</div>
                    </div>
                    <img src="../../../static/new/newhouseimg/arrowright.png" alt="">
                </div>
                <house-header></house-header>
            </div>
        </div>
    </div>
</template>
<script>
    const homeNav = resolve => require(['./../components/newhouse/newhousehomenav.vue'], resolve)
    const hotHouse = resolve => require(['./../components/newhouse/hothouse.vue'], resolve)
    const houseHeader = resolve => require(['./../components/newhouse/househeader.vue'], resolve)
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data (){
            return {
                swiperOption: {
                    speed:500,
                    loop:true,
                    autoplay:{
                        delay:2000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                        let swipercurrent=`
                                "display:inline-block;
                                width:0.4rem;
                                line-height:0.4rem;
                                text-align:center;
                                height:0.4rem;
                                font-size:0.24rem;
                                background:#fff;
                                border-radius:50%;
                                color:#e61434;
                                margin-right:0.1rem;"`,
                            swipertotal =`
                                "display:inline-block;
                                color:#fff;
                                height:0.4rem;
                                width:0.8rem;
                                line-height:0.4rem;
                                font-size:0.24rem;
                                border-radius:0.2rem;
                                text-align:center;
                                background:rgba(0,0,0,0.4);
                                "`;
                            return `<span style=${swipercurrent}>${current}</span>
                                    <span style=${swipertotal}>of ${total}</span>`;
                        }
                    }
                },
                baseList:[],
                img:''
            }
        },
        components: {
            swiper,
            swiperSlide,
            homeNav,
            hotHouse,
            houseHeader
        },
        created(){
            this.AndroidOrIos();
            this.post('/banner/appList',null,{interfaceType:'newhouse'}).then(res=>{
                if(res.data !=  null){
                    res.data.forEach(item=>{
                        item.multimefileName = this.concatFileUrl(item.multimefileName)
                    })
                    this.baseList = res.data;
                    if(this.baseList.length == 0 ){
                        this.img = require('../../../static/new/newhouseimg/newhousehomeimg1.png');
                    }
                }else{
                    this.img = require('../../../static/new/newhouseimg/newhousehomeimg1.png');
                }
            })
        },
        methods:{
            transformOut(item){
                switch (item.bannerType) {
                    case 1:
                        window.location.href = item.bannerValue;
                        break;
                    case 2 :
                        console.log(item)
                        this.$router.push({path:'newhousebuilddetail',query:{buildID:item.bannerValueId}})
                        break;
                    case 3 :
                        this.$router.push({path:'informationDetail',query:{id:item.bannerValueId}})
                        break;
                }
            },
            jumproute(_route){
                this.$router.push(_route)
            }
        }
    }
</script>
<style lang='less' scoped>
    .search{
        width:100%;
        padding:0 0.45rem 0 0.9rem;
        box-sizing: border-box;
        position: relative;
        &>span{
            position: absolute;
            left: 0;
            bottom:-0.25rem;
            height: 1.1rem;
            width: 0.7rem;
            background:url('../../../static/rent/icon-back-btn.png') no-repeat center;
            background-size: 0.42rem;
        }
        &>.search_wrap{
            background:#dbe8f9;
            height:0.6rem;
            margin-top:0.25rem;
            border-radius: 0.05rem;
            display: flex;
            &>div:nth-child(1){
                font-size: 0;
                padding-left: 0.3rem;
                box-sizing: border-box;
                line-height: 0.67rem;
                height:0.6rem;
                span:nth-child(1){
                    font-size:0.28rem;
                    color:#323232;
                    width:0.55rem;
                    overflow-y:auto;
                    display: inline-block;//增加这句即可
                    vertical-align: top;
                    white-space: nowrap;
                }
                span:nth-child(2){
                    background: url('../../../static/new/newhouseimg/searchtriangle.png') no-repeat center;
                    background-size:100% 100%;
                    width:0.20rem;
                    height:0.14rem;
                    margin:0.25rem 0.3rem 0 0.1rem;
                    display: inline-block;
                    vertical-align: top;
                }
            }
            &>div:nth-child(2){
                font-size:0.24rem;
                color:#afafaf;
                height:0.6rem;
                line-height: 0.6rem;
                padding-left:0.7rem;
                box-sizing: border-box;
                position: relative;
                img{
                    position: absolute;
                    top:0.16rem;
                    width:0.29rem;
                    height:0.28rem;
                }
                span{
                    margin-left:0.4rem;
                }
            }
        }
    }
    .common{
        width:100%;
        padding:0.3rem 0.2rem 0.24rem 0.2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>.title{
            div{
                height: 0.3rem;
                line-height: 0.3rem;
                text-align:left;
            }
            &>div:nth-child(1){
                font-size:0;
                font-weight: 900;
                color:#e61434;
                margin-bottom:0.12rem;
                &>span:nth-child(1){
                    display: inline-block;
                    width:0.06rem;
                    height: 0.3rem;
                    border-radius: 0.03rem;
                    background-color:#e61434;
                    vertical-align:top;
                }
                &>span:nth-child(2){
                    font-size:0.3rem;
                    margin-left:0.12rem;
                }
            }
            &>div:nth-child(2){
                font-size:0.2rem;
                color:#909090;
            }
        }
        &>img{
            width:0.15rem;
            height:0.25rem;
        }
    }
    .swiper-pagination{
        position: relative;
        bottom:30px;
        padding-right:0.4rem;
        box-sizing: border-box;
        text-align: right;
        font-size: 0;
    }
</style>
