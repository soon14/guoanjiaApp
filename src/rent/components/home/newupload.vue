<style lang="less" scoped>
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/center.less';
	.table-view{
        background: white;
        .table-view-list{
        	box-sizing: border-box;
        	padding: 0.3rem 0.3rem 0.3rem 0.3rem;
            border-bottom: 1px solid #eee;
        	.list-top{
        		width: 100%;
        		height: 3.2rem;
        		.imgOne{
        			width: 68%;
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
        				text-align: center;
    					height: 0.6rem;
    					line-height: 0.6rem;
        				background: rgba(0,0,0,0.5);
    					line-height: 0.5rem;
    					text-align: center;
        				color:white;
        				// font-weight: 700;
        				box-sizing: border-box;
        				padding-top: 0.08rem;
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
        			width: 28%;
        			float: right;
        			height: 100%;
        			
        			.imgTwo,.imgThree{
        				width: 100%;
        				height: 48%;
        				img{
        					width: 100%;
        					height: 100%;
                            border-radius: 0.06rem;
        				}
        			}
        			.imgThree{
        				margin-top: 7%;
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

</style>
<template>
    <div>
    	<ul class="table-view">
            <li class="table-view-list" v-for="(item,index) in HouseLists" :key="index" @click="goHouseDetail(item.id,item.productType)">
            	<div class="list-top">
            		<div class="imgOne">
            			<img class="pull-left" :src="item.roomFirstImage">
            			<div class="houseMoney">
            				<div class="houseMoneyCHN"></div><div class="houseMoneyNum">{{item.price?item.price:"敬请关注"}}</div><div v-if="item.price">元/月</div>
            			</div>
            		</div>
            		<div class="imgRight">
            			<div class="imgTwo">
            				<img class="pull-left" :src="item.roomSecondImage">
            			</div>
            			<div class="imgThree">
            				<img class="pull-left" :src="item.roomThirdImage">
            			</div>
            		</div>
            	</div>
            	<div class="list-bottom">
            		<div class="list-bottom-left">
            			{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber || ""}}
            		</div>
            		<div class="list-bottom-right">
            			{{item.buildNo}}号楼&nbsp;{{item.roomName}}&nbsp;&nbsp;&nbsp;{{item.roomFloor?item.roomFloor+'层/':''}}{{item.userArea}}㎡
            		</div>
            		<div style="clear: both;"></div>
            	</div>
            </li>
        </ul>
        
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'

export default {
  	
  	
  	data () {
	    return {
			HouseLists:[],
	    }
  	},
  	mounted(){
  		this.getHomePageDetail();
  	},
  	methods: {
		//获取首页数据
		getHomePageDetail(){
            this.post('common/homePage',{
	        	"size":'3'
	        }).then((res)=>{
	        	this.HouseLists = res.data.roomList.map(item=>{
	        		if(!item.roomFirstImage){
	        			item.roomFirstImage = 'https://media.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	        		}else{
	        			item.roomFirstImage = !item.roomFirstImage ||this.concatFileUrl(item.roomFirstImage,470,280);
	        		}
	        		
	        		if(!item.roomSecondImage){
	        			item.roomSecondImage = 'https://media.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	        		}else{
	        			item.roomSecondImage = !item.roomSecondImage ||this.concatFileUrl(item.roomSecondImage,180,130);
	        		}
	        		if(!item.roomThirdImage){
	        			item.roomThirdImage = 'https://media.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	        		}else{
	        			item.roomThirdImage = !item.roomThirdImage ||this.concatFileUrl(item.roomThirdImage,180,130);
	        		}
	        		return item;
	        	})
	        })
		},
		//跳到房源详情
        goHouseDetail(id,productType){
            this.$router.push({path:'/HouseList/houseDetail',query:{id:id,productType:productType}})
        },
  	}
}
</script>

