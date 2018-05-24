<template>
    <div class="box" style="width:100%;height:100%;overflow:hidden;">
        <div ref="titleHeight" v-if="!this.$store.state.showWxTitle" :class="[androidOrIos ? 'emptyandroid' : 'emptyios']"></div>
        <div style="overflow:hidden;" class="center" ref="centerHeight" :style="{height:centerHeight}">
          <div style="width:100%;height:104%;overflow: scroll;">
          	<iframe 
          :src="framesrc" 
          width="100%"
          height="100%"
          style=""
          ></iframe>
          </div>          
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      framesrc: "",
      frameHeight: 667,
      androidOrIos: true, //默认为安卓登录
      isRecommend:"",
      centerHeight:0,//为center设置高度初始化
      shareTitle:"国安家-高品质公寓运营商",
      shareImg:"https://media.guoanfamily.com/rent/static/HomePage/chuxin02.png",
      shareScript:"拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!"
    };
  },
  mounted(){
      // var mxx = document.getElementById("headerTop");
      // console.log(mxx.style);
	    if(!this.$store.state.showWxTitle){
	      	let titleH = this.$refs.titleHeight.clientHeight;
	      	let windowHeght = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      	this.centerHeight = (windowHeght-titleH)+"px";
	    }else{
	    	this.centerHeight = "100%";
	    }
      
  },
  created() {
    this.getHeight();
    this.isIosAndroid();
	
	//验证链接是否为微信公众号链接
    var srcFirst = this.$route.query.src;
    if (srcFirst.indexOf("mp.weixin.qq.com") == -1) {
      //其他外链
      this.framesrc = this.$route.query.src;
    } else {
      //微信公众号外链
      var that = this;
      var gongzhonghao = this.$route.query.src;
      fetch(
        "https://www.guoanfamily.com/agenthouseCutomer/WxController/article?articleUrl=" +
          encodeURIComponent(gongzhonghao),
        {
          method: "get", //方式
          headers: { "Content-Type": "text/html" }
        }
      )
        .then(function(response) {
          return response.text();
        })
        .then(function(res) {
          var html = "data:text/html;charset=utf-8," + res;
          that.framesrc = html.replace(/data-src/g, "src");
        });
    }
    //判断iframe页面内容的链接做出相应的分享图片、标题、描述的修改。
    this.changeDescript();
    //判断是否是微信浏览器
    if(this.isECTouch()){
    	//console.log("微信浏览器");
		this.wxconfig();
	}
  },
  methods: {
  	//判断是安卓还是ios登录，定义到变量中
    isIosAndroid(){
		if(this.isECTouch()){
			//weixin
			this.androidOrIos = false;
			return false;
		}else{
			//判断是安卓还是ios登录，定义到变量中
			let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isAndroid === true && isiOS === false) {
                this.androidOrIos = false;
                return false;
            }
            if (isAndroid === false && isiOS === true) {
                this.androidOrIos = false;
                return false;
            }	
		}
	},
    goBack() {
      this.$router.back(-1);
    },
    getHeight() {
      this.frameHeight = window.innerHeight;
    },
    //修改分享出去的描述、图片、标题
    changeDescript(){
    	if(this.$route.query.num === '1'){
    		//全民推荐的活动页
		    this.shareTitle = "国安家公寓，推荐好友入住领现金大奖";
		    this.shareImg = "https://www.guoanfamily.com/staticWeb/guoanshequ/img/desc.png";
		    this.shareScript = "国安家公寓全城募集租客等您一荐倾心";
    	} else if(this.$route.query.num === '2'){
    		//418特惠节
    		//全民推荐的活动页
		    this.shareTitle = "国安家418租住特惠节，品质好房放肆选";
		    this.shareImg = "https://media.guoanfamily.com/www/activt418.jpg";
		    this.shareScript = "418租住特惠节，众家涨价我独降。满场降价仅此一周，品质好房放肆选！";
    	}
    },
    //分享，微信初始化
	wxconfig() {
        this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(location.href.split('#')[0]),
            {},{
                interfaceType: "weichat"
            }).then(response => {
            //alert('初始化微信,配置config');
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
    wxShare(){
        // 分享给朋友
        let self = this;
        this.$wechat.onMenuShareAppMessage({
            title: self.shareTitle, //标题
            desc: self.shareScript, //描述
            link:self.framesrc, //连接地址指打开分享时页面地址
            imgUrl: self.shareImg, //图片
            trigger: (res) => {
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
	            title: self.shareTitle, //标题
	            desc: self.shareScript, //描述
	            link: self.framesrc, //连接地址指打开分享时页面地址
	            imgUrl: self.shareImg, //图片
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
    }
};
</script>

<style>
.emptyios {
  height: 1.3rem;
}
.emptyandroid {
  height: 1.3rem;
}
</style>