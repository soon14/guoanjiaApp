<template>
    <div v-if='data != null'>
        <div class="videoandimg">
            <transition name="calssifytab">
                <div key='video' class="video" v-if="btnBool && !hiddenimg" ref='videoorimg'>
                    <video-player 
                    ref='video'
                    class="video-player vjs-custom-skin"
                    :playsinline="true"
                    :options="videoOptions">
                    </video-player>
                    <div class='dialog' :class="status == 'yes' ? 'hasColor' : 'noColor'" @click.stop='playervideo()'>
                        <transition name='img'>
                            <img v-if="status == 'yes'" src='../../../../../static/new/newhouseimg/play.png' alt="">
                        </transition>
                    </div>
                </div>
                <div key='img' class="swiper_wrap" v-else  ref='videoorimg'>
                    <swiper :options="swiperOption1" ref="mySwiper">
                        <swiper-slide v-for='(item,index) in imglist' :key='index' style="height:4.22rem">
                            <img :src="item.filename" alt="" style="height:4.22rem;width:100%;">
                        </swiper-slide>
                        <div class="swiper-pagination"  slot="pagination" v-if='paginationBool'></div>
                    </swiper>
                </div>
            </transition>
            <div class="tab" v-if='btnBool'>
                <span :class="[hiddenimg?'no':'yes']" @click.stop="tabClassify('video')">视频</span>
                <span :class="[hiddenimg?'yes':'no']" @click.stop="tabClassify('img')">图片</span>
            </div>
        </div>
        <div class="baseinfo">
            <div>
                <span>{{data.buildname}}</span>
                <span v-for="(item,index) in data.buildtag" :key='index'>{{item}}</span>
            </div>
            <div>
                <span>均价{{data.averageprice}}元/平</span>
                <span  @click="jump({path:'Calculator'})"></span>
            </div>
            <div>
                <span>物业类型：</span>
                <span>{{data.tenementtype}}</span>
            </div>
            <div>
                <span>产权年限：</span>
                <span>{{data.equityyearlimit}}</span>
            </div>
            <div class="vux-1px-b">
                <span>楼盘地址：</span>
                <span>{{data.province + data.city + data.country + data.address}}</span>
                <span @click="jump({path:'map',query:addLocation})"></span>
            </div>
            <div>
                <div class="vux-1px">
                    <img src="../../../../../static/new/newhouseimg/newhousehomeimg1.png" alt="">
                </div>
                <div>
                    <div>
                        旅居卡 | 意向登岛
                    </div>
                </div>
                <div @click='Membership'>
                    立即报名
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    export default {
        data() {
            return {
                videoOptions:{
                    controls:false,
                    fluid:true,
                    aspectRatio: '16:9',
                    sources: [{
                        type: "video/mp4"
                    }]
                },
                swiperOption1:{
                    autoplay:{
                        delay:2000,
                        disableOnInteraction: false,
                    },
                    speed:500,
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                        let swipercurrent=`
                                "display:inline-block;
                                width:0.4rem;
                                line-height:0.4rem;
                                text-align:center;
                                height:0.4rem;
                                font-size:0.24rem;
                                background:#fff;
                                border-radius:50%;
                                color:#e61434;
                                margin-right:0.1rem;"`,
                            swipertotal =`
                                "display:inline-block;
                                color:#fff;
                                height:0.4rem;
                                width:0.8rem;
                                line-height:0.4rem;
                                font-size:0.24rem;
                                border-radius:0.2rem;
                                text-align:center;
                                background:rgba(0,0,0,0.4);
                                "`;
                            return `<span style=${swipercurrent}>${current}</span>
                                    <span style=${swipertotal}>of ${total}</span>`;
                        }
                    },
                    autoplayDisableOnInteraction : false
                },
                imglist:[],
                status:'yes',
                hiddenimg:false,
                addLocation:'',
                btnBool:true,
                paginationBool:true
            }
        },
        created(){
            let bool = this.data.buildPictureList.some(item=>{
                return item.filetype == 2;
            })
            if(bool){
                //检验是否有视频
                this.btnBool = true;
                this.data.buildPictureList.forEach(item=>{
                    if(item.filetype == 2){
                        this.videoOptions.sources[0].src = item.filename;
                    }else{
                        this.imglist.push(item)
                    }
                })
                this.videoOptions.poster = this.imglist[0].filename;
            }else{
                this.btnBool = false;
                this.data.buildPictureList.forEach(item=>{
                    this.imglist.push(item)
                })
            }
            if(this.imglist.length <2){
                //如果后台没有上传图片，默认一张本地图片
                if(this.imglist.length == 0){
                    this.imglist.push({
                        filename:'../../../../../static/new/newhouseimg/newhousehomeimg1.png'
                    })
                }
                //如果图片少于两张就停止图片的轮播和滑动，并且将轮播图的页脚隐藏掉
                this.swiperOption1.loop = false;
                this.swiperOption1.autoplay = false;
                this.paginationBool = false;
            }
            this.addLocation = this.data.province + this.data.city + this.data.country + this.data.address
        },
        props:{
            data:{
                type:Object,
                require:true
            }
        },
        components: {
            videoPlayer
        },
        methods:{
            playervideo(){
                this.$nextTick(_=>{
                    let videoDiv = this.$refs.video;
                    let video = videoDiv.$el.getElementsByClassName("vjs-tech")[0];
                    if(video.paused){
                        video.play();
                        this.status = 'no'
                    }else{
                        video.pause();
                        this.status = 'yes'
                    }
                })
            },
            tabClassify(target){
                switch(target){
                    case 'video':
                        this.hiddenimg=false;
                        break;
                    case 'img':
                        this.hiddenimg=true;
                        this.status='yes';
                        break;
                }
            },
            // 旅居卡的点击事件
            Membership() {
                let src = "http://ntest.guoanfamily.com/MemberShipExplain/#/";
                let title = "入会说明";
                this.$router.push({
                    path: "/MemberIfream",
                    query: { buildid: this.data.id, title: title, src: src }
                });
            },
            jump(obj){
                if(typeof obj.query != undefined){
                    this.$router.push({ path: obj.path, query: { address: obj.query } });
                }else{
                    this.$router.push({ path: obj.path});
                }
            }
            
        }
    }
