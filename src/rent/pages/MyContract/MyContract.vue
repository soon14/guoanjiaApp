<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .MyContract-box{
        background:$greyColor;
        width:100%;
        height:100%;
        .MyContract-top{
            width:100%;
        }
        .MyContract-center{
            width:100%;
            height: 90%;
            overflow: scroll;
            .MyContract-center-div1{
                width:100%;
                height: 2.9rem;
                background:url('../../../assets/home/MyContract.png');
                background-size: 100% 100%;
                overflow: hidden;
                .MyContract-center-div1-box{
                    width:60%;
                    height: 2.18rem;
                    float: right;
                    margin-top:0.2rem;
                    position: relative;
                    .MyContract-center-div1-box-one{
                        width:100%;
                        height:100%;
                        background:#fff;
                        position: absolute;
                        opacity: 0.7;
                    }
                    .MyContract-center-div1-box-img{
                        width:80%;
                        height: 50%;
                        margin-left:10%;
                        position: absolute;
                        img{
                            width:100%;
                            height:90%;
                            margin-top:5%;
                        }
                    }
                    .MyContract-center-div1-box-tel{
                        width:100%;
                        height: 40%;
                        position: absolute;
                        width:80%;
                        margin-left:10%;
                        bottom:0;
                        .tel-p1{
                            font-size:12px;
                            float:right;
                            line-height: 1.09rem;
                        }
                        .tel-p2{
                            font-size:14px;
                            float:right;
                            line-height: 1.09rem;
                            font-weight: 600;
                        }
                    }
                }
            }
            .MyContract-center-div2{
                width:100%;
                height: 8rem;
                overflow: hidden;
                .MyContract-center-div2-img1{
                    width:80%;
                    height: 80%;
                    margin:10% 0 0 10%;
                    display:none;
                }
                .MyContract-center-div2-list{
                    width:96%;
                    height: 100%;
                    margin:0 0 0 2%;
                    position: relative;
                    .vux-tab{
                        background:#e8e8e8 !important;
                        height:10%;
                    }
                    .vux-slider{
                        height:90%;
                    }
                    .tab-swiper{
                        height:100%;
                        overflow: scroll;
                        .tabList-box{
                           background-color: $titleColor;
                           box-shadow: 0px 2px 0px #bbbbbb;
                           border-radius: 5px;
                           width:90%;
                           height: 2.45rem;
                           margin:0.25rem 5%;
                           .tabList-box-left{
                               width:85%;
                               height:100%;
                               float:left;
                               border-radius: 5px;
                               .tabList-box-left-top{
                                   width:100%;
                                   height:30%;
                                   border-bottom:solid 1px #e2e2e2;
                                   p{
                                       font-size:$mostFontSize;
                                       float:left;
                                       color:$friendlyColor;
                                       line-height:0.7rem;
                                       text-indent: 0.1rem;
                                   }
                                   span{
                                       display: block;
                                       float:right;
                                       font-size:$mostFontSize;
                                       line-height:0.7rem;
                                       margin-right: 0.1rem;
                                   }
                               }
                               .tabList-box-left-bottom{
                                   width:100%;
                                   height:70%;
                                   .tabList-box-left-bottom-left{
                                       width:40%;
                                       height: 100%;
                                       float:left;
                                       img{
                                           width:80%;
                                           height: 85%;
                                           margin:5% 0 0 7%;
                                       }
                                   }
                                   .tabList-box-left-bottom-right{
                                       width:60%;
                                       height: 100%;
                                       float:right;
                                       p{
                                           font-size:$mostFontSize;
                                           height: 24%;
                                           width:100%;
                                           line-height:0.4rem;
                                           overflow: hidden;
                                            text-overflow:ellipsis;
                                            white-space: nowrap;
                                            text-align: left;
                                       };
                                       .tabList-box-left-bottom-right-p1{
                                           font-size:$fewFontSize;
                                            color:$mostColor;
                                       };
                                       .tabList-box-left-bottom-right-p2{
                                           font-size:$titleFontSize;
                                           span{
                                               font-size:$titleFontSize;
                                           }
                                       }
                                       .tabList-box-left-bottom-right-p3{
                                           color:$partColor;
                                           span{
                                               font-weight: 600;
                                           }
                                       }
                                       .tabList-box-left-bottom-right-p4{
                                           color:$unselectedColor;
                                       }
                                   }
                               }
                           }
                           .tabList-box-right{
                               width:15%;
                               height:100%;
                               background:url("../../../assets/home/MyContract-rightBack.png");
                               float:left;
                               border-radius: 5px;
                               p{
                                   width:20%;
                                   font-size:$titleFontSize;
                                   word-wrap: break-word;
                                   text-align: center;
                                   margin:60% 0 0 30%;
                                   color:#1eb84a;
                               }
                           }
                        }
                    }
                    .BackgroundColor{
                        background:url("../../../assets/home/MyContract-bj.png") no-repeat center center;
                        background-size:90% 100%;
                    }
                }
            }
        }
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>

<template>
    <div class="MyContract-box fixContent">
        <!-- <div class="MyContract-top">
            <PageHeader :title="parentMsg"></PageHeader>
        </div> -->
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        <div class="MyContract-center">
            <div class="MyContract-center-div1">
                <div class="MyContract-center-div1-box">
                    <div class="MyContract-center-div1-box-one"></div>
                    <div class="MyContract-center-div1-box-img">
                        <img src="../../../assets/home/MyContract-size.png" alt="">
                    </div>
                    <div class="MyContract-center-div1-box-tel">
                        <p class="tel-p2"><a href="tel:400-900-2225">400-900-2225</a></p>
                        <p class="tel-p1">客服热线：</p>
                    </div>
                </div>
            </div>

            <div class="MyContract-center-div2">
                <img class="MyContract-center-div2-img1" src="../../../assets/home/MyContract-bj.png" alt="">
                <div class="MyContract-center-div2-list">
                    <tab :line-width=3 active-color='#e24e59' v-model="index">
                        <tab-item class="vux-center" v-for="(item, index) in list2" @click="demo2 = item" :key="index" @on-item-click="tabClick">{{item}}
                        </tab-item>
                    </tab>
                    <swiper v-model="index" height="100%" :show-dots="false">
                        <swiper-item v-for="(item, index) in list2" :key="index">
                            <div @click="bgNewHome" class="tab-swiper vux-center" :class="{BackgroundColor:isBack}">
                                <p style="text-align:center;" v-if="loadings">
                                    <span style="vertical-align:middle;display:inline-block;font-size:14px;">{{loading}}&nbsp;&nbsp;</span><inline-loading></inline-loading>
                                </p>
                                <div class="tabList-box" v-for="(item,index) in tabList" v-show="listbox" @click="skipClick(item)" :key='index'>
                                    <div class="tabList-box-left">
                                        <div class="tabList-box-left-top">
                                            <p>{{tabListName}}</p>
                                            <span>{{item.id}}</span>
                                        </div>
                                        <div class="tabList-box-left-bottom">
                                            <div class="tabList-box-left-bottom-left">
                                                <img :src="item.picImage" alt="">
                                            </div>
                                            <div class="tabList-box-left-bottom-right">
                                                <p class="tabList-box-left-bottom-right-p1"><span v-if="item.signDateTime">{{item.signDateTime}}</span><span v-if="item.endDateTime">{{"—"+item.endDateTime}}</span></p>
                                                <p class="tabList-box-left-bottom-right-p2"><span v-if="item.houseName">{{item.houseName}}</span><span v-if="item.roomName">{{item.roomName}}</span></p>
                                                <p class="tabList-box-left-bottom-right-p3" v-if="item.rentPrice">租金:<span>{{item.rentPrice}}</span></p>
                                                <p class="tabList-box-left-bottom-right-p4" v-if="item.amount">定金:<span>{{item.amount}}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tabList-box-right">
                                        <p>{{item.statusName}}</p>
                                    </div>
                                </div>
                            </div>
                        </swiper-item>
                    </swiper>
                </div>
            </div>
        </div>
        <ga-page-bottom></ga-page-bottom>
    </div>
</template>

<script>
   import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem ,InlineLoading} from 'vux'
   import PageHeader from '../../components/public/PageHeader';//导航

   const list = () => ['定金合同', '承租合同']
    export default {
        data() {
            return {
            	   noDataimg : 'https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png',

                parentMsg:"我的合同",
                //earnestShow: true
                list2: list(),
                loading:"加载中",//显示的标题
                loadings:true,//控制咯ading显示
                demo2: '美食',
                list3: ['收到的消息', '发出的消息'],
                demo3: '收到的消息',
                list4: ['正在放映', '即将上映'],
                demo4: '即将上映',
                demoDisabled: 'A',
                index: 0,
                tabListName:"定金合同",//显示的定金合同和承租合同的名字
                isBack:true,//空置有无数据的背景图显示
                listbox:true,//没有数据不显示list列表
                tabList:[],//存储接口数据
                userId:'',
                androidOrIos:true,	//默认为安卓登录
                getBarWidth: function (index) {x
                    return (index + 1) * 22 + 'px'
                }
            }
        },
        components: {
            PageHeader,
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem,
            InlineLoading
        },
        created() {
           //this.userId = this.getStorage(this.KEYS.USER_INFO).id;
           //this.userId = '20f1565a-8a6f-486a-8730-84be8747aef9';
           console.log(111);
           this.Load();
           this.isIosAndroid();
        },
        activated(){

        },
        deactivated(){

        },
        mounted() {

        },
        watch:{
            index:function(){
                this.loadings = true;//loading 图标
                this.isBack=false;//背景图片
                this.listbox = false;//列表数据
                console.log(this.index)
                this.Load();
            }
        },
        methods: {
            //当没有约看的时候，点击背景图跳转到租房首页
			bgNewHome(){
				this.$router.push("/HomePage");
			},
            isIosAndroid(){
				//判断是安卓还是ios登录，定义到变量中
				if(this.AndroidOrIos()){
					//安卓
					this.androidOrIos = true; 
				}else{
					//ios
					this.androidOrIos = false; 
				}
				console.log(this.AndroidOrIos());
			},
            skipClick(item){//跳转合同详情页面a
                console.log(item.id);
                console.log(this.index)
                if(this.index == 1){
                    this.$router.push({path: '/DepositContract/Lessee', query:{id:item.id}})
                }else if(this.index == 0){
                    this.$router.push({path: '/MyContract/DepositContract', query:{id:item.id}})
                }

            },
            earnestClick(){//tab切换if用
                this.earnestShow = !this.earnestShow;
            },
            Homepage(){//跳转到首页

                this.$router.push('/Homepage')
            },
            ykList(){//跳转约看清单
                this.$router.push('/ykList')
            },
            tabClick(){
                this.loadings = true;//loading 图标
                this.isBack=false;//背景图片
                this.listbox = false;//列表数据
                this.Load();
            },
            Load(){
                console.log(this.index+1);
                this.post('RentContractController/getContractList',{
                    'contractType':this.index+1
                }).then((res) =>{
                    console.log(res);
                    this.isBack=false;//隐藏背景图片
                    var that = this;
                    if(res.code === 0){
                        console.log(res);
                        that.loadings = false;//loading 图标
                       // this.isBack=false;
                       // this.listbox = true;
                        if(res.data.contractType == 1){
                           this.listbox = true;//列表数据
                           res.data.depositList.forEach(item =>{
                                item.picImage = item.picImage ?this.concatFileUrl(item.picImage,200,200): 'https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png';
                           })
                            this.tabList=res.data.depositList;
                            this.tabListName = "定金合同";
                        }else{
                            this.listbox = true;//列表数据
                            res.data.rentContractList.forEach(item =>{
                                item.picImage = item.picImage ?this.concatFileUrl(item.picImage,200,200): 'https://media.guoanfamily.com/rent/static/HomePage/noDetailImg.png';
                           })
                            this.tabList=res.data.rentContractList;
                            this.tabListName = "承租合同";
                        }

                    }
                    if(res.code != 0){
                        this.loadings = false;//loading图标
                        this.isBack=true;//背景图片
                        this.listbox = false;//列表数据
                    }
                })
            }
        }
    }
</script>
