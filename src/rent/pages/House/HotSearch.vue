<style scoped lang="scss">
@import "../../style/theme.scss";
    .hot-search{
        position: relative;
        height: 100%;
        background-color:$titleColor;
        .header-search{
            width: 5.6rem;
            padding-left:0.7rem;
            color:#000;
            left: 0.1rem;
            top:0.3rem;
            height: 0.6rem;
        }
        .iosheadersearch{
            top:0.55rem;
        }
        .wexcss{
            width: 5.9rem;
            left:-0.5rem;
            top: 0.3rem;
        }
        .input-search{
            position: absolute;
            fill: #999;
            top:0.3rem;
            left:0.9rem;
            width: 0.6rem;
            height: 0.5rem;
        }
        .iosinputsearch{
            top:0.6rem;
        }
        .wexicon{
            left: 0.45rem;
            top: 0.35rem;
        }
        .search-click{
            position: absolute;
            top:0.3rem;
            right:0.05rem;
            width: 0.8rem;
            height: 0.5rem;
            padding:0rem;
            // text-align: center;
            // border-radius: 0.1rem;
            // border:1px solid $greyColor;
            font-size: $reminderFontSize;
            // background: $greyColor;
        }
        .iossearchclick{
            top:0.63rem;
        }
        .wexsearch{
            top:0.35rem;
            right: 0.25rem;
        }
        .voice{
            display:inline-block;
            width: 0.5rem;
            height: 0.52rem;
            top:0.5rem;
            right:0.2rem;
            position: absolute;
        }
        .hot-list{
            position: relative;
            top:0.92rem;
            width: 100%;
            font-family: $baseFontFamily;
            overflow: hidden;
            .header-hot{
                width: 100%;
                color:#000;
                margin-top:0.56rem;
                text-align: left;
                padding-left: 0.4rem;
                font-size:$titleFontSize;
                font-size: $littleFontSize;
            }
            .history-search{
                width: 100%;
                color:#000;
                margin-top:0.8rem;
                text-align: left;
                padding-left: 0.4rem;
                font-size: $littleFontSize;
            }
                .hot-ul{
                    padding:0.4rem 0rem 0rem 0.4rem;
                    height: auto;
                    overflow: hidden;
                .area-list{
                    width: auto;
                    height: 0.48rem;
                    margin-right:0.2rem;
                    margin-bottom:0.18rem;
                    padding: 0.1rem 0.24rem ;
                    // border-radius:0.2rem;
                    text-align: center;
                    line-height: 0.48rem;
                    background-color: $titleColor;
                    color:#666;
                    border:0.02rem solid #ccc;
                    float: left;
                    font-size:$mostFontSize;
                }
            }
                .history-ul{
                    width: 100%;
                    height: auto;
                    margin-top:0.36rem;
                    .history-area-list{
                    	text-align: left;
                        padding-left:0.46rem;
                        width: 100%;
                        height: 0.94rem;
                        background-color: $titleColor;
                        font-size:$mostFontSize;
                        line-height: 0.94rem;
                        border-bottom:1px solid $lineColor;
                        &:last-child{
                            border-bottom:none;
                        }
                    }
                }
                .ioshistoryul{
                    margin-top: 0.5rem;
                }
        }
        .ioshotlist{
            top:1.4rem;
        }
        .clear-history{
            width: 100%;
            height: 1.05rem;
            font-size:$mostFontSize;
            background-color: $titleColor;
            margin-top:0.6rem;
            text-align: center;
            line-height: 1.05rem;
            color:$partColor;
            font-family: $baseFontFamily;
            position: relative;
            .clear-img{
                // display:inline-block;
                width: 0.3rem;
                height: 0.3rem;
            }
        }
        .voice-round{
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            position:absolute;
            color:$titleColor;
            top: 50%;
            left:50%;
            // background-color: $friendlyColor;
            background:url('../../../../static/rent/house-list/closevoice.jpg') no-repeat;
            background-size:100%;
            z-index: 10;
            transform: translate(-1.5rem,-1.5rem);
            .round{
                position:absolute;
                top:-0.015rem;
                left:-0.015rem;
                display: block;
                width: 100%;
                height: 100%;
                border:0.03rem solid $titleColor;
                border-radius:50%;
                animation: warn 1.5s linear infinite;
            }
            .round2{
                width: 80%;
                height: 80%;
                top:10%;
                left:10%;
                animation: warn 1.5s linear infinite;
            }
            .round3{
                width: 60%;
                height: 60%;
                top:20%;
                left:20%;
                animation: warn 1.5s linear infinite;
            }
            .round4{
                width: 40%;
                height: 40%;
                top:30%;
                left:30%;
                animation: warn 1.5s linear infinite;
            }
        }
        .market {
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.4;
            position: fixed;
            left: 0;
            bottom: 0;
            top: 0;
            right: 0;
            margin: auto;
            z-index: 1;
            text-align: center;
            .hint{
                color: $titleColor;
                font-size:$reminderFontSize;
                position: absolute;
                bottom:3.5rem;
                left:2.3rem;
                letter-spacing:0.02rem;
            }
        }
    }
