<style scoped lang="scss">
@import "../../style/theme.scss";
.vux-x-icon {
		fill: white;
	}
	.locationImg{
		float: right;
		width:0.33rem;
		height: 0.55rem;
		background: lightblue;
		z-index: 1000;
	}
	$height: 0.8rem;
    $btnSize: 0.42rem;
	 .header{
        position: fixed;
        top: 0;
        width: 100%;
        height: $height;
        border-bottom: $baseBorder;
        z-index: 10;
        background: $baseColor;
    }

    .back-btn{
        float: left;
        height: $height;
        width: $height;
        background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
        background-size: $btnSize;
        display: inline-block;
    }
	.right-part{
        float: right;
        height: $height;
        width: $height;
    }
    .middle{
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: $height;
        right: $height;
		font-size: $titleFontSize;
        line-height: $height;
        color: $titleColor;
    }
    img{
    	width: 100%;
    	height: 100%;
    }
    .menuImg{
       	float: right;
       	width: 0.37rem;
       	height: 0.25rem;
       	position: absolute;
       	right: 0.2rem;
       	top: 0.27rem;
    }
    .locationImg{
    	width: 0.34rem;
    	height: 0.55rem;
    	float: left;
    	margin-left: 0.1rem;
    	margin-top: 0.1rem;
    }
    .success-content{

    	.success-content-img{
    		width: 100%;
    		height: 3.5rem;
    	}
    	.map-submit{
    		box-sizing: border-box;
    		padding: 0.36rem 0.3rem 2rem;
    		background: #e8e8e8;
    		.content-map{
    			height: 3.28rem;
    			box-sizing: border-box;
    			padding: 0.05rem;
    			background: white;
    			border-bottom: 0.05rem solid #aeaeae;
    			border-radius: 0.15rem;
    		}
    		.content-submit{
    			width: 5.18rem;
    			height: 0.7rem;
    			background: #e24e59;
    			color: #fefdff;
    			font-size: $titleFontSize;
    			border-radius: 0.1rem;
    			text-align: center;
    			line-height: 0.7rem;
    			/*margin-left: (7.5rem-5.18rem-0.6rem)/2;*/
    			margin-left:12.463%;
    			margin-top: 1.3rem;
    		}
    	}
    }
    .appoint-tottom{
		width: 100%;
		background: white;
		padding-top:0.25rem;
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		z-index: 100;
		.findHouse,.appointList,.mine{
			width: 1.82rem;
			height: 0.6rem;
			border-top-right-radius: 0.15rem;
			border-top-left-radius: 0.15rem;
			text-align: center;
			line-height: 0.6rem;
			color: white;
			font-size: $mostFontSize;
			float: left;
			margin-left: 0.48rem;
		}
		.findHouse{
			background: #6fcf76;
		}
		.appointList{
			background: #e2614c;
		}
		.mine{
			background: #f6b04e;
		}
	}
	.XSDFXPage{
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin: 0;
            font-family: "微软雅黑";
        }
</style>
<template>
	<div>
		<!--标题-->
		<div class="header">
	        <span class="back-btn" @click="back"></span>
			<div class="middle">
	           	约看成功
	           	<div class="menuImg">
	           		<img src="../../../../static/rent/yk/menu.png" alt="" />
	           	</div>
	       </div>
	        <div class="right-part">
	        	<div class="locationImg">
	        		<img src="../../../../static/rent/yk/location.png" alt="" />
	        	</div>
	        </div>
	  	</div>
	  	<div style="height: 0.8rem; background: $baseColor;"></div>
	  	<!--内容-->
		<div class="success-content">
			<div class="success-content-img">
				<img src="../../../../static/rent/yk/success.png" alt="" />
			</div>
			<div class="map-submit">
				<div class="content-map">
					<div id="XSDFXPage" class="XSDFXPage"></div>
				</div>
				<div class="content-submit">完成</div>
			</div>
		</div>

		<div class="appoint-tottom">
			<div class="findHouse">找房</div>
			<div class="appointList">约看清单</div>
			<div class="mine">我的</div>
			<div style="clear: both;"></div>
		</div>
	</div>

</template>

<script>
	export default {
        data() {
            return {

            }
        },

        created() {

        },

        mounted() {

            // 创建Map实例
            const map = new BMap.Map("XSDFXPage",{enableMapClick:true});
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            // 设置地图显示的城市 此项是必须设置的
            map.setCurrentCity("北京");
           	// 添加地图平移缩放控件
           	map.addControl(new BMap.NavigationControl());
            // 添加地图定位控件
            map.addControl(new BMap.GeolocationControl());


           	const point = new BMap.Point(116.404, 39.915);
			map.centerAndZoom(point, 15);
			const marker = new BMap.Marker(point);  // 创建标注
			map.addOverlay(marker);               // 将标注添加到地图中
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

        },

        methods: {
			back(){
                this.$router.go(-1);
            }
        },

        components: {}
    }
</script>

