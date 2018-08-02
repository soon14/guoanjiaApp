<style scoped lang="scss">
     @import "../../style/theme.scss";
     $height: 0.7rem;
    .content {
        width: 100%;
        height: 100%;
        background-color: white;
    }
    .innerStyle{
    	position: fixed;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	overflow-y:scroll ;
    }
    .logo {
    }
    .top{
        height:1.3rem;
    }
    .tab{
        height:0.8rem;
        line-height:0.8rem;
        background-color:#fff;
        width:100%;
        position:relative;
        .wantC {
            float:left;
            width:50%;
            font-size:0.32rem;
            text-align:center;
            border-right:1px solid #e8e8e8;
            box-sizing: border-box;
        }
        .cRecord {
            float:left;
            width:50%;
            font-size:0.32rem;
            text-align:center;
            box-sizing: border-box;
        }
        .sanjiao {
            width: 0;
            height: 0;
            z-index:100;
            border-width: 0.16rem 0.16rem 0.16rem 0.16rem;
			border-style: solid;
			border-color: #fff transparent transparent transparent ;
            position: absolute;
            bottom:-0.32rem;
            left:25%;
            margin-left:-0.16rem;
            transition: all 0.5s;
        }
    }
    .scroll {
        // overflow:scroll;
        height: 8.8rem;
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>

<template>
    <div class="content">
		<div class="fixContent innerStyle" >
	        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
	        <div class="tab">
	            <div class="wantC" @click="wantc" :style="wtc">我要投诉</div>
	            <div class="cRecord" @click="cRecord" :style="crd">查看投诉记录</div>
	            <!--<div class="sanjiao" :style="{left:showSj}"></div>-->
	        </div>
	        <div class="scroll">
	            <component :is="showCpt"></component>
	        </div>
		</div>
    </div>
</template>

<script>
    import Wantc from '../../components/tab/Wantc'
    import Crecord from '../../components/tab/Crecord'
    export default {
        name: 'Collection',
        data() {
            return {
                username: "",
                password: "",
                showSj:'25%',
                showCpt:'Wantc',
                wtc:{
                    color:'#999999',
                    fontSize:'0.28rem',
                    background:'#eeeeee'
                },
                crd:{
                    color:'#e34b3e',
                    fontSize:'0.28rem',
                    background:'white'
                },
                token:"",
                androidOrIos:true,	//默认为安卓登录
            }
        },
        components: {
            Wantc,
            Crecord
        },
        computed: {
           show(){
               return this.showSj
           }
        },
        created(){

        },
        mounted(){
            this.token = this.getUrlStr();
            this.getlocal();
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
            getUrlStr() {
                 var url = window.location.href;
                 if(url.indexOf('?') != 1) {
                    url =  url.substring(url.indexOf('?')+1);
                   var arr =  url.split("=");
                   return arr[1]
                 }
            },
            getlocal(){
            },
            wantc(){
                this.showSj = "25%",
                this.wtc = {
                    color:'#999999',
                    fontSize:'0.28rem',
                    background:'#eeeeee'
                },
                this.crd = {
                    color:'#e34b3e',
                    fontSize:'0.28rem'
                },
                this.showCpt = "Wantc"
            },
            cRecord() {
                this.showSj = "75%",
                this.crd = {
                    color:'#999999',
                    fontSize:'0.28rem',
                    background:'#eeeeee'
                },
                this.wtc = {
                	color:'#e34b3e',
                    fontSize:'0.28rem',
                    background:'white'
                },
                this.showCpt = "Crecord"
            }
        }
    }
</script>
