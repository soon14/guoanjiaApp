<style scoped lang="scss">
 @import "../../style/theme.scss";
    $height: 0.7rem;
.house-list{
    position: relative;
    width: 100%;
    height: 100%;
    .list-box{
        top: 1.5rem;
        position: absolute;
        // bottom: $height;
        width: 100%;
        height: 100%;
        background-color: #e8e8e8;
    }
    .regloin{
            position: absolute;
            width: 100%;
            top:0.76rem;
            z-index: 2;
            opacity: 1;
            background-color: $greyColor;
            font-size:$mostFontSize;
        }
    .input-search{
        fill: #fff;
        position: absolute;
        top:0.12rem;;
        right:0.36rem;
    }
    .type-search {
        position: fixed;
        top:0.8rem;
        width: 100%;
        height: $height;
        line-height: $height;
        background: #fff;
        font-size: $reminderFontSize;
        border-bottom: 1px solid #ccc;
        z-index: 3;
            .flex-demo {
                text-align: center;
                background-clip: padding-box;
                color: #333333;
                position: relative;
            }
            .open-icon {
                display: inline-block;
                position: absolute;
                width: 30%;
                top: 24%;
            }

            .stop-icon {
                display: inline-block;
                position: absolute;
                width: 30%;
                top: 14%;
            }
            .long-string{
                position: absolute;
                left: 2rem;
            }
        }
        .market {
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0.6;
                position: fixed;
                left: 0;
                bottom: 0;
                top: 0;
                right: 0;
                margin: auto;
                z-index: 1;
            }
    }
    .fade-mark-enter-active, .fade-mark-leave-active {
        transition: opacity 0  ;
    }
    .fade-mark-enter, .fade-mark-leave-active {
        opacity : 0
    }
</style>

