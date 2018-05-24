<style scoped lang="scss">
     @import "../../style/theme.scss";
    $height: 0.7rem;
    $k:1;
    $ColorClass: $labelOne, $labelTwo, $labelThree;
    $font:0.14rem;
    .logo {

    }
    .top{
         height:0.8rem;
    }
    .list-box{
        top: 4rem;
        position: absolute;
        bottom: $height;
        width: 100%;
        background-color: #e8e8e8;
    }
    .list-item{
            // background-color:$greyColor;
            margin-top:1.8rem;
        }
        .table-view{
            padding:0px 5%;
            .table-view-cell{
                background-color: $titleColor;
                box-shadow: 0px 2px 0px #bbbbbb;
                position: relative;
                border-radius: 5px;
                width: 100%;
                height: 2.45rem;
                margin:0.25rem 0px;
                .house-top{
                    width: 100%;
                    height: 100%;
                .house-object{
                    float: left;
                    width: 30%;
                    height: 80%;
                    .pull-left{
                        display: inline-block;
                        width: 1.8rem;
                        height: 1.5rem;
                        margin-left: 0.2rem;
                        margin-top:0.2rem;
                    }
                }
                }
                .house-body{
                    float: left;
                    width: 70%;
                    font-size:$titleFontSize;
                    margin-top:$font;
                    p,.house-desc,.house-label{
                        text-align: left;
                        margin-left: 0.36rem;
                        padding-bottom:0.16rem;
                    }
                    .house-desc,.house-label{
                        font-size:$mostFontSize;
                    }
                    .bedroom{
                        color:$mostColor;
                        margin-right:0.3rem;
                    }
                    .area{
                        color:$mostColor;
                        display:inline-block;
                    }
                    .house-label{

                        .label{
                            float: left;
                            margin-right:0.15rem;
                            display:inline-block;
                            padding: 0.07rem 0.2rem;
                            border-radius:3px;
                            color:$titleColor;
                        }
                        @mixin color($bgColor){
                            background-color: $bgColor;

                        }
                        @for $i from 1 through 3{
                            .label:nth-child(3n+#{$i}){
                                @include color(nth($ColorClass,$i));
                            }
                        }
                    }
                    .trash{
                        position: absolute;
                        bottom:0.7rem;
                        right: 0.3rem;
                        img{
                            width: 0.4rem;
                            height: 0.4rem;
                        }
                    }
                }
                .house-bottom{
                    position: absolute;
                    bottom: 0px;
                    width: 100%;
                    height: 20%;
                    font-size: $mostFontSize;
                    border-top: 1px solid $lineColor;
                    .money-month{
                        margin-left:0.48rem;
                        .money{
                            color:$partColor;
                        }
                    }
                }
            }
        }
        .on-mover{
            font-size: $titleFontSize;
            width: 100%;
            text-align: center;
            color:#999;
            margin-top: 0.8rem;
        }
        .emptyios{
			height: 1.3rem;
		}
		.emptyandroid{
			height: 1.1rem;
		}
</style>