@keyframes warn {
    0% {
        transform: scale(0);
        opacity: 0.0;
    }
    25% {
        transform: scale(0.25);
        opacity: 0.15;
    }
    50% {
        transform: scale(0.5);
        opacity: 0.3;
    }
    75% {
        transform: scale(0.75);
        opacity: 0.45;
    }
    100% {
        transform: scale(1);
        opacity: 0.0;
    }
}
.outheight{
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
</style>
<template>
    <div class="hot-search">
        <ga-page-header :class="{'outheight':isWex}">
            <p slot="middle">
                <input type="text" class="header-search" :class="{iosheadersearch:!isAndrion,wexcss:isWex}" placeholder="请说出或输入您想住的区域或小区" maxlength="11" v-model="searchContent" v-if="isWxVoice">
                <input type="text" class="header-search" :class="{iosheadersearch:!isAndrion,wexcss:isWex}" placeholder="请输入您想住的区域或小区" maxlength="11" v-model="searchContent"  v-if="!isWxVoice">
            </p>
            <p slot="right-btn">
                <x-icon type="ios-search" size="30" class="input-search" :class="{iosinputsearch:!isAndrion,wexicon:isWex}"></x-icon>
                <x-button class="search-click" @click.native="onSearch" mini :class="{iossearchclick:!isAndrion,wexsearch:isWex}">搜索</x-button>
                <img :src="voice" class="voice" @click="voiceClick" v-if="isVoice">
            </p>
        </ga-page-header>
        <div class="hot-list" :class="{ioshotlist:!isAndrion}">
            <div class="header-hot">热门搜索</div>
            <ul class="hot-ul">
                <li v-for="item in HotSearchList" :key="item.index" class="area-list" @click.once="HotSearchClick(item)">
                        {{item}}
                </li>
            </ul>
            <div class="history-search">搜索历史</div>
            <ul class="history-ul" :class="{ioshistoryul:!isAndrion}">
            	
                <li v-for="item in hotAllList" :key="item.index" class="history-area-list" @click.once="HistorySearchClick(item)">
                        {{item}}
                </li>
                <li class="history-area-list"></li>
            </ul>
            <div style="clear: both;"></div>
        </div>
        <div class="clear-history" @click="clearClick">
            <span class="clear-img" :style="clearImg"></span>
            清空历史记录
        </div>
        <div class="voice-round" v-show="isVoiceShow" @click="stopVoice">
           <span class="round"></span>
           <!-- <span class=" round round1"></span> -->
           <span class="round round2"></span>
           <span class="round round3"></span>
        </div>
        <!-- 遮罩层 -->
        <div class="market" v-if="market" @click="markets">
            <span class="hint">正在聆听中<br/>请保持录音时间超过一秒!</span>
        </div>
    </div>
</template>

<script>
import { XButton} from 'vux'
import voice from '../../../../static/rent/house-list/voice.png';
export default {
    components: {
        XButton,
    },
    data () {
            return {
                voice:voice,
                HotSearchList:["朝阳", "海淀", "西城", "通州", "呼家楼", "国贸", "林奥嘉园", "安河家园", "通惠家园"],
                hotAllList:'',
                isVoice:false,
                localId:"",
                searchContent:this.$route.query.search || "",
                searchList:[],
                market:false,
                allSearchLog:"",
                // userId:"",
                clearImg:{
                    backgroundImage: "url(" + require('../../../../static/rent/img/clear1.png') + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    position: "absolute",
                    left: "2.45rem",
                    top: "0.38rem",
                },
                source : true,
                isAndrion:true,
                isWex:false,
            }
    },
    created(){
        if(this.isECTouch()){
           try {
                this.onLoadWx();
            } catch (e) {
                alert(e.name + ": " + e.message);
            }
            this.isWex = true;
        }

        //let user = this.getStorage(this.KEYS.USER_INFO);
        // this.userId = user.id;
        // this.userId = "";
        if(this.getStorage(this.KEYS.SEARCH_LOG)){
            this.getHistoryList();
        }
        if(this.$route.query.source){
            this.source = true;
        }else{
            this.source = false;
        }
        if(this.AndroidOrIos()){
            this.isAndrion = true;
        }else{
            this.isAndrion = false;
        }
        // this.HotSearchListLog();
    },
    methods: {
        //点击搜索
        onSearch(){
            if(this.searchContent!=""){
                // this.post("common/checkWords",{
                // str:this.searchContent
                // }).then((res)=>{
    //             if(!res.code==0){
    //                 this.$vux.confirm.show({
    //                    content:"您输入的内容包含敏感字,请重新输入!",
    //                  onCancel () {//取消执行
    //                   },
    //                  onConfirm () {//确定执行
    //                  }
    //                  })
    //             }else{
                    if(this.getStorage(this.KEYS.SEARCH_LOG)){      //判断是否有搜索记录有则判断以是否搜索过 否则直接储存
                        this.allSearchLog = this.getStorage(this.KEYS.SEARCH_LOG);
                        if(this.allSearchLog.indexOf(this.searchContent)==-1 && this.searchContent!=""){
                            this.searchList.push(this.searchContent);
                            this.allSearchLog.unshift(this.searchContent);
                            let Searchs = this.allSearchLog.slice(0, 10);
                            this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                        }
                    }else if(this.searchContent!=""){
                            this.searchList.push(this.searchContent);
                            let Searchs = this.searchList;
                            this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                    }
            if(this.searchContent){
                this.post("houseSearchLog/save",{
                    "keyword": this.searchContent,
                    // "userId": this.userId,
                    }).then((res)=>{
                        if(res.code==0){
                            this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(this.searchContent));   //记录搜索内容
                            if(!this.source){     //如果不是从房源列表进来的就push 否则就后退back
                                this.$router.push({path:'/HouseList',query:{noActivated:true}});
                            }else{
                                this.$router.back(-1);
                            }
                        }
                    })
                }else{
                        this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify("1"));
                        if(!this.source){
                            this.$router.push({path:'/HouseList'});
                        }else{
                            this.$router.back(-1);
                        }
                }
                // }
            // });
            }else{
                if(this.getStorage(this.KEYS.SEARCH_LOG)){      //判断是否有搜索记录有则判断以是否搜索过 否则直接储存
                        this.allSearchLog = this.getStorage(this.KEYS.SEARCH_LOG);
                        if(this.allSearchLog.indexOf(this.searchContent)==-1 && this.searchContent!=""){
                            this.searchList.push(this.searchContent);
                            this.allSearchLog.unshift(this.searchContent);
                            let Searchs = this.allSearchLog.slice(0, 10);
                            this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                        }
                    }else if(this.searchContent!=""){
                            this.searchList.push(this.searchContent);
                            let Searchs = this.searchList;
                            this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                    }
            if(this.searchContent){
                this.post("houseSearchLog/save",{
                    "keyword": this.searchContent,
                    // "userId": this.userId,
                    }).then((res)=>{
                        if(res.code==0){
                            this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(this.searchContent));   //记录搜索内容
                            if(!this.source){     //如果不是从房源列表进来的就push 否则就后退back
                                this.$router.push({path:'/HouseList',query:{noActivated:true}});
                            }else{
                                this.$router.back(-1);
                            }
                        }
                    })
                }else{
                        this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify("1"));
                        if(!this.source){
                            this.$router.push({path:'/HouseList'});
                        }else{
                            this.$router.back(-1);
                        }
                }if(this.getStorage(this.KEYS.SEARCH_LOG)){      //判断是否有搜索记录有则判断以是否搜索过 否则直接储存
                    this.allSearchLog = this.getStorage(this.KEYS.SEARCH_LOG);
                    if(this.allSearchLog.indexOf(this.searchContent)==-1 && this.searchContent!=""){
                        this.searchList.push(this.searchContent);
                        this.allSearchLog.unshift(this.searchContent);
                        let Searchs = this.allSearchLog.slice(0, 10);
                        this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                    }
                }else if(this.searchContent!=""){
                        this.searchList.push(this.searchContent);
                        let Searchs = this.searchList;
                        this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                }
                if(this.searchContent){
                    this.post("houseSearchLog/save",{
                        "keyword": this.searchContent,
                        // "userId": this.userId,
                    }).then((res)=>{
                        if(res.code==0){
                            this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(this.searchContent));   //记录搜索内容
                            if(!this.source){     //如果不是从房源列表进来的就push 否则就后退back
                                this.$router.push({path:'/HouseList',query:{noActivated:true}});
                            }else{
                                this.$router.back(-1);
                            }
                        }
                    })
                }else{
                        this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify("1"));
                        if(!this.source){
                            this.$router.push({path:'/HouseList'});
                        }else{
                            this.$router.back(-1);
                        }
                }
            }
        },
        //获取热门搜索
        // HotSearchListLog(){
        //     this.post("houseSearchLog/hotLst",{}).then((res)=>{
        //         this.HotSearchList = res.data;
        //     })
        // },
        //热门搜索点击事件
        HotSearchClick(item){
            // this.post("common/checkWords",{
            //     str:item
            //     }).then((res)=>{
    //                 if(!res.code==0){
    //                     this.$vux.confirm.show({
    //                       content:"您输入的内容包含敏感字,请重新输入!",
    //                       onCancel () {//取消执行
    //                       },
    //                       onConfirm () {//确定执行
    //                       }
    //                      })
    //                 }else{
                        this.post("houseSearchLog/save",{
                            "keyword": item,
                            // "userId": this.userId,
                        }).then((res)=>{
                            if(res.code==0){
                                if(this.getStorage(this.KEYS.SEARCH_LOG)){
                                    this.allSearchLog = this.getStorage(this.KEYS.SEARCH_LOG);
                                    if(this.allSearchLog.indexOf(item)==-1 && item!=""){
                                        this.searchList.push(item);
                                        this.allSearchLog.unshift(item);
                                        let Searchs = this.allSearchLog.slice(0, 10);
                                        this.setStorage(this.KEYS.SEARCH_LOG,Searchs)
                                    }
                                }else if(this.searchContent!=""){
                                        this.searchList.push(item);
                                        let Searchs = this.searchList;
                                        this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                                }
                                this.searchContent = item;
                                this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(item))
                                if(!this.source){
                                    this.$router.push({path:'/HouseList'});
                                }else{
                                    this.$router.back(-1);
                                }
                            }
                        })
                    // }
            // });

        },
        //历史记录搜索
        HistorySearchClick(item){
           
            this.post("houseSearchLog/save",{
                "keyword": item,
                // "userId": this.userId,
            }).then((res)=>{
                if(res.code==0){
                    this.searchContent = item;
                    this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(item));
                    if(!this.source){
                        this.$router.push({path:'/HouseList'});
                    }else{
                        this.$router.back(-1);
                    }
                }
            })
        },
        //获取搜索记录
        getHistoryList(){
            this.allSearchLog = this.getStorage(this.KEYS.SEARCH_LOG);
            this.hotAllList = this.allSearchLog;
        },
        //语音搜索
        voiceClick(){
            this.isVoice = true;
            this.market = true;
            setTimeout(() => {
                this.$wechat.startRecord({
                        success: function(){
                            // localStorage.rainAllowRecord = 'true';
                        },
                        cancel: function () {
                            alert('用户拒绝授权录音');
                    }
                });
            }, 300);
        },
        //结束语音
        stopVoice(){
             this.$wechat.stopRecord({
                success: (res) =>{
                    this.localId = res.localId;
                    this.uploadVoice();
                },
                fail: (res) =>{
                    alert(JSON.stringify("语音识别失败，请您重新再说一次!"));
                }
            });
        },
        // 识别语音
        uploadVoice() {
            this.$wechat.translateVoice({
                localId: this.localId, // 需要识别的音频的本地Id，由录音相关接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: (res) =>{
                    this.isVoice=false;
                    this.market = false;
                    // alert(res.translateResult); // 语音识别的结果
                    this.searchContent = res.translateResult.replace(/[\。 |\，|\？|\.]/g,"");
                    this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(this.searchContent));
                    if(this.getStorage(this.KEYS.SEARCH_LOG)){      //判断是否有搜索记录有则判断以是否搜索过 否则直接储存
                        this.allSearchLog = this.getStorage(this.KEYS.SEARCH_LOG);
                        if(this.allSearchLog.indexOf(this.searchContent)==-1 && this.searchContent!=""){
                            this.searchList.push(this.searchContent);
                            this.allSearchLog.unshift(this.searchContent);
                            let Searchs = this.allSearchLog.slice(0, 10);
                            this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                        }
                    }else if(this.searchContent!=""){
                            this.searchList.push(this.searchContent);
                            let Searchs = this.searchList;
                            this.setStorage(this.KEYS.SEARCH_LOG,Searchs);
                    }
                    // if(this.searchContent){
                    //     if(!this.source){
                    //         this.$router.push({path:'/Homepage/HouseList'});
                    //     }else{
                    //         this.$router.back(-1);
                    //     }
                    // }
                    if(this.searchContent){
                        this.post("houseSearchLog/save",{
                            "keyword": this.searchContent,
                            // "userId": this.userId,
                        }).then((res)=>{
                            if(res.code==0){
                                this.setSession(this.KEYS.SEARCH_CONTENT,JSON.stringify(this.searchContent));   //记录搜索内容
                                if(!this.source){     //如果不是从房源列表进来的就push 否则就后退back
                                    this.$router.push({path:'/HouseList',query:{noActivated:true}});
                                }else{
                                    this.$router.back(-1);
                                }
                            }
                        })
                    }else{
                            this.$vux.confirm.show({
                                content:"语音识别失败，请您重新再说一次!",
                                onCancel () {//取消执行
                                },
                                onConfirm () {//确定执行
                                }
                            })
                    }
                }
            });
        },
        //调用微信接口
        onLoadWx() {
            this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(location.href.split('#')[0]),
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
                   'startRecord', //开始录音
                    'stopRecord', //停止录音
                    'translateVoice', //主意识别
                    'downloadVoice' //下载语音
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });

                this.$wechat.ready(() =>{
                    // alert('微信响应');
                    // self.Wxorder();
                })
                // this.Wxorder();
                this.$wechat.error(function(res) {
                    });
                }, response => {
                alert(err);
                })
            },
         //遮罩点击
        markets(){
            this.market = !this.market;
            this.isVoice=false;
        },
        //删除记录
        clearClick(){
            this.setStorage(this.KEYS.SEARCH_LOG,"")
            this.hotAllList = "";
        },
    },
    computed:{
        isVoiceShow(){
            return this.isVoice;
        },
        isWxVoice(){
            return this.isECTouch();
        }
        // inputContent(){
        //     return this.searchContent;
        // }
    }
}
</script>
