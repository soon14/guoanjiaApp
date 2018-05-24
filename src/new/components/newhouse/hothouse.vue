<template>
    <div>
        <swiper :options="swiperOption1" ref="mySwiper">
            <swiper-slide v-for='(item,index) in videolist' :key='index' class="swiperlist" @click.native="jumproute('newhousebuilddetail',item.id,$event)">
                <div class='onlyvideo' v-if="item.hasVideo=='yes'">
                    <video-player 
                    ref='video'
                    class="video-player vjs-custom-skin"
                    :playsinline="true"
                    :options="item.videoOptions">
                   </video-player>
                   <div class='dialog' :class="item.status == 'yes' ? 'hasColor' : 'noColor'"  @click.stop='playervideo(item)'>
                       <transition name='img'>
                           <img v-if="item.status == 'yes'" src='../../../../static/new/newhouseimg/play.png' alt="">
                       </transition>
                   </div>
                </div>
                <div class='onlyImg' v-else>
                    <img :src="item.firstImg" alt="">
                </div>
                <div class='description'>
                    <div class='housedescription vux-1px-b'>
                        <div>
                            <span>{{item.buildname}}</span>
                            <span>￥{{item.averageprice}}/㎡</span>
                        </div>
                        <div>
                            <span v-for='(l,index) in item.buildtag' :key='index'>{{l}}</span>
                        </div>
                    </div>
                    <div class='ratings'>
                        <div  v-if="item.reviewrecordArrayList.length != 0">
                            <div>
                                <div>
                                    <img :src="item.reviewrecordArrayList[0].reviewheadpicture" alt="">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>{{item.reviewrecordArrayList[0].reviewname}}</span>
                                    <span>{{item.reviewrecordArrayList[0].reviewposition}}</span>
                                </div>
                                <div>
                                    <span>专业点评：</span>{{item.reviewrecordArrayList[0].reviewcontent}}
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    export default {
        data () {
            return {
                swiperOption1:{
                    autoplay:false,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        renderCustom: function (swiper, current, total) {
                            const activeColor = `
                                "display:inline-block;
                                width:0.4rem;
                                height:0.4rem;
                                line-height:0.4rem;
                                text-align:center;
                                border:0.02rem solid #fff;
                                color:#fff;
                                boder-radius:0.05rem;
                                font-size:0.24rem "
                            `
                            const normalColor = `"
                                display:inline-block;
                                width:0.4rem;
                                height:0.4rem;
                                line-height:0.4rem;
                                text-align:center;
                                color:#999fa0;
                                boder-radius:0.05rem; 
                                font-size:0.24rem 
                            "`
                            let paginationStyle = ''
                            let html = ''
                            for (let i = 1; i <= total; i++) {
                                if (i === current) {
                                    paginationStyle = activeColor
                                } else {
                                    paginationStyle = normalColor
                                }
                                html += `<span style=${paginationStyle}>${i}</span>`
                            }
                            return html
                        }
                    },
                    autoplayDisableOnInteraction : false
                },
                videolist:[]
            }
        },
        components: {
            videoPlayer
        },
        created(){
            this.get(`/buildapp/BuildBaseInfoA/showPageList?area=${this.$store.state.area}`,{
                interfaceType:"newhouse"
            }).then(res=>{
                let i = 0;
                if(res.data!=null){
                    res.data.forEach((item,index)=>{
                        let arr = [];
                        if(item.buildtag!=''){
                            item.buildtag = item.buildtag.split(',');
                        }else{
                            item.buildtag = [];
                        }
                        if(item.buildPictureList instanceof Array){
                            //检查有无视频，有的话就配置视频选项，没有就只显示图片
                            let bool = item.buildPictureList.some(ITEM=>{
                                return ITEM.filetype == 2;
                            })
                            if(bool){
                                item.hasVideo = 'yes';
                                item.status = 'yes';
                                item.order = i ++;
                                item.buildPictureList.forEach(Item=>{
                                    if(Item.filetype == 2){
                                        item.videoOptions = {
                                            controls:false,
                                            preload:'auto',
                                            fluid:true,
                                            aspectRatio: '16:9',
                                            sources: [{
                                                type: "video/mp4",
                                                src:Item.filename
                                            }],
                                        }
                                    }else{
                                        arr.push(this.concatFileUrl(Item.filename));
                                    }
                                })
                                item.videoOptions.poster = arr[0];
                            }else{
                                if(item.buildPictureList.length!=0){
                                    item.hasVideo = 'no';
                                    item.firstImg = this.concatFileUrl(item.buildPictureList[0].filename);
                                }else{
                                    item.hasVideo = 'no';
                                    item.firstImg = '../../../../static/new/newhouseimg/newhousehomeimg1.png';//没有上传图片时默认显示一张图
                                }
                            }
                        }
                        if(item.reviewrecordArrayList.length!=0){
                            item.reviewrecordArrayList[0].reviewheadpicture = this.concatFileUrl(item.reviewrecordArrayList[0].reviewheadpicture)
                        }
                    })
                    this.videolist = res.data;
                }
            })
        },
        methods:{
            playervideo(item){
                this.$nextTick(_=>{
                    let videoDiv = this.$refs.video;
                    let video = videoDiv[item.order].$el.getElementsByClassName("vjs-tech")[0];
                    if(video.paused){
                        video.play();
                        item.status = 'no'
                    }else{
                        video.pause();
                        item.status = 'yes'
                    }
                })
            },
            jumproute(path,id,event){
                if(event.target.className.substring(0,6) != "dialog"){
                    this.$router.push({path:path,query:{buildID:id}})
                }
            }
        }
    }