<template>
    <div class="house-list fixContent">
        <!--<ga-page-header >
            <p slot="middle">
                <input type="text">
            </p>
            <p slot="right-btn">哈哈</p>
        </ga-page-header>-->

        <!--<ga-page-header title="我的收藏">
            <p slot="right-btn"></p>
        </ga-page-header>-->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        <img class="logo" :src="sclogo" alt="">
         <div class="list-box">
              <div class="housing-resource">
                <scroller class="scroller"
                    :on-refresh="refresh"
                    :on-infinite="infinite"
                    ref="myList"
                >
                        <div class="list-item">
                            <ul class="table-view">
                                <li class="table-view-cell" v-for="item in HouseLists" :key="item.id" @click="goHouseDetail">
                                    <!-- <router-link :to="{path:'/HouseList/houseDetail',query:{id:item.id }}">  -->
                                        <div class="house-top">
                                            <div class="house-object">
                                                <img class="pull-left" :src="item.image">
                                            </div>
                                            <div class="house-body">
                                                <p v-text="item.communityName"></p>
                                                <div class="house-desc">
                                                    <span class="bedroom">{{item.buildNo}}号楼-{{item.roomName}}</span>
                                                    <span class="area">{{item.buildFloor}}层|{{item.livingNo}}㎡</span>
                                                </div>
                                                <div class="house-label"  >
                                                    <span class="label" v-for="(label,index) in item.tags" :key="index">{{label}}</span>
                                                </div>
                                                <!-- <div v-if="isTrash" class="trash" @click="TrashClick">
                                                    <img :src="trash" alt="">
                                                </div> -->
                                            </div>
                                        </div>
                                        <div class="house-bottom">
                                            <p class="money-month">
                                                <span class="money">{{item.price}}</span>
                                                <span>元/月</span>
                                            </p>
                                        </div>
                                    <!-- </router-link> -->
                                </li>
                            </ul>
                            <div class="on-mover" v-if="isMover" @click="moverClick">点击加载更多</div>
                        </div>
                </scroller>
            </div>
        </div>
        <ga-page-bottom></ga-page-bottom>
    </div>
</template>

<script>
    import openUrl from "../../../../static/rent/img/open.png"
    import stopUrl from "../../../../static/rent/img/stop.png"
    import sclogo from "../../../../static/rent/img/collection/sclogo.png"
    export default {
        name: 'Collection',
        data() {
            return {
                username: "",
                password: "",
                HouseLists: [],
                isMover:true,
                androidOrIos:true,	//默认为安卓登录

            }
        },
        components: {
        },
		created(){
			this.isIosAndroid();
		},
        methods: {
        	isIosAndroid(){
				//判断是安卓还是ios登录，定义到变量中
				if(this.AndroidOrIos()){
					//安卓
					this.androidOrIos = true; 
				}else{
					//ios
					this.androidOrIos = false; 
				}
			},
            submit() {
                this.$vux.alert.show({
                    title: '提示',
                    content: '登录成功',
                    onShow() {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide: ()=> {
                        console.log('Plugin: I\'m hiding')
                        this.$router.replace("/")
                    }
                })
            },
             //获取收藏列表
            getHouseList(){
                let Url = "HouseInfoController/getHouseList";

                let req = Object.assign({}, this.HouseListData);
                return this.post(Url, req,{
                    interfaceType: "collect"
                }).then((res)=>{
                    // if(res.data.length > 0){
                    //     this.HouseLists = res.data.map(item => {
                    //         item.tags= item.tags ? item.tags.split(",") : "";
                    //         return item;
                    //     });
                    // }
                        if(res.data.length > 0){
                            res.data.forEach(item => {
                                item.tags= item.tags ? item.tags.split(",") : "";
                                this.HouseLists.push(item)
                            });
                        }
                        this.setSession(this.KEYS.SEARCH_CONTENT,"")
                    if(res.data.length < 10){
                        this.isMover = false;
                        this.isUpload =true;
                        return true;
                    }else{
                        this.isUpload =false;
                        this.isMover = true;
                        return false;
                    }
                })
            },
            goHouseDetail(){

            },
            moverClick(){
                // if(this.isMover){

                // }
                this.getHouseList();
            },
            refresh(done){
                this.HouseLists = [];

                this.getHouseList().then((res)=>{

                    done(res)
                })
            },

            infinite(done){
                if(this.preventLoad){
                    done(true);
                    return;
                }
                if(this.isUpload){
                    done(true)
                    return;
                }
                if(this.HouseLists.length!=0){
                    this.HouseListData.timeStamp = this.HouseLists[this.HouseLists.length-1].publishTime;
                }
                this.getHouseList().then((res)=>{
                    done(res)
                })
            },
        }
    }
</script>