</script>
<style lang='less' scoped>
.videoandimg{
    height:4.22rem;
    position: relative;
    overflow: hidden;
    .video{
        position: absolute;
        top:0;
        left:0;
        border-radius: 0;
        width:100%;
        height:100%;
        transition: all 0.5s;
        .dialog{
            position: absolute;
            top:0;
            left:0;
            border-radius: 0;
            width:100%;
            height:100%;
            transition: all 0.5s;
            &.noColor{
               background-color:transparent; 
            }
            &.hasColor{
                background-color:rgba(0,0,0,0.6);
            }
            .img-enter-active,.img-leave-active{
               transition: all 0.5s; 
            }
            .img-enter,.img-leave-to{
                opacity: 0;
            }
            img{
                position: absolute;
                width:1rem;
                height: 1rem;
                top:50%;
                left:50%;
                z-index:100;
                margin-top:-0.5rem;
                margin-left:-0.5rem;
            }
        }
    }
    .tab{
        position: absolute;
        bottom:0.2rem;
        left:2.6rem;
        z-index:150;
        font-size:0;
        span{
            font-size:0.24rem;
            display: inline-block;
            width:1rem;
            height:0.44rem;
            text-align: center;
            line-height:0.44rem;
            border-radius: 0.22rem;
            color:#fff;
            &.yes{
                background-color:#fe7b20;
            }
            &.no{
                background-color:rgba(255,255,255,0.5);
            }
        }
        &>span:nth-child(1){
            position: relative;
            text-indent: 0.2rem;
            margin-right:0.3rem;
        }
        &>span:nth-child(1)::before{
            content: "";
            position: absolute;
            top:0.12rem;
            left:0.1rem;
            width: 0.14rem;
            height: 0.16rem;
            background:url('../../../../../static/new/newhouseimg/7-@2x.png');
            background-size:cover;
        }
    }
    .calssifytab-enter-active,.calssifytab-leave-active{
        transition: all 0.5s; 
    }
    .calssifytab-enter,.calssifytab-leave-to{
        opacity: 0.7;
    }
}
.baseinfo{
    padding:0.2rem;
    box-sizing: border-box;
    margin-bottom:0.2rem;
    background:#fff;
    &>div{
        height: 0.6rem;
        line-height: 0.6rem;
        width:100%;
        text-align: left;
        font-size: 0;
    }
    &>div:nth-child(1){
        font-size: 0;
        &>span{
            font-size:0.22rem;
            padding:0.02rem 0.1rem;
            border-radius: 0.05rem;
            margin-right:0.15rem;
        }
        &>span:nth-child(1){
            font-size:0.36rem;
            font-weight:900;
            color:#323232;
            padding:0;
        }
        &>span:nth-child(2) {
            color: #E79C87;
            background: #feebe5;
        }
        &>span:nth-child(3) {
            color: #6A9DE5;
            background: #e4f3fa;
        }
        &>span:nth-child(4) {
            color: #91C076;
            background: #edf0e5;
        }
        &>span:nth-child(5) {
            color: #E79C87;
            background: #feebe5;
        }
        &>span:nth-child(6) {
            color: #6A9DE5;
            background: #e4f3fa;
        }
        &>span:nth-child(7) {
            color: #91C076;
            background: #edf0e5;
        }
    }
    &>div:nth-child(2){
        display: flex;
        justify-content: space-between;
        &>span:nth-child(1){
            font-size:0.26rem;
            color:#d7000f;
            font-weight:700;
        }
        &>span:nth-child(2){
            display: inline-block;
            height: 0.3rem;
            width:0.3rem;
            background:url('../../../../../static/new/newhouseimg/calc.png') center no-repeat;
            background-size:cover;
            margin-top:0.15rem;
        }
    }
    &>div:nth-child(3),&>div:nth-child(4),&>div:nth-child(5){
        font-size:0.26rem;
        &>span:nth-child(1){
            color:#909090;
        }
        &>span:nth-child(2){
            color:#323232;
            font-weight:700;
        }
    }
    &>div:nth-child(5){
        position: relative;
        padding-bottom:0.2rem;
        &>span:nth-child(3){
            position: absolute;
            top:0.1rem;
            right:0;
            height: 0.3rem;
            width:0.3rem;
            background:url('../../../../../static/new/newhouseimg/map.png') center no-repeat;
            background-size:cover;
        }
        
    }
    &>div:nth-child(6){
        padding-top:0.3rem;
        height: auto;
        display: flex;
        position: relative;
        &>div:nth-child(1){
            width:0.9rem;
            height:0.9rem;
            margin-right:0.2rem;
            &::before{
                border-radius: 0.1rem;
            }
            img{
                width:100%;
                height:100%;
                border-radius: 0.1rem;
            }
        }
        &>div:nth-child(2){
            padding-top:0.05rem;
            &>div{
                height: 0.45rem;
                line-height: 0.45rem;
                font-size:0.28rem;
                color:#323232;
                font-weight:700;
            }
        }
        &>div:nth-child(3){
            height: 0.42rem;
            line-height: 0.42rem;
            width:1.2rem;
            text-align: center;
            color:#fff;
            font-size:0.24rem;
            background-color: #e69249;
            border-radius: 0.05rem;
            position: absolute;
            right:0;
            top:0.6rem;
        }
    }
}
.swiper-pagination{
    position: relative;
    bottom:0.65rem;
    padding-right:0.4rem;
    box-sizing: border-box;
    text-align: right;
    font-size: 0;
}
</style>

