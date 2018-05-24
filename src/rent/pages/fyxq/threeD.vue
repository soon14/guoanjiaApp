<template>
	<div style="height: 100%;width: 100%;">
		<div class="threeFrame">
			<div class="threeFrameClose" @click="goThreeClose"></div>
			<iframe :src="srcFrame" 
			    width="100%"
			    height="100%"
			    >
			</iframe>
		</div>
	</div>
</template>

<script>
	export default{
		data (){
			return{
				srcFrame:this.$route.query.src
			}
		},
		methods:{
			goThreeClose(){
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang="scss">
.threeFrame{
    width: 100%;
    height: 100%;
    .threeFrameClose{
    	position: absolute;
	    z-index: 20001;
	    top: 18px;
	    left: 60px;
	    width: 35px;
	    height: 35px;
	    cursor: pointer;
		background-image: url("https://media.guoanfamily.com/www/closewhite.png");
		background-repeat:no-repeat;
		background-position:6px 6px;
		background-size:68% 68%;
		border-radius: 50%;
		/*background-color:rgba(0,0,0,.2);*/
	}
}
</style>