<template>
    <div class="house-list fixContent">
        <!--<ga-page-header>
            <p slot="middle">
                <input type="text" class="header-search" placeholder="请输入您想住的区域或小区" @click="searchChange" v-model="headerSearch">
            </p>
            <p slot="right-btn">
                <x-icon type="ios-search" size="30" class="input-search"></x-icon>
            </p>
        </ga-page-header>-->
         <div class="type-search">
                <flexbox>
                    <flexbox-item>
                        <div class="flex-demo" @click="regionClick">
                                <span>区域</span>
                                <img class="open-icon" v-if="region" :src="openUrl" />
                                <img class="stop-icon" v-if="!region" :src="stopUrl" />
                                <span class="long-string">|</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="subwayClick">
                                <span>地铁</span>
                                <img class="open-icon" v-if="subway" :src="openUrl" />
                                <img class="stop-icon" v-if="!subway" :src="stopUrl" />
                                <span class="long-string">|</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="priceClick">
                                <span>价格</span>
                                <img class="open-icon" v-if="price" :src="openUrl" />
                                <img class="stop-icon" v-if="!price" :src="stopUrl" />
                                <span class="long-string">|</span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="filtrateClick">
                                <span>筛选</span>
                                <img class="open-icon" v-if="filtrate" :src="openUrl" />
                                <img class="stop-icon" v-if="!filtrate" :src="stopUrl" />
                        </div>
                    </flexbox-item>
                </flexbox>
        </div>
        <!-- 区域 -->

        <div class="regloin">
            <region-subway :isShow="region" :type="isType" @changeRegionSubway="changeRegionSubway" :RegionList = "RegionList"></region-subway>
        </div>
        <!-- 地铁 -->
        <div class="regloin">
            <region-subway :isShow="subway" :type="isType" @changeRegionSubway="changeRegionSubway" :RegionList = "RegionList"></region-subway>
        </div>
        <!-- 价格 -->
        <div class="regloin">
            <price-list :isShow="price" @changePrice="changePrice"></price-list>
        </div>
        <!-- 筛选 -->
        <div class="regloin">
            <filtrate :isShow="filtrate" @changeFiltrate="changeFiltrate"></filtrate>
        </div>
        <div class="list-box">
             <house-list selectType="houseList" :HouseListData="HouseListData" @closeMarket="closeMarket"></house-list>
        </div>
        <!-- 遮罩层 -->
         <transition name="fade-mark">
            <div class="market" v-if="market" @click="markets"></div>
         </transition>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem } from 'vux'
    import HouseList from '../../components/HouseList/HouseList.vue'
    import Filtrate from '../../components/HouseList/Filtrate.vue'
    import RegionSubway from '../../components/HouseList/RegionSubway.vue'
    import PriceList from '../../components/HouseList/PriceList.vue'
    import openUrl from "../../../../static/rent/img/house-list/open.png"
    import stopUrl from "../../../../static/rent/img/house-list/stop.png"
    export default {
        name: 'HouseListOne',
        components: {
            HouseList,
            Flexbox,
            FlexboxItem,
            Filtrate,
            RegionSubway,
            PriceList,
        },
        data() {
            return {
                //筛选信息
                HouseListData:{
                    timeStamp: 0,
                    roomNo: "",
                    productType: "",
                    districtId: "",
                    subwayLineId: "",
                    stationsId: "",
                    priceMax: "",
                    priceMin: "",
                    textSearch: "",
                    size: 10,
                    userAreaMin:"",
                    userAreaMax:"",
                },
                openUrl:openUrl,
                stopUrl:stopUrl,
                region:false,
                subway:false,
                price:false,
                filtrate:false,
                market:false,    //遮罩
                isType:"",
                // regions:false,
                RegionList:[],
                // isSearch:false, //选择进行请求
                regionSubwayLog:[],
                headerSearch:"", //Search输入框
            }
        },

        created() {
            if(this.$route.query.data){
                this.HouseListData.textSearch = this.$route.query.data;
                this.headerSearch = this.$route.query.data || "";
                // this.isSearch = true;
            }
        },

        mounted() {
        },

        methods: {
            //获取区域或地铁数据
             getRegionSubway(){
                let url ="";
                if(this.region && this.isType=="region"){
                    url = "common/getAreaList";
                }else if(this.subway && this.isType=="subway"){
                    url = "common/getSubwayLine";
                }
                    this.post(url,{}).then((res)=>{
                        this.RegionList = res.data;
                    })

             },
            //区域
            regionClick(){
                this.region = !this.region;
                this.filtrate = false;
                this.subway = false;
                this.price = false;
                this.market = this.region; //遮罩
                // this.region = !this.region;
                this.isType = "region";
                if(this.region){
                    this.getRegionSubway();
                }
            },
            //地铁
            subwayClick(){
                this.subway = !this.subway;
                this.filtrate = false;
                this.region = false;
                this.price = false;
                this.market = this.subway; //遮罩
                // this.subway = !this.subway
                this.isType = "subway";
                if(this.subway){
                    this.getRegionSubway();
                }
            },
            //价格
            priceClick(){
                this.price = !this.price;
                this.filtrate = false;
                this.region = false;
                this.subway = false;
                // this.regions = false;
                this.market = this.price; //遮罩
            },
            //筛选
            filtrateClick(){
                this.region = false;
                // this.regions = false;
                this.subway = false;
                this.price = false;
                this.filtrate = !this.filtrate;
                this.market = this.filtrate; //遮罩
            },
            //区域地铁返回数据
            changeRegionSubway(id){
                // this.HouseListData.districtId = id;
                // if(id || id ===""){
                //     this.market = false;
                //     this.subway = false;
                //     this.region = false;
                //     this.regions = false;
                //     this.isSearch = true;
                // }
            },
            //价格返回数据
            changePrice(data){
                //  this.HouseListData.priceMax = data[1]
                //  this.HouseListData.priceMin = data[0]
                //  this.market = false;
                //  this.price = false;
                //  this.isSearch = true;
            },
            //筛选返回
            changeFiltrate(data){
                // this.filtrate = false;
                // this.market = false;
                // this.HouseListData.productType = data.productType;
                // this.HouseListData.roomNo = data.roomNo;
                // this.HouseListData.userAreaMin = data.userAreaMin;
                // this.HouseListData.userAreaMax = data.userAreaMaxs;
                // this.isSearch = true;
            },
            closeMarket(data){
                this.filtrate = data;
                this.market = data;
                this.price = data;
                this.subway = data;
                this.region = data;
                // this.regions = data;
                // this.isSearch = true;
            },
             //遮罩点击
            markets(){
            this.filtrate = false;
            this.region = false;
            // this.regions = false;
            this.subway = false;
            this.price = false;
            this.market = !this.market;
            },
            //input框监听
            searchChange(){
                this.$router.push('/HouseListOne/HotSearch')
            },
            // back(){
            //     this.$router.back();
            // }
        },
    }
</script>
