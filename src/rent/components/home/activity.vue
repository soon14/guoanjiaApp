<style scoped lang="scss">
	@import "../../style/theme.scss";
	$height: 2rem;
	.activity{ 
        background:#fff;
        // margin-top:0.15rem;
        padding:0.05rem;
        .activity-box{
            // width:90%;
            // margin-left:5%;
            margin-left:.3rem;
            margin-right:.3rem;
            .activity-top{
                width:100%;
                padding: 0.2rem 0 0.15rem 0;
                height:2rem;
                .activity-left{
                    // width:2.4rem;
                    width:35%;
                    height:1.8rem;
                    float: left;
                    img{
                        width:100%;
                        height:100%;
                        border-radius: 0.1rem;
                    }
                }
                .activity-right{
                    width:62%;
                    float: right;
                    height: 1.8rem;
                    box-sizing: border-box;
                    padding-left: 0.15rem;
                    
                    .title-activty{
                        font-size:0.32rem;
                        height: 0.4rem;
                        color: black;
                       	overflow:hidden;
	       				text-overflow:ellipsis;
						white-space:nowrap;
						text-align: left;
                    }
                    .title-activty-word{
                    	width: 100%;
                    	color: #666666;
                        font-size: 0.28rem;
                        margin-top:0.1rem;
                        text-align: left;
						height: 1.3rem;
						
                    }
                }
            }

        }
    }
</style>

<template>
    <div>
    	<!--精彩活动-->
        <div class="activity" v-if="!this.$store.state.showWxTitle">
            <div class="activity-box" @click="activity2">
                <div class="activity-top">
                    <div class="activity-left">
                    	<img src="../../../../static/rent/dianliang.png" alt="" />
                    </div>
                    <div class="activity-right">
                        <p class="title-activty">点亮北京</p>
                        <p class="title-activty-word">在这个日渐寒冷的深秋时刻，为这座古老又崭新的城市，点亮等你回家的灯火~</p>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>

            <div class="activity-box" @click="activity1">
                <div class="activity-top" style="padding-top: 0;">
                    <div class="activity-left">
                    	<img src="../../../../static/rent/baiwan.png" alt="" />

                    </div>
                    <div class="activity-right" >
                        <p class="title-activty">百万房租免费送</p>
                        <p class="title-activty-word">让我们来个改变之旅参加国安家品质租住节领取价值3500元礼包为自己找一个理想家~</p>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        created() {

        },

        mounted() {

        },

        methods: {
        	activity1(){
	    	this.$router.push({path:"framePage",query:{src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484447&idx=1&sn=5742f69dbacf8664df9cab90c712c043&chksm=ea191f81dd6e969713ea45ba70a9837cef94ed37f2dd6f93837ce509ac7704fd3ce9c2140afe#rd',title:'百万房租免费送'}});
		    },
		    activity2(){
		    	this.$router.push({path:"framePage",query:{src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484478&idx=1&sn=dd7412962e6c1fa477d9c821e8d04205&chksm=ea191fa0dd6e96b674e15a0edd3b8fa6f7ffc9d117519bbaea8592a65454ab75ec99f0199fb6#rd',title:'点亮北京'}});
		    }
        },

        components: {}
    }
</script>
