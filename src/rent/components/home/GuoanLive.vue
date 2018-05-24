<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .guoan,.vux-slider{
        width:100%;
        height:100%;
        position: relative;
    }
    .guoan-tab{
        width:100%;
        height: 1.2rem;
        background:rgba(0,0,0,0.3);
        position: absolute;
        bottom:0;
        z-index: 0;
        float:left;
        .guoan-tab-tabFont{
            color:#fff;
            font-size: 12px;
            margin:0.2rem 0 0 0.2rem;
        }
        .guoan-tab-price{
            color:$friendlyColor;
            font-size: 12px;
            margin:0.1rem 0 0 0.2rem;
        }
        .guoan-spot{
            width:1.5rem;
            position: absolute;
            bottom:0.3rem;
            right:0.2rem;
            height: 0.2rem;
            p{
                width:0.18rem;
                height: 0.18rem;
                background:#cfcfcd;
                border-radius: 50%;
                float: left;
                margin-left:0.1rem;
            }
            .spotP1{
                background:#f25067;
            }
            .spotP2{
                background:#f25067;
            }
            .spotP3{
                background:#f25067;
            }
            .spotP4{
                background:#f25067;
            }
        }
    }
    
    .box-title-box{
        width:100%;
        height: $height;
        background:#fff;
        .title-left{
        height:$height;
        width:2.6rem;
        line-height:0.1rem;
        float:left;
            span{
                display:inline-block;
                height: 1px;
                background:#f1f1f1;
                width:100%;
            }        
        }
        .title-right{
        height:$height;
        width:1.6rem;
        line-height:0.1rem;
        float:left;
            span{
                display:inline-block;
                height: 1px;
                background:#f1f1f1;
                width:100%;
            }        
        }
        p{
            font-size: $titleFontSize;
            line-height: $height;
            float:left;
            margin:0 0.1rem;
        }
        .img2{
            height: 0.4rem;
            width:0.8rem;
            margin-top:0.16rem;
            float:right;
        }
    }
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>

<template>
    <div class="guoan">
        <swiper show-desc-mask auto loop   :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" :show-dots=false>
        </swiper>
        <div class="guoan-tab">
            <transition name="fade">
                <p class="guoan-tab-tabFont">{{tabFont}}</p>
            </transition>
            <transition name="fade">
                <p class="guoan-tab-price">{{price}}</p>
            </transition>
            <div class="guoan-spot">
                <p class="guoan-spot-p1" :class="{spotP1:spotP1Class}"></p>
                <p class="guoan-spot-p2" :class="{spotP2:spotP2Class}"></p>
                <p class="guoan-spot-p3" :class="{spotP3:spotP3Class}"></p>
                <p class="guoan-spot-p4" :class="{spotP4:spotP4Class}"></p>
            </div>
        </div>
    </div>
</template>

<script>
    const baseList = [{
        url: 'javascript:',
        img: 'http://pic.ziroom.com/house_images/BJZRGY081639083/BJZRGY081639083_03/images/v400x300_20161223201714469_F.jpg',
        title: '0',
        mm:"2222"
    }, {
        url: 'javascript:',
        img: 'http://pic.ziroom.com/house_images/g2/M00/5C/EF/v400x300_ChAFD1mf9XSAf0MjABA8Xlx2s7g818.jpg',
        title: '1',
        mm:"2222"
    }, {
        url: 'javascript:',
        img: 'http://pic.ziroom.com/house_images/g2/M00/5C/F0/v400x300_ChAFD1mf9XmAIKS_AA3K88ACIO4488.jpg',
        title: '2',
        mm:"2222"
    }, {
        url: 'javascript:',
        img: 'http://pic.ziroom.com/house_images/g2/M00/5F/36/v400x300_ChAFD1mi51-ADbFPAAZPjdpYlYk388.jpg',
        title: '3',
        mm:"2222"
    }]

    const imgList = [
        'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
        'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
        'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
    ]

    const urlList = baseList.map((item, index) => ({
        url: 'javascript:;',
        img: item.img,
        //title: `${item.title+item.mm}`
    }))

    const demoList = imgList.map((one, index) => ({
        url: 'javascript:',
        img: one
    }))

    const only2ClickList = baseList.slice(0, 2).map(item => {
        item.url = 'javascript:;'
        return item
    })
    export default {
        data() {
            return {
                demo01_list: baseList,
                demo02_list: demoList,
                demo03_list: demoList,
                demo04_list: imgList,
                demo05_list: [],
                demo06_list: urlList,
                demo07_list: only2ClickList,
                demo01_index: 0,
                demo02_index: 1,
                demo05_index: 0,
                demo06_index: 0,
                demo07_index: 0,
                swiperItemIndex: 1,
                tabFont:'望京南线 南卧 0号线',
                price:"￥2900/月",
                spotP1Class:true,
                spotP2Class:false,
                spotP3Class:false,
                spotP4Class:false
            }
        },

        created() {

        },

        mounted() {

        },

        methods: {
            onSwiperItemIndexChange (index) {
             console.log('demo item change', index)
            },
                demo01_onIndexChange (index) {
                this.demo01_index = index
            },
                demo05_onIndexChange (index) {
                this.demo05_index = index
            },
                demo05_onLoad (id) {
                this.demo05_list = id === 1 ? baseList : demoList
            },
            demo06_onIndexChange (index) {
                if(index == 0){
                    this.tabFont = "望京南线 南卧 0号线"
                    this.price = "￥2800/月"
                    this.spotP1Class = true;
                    this.spotP2Class = false;
                    this.spotP3Class = false;
                    this.spotP4Class = false;
                }
                if(index == 1){
                    this.tabFont = "八通南线北卧卧 1号线"
                    this.price = "￥2700/月"
                    this.spotP1Class = false;
                    this.spotP2Class = true;
                    this.spotP3Class = false;
                    this.spotP4Class = false;
                }
                if(index == 2){
                    this.tabFont = "一号南线 南卧 2号线"
                    this.price = "￥2900/月"
                    this.spotP1Class = false;
                    this.spotP2Class = false;
                    this.spotP3Class = true;
                    this.spotP4Class = false;
                }
                if(index == 3){
                    this.tabFont = "二号南线 南卧 3号线"
                    this.price = "￥2700/月"
                    this.spotP1Class = false;
                    this.spotP2Class = false;
                    this.spotP3Class = false;
                    this.spotP4Class = true;
                }
                this.demo06_index = index
            },
                demo07_onIndexChange (index) {
                this.demo07_index = index
            }
        },

        components: {
        }
    }
</script>
