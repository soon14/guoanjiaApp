<style scoped lang="scss">
 @import "../../style/theme.scss";
    $k:1;
    $ColorClass: $labelOne, $labelTwo, $labelThree;
    $font:0.14rem;
    $height: 0.7rem;
.house-list{
    position: relative;
    width: 100%;
    height: 100%;
    .list-box{
        // top: 1.5rem;
        // position: absolute;
        // bottom: 4rem;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .regloin{
        position: absolute;
        width: 100%;
        top:1.2rem;
        z-index: 2;
        opacity: 1;
        background-color: $titleColor;
        font-size:$mostFontSize;
    }
    .regloinlists{
        position: absolute;
        width: 100%;
        top:2.1rem;
        z-index: 2;
        opacity: 1;
        background-color: $titleColor;
        font-size:$mostFontSize;
        height: 70%;
        .buttons{
            position: fixed;
            top:70%;
            transform: translate(0, 1.1rem);
            left:0px;
            // padding:0.3rem 0rem;
            width: 100%;
            height: 0.9rem;
            .subMit{
                width: 4.4rem;
                height: 0.9rem;
                line-height: 0.9rem;
                // background: url("../../../../static/rent/house-list/submit-button.png") no-repeat;
                background-color: #e34b3e;
                // background-size: 100%;
                border-radius:0.1rem;
                font-size:$titleFontSize;
                color:$titleColor;
                float:left;
                box-sizing: border-box;
                margin-left: 0.3rem;
                border: none;
            }
            .exit{
                // margin-left:1.04rem;
                width: 2.3rem;
                height: 0.9rem;
                line-height: 0.9rem;
                font-size:$titleFontSize;
                // background-color:$greyColor;
                background: url("../../../../static/rent/house-list/exit-button.png") no-repeat;
                background-size: 100%;
                color:$titleColor;
                box-sizing: border-box;
                border: none;
            }
        }  
    }
    .iosregloin{
        top:1.02rem;
    }
    .iosfiltrate{
        top:2rem;
    }
    .input-search{
        fill: #999;
        position: absolute;
        top:0.3rem;
        left:0.4rem;
    }
    .map-icon{
        position: absolute;
        top: 0.72rem;
        right:0.35rem;
        width: 0.24rem;
        height: 0.29rem;
        background:url("../../../../static/rent/HomePage/mapsearchhouse.png") no-repeat;
        background-size: 100%;
    }
    .ios-icon{
        top:0.72rem;
    }
    .wex-icon{
        right: 0.4rem;
        top:0.5rem;
    }
    .iosinputsearch{
        top:0.62rem;
    }
    .wexcssBtn{
    	top:0.4rem;
        left:0.45rem;
    }
    .type-search {
        position: fixed;
        top:1.3rem;
        width: 100%;
        height: 0.95rem;
        line-height: 0.87rem;
        background: #fff;
        font-size: 0.35rem;
        color: #333333;
        border-bottom: 1px solid #ccc;
        z-index: 3;
        .isnotLinerent{
            font-size: $reminderFontSize;
            height: 0.8rem;
            line-height: 0.7rem;
            padding: 0.05rem 0px;
        }
            .flex-demo {
                text-align: center;
                background-clip: padding-box;
                color: #666;
                position: relative;
                font-size: 0.28rem;
            }
            .open-icon {
                display: inline-block;
                position: absolute;
                width: 0.1rem;
                top: 45%;
                left: 1.4rem;
            }

            .stop-icon {
                display: inline-block;
                position: absolute;
                width: 0.1rem;
                top: 43%;
                left: 1.4rem;
            }
            .isnewhouse{
                top:25%;
                left:63%;
            }
            .long-string{
                position: absolute;
                left: 2rem;
                top:0.1rem;
                width: 1px;
                height: 0.5rem;
                background-color: #eee;
                display: none;
            }
            .notnewhouse{
                display: block;
                z-index: 10;
            }
            .regionarea{
                color:$mineColor;
            }
        }
        .wextypesearch{
            top:1.1rem;
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

        //列表样式
        .list-item{
            // background-color:$greyColor;
            margin-top:1.84rem;
            .on-phone{
                position: absolute;
                // bottom: 0px;
                font-size: 0.28rem;
                width: 100%;
                height: 1.5rem;
                text-align: center;
                background-color: #e8e8e8;
                z-index: 1000;
                .phone{
                    color:$mineColor;
                    font-weight:700;
                    font-size:0.32rem;
                }
            }
            .on-mover{
                font-size:0.30rem;
                width: 100%;
                height: 100%;
                background-color: #fff;
                z-index: 1000;
                text-align: center;
                .nodataimg{
                    display: block;
                    margin:0 auto;
                    margin-top:3rem;
                    width:3.8rem;
                    height: 4.2rem;
                    background: url("../../../../static/rent/img/nodataimg.png") no-repeat;
                    background-size:100%;
                }
                p:nth-child(3){
                    color:$mineColor;
                    margin-top:1rem;
                    margin-bottom:0.3rem;
                }
            }
        }
        .ioslistitem{
            margin-top:2.37rem;
        }
        .wexlist{
            margin-top:2.1rem;
        }
        .table-view{
            background: white;
            .table-view-list{
            	box-sizing: border-box;
            	padding: 0.3rem 0.4rem 0.3rem 0.4rem;
                border-bottom: 1px solid #eee;
            	.list-top{
            		width: 100%;
            		height: 2.8rem;
            		.imgOne{
            			width: 4.7rem;
            			height: 100%;
            			float: left;
            			position:relative;
            			img{
            				width: 100%;
            				height: 100%;
                            border-radius: 0.15rem;
            			}
            			.houseMoney{
            				position: absolute;
            				left: 0.2rem;
            				top: 10%;
            				width: 1.8rem;
            				height: 0.6rem;
            				background: rgba(0,0,0,0.6);
        					line-height: 0.5rem;
        					text-align: center;
            				color:white;
            				// font-weight: 700;
            				box-sizing: border-box;
            				padding-top: 0.05rem;
            				padding-left: 0.06rem;
            				.houseMoneyCHN{
        						font-size: 0.18rem;
        						float: left;
        						margin-top: 0.04rem;
            				}
            				.houseMoneyNum{
            					font-size:0.35rem;
            					float: left;
            				}
            			}
            		}
            		.imgRight{
            			width: 1.8rem;
            			float: left;
            			height: 100%;
            			margin-left: 0.2rem;
            			.imgTwo,.imgThree{
            				width: 100%;
            				height: 1.3rem;
            				img{
            					width: 100%;
            					height: 100%;
                                border-radius: 0.06rem;
            				}
            			}
            			.imgThree{
            				margin-top: 0.2rem;
            				position: relative;
            				.imgShadow{
            					width: 100%;
            					height: 100%;
            					position: absolute;
            					top: 0;
            					left: 0;
            					z-index: 100;
            					background: rgba(0,0,0,.3);
            					font-size: 0.5rem;
            					text-align: center;
            					line-height: 1.5rem;
            					color: white;
            				}
            			}
            		}
            	}
            	.list-bottom{
            		width: 100%;
            		box-sizing: border-box;
            		padding-top: 0.2rem;
            		.list-bottom-left{
            			width: 50%;
            			height: 0.4rem;
            			float: left;
            			font-size: 0.32rem;
            			color: #000;
            			overflow:hidden; 
				        text-overflow:ellipsis;
						white-space:nowrap;
						text-align: left;
            		}
            		.list-bottom-right{
            			width: 50%;
            			height: 0.4rem;
            			float: right;
            			font-size: 0.28rem;
            			color: #666;
            			text-align: right;
            		}
            		.bottom-label{
            			width: 100%;
                        margin-top: 0.05rem;
            			.bottom-label-list{
            				height: 0.4rem;
            				padding: 0 0.1rem;
            				display: block;
            				float: left;
            				color: #999;
            				text-align: center;
            				line-height: 0.4rem;
            				font-size: 0.26rem;
            				margin-top: 0.15rem;
            				border-radius: 0.05rem;
                            background-color: #f5f5f5;
            				margin-left: 0.1rem;
                            &:nth-child(1){
                                margin-left: 0rem;
                            }
            			}
            		}
            	}
            }
            
            
            
            
            // 单个图片的
            // .table-view-cell{
            //     background-color: $titleColor;
            //     position: relative;
            //     width: 100%;
            //     height: 2.11rem;
            //     // border-bottom: 1px solid #ccc;
            //     padding: 0.2rem 0 0.2rem 0.2rem;
            //     box-shadow: 0rem 0rem 0.1rem #ccc;
            //     .house-top{
            //         width: 100%;
            //         height: 100%;
	        //         .house-object{
	        //             float: left;
	        //             width: 2.86rem;
            //             height: 2.1rem;
            //             position: relative;
	        //             .pull-left{
	        //                 display: inline-block;
	        //                 width: 2.86rem;
	        //             	height: 2.1rem;
	        //             	border-radius: 0.1rem;
            //             }
            //             .abbr{
            //                 position: absolute;
            //                 top:0.3rem;
            //                 left:0.3rem;
            //                 width: 1rem;
            //                 height: 0.4rem;
            //                 background:url("../../../../static/rent/house-list/3D.png") no-repeat;
            //                 background-size: 100%;
            //             }
            //             .active4{
            //                 width: 0.5rem;
            //                 height: 0.5rem;
            //                 position: absolute;
            //                 top: 0.2rem;
            //                 right: 0.3rem;
            //                 background: url("../../../../static/rent/house-list/active418.png") no-repeat;
            //                 background-size: 100%;
            //             }
	        //         }
            //     }
            //     .house-body{
            //         float: right;
            //         width: 4.07rem;
            //         font-size:$titleFontSize;
            //         margin:0.05rem 0.3rem 0 0;
            //         .headline{
            //         	font-size: 0.3rem;
            //             span{
            //                 display:inline-block;
            //                 width: 80%;
            //                 overflow: hidden;
            //                 text-overflow:ellipsis;
            //                 white-space: nowrap;
            //             }
            //             .abbr3d{
            //                 position: absolute;
            //                 top:0.3rem;
            //                 right:0.5rem;
            //                 width: 0.5rem;
            //                 height: 0.3rem;
            //                 background:url("../../../../static/rent/house-list/head3d.png") no-repeat;
            //                 background-size: 100%;
            //                 // text-align: center;
            //                 // line-height: 0.48rem;
            //                 // background-color: $partColor;
            //                 // color: #fff;
            //                 // border-radius: 0.1rem;
            //             }
            //         }
            //         .headline,.house-desc,.house-label,.area{
            //             text-align: left;
            //             margin-bottom:0.05rem;
            //         }
            //         .house-desc,.house-label{
            //             font-size:0.2rem;
            //         }
            //         .house-desc{
            //         	margin-top: 0.12rem;
            //         	font-size: 0.25rem;
            //             .houseproducttype{
            //                 display:inline-block;
            //                 width: 0.45rem;
            //                 height: 0.45rem;
            //                 background:url("../../../../static/rent/house-list/joint.png") no-repeat;
            //                 background-size: 100%;
            //                 vertical-align: middle;
            //             }
            //             .houseentire{
            //                 display:inline-block;
            //                 width: 0.45rem;
            //                 height: 0.45rem;
            //                 background:url("../../../../static/rent/house-list/entire.png") no-repeat;
            //                 background-size: 100%;
            //                 vertical-align: middle;
            //             }
            //             .househome{
            //                 display:inline-block;
            //                 width: 0.45rem;
            //                 height: 0.45rem;
            //                 background:url("../../../../static/rent/house-list/home.png") no-repeat;
            //                 background-size: 100%;
            //                 vertical-align: middle;
            //             }
            //         }
            //         .bedroom{
            //             color:$mostColor;
            //             margin-right:0.3rem;
            //         }
            //         .area{
            //             color:$mostColor;
            //             font-size:0.25rem;
            //         }
            //         .house-label{
            //             width: 100%;
            //             margin-top:0.12rem;
            //             .label{
            //                 width: 29%;
            //                 height: 0.45rem;
            //                 text-align: center;
            //                 float: left;
            //                 display:block;
            //                 margin-right:0.15rem;
            //                 line-height: 0.45rem;
            //                 border-radius:0.05rem;
            //                 overflow: hidden;
            //                 text-overflow:ellipsis;
            //                 white-space: nowrap;
            //                 padding: 0 0.05rem;
            //                 box-sizing: border-box;
            //             }
            //             @mixin color($bgColor){
            //                 border: 1px solid $bgColor;
            //                 color: $bgColor;
            //             }
            //             @for $i from 1 through 3{
			// 				.label:nth-child(3n+#{$i}){
			// 					@include color(nth($ColorClass,$i));
			// 				}
			// 			}
                        
            //         }
            //         .trash{
            //             position: absolute;
            //             bottom:0.7rem;
            //             right: 0.3rem;
            //             img{
            //                 width: 0.4rem;
            //                 height: 0.4rem;
            //             }
            //         }
            //     }
            //     .house-bottom{
            //         height: 20%;
            //         font-size: $mostFontSize;
            //         .money-month{
            //         	margin-top: 0.12rem;
            //             text-align: left;
            //             .money{
            //                 color:$partColor;
            //             }
            //         }
            //     }
            // }
            // 单个图片的样式结束
           
        }
    }
    //底部tab样式
    .bottom-box{
        width:100%;
        height: 0.9rem;
        background:tan;
        position: absolute;
        bottom :0;
        z-index: 1000;
        .delegation-img{
            width:100%;
            height: 10%;
            background:url("../../../assets/home/delegation-back.png");
        }
        .delegation-bottom{
            width:100%;
            height: 90%;
            background:#fff;
            .delegation-bottom-top{
                width:100%;
                height:20%;
            }
            .delegation-bottom-bottom{
                width:100%;
                height:80%;
                .delegation-bottom-bottom-button{
                    width:28%;
                    height: 100%;
                    float:left;
                    margin-left:4%;
                    border-radius:10px 10px 0 0;
                    text-align: left;
                    img{
                        width:0.35rem;
                        height:0.35rem;
                        float:left;
                        margin:10px 5px 0 22%;
                        display: block;
                    }
                    p{
                        display: block;
                        font-size: $fewFontSize;
                        margin-top:10%;
                        color:#fff;
                    }
                }
                .button-green{
                    background:$labelThree;
                }
                .button-red{
                        background:$mineColor;
                        img{
                        width:0.35rem;
                        height:0.35rem;
                        float:left;
                        margin:10px 5px 0 10%;
                        display: block;
                    }
                }
                .button-yellow{
                        background:$switchThree;
                }
            }

        }
    }
   //头部样式
    $topheight: 0.81rem;
    $btnSize: 0.42rem;

    .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 1.3rem;
        /*border-bottom: $baseBorder;*/
        z-index: 100;
        background: $titleColor;
    }
    .iosheader{
        height:1.1rem;
    }

    .back-btn{
        float: left;
        height: 100%;
        width: 100%;
        background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
        background-size: 20%;
        display: block;
        // margin-left: 0.3rem;
    }
    .iosbackbtn{
        height:1.6rem;
    }
    .middle{
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: $topheight;
        right: $topheight;

        .title{
        	height: 1.1rem;
      		font-size: $titleFontSize;
            line-height: 1.1rem;
            color: $titleColor;
            .ios-title{
                height: 1.3rem;
                line-height: 1.3rem;
            }
        }
        .header-search{
            top:0.3rem;
            padding-left:0.85rem;
        }
        .iosheadersearch{
            top:0.55rem;
        }
        .wexcss{
            width: 5.9rem;
            left:0.3rem;
            top: 0.3rem;
        }
    }
    .wexmiddle{
        left:0.3rem;
    }

    .right-part{
        float: right;
        height: 1.3rem;
        width: $topheight;
    }
    .wexpart{
        height: 1.1rem;
    }
     ::-webkit-input-placeholder {
        color: #999;
    }

    :-moz-placeholder {
        color: #999;
    }

    ::-moz-placeholder {
        color: #999;
    }

    :-ms-input-placeholder {
        color: #999;
    }
    .fade-mark-enter-active, .fade-mark-leave-active {
        transition: opacity 0  ;
    }
    .fade-mark-enter, .fade-mark-leave-active {
        opacity : 0
    }