</script>
<style lang='less' scoped>
.swiperlist{
    width:100%;
    padding:0 0.2rem;
    box-sizing: border-box;
    .onlyvideo{
        height:3.9rem;
        position: relative;
        .dialog{
            position: absolute;
            top:0;
            left:0;
            border-radius: 0;
            width:100%;
            height:4rem;
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
                z-index:1000;
                margin-top:-0.5rem;
                margin-left:-0.5rem;
            }
        }
    }
    .onlyImg{
       height:3.9rem;
       width:100%;
       img{
           width:100%;
           height:100%;
       }
    }
    .description{
        padding:0 0.1rem;
        box-sizing: border-box;
        background-color:white;
        .housedescription{
            padding:0.2rem 0 0.17rem 0;
            box-sizing: border-box;
            &>div:nth-child(1){
                display: flex;
                justify-content: space-between;
                padding-right:0.1rem;
                margin-bottom:0.2rem;
                box-sizing: border-box;
                &>span:nth-child(1){
                    font-size:0.3rem;
                    color:#323232;
                    font-weight:900;
                }
                &>span:nth-child(2){
                    font-size:0.3rem;
                    color:#da242f;
                    font-weight:600;
                }
            }
            &>div:nth-child(2){
                text-align: left;
                font-size: 0;
                height:0.46rem;
                line-height: 0.46rem;
                &>span:nth-child(1) {
                    color: #E79C87;
                    background: #feebe5;
                }
                &>span:nth-child(2) {
                    color: #6A9DE5;
                    background: #e4f3fa;
                }
                &>span:nth-child(3) {
                    color: #91C076;
                    background: #edf0e5;
                }
                &>span:nth-child(4) {
                    color: #E79C87;
                    background: #feebe5;
                }
                &>span:nth-child(5) {
                    color: #6A9DE5;
                    background: #e4f3fa;
                }
                &>span:nth-child(6) {
                    color: #91C076;
                    background: #edf0e5;
                }
                span{
                    font-size:0.22rem;
                    height:0.42rem;
                    line-height: 0.42rem;
                    display: inline-block;
                    padding:0.02rem 0.1rem;
                    box-sizing: border-box;
                    border-radius: 0.05rem;
                    margin-right:0.15rem;
                }
            }
        }
        .ratings{
            padding:0.28rem 0.1rem 0.25rem 0.1rem;
            background: #fff;
            height:1.65rem;
            &>div{
                display: flex;
                 &>div:nth-child(1){
                    text-align: center;
                    font-size:0;
                    margin-right:0.2rem;
                    &>div{
                        margin:0 auto;
                        border-radius: 50%;
                        background:#c7c7c6;
                        overflow: hidden;
                        width:0.76rem;
                        height:0.76rem; 
                        img{
                            width:100%;
                            height:100%; 
                        }
                    }  
                }
                &>div:nth-child(2){
                    font-size:0;
                    text-align: justify;
                    &>div:nth-child(1){
                        margin-bottom:0.1rem;
                        &>span:nth-child(1){
                            font-size:0.24rem;
                            color:#323232;
                            font-weight:900;
                            margin-right:0.1rem;
                        }
                        &>span:nth-child(2){
                            font-size:0.2rem;
                            color:#f4141e;
                            font-weight:600;
                        }
                    }
                    &>div:nth-child(2){
                        line-height: 0.43rem;
                        font-size:0.24rem;
                        color:#323232;
                        font-weight:600;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        &>span{
                            font-size:0.24rem;
                            color:#909090;
                            font-weight:900;
                            margin-right:0.1rem;
                        }
                    }
                }
            }
        }
    }
}
.swiper-pagination{
    position: absolute;
    bottom:3.7rem;
    font-size:0;
    text-align:right;
    padding-right:0.3rem;
    box-sizing: border-box;
}
</style>

