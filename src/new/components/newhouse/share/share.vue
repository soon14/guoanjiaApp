<template>
<div id="share" v-show="showState">
    <transition name="share">
        <div class="share_wrap" v-show="showState&&(!showWX)">
            <div class="share_con">
                <div @click="wxShare">
                    <img src="../../../../../static/new/newhouseimg/wechat@2x.png" alt="微信">
                    <span>微信</span>
                </div>
                <div @click="friendShare">
                    <img src="../../../../../static/new/newhouseimg/Friends-Circle@2x.png" alt="朋友圈">
                    <span>朋友圈</span>
                </div>
            </div>
            <div class="cancel_box vux-1px-t">
                <span @click="showState=false">取消分享</span>
            </div>
        </div>
    </transition>
    <div class="wx_show" v-show="showWX">
        <img class="wx_01" src="../../../../../static/new/newhouseimg/wx_01.png" alt="">
        <span>请点击右上角进行分享</span>
        <img class="wx_02" src="../../../../../static/new/newhouseimg/wx_02.png" @click="showState=false" alt="">
    </div>
    <div class="shade" @click="showState=false"></div>
</div>
</template>
<script>
export default {
    name: "share",
    data: () => ({
        showState: false,
        showWX: false,
        title: '国安家',
        desc: '国安家，为每一个家的梦想全力以赴！',
        link: 'https://www.guoanfamily.com/guoanjiaApp',
        imgUrl: 'https://img.guoanfamily.com/xixi.png'
    }),
    methods: {
        //分享到朋友圈方法
        friendShare() {
            let self = this;
            Wechat.share({
                    message: {
                        title: self.title, //标题
                        description: self.desc, //描述
                        thumb: self.imgUrl, //图片
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: self.link //连接地址指打开分享时页面地址
                        }
                    },
                    scene: Wechat.Scene.TIMELINE // share to Timeline
                },
                function() {
                    this.showState = false;
                    this.msgalert("已成功分享到朋友圈");
                },
                function(reason) {
                    // alert("Failed: " + reason);
                    // this.msgalert('已取消分享');
                }
            );
        },
        // 分享到微信朋友方法
        wxShare() {
            let self = this;
            Wechat.share({
                    message: {
                        title: self.title, //标题
                        description: self.desc, //描述
                        thumb: self.imgUrl, //图片
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: self.link //连接地址指打开分享时页面地址
                        }
                    },
                    scene: Wechat.Scene.SESSION // share to Timeline
                },
                function() {
                    this.showState = false;
                    this.msgalert("已成功分享给朋友");
                },
                function(reason) {
                    //    this.msgalert('已取消分享');
                }
            );
        },
        // 微信端的分享
        wxduanShare() {
            // 分享给朋友
            let self = this;
            this.$wechat.onMenuShareAppMessage({
                title: self.title, //标题
                desc: self.desc, //描述
                link: self.link, //连接地址指打开分享时页面地址
                imgUrl: self.imgUrl, //图片
                trigger: function(res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                },
                success: function(res) {
                    this.showState = false;
                },
                cancel: function(res) {
                    this.showState = false;
                    this.msgalert("已取消");
                },
                fail: function(res) {
                    this.showState = false;
                    this.msgalert("分享失败");
                }
            });
            // 分享到朋友圈
            this.$wechat.onMenuShareTimeline({
                title: self.title, //标题
                desc: self.desc, //描述
                link: self.link, //连接地址指打开分享时页面地址
                imgUrl: self.imgUrl, //图片
                trigger: function(res) {
                    // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                },
                success: function(res) {
                    this.showState = false;
                },
                cancel: function(res) {
                    this.showState = false;
                    this.msgalert("已取消");
                },
                fail: function(res) {
                    this.showState = false;
                    this.msgalert("分享失败");
                }
            });
            this.$wechat.error(function(res) {});
        },
        //alert弹窗
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: "提示信息",
                content: msg
            });
        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            });
        },
        initOption(){
            this.title = '国安家';
            this.desc = '国安家，为每一个家的梦想全力以赴！';
            this.link = 'https://www.guoanfamily.com/guoanjiaApp';
            this.imgUrl = 'https://img.guoanfamily.com/xixi.png';
        }
    },
    watch: {
        showState(val) {
            if (!val && !this.showWX) {
                this.initOption()
            } else if (val && this.showWX) {
                this.wxduanShare();
            }
        }
    },
    created() {
        //do something after creating vue instance
        if (this.isECTouch()) {
            this.showWX = true;
        }
    }
}
</script>
<style lang="less" scoped>
#share {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.share_wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.3rem;
    background-color: #ffffff;
    z-index: 1;
    transition: all 0.3s ease-out;
    .share_con {
        display: flex;
        flex-flow: wrap;
        & > div {
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: wrap;
            padding: 0.3rem 0;
            cursor: pointer;
            img {
                width: 55%;
            }
            span {
                width: 100%;
                font-size: 0.22rem;
                color: #757575;
                margin-top: 0.2rem;
                text-align: center;
            }
        }
    }
    .cancel_box {
        font-size: 0;
        text-align: center;
        span {
            line-height: 1rem;
            font-size: 0.24rem;
            color: #909090;
            cursor: pointer;
            text-align: center;
        }
    }
}
.shade {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 0;
    cursor: pointer;
}
.share-enter,
.share-leave-to {
    opacity: 0;
    transform: translate3d(0,100%,0);
}
.share-enter-to,
.share-leave {
    opacity: 1;
    transform: translate3d(0,0,0);
}
.wx_show {
    height: 100%;
    position: relative;
    z-index: 1;
    text-align: center;
    img {
        display: inline-block;
    }
    span {
        display: block;
        font-size: 0.4rem;
        color: #ffffff;
        line-height: 1rem;
    }
    .wx_01 {
        transform: translate3d(45%,0,0);
        width: 2rem;
        margin-top: 1.5rem;
    }
    .wx_02 {
        width: 2rem;
    }
}
</style>