</style>

<template>
    <div class="house-list" >
        <!-- <ga-page-header>
            <p slot="middle">
                <input type="text" class="header-search" placeholder="请输入您想住的区域或小区" @click="searchChange" v-model="headerSearch">
            </p>
            <p slot="right-btn">
                <x-icon type="ios-search" size="30" class="input-search"></x-icon>
            </p>
        </ga-page-header> -->
        <!--跳转至应用宝下载；国安家APP-->
		<div><downLoad></downLoad></div>
		
        <div class="header" :class="{iosheader:isWex}">
        	<div style="width: 1.3rem;height: 1.2rem;float: left;" @click="back">
        		<span class="back-btn"  :class="{iosbackbtn:!isWex}" v-if="!this.$store.state.showWxTitle"></span>
        	</div>
            <div class="middle" :class="{wexmiddle:isWex}">
                <input type="text" class="header-search" placeholder="请输入您想住的区域或小区" @click="searchChange" v-model="headerSearch" :class="{iosheadersearch:!isAndrion,wexcss:isWex}" >
                <x-icon type="ios-search" size="25" class="input-search"  @click="searchChange" :class="{iosinputsearch:!isAndrion,wexcssBtn:isWex}" ></x-icon>
            </div>

            <div class="right-part" :class="{wexpart:isWex}" @click="toMapSearch">
                <i class="map-icon" :class="{'ios-icon':!isAndrion,'wex-icon':isWex}" ></i>
            </div>
        </div>
         <div class="type-search" :class="{wextypesearch:isWex}">
                <flexbox :class="{isnotLinerent:isonLinerent}">
                    <flexbox-item>
                        <div class="flex-demo" @click="regionClick">
                                <span :class="{regionarea:regionClass}">区域</span>
                                <img class="open-icon" v-if="region" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!region" :src="stopUrl" :class="{isnewhouse:isnewhouse}"/>
                                <span class="long-string" :class="{notnewhouse:isonLinerent}"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="subwayClick">
                                <span :class="{regionarea:subwayClass}">地铁</span>
                                <img class="open-icon" v-if="subway" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!subway" :src="stopUrl" :class="{isnewhouse:isnewhouse}" />
                                <span class="long-string" :class="{notnewhouse:isonLinerent}"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="priceClick">
                                <span :class="{regionarea:priceClass}">价格</span>
                                <img class="open-icon" v-if="price" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!price" :src="stopUrl" :class="{isnewhouse:isnewhouse}"/>
                                <span class="long-string" :class="{notnewhouse:isonLinerent}"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="filtrateClick">
                                <span :class="{regionarea:filtrateClass}">筛选</span>
                                <img class="open-icon" v-if="filtrate" :src="openUrl" :class="{isnewhouse:isnewhouse}"/>
                                <img class="stop-icon" v-if="!filtrate" :src="stopUrl" :class="{isnewhouse:isnewhouse}"/>
                        </div>
                    </flexbox-item>
                </flexbox>
        </div>
        <!-- 区域 -->
        <div class="regloin" :class="{iosregloin:isWex}" >
            <region-subway :isShow="region" :type="isType" @changeRegionSubway="changeRegionSubway" :RegionList = "RegionList" ref="regionCommpont"></region-subway>
        </div>
        <!-- 地铁 -->
        <div class="regloin" :class="{iosregloin:isWex}">
            <subway :isShow="subway" :type="isType" @changeSubway="changeSubway" :subwayList = "subwayList" ref="subwayCommpont"></subway>
        </div>
        <!-- 价格 -->
        <div class="regloin" :class="{iosregloin:isWex}">
            <price-list :isShow="price" @changePrice="changePrice" ref="priceCommpont"></price-list>
        </div>
        <!-- 筛选 -->
        <div class="regloinlists" :class="{iosfiltrate:isWex}" v-show="filtrate">
            <filtrate :isShow="filtrate" @changeFiltrate="changeFiltrate" :houseType="houseType"  ref="filtrateCommpont"></filtrate>
            <div class="buttons">
                <button class="subMit" @click="allBuildClick">筛选</button>
                <button class="exit" @click="allBuildExitClick">重置</button>
            </div>
        </div>
        <div class="list-box">
             <!-- <house-list-data selectType="houseList" :HouseListData="HouseListData" @closeMarket="closeMarket" :isSecordHeight = "isSecordHeight" ></house-list-data>  -->
             <div class="housing-resource">
                <scroller class="scroller"
                    :on-refresh="refresh"
                    :on-infinite="infinite"
                    noDataText=" "
                    ref="myList"
                >
                        <div class="list-item" :class="{ioslistitem:!isAndrion,wexlist:isWex}">
                            <ul class="table-view">
                                <!-- <li class="table-view-cell" v-for="item in HouseLists" :key="item.id" @click="goHouseDetail(item.id,item.productType,item.active418)">
                                    <div class="house-top">
                                        <div class="house-object">
                                            <img class="pull-left" :src="item.image || noDetailImg ">
                                            <i class="abbr" v-if="item.lookUrl"></i>
                                        </div>
                                        <div class="house-body">
                                            <div class="headline">
                                                <span>{{item.houseName}}&nbsp;{{item.houseName==="东大桥店"?item.roomFloor : item.roomName}}&nbsp;{{item.roomNumber || ""}}</span>                                            
                                                <i class="abbr3d" v-if="item.lookUrl"></i>
                                            </div>
                                            <div class="house-desc">
                                                <span class="bedroom">{{item.buildNo}}号楼-{{item.roomName}}</span>
                                            	<span calss="floor">{{item.houseName==="东大桥店"?item.roomFloor : item.buildFloor}}层|{{item.userArea}}㎡</span>
                                            </div>
											<div class="house-bottom">
                                                <p class="money-month">
                                                    <span class="money">{{item.price}}</span>
                                                    <span>元/月</span>
                                                </p>
                                            </div>
                                            <div class="house-label">
                                                <span class="label" v-for="(label,index) in item.tags" :key="index">{{label}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li> -->
                                
                                
                                <li class="table-view-list" v-for="item in HouseLists" :key="item.id" @click="goHouseDetail(item.id,item.productType)">
                                	<div class="list-top">
                                		<div class="imgOne">
                                			<img class="pull-left" :src="item.image || noDetailImg ">
                                			<div class="houseMoney">
                                				<div class="houseMoneyCHN"></div><div class="houseMoneyNum">{{item.price}}</div><div>&nbsp;元&nbsp;/&nbsp;月</div>
                                			</div>
                                		</div>
                                		<div class="imgRight">
                                			<div class="imgTwo">
                                				<img class="pull-left" :src="concatFileUrl(item.attachImage[0]) || noDetailImg ">
                                			</div>
                                			<div class="imgThree">
                                				<img class="pull-left" :src="concatFileUrl(item.attachImage[1]) || noDetailImg ">
                                				<!-- <div class="imgShadow">{{item.attachImageLength < 0 ?'':item.attachImageLength}} <span style="font-size: 0.35rem;">+</span></div> -->
                                			</div>
                                		</div>
                                	</div>
                                	<div class="list-bottom">
                                		<div class="list-bottom-left">
                                			{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber || ""}}
                                		</div>
                                		<div class="list-bottom-right">
                                			{{item.buildNo}}号楼&nbsp;{{item.roomName}}&nbsp;&nbsp;&nbsp;{{item.buildFloor}}层/{{item.userArea}}㎡
                                		</div>
                                		<div style="clear: both;"></div>
                                		<div class="bottom-label">
                                			<span class="bottom-label-list" v-for="(label,index) in item.tags" :key="index">{{label}}</span>
                                			<div style="clear: both;"></div>
                                		</div>
                                	</div>
                                </li>
                               
                            </ul>
                           <div class="on-phone" v-if="isPhone"><p style="margin:10px 0px;">--------已经到最后了--------</p><p><a href="tel:400-900-2225" class="phone">400-900-2225</a></p>试试拨打热线告诉我们你的租房需求!</div>
                           <div class="on-mover" v-if="isMover" >
                                <span class="nodataimg"></span>
                                <p>本区域暂时没有满足您需求的房源,可继续搜索其他区域!</p> 
                                <p>调整您的搜索条件可能会有所帮助!</p>
                                <!-- <span @click="moverClick" class="phone">点击继续找房</span> -->
                                <x-button  type="warn" style="width:90%; background-color:#e24e59; color:#fff;" @click.native="moverClick">继续找房</x-button>
                            </div>
                            <div v-if="isPhone" style="width:100%; height:0.4rem"></div>
                        </div>
                </scroller>
            </div>
        </div>
        <!-- 底部 -->
        <!-- <div class="bottom-box">
             <div class="delegation-img"></div>
            <div class="delegation-bottom">
                <div class="delegation-bottom-top"></div>
                <div class="delegation-bottom-bottom">
                    <div class="delegation-bottom-bottom-button button-green" @click="Homepage">
                        <img src="../../../assets/home/green.png" alt="">
                        <p>找房</p>
                    </div>
                    <div class="delegation-bottom-bottom-button button-red" @click="appointList">
                        <img src="../../../assets/home/red.png" alt="">
                        <p>约看清单</p>
                    </div>
                    <div class="delegation-bottom-bottom-button button-yellow" @click="mine">
                        <img src="../../../assets/home/yellow.png" alt="">
                        <p>我的</p>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- 遮罩层 -->
         <transition name="fade-mark">
              <div class="market" v-show="market" @click="markets"></div>
         </transition>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem,InlineLoading } from 'vux'
    import Filtrate from '../../components/HouseList/Filtrate.vue';
    import RegionSubway from '../../components/HouseList/RegionSubway.vue';
    import Subway from '../../components/HouseList/Subway.vue';
    import PriceList from '../../components/HouseList/PriceList.vue';
    import openUrl1 from "../../../../static/new/img/stop.png";
    import stopUrl1 from "../../../../static/new/img/open.png";
    import openUrl from "../../../../static/rent/img/open1.png";
    import stopUrl from "../../../../static/rent/img/stop1.png";
    //列表
    import houseList from "../../../../static/rent/img/house-list.png";
    import trash    from "../../../../static/rent/img/clear.png";
    // import noDetailImg from "https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png";
    import booked from "../../../../static/rent/house-list/booked.png";   //已预约
    import schipol from "../../../../static/rent/house-list/schipol.png"  //已出租
    //引入下载的浮层
    import downLoad from '../../components/home/downLoad'
    export default {
        name: 'HouseList',
        components: {
            // HouseListData,
            Flexbox,
            FlexboxItem,
            Filtrate,
            RegionSubway,
            PriceList,
            Subway,
            InlineLoading,
            downLoad
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
                    textSearch: this.$route.query.textSearch,
                    size: 10,
                    userAreaMin:"",
                    userAreaMax:"",
                    lookUrl:false,
                    roommateConstellation:"",  //星座
                    orientation:"",
                    roommateSex:this.$route.query.roommateSex,
                    hasIndieRestRoom:"",   //独卫
                    hasVeranda:"",    //独阳
                    active418:this.$route.query.active418,
                },

                openUrl:openUrl,
                stopUrl:stopUrl,
                schipolUrl:schipol,
                bookedUrl:booked,
                region:false,
                subway:false,
                price:false,
                filtrate:false,
                market:false,    //遮罩
                isType:"",
                houseType:this.$route.query.name=="0019001"? "" :this.$route.query.name, //首页进来房源类型
                // regions:false,
                RegionList:[],
                subwayList:[],
                // priceMinMax:[500,10000], //每次价格显示获取筛选时的价钱

                regionSubwayLog:[],
                headerSearch:"", //Search输入框
                isSecordHeight:false, //记录高
                //列表
                HouseLists: [],
                trash:trash,
                listPosition: null,
                preventLoad: false,
                isPhone:false,
                isMover:false,
                isUpload:false,
                regionClass:false,
                subwayClass:false,
                priceClass:false,
                filtrateClass:false,

                isRegionClass:false,
                isSubwayClass:false,
                isPriceClass:false,
                isFiltrateClass:false,

                onMarket:false,  //点遮罩时把选择置空
                isChangeFiltrate:false,  //筛选返回时不走activated里的请求
                loadings:true,
                loading:"加载中",
                noDetailImg :"https://media.guoanfamily.com/rent/static/HomePage/noneImg1.png",
                isAndrion:true,  //判断是ios还是andriod
                notnewhouse:true,
                isnewhouse:false,
                isWex:false,
            }
        },
        created() {
            if(this.$route.query.name){
                    this.HouseListData.productType = this.$route.query.name == "0019001" ? "" : this.$route.query.name;
                    if(this.$route.query.name == "0019003"){
                        this.filtrateClass= true;
                    }
                    this.HouseLists = [];
                    this.HouseListData.timeStamp = 0;
                    this.isChangeFiltrate = true;
                    this.isUpload = true;
                    this.getHouseList();
            }
            if(this.getSession(this.KEYS.SEARCH_CONTENT)){   //首页进搜索 进行搜索
                    this.HouseListData.textSearch = this.getSession(this.KEYS.SEARCH_CONTENT) == "1" ? "" : this.getSession(this.KEYS.SEARCH_CONTENT);
                    this.headerSearch = this.getSession(this.KEYS.SEARCH_CONTENT) == "1" ? "" : this.getSession(this.KEYS.SEARCH_CONTENT);
                    this.HouseLists = [];
                    this.isUpload = true;
                    this.getHouseList();
            }
            if(this.isECTouch()){
                 this.wxconfig();
                 this.isWex = true;
            }
            if(this.AndroidOrIos()){
                this.isAndrion = true;
            }else{
                this.isAndrion = false;
            }
            this.notnewhouse = this.$route.query.title != "在线租房";
            this.isnewhouse = this.$route.query.title == "在线租房";
        },
        //列表事件
            activated(){
                this.notnewhouse = this.$route.query.title != "在线租房";
                this.isnewhouse = this.$route.query.title == "在线租房";
                if(this.isECTouch()){
                    this.wxconfig();
                }
                if(this.AndroidOrIos()){
                    this.isAndrion = true;
                }else{
                    this.isAndrion = false;
                }
                if(this.$route.query.noActivated){   //首页进搜索页面搜索过来
                    this.HouseListData.textSearch = this.getSession(this.KEYS.SEARCH_CONTENT) == "1" ? "" : this.getSession(this.KEYS.SEARCH_CONTENT);
                    this.headerSearch = this.getSession(this.KEYS.SEARCH_CONTENT) == "1" ? "" : this.getSession(this.KEYS.SEARCH_CONTENT);
                    this.HouseLists = [];
                    this.isUpload = true;
                    this.getHouseList();
                    return;
                }
                this.preventLoad = false;
                if(this.getSession(this.KEYS.SEARCH_CONTENT)){   //房源进搜索 返回
                    this.HouseListData.textSearch = this.getSession(this.KEYS.SEARCH_CONTENT) == "1" ? "" : this.getSession(this.KEYS.SEARCH_CONTENT);
                    this.headerSearch = this.getSession(this.KEYS.SEARCH_CONTENT) == "1" ? "" : this.getSession(this.KEYS.SEARCH_CONTENT);
                    this.HouseLists = [];
                    this.isUpload = true;
                    this.getHouseList();
                    return;
                } else {
                    if(this.$route.query.name){   //首页点击好房或整租进房源列表
                        // this.houseType = this.$route.query.name || "";
                        // this.filtrateClass= true;

                        // this.HouseListData.productType = this.houseType == "0019001" ? "" : this.houseType;
                        if(this.isFiltrateClass){
                                this.filtrateClass= true;
                        }else{
                            this.houseType = this.$route.query.name == "0019001"? "" : this.$route.query.name;
                            if(this.houseType == "0019003"){
                                this.filtrateClass= true;
                            }
                            
                            this.HouseListData.productType = this.houseType;
                        }

                        if(this.isChangeFiltrate){
                            if(this.listPosition){
                                setTimeout(()=>{
                                    this.$refs.myList.scrollBy(0, this.listPosition.top, false);
                                    this.listPosition = null;
                                }, 50)
                            }
                            return false;
                        }
                        this.HouseLists = [];
                        this.isUpload = true;
                        this.HouseListData.timeStamp = 0;
                        this.getHouseList();
                    }

                }
            },
            deactivated(){
                this.preventLoad = true;
                // this.isChangeFiltrate = false;

                this.filtrate = false;
                this.region = false;
                // this.regions = false;
                this.subway = false;
                this.price = false;
                this.market = false;
                this.headerSearch = "";
                this.HouseListData = {
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
                    lookUrl:false,
                    roommateConstellation:"",  //星座
                    orientation:"",
                    roommateSex:"",
                    hasIndieRestRoom:"",   //独卫
                    hasVeranda:"",    //独阳
                }
                this.notnewhouse = false;
                // this.listPosition = this.$refs.myList.getPosition();
            },

        methods: {
            // success (src, ele) {
            //     console.log('success load', src)
            //     const span = ele.parentNode.querySelector('span')
            //     ele.parentNode.removeChild(span)
            // },
            // error (src, ele, msg) {
            //     console.log('error load', msg, src)
            //     const span = ele.parentNode.querySelector('span')
            //     span.innerText = 'load error'
            // },
            //获取区域或地铁数据
             getRegionSubway(){
                let url ="";
                if(this.region && this.isType=="region"){
                    url = "common/getAreaList";
                }else if(this.subway && this.isType=="subway"){
                    url = "common/getSubwayLine";
                }
                    this.post(url,{}).then((res)=>{
                        let compare = function(prop) {
                            return function(obj1, obj2) {
                                let val1 = obj1[prop];
                                let val2 = obj2[prop];
                                if (!isNaN(parseInt(val1)) && !isNaN(parseInt(val2))) {
                                    val1 = parseInt(val1);
                                    val2 = parseInt(val2);
                                }
                                if (val1 < val2) {
                                    return -1;
                                } else if (val1 > val2) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            }
                        }
                        if(this.region && this.isType=="region"){
                            res.data = res.data.sort(compare("name"))
                            this.RegionList = res.data;
                        }else if(this.subway && this.isType=="subway"){
                            res.data = res.data.sort(compare("name"))
                            this.subwayList = res.data;
                        }

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
                this.market = this.price; //遮罩
            },
            //筛选
            filtrateClick(){
                this.region = false;
                this.subway = false;
                this.price = false;
                this.filtrate = !this.filtrate;
                this.market = this.filtrate; //遮罩
            },
            //区域返回数据
            changeRegionSubway(id,regionId){
                this.HouseListData.districtId = id || "";    //区域ID
                this.HouseListData.regionId =  regionId || "";   //具体ID
                this.HouseListData.textSearch= "";
                this.headerSearch = "";
                if(id || regionId){
                    this.regionClass = true;
                    this.isRegionClass = true;
                    this.isUpload = true;
                }else{
                    this.regionClass = false;
                    this.isRegionClass = false;
                }
                if(id || regionId){
                    this.market = false;
                    this.subway = false;
                    this.region = false;

                    this.HouseLists = [];
                    this.getHouseList();

                }else{
                    this.market = false;
                    this.subway = false;
                    this.region = false;
    
                    this.HouseLists = [];
                    this.getHouseList();
                }
            },
            //地铁返回数据
            changeSubway(id,subwayLineId){
                this.HouseListData.stationsId = id || "";
                this.HouseListData.subwayLineId = subwayLineId || "";
                if( id || subwayLineId){
                    this.subwayClass = true;
                    this.isSubwayClass = true;
                    this.isUpload = true;
                }else{
                    this.subwayClass = false;
                    this.isSubwayClass = false;
                }
                if(id || subwayLineId){
                    this.market = false;
                    this.subway = false;
                    this.region = false;

                    this.HouseLists = [];
                    this.getHouseList();

                }else{
                    this.market = false;
                    this.subway = false;
                    this.region = false;

                    this.HouseLists = [];
                    this.getHouseList();
                }
            },
            //价格返回数据
            changePrice(data){
                if(data[1]=="10000" &&data[0] =="500"){
                    this.priceClass = false;
                    this.isPriceClass = false;
                }else{
                    this.priceClass = true;
                    this.isPriceClass = true;
                    this.isUpload = true;

                }
                this.setStorage("mm",false);
                this.HouseListData.priceMax = data[1];
                this.HouseListData.priceMin = data[0];
                //  this.priceMinMax=data;
                //  this.setStorage("priceMinMax",this.priceMinMax);
                 this.market = false;
                 this.price = false;
                 this.HouseLists = [];
                 this.getHouseList();
            },
            allBuildClick(){
                this.$refs.filtrateCommpont.allBuildClick();
            },
            allBuildExitClick(){
                this.$refs.filtrateCommpont.allBuildExitClick();
            },
            //筛选返回
            changeFiltrate(data,close = true){
                if(data.productType  || data.roomNo ||data.userAreaMin || data.lookUrl || data.roommateConstellation|| data.orientation || data.roommateSex || data.hasIndieRestRoom ||  data.hasVeranda ){
                    this.filtrateClass = true;
                    this.isFiltrateClass = true;
                    this.isUpload = true;
                    if(data.productType == "0019001"){
                        this.houseType = "0019001";
                    }else if (data.productType == "0019002"){
                        this.houseType = "0019002";
                    }else if (data.productType == "0019003"){
                        this.houseType = "0019003";
                    }
                }else{
                    this.houseType = "";
                    this.filtrateClass = false;
                    this.isFiltrateClass = false;
                }
                this.filtrate = close;
                this.market = close;
                this.HouseListData.productType = data.productType;
                this.HouseListData.roomNo = data.roomNo;
                this.HouseListData.userAreaMin = data.userAreaMin;
                this.HouseListData.userAreaMax = data.userAreaMax;
                this.HouseListData.lookUrl = data.lookUrl;
                this.HouseListData.roommateConstellation = data.roommateConstellation;  //星座
                this.HouseListData.orientation = data.orientation;
                this.HouseListData.roommateSex = data.roommateSex === "2"? "" :data.roommateSex;
                this.HouseListData.hasIndieRestRoom = data.hasIndieRestRoom;   //独卫
                this.HouseListData.hasVeranda = data.hasVeranda;    //独阳
                this.isChangeFiltrate = true;
                if(close){
                    return
                }
                this.HouseLists = [];
                this.getHouseList();
            },
            // 底部tab点击事件
            Homepage(){//跳转到首页

                this.priceClass = false;
                this.isPriceClass = false;

                this.subwayClass = false;
                this.isSubwayClass = false;

                this.regionClass = false;
                this.isRegionClass = false;

                this.filtrateClass = false;
                this.isFiltrateClass = false;
                this.isChangeFiltrate = false;
                this.$refs.subwayCommpont.clear();
                this.$refs.regionCommpont.regionClear();
                this.setStorage("mm",true);
                // this.$refs.priceCommpont.priceClear();
                this.$refs.filtrateCommpont.filtrateClear();
                this.$router.push({path:'/HomePage'})
            },


            appointList(){//跳转约看清单

                this.priceClass = false;
                this.isPriceClass = false;

                this.subwayClass = false;
                this.isSubwayClass = false;

                this.regionClass = false;
                this.isRegionClass = false;

                this.filtrateClass = false;
                this.isFiltrateClass = false;
                this.isChangeFiltrate = false;
                this.$refs.subwayCommpont.clear();
                this.$refs.regionCommpont.regionClear();
                this.setStorage("mm",true);
                // this.$refs.priceCommpont.priceClear();
                this.$refs.filtrateCommpont.filtrateClear();
                this.$router.push('/appointList')
            },
            mine(){
                this.priceClass = false;
                this.isPriceClass = false;

                this.subwayClass = false;
                this.isSubwayClass = false;

                this.regionClass = false;
                this.isRegionClass = false;

                this.filtrateClass = false;
                this.isFiltrateClass = false;
                this.isChangeFiltrate = false;
                this.$refs.subwayCommpont.clear();
                this.$refs.regionCommpont.regionClear();
                this.setStorage("mm",true);
                // this.price = true;
                // this.priceMinMax=[500,10000]
                // this.setStorage("priceMinMax",this.priceMinMax);
                // this.$refs.priceCommpont.priceClear();
                // this.price = false;
                this.$refs.filtrateCommpont.filtrateClear();
                if(this.isECTouch()){
                    window.location.href = "https://www.guoanfamily.com/guoanjia/#/personalCenter";
                }else{
                	this.$store.state.isIndexTrue = false;
					this.$store.state.isonLineTrue = false;
					this.$store.state.isMyTrue = true;
                    this.$router.push('/PersonalCenter')
                }

            },
             //遮罩点击
            markets(){
                if(this.HouseListData.districtId == ""){
                    this.regionClass = false;
                }
                if(this.HouseListData.productType == "" && this.HouseListData.roomNo =="" && this.HouseListData.userAreaMin=="" && this.HouseListData.userAreaMax ==""){
                    this.filtrateClass = false;
                }
                if(this.HouseListData.priceMax == 10000 && this.HouseListData.priceMin == 500){
                    this.priceClass = false;
                 }
                if(this.HouseListData.stationsId == "" && this.HouseListData.subwayLineId == ""){
                    this.subwayClass = false;
                }
                // this.onMarket = true;
                this.filtrate = false;
                this.region = false;
                // this.regions = false;
                this.subway = false;
                this.price = false;
                this.market = !this.market;

            },
            //input框点击
            searchChange(){
                this.isSecordHeight = true;
                this.listPosition = this.$refs.myList.getPosition();
                this.setStorage("mm",false);
                this.$router.push({path:'/HouseList/HotSearch',query:{search:this.headerSearch,source:"houseList"}})
            },
            //跳转地图找房
            toMapSearch(){
                this.$router.push({path:'/MapSearch'});
            },
            //获取房源列表
            getHouseList(){
                this.loadings = true;
                let Url = "HouseInfoController/getHouseList";
                let req = Object.assign({}, this.HouseListData);
                return this.post(Url, req).then((res)=>{
                        if(res.data.length > 0){
                            res.data.forEach(item => {
                                item.tags= item.tags ? item.tags.split(",").slice(0,3) : "";
                                // item.attachImageLength = item.attachImage.length-2;
                                for( var i = 0; i < item.tags.length; i ++){
                                    if(item.tags[i] == ""){
                                        item.tags.splice(i,1)
                                    }
                                }
                                if(item.productType == "0019001" || item.productType == "0019003"){
                                    if(item.roomRentStatus=="0015001"){
                                        item.image = this.bookedUrl;
                                    }else if(item.roomRentStatus=="0015004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? this.concatFileUrl(item.image,200,180) : "";
                                    }
                                }else if(item.productType=="0019002"){
                                    if(item.houseRentStatus =="0026002"){
                                        item.image = this.bookedUrl;
                                    }else if(item.houseRentStatus =="0026004"){
                                        item.image = this.schipolUrl;
                                    }else{
                                        item.image = item.image ? this.concatFileUrl(item.image,200,180) : "";
                                    }
                                }
                                // item.image = item.image ? this.concatFileUrl(item.image) : "";
                                this.HouseLists.push(item)
                            });
                            if(res.data.length < 10){
                                this.isPhone = true;
                            }else{
                                this.isPhone = false;
                            }   
                            this.HouseListData.timeStamp = 0;
                            this.isMover = false;
                            this.loadings = false;
                        }else{
                            if(this.HouseListData.timeStamp ==0){
                                this.isMover = true;
                                this.isPhone = false;
                            }
                            
                        }
                        this.loadings = false;
                        this.setSession(this.KEYS.SEARCH_CONTENT,"")
                        if(res.data.length < 10){
                            this.isUpload =true;
                            return true;
                        }else{
                            this.isUpload =false;
                            return false;
                        }
                    })
            },
            //跳到房源详情
            goHouseDetail(id,productType,active418){
                this.listPosition = this.$refs.myList.getPosition();
                this.setStorage("mm",false);
                // this.isChangeFiltrate = true;
                this.$router.push({path:'/HouseList/houseDetail',query:{id:id,productType:productType,active418:active418}})
            },

            refresh(done){
                this.HouseListData.timeStamp = 0;
                this.HouseLists = [];
                this.isUpload = true;
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
                    return false;
                }
                if(this.HouseLists.length!=0){
                    this.HouseListData.timeStamp = this.HouseLists[this.HouseLists.length-1].publishTime;
                }
                this.getHouseList().then((res)=>{
                    done(res)
                })
            },
            //头部点击返回事件
            back(){

                this.priceClass = false;
                this.isPriceClass = false;

                this.subwayClass = false;
                this.isSubwayClass = false;

                this.regionClass = false;
                this.isRegionClass = false;

                this.filtrateClass = false;
                this.isFiltrateClass = false;
                this.isChangeFiltrate = false;
                this.setStorage("mm",true);
                this.$refs.filtrateCommpont.filtrateClear();
                this.$refs.regionCommpont.regionClear();
                // this.$refs.priceCommpont.priceClear();
                this.$refs.subwayCommpont.clear();


                this.$router.go(-1)
            },

            //调用微信接口
        	wxconfig() {
                this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(location.href),
                    {},{
                        interfaceType: "weichat"
                    }).then(response => {
                    // alert('初始化微信,配置config');
                    this.$wechat.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: response.appid, // 必填，公众号的唯一标识
                        timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                        nonceStr: response.noncestr, // 必填，生成签名的随机串
                        signature: response.signature, // 必填，签名，见附录1
                        jsApiList: [
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ',
                                'onMenuShareWeibo',
                                'onMenuShareQZone']// 必填，需要使用的JS接口列表
                    });
                        this.$wechat.ready(() =>{
                            this.wxShare();
                        })
                });
            },
			wxShare() {
                // 分享给朋友
                let self = this;
                this.$wechat.onMenuShareAppMessage({
                    title: "国安家-高品质公寓运营商", //标题
                    desc: "拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!", //描述
                    link:"https://www.guoanfamily.com/guoanjiaApp/#/HouseList?name="+this.houseType+"&from=true", //连接地址指打开分享时页面地址Homepage/HouseList?name=0019001
                    imgUrl: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
                    trigger: (res) => {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                },
                success: (res) =>{
                    this.market = false;
                    // this.shareImg = false;
                },
                cancel: (res) =>{
                    this.$vux.confirm.show({
                         content:"已取消",
                        onCancel () {//取消执行
                      },
                       onConfirm () {//确定执行
                       }
                     })
                    this.market = false;
                    // this.shareImg = false;
                },
                fail: (res) => {
                     this.$vux.confirm.show({
                         content:"分享失败",
                        onCancel () {//取消执行
                      },
                       onConfirm () {//确定执行
                       }
                     })
                }
            });
                // 分享到朋友圈
            this.$wechat.onMenuShareTimeline({
                title: "国安家-高品质公寓运营商", //标题
                desc: "拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!", //描述
                link: "https://www.guoanfamily.com/guoanjiaApp/#/HouseList?name="+this.houseType+"&from=true", //连接地址指打开分享时页面地址
                imgUrl: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
                trigger: (res) => {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
                success: (res) => {
                    this.market = false;
                    // this.shareImg = false;
            },
                cancel: (res) => {
                    this.$vux.confirm.show({
                         content:"已取消",
                        onCancel () {//取消执行
                      },
                       onConfirm () {//确定执行
                       }
                     })
                    this.market = false;
                    // this.shareImg = false;
                },
                fail: (res) => {
                   this.$vux.confirm.show({
                         content:"分享失败",
                         onCancel () {//取消执行
                   },
                        onConfirm () {//确定执行
                       }
                  })
                }
                });
                    this.$wechat.error(function(res) {
            });

            },
            moverClick(){
                this.HouseListData = {
                    timeStamp: 0,											
                    roomNo: "",											
                    productType: "",											
                    districtId: "",	
                    regionId:"",										
                    subwayLineId: "",											
                    stationsId: "",											
                    priceMax: "",											
                    priceMin: "",											
                    textSearch: "",											
                    size: 10,
                    userAreaMin:"",
                    userAreaMax:"",
                    roommateConstellation:"",  //星座
                    orientation:"",
                    roommateSex:"",
                    hasIndieRestRoom:"",   //独卫
                    hasVeranda:"",    //独阳
                }	
                this.priceClass = false;
                this.isPriceClass = false;

                this.subwayClass = false;
                this.isSubwayClass = false;

                this.regionClass = false;
                this.isRegionClass = false;

                this.filtrateClass = false;
                this.isFiltrateClass = false;
                this.isChangeFiltrate = false;
                this.setStorage("mm",true);
                this.$refs.filtrateCommpont.filtrateClear();
                this.$refs.regionCommpont.regionClear();
                // this.$refs.priceCommpont.priceClear();
                this.$refs.subwayCommpont.clear();
                this.getHouseList();
            }
        },
        watch: {
            price:function(){
                if(this.price){
                    this.priceClass= true;
                }else if(this.price == false && this.isPriceClass == false ){
                    this.priceClass= false;
                }else{
                    this.priceClass= true;
                }
            },
            region:function(){
                if(this.region){
                    this.regionClass= true;
                }else if(this.region == false && this.isRegionClass == false ){
                    this.regionClass = false;
                }else{
                    this.regionClass = true;
                }
            },
            subway:function(){
                if(this.subway){
                    this.subwayClass= true;
                }else if(this.subway == false && this.isSubwayClass == false ){
                    this.subwayClass = false;
                }else{
                    this.subwayClass = true;
                }
            },
            filtrate:function(){
                if(this.houseType){
                    this.filtrateClass= true;
                }
                else if(this.filtrate){
                    this.filtrateClass= true;
                }else if(this.filtrate == false && this.isFiltrateClass == false ){
                    this.filtrateClass = false;
                }else{
                    this.filtrateClass = true;
                }
            },
        },
        computed:{
             isonLinerent(){
                if(this.$route.query.title != "在线租房"){
                    this.openUrl = openUrl; //"../../../../static/rent/img/open.png";
                    this.stopUrl = stopUrl;//"../../../../static/rent/img/stop.png";
                }else{
                    this.openUrl = openUrl1  //"../../../../static/new/img/stop.png";
                    this.stopUrl = stopUrl1 //"../../../../static/new/img/open.png";
                }
                return this.$route.query.title != "在线租房";
            }
        }
    }
</script>
