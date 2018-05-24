<template>
	<div>
		<div class="switchBox" @click="switchToggle">
			<p v-show="!isMan" class="switchText switchWomen" >女士</p>
			<span type="button"  class="switchSlide" v-bind:style="[isMan ? switchLeft : switchRight]"></span>
			<p v-show="isMan" class="switchText switchMan">先生</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isMan:true,
			ownerSex:'',
			switchLeft:{
				left: '0.02rem'
			},
			switchRight:{
				right: '0.02rem'
			},
			
		}
	},

	created() {

	},

	mounted() {

	},
	computed: {
		
	},
	methods: {
		
		switchToggle () {
			this.isMan = !this.isMan
//			alert(this.isMan);
			if(this.isMan == true){
				this.ownerSex = 1;
//				alert(this.ownerSex)
			}else{
				this.ownerSex = 0;
//				alert(this.ownerSex)
			};
			this.$emit('sendData',this.ownerSex)
			
			
		}
	},
	components: {
			
	}
}
	
</script>

<style scoped lang="scss">
	@import "../../style/theme.scss";
	@import "../../style/public.scss";
	.switchBox{
		width: 1.1rem;
		height: 0.45rem;
		border: 0.02rem solid #e94a5e;
		border-radius: 0.225rem;
		box-sizing: border-box;
		background:#e94a5e;
		padding: 0.02rem;
		position: relative;
		
		.switchText{
			font-size: $reminderFontSize;
			color: white;
			position: absolute;
			top: 0.04rem;
		}
		.switchMan{
			right: 0.1rem;
		}
		.switchWomen{
			left: 0.1rem;
		}
		.switchSlide {
			display: block;
			width: 0.37rem;
			height: 0.37rem;
			border-radius: 50%;
			background: white;
			position: absolute;
			top:0.02rem;
			box-shadow: 0 0 0.1rem #888;
			transition: all 1s;	
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
</style>