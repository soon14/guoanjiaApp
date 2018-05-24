<template>
   <div  class="fixContent" >
        <div class="ImgDiv">
            <img :src="Imgsrce" alt="">
        </div>
        <div class="bottomDiv">
            <x-button class="immeditBookingPay1" action-type="button" @click.native='choice'>选择头像</x-button>
            <x-button class="immeditBookingPay" type="primary" action-type="button" @click.native='WxUpLoadImg'>上传</x-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgLoad',
    data() {
        return {
            localIds: '',
            serverid: '',
            Imgsrce: '',
        }
    },
    methods: {
        onLoadWx() {
            this.post('openweixin/jsapi/getJsapiSignature?local_url=' + encodeURIComponent(location.href.split('#')[0]),
                {interfaceType: "weichat"}).then(response => {
                    //  alert(JSON.stringify(response))
                    // alert('初始化微信,配置config');
                    this.$wechat.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: response.appid, // 必填，公众号的唯一标识
                        timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                        nonceStr: response.noncestr, // 必填，生成签名的随机串
                        signature: response.signature, // 必填，签名，见附录1
                        jsApiList: [
                            'chooseImage',
                            'uploadImage',
                            'downloadImage'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    var self = this;
                    this.$wechat.ready(function() {
                        // alert("开始选择图片")
                        self.WxchooseImage();
                    })
                    this.$wechat.error(function(res) {
                        alert('上传失败')
                    });
                }, response => {
                    alert(JSON.stringify(err))
                })
        },
        // 微信弹窗
        WxchooseImage() {
            var self = this;
            this.$wechat.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function(res) {
                    self.localIds = res.localIds[0]; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    var _this = self;
                    // alert(self.localIds);
                    self.$wechat.uploadImage({
                        localId: self.localIds, // 需要上传的图片的本地ID，由chooseImage接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: function(res) {
                            // alert("serverId" + res.serverId);
                            _this.serverid = res.serverId;
                            _this.$wechat.downloadImage({
                                serverId: _this.serverid, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                success: function(res) {
                                    _this.Imgsrce = res.localId; // 返回图片下载后的本地ID
                                }
                            })
                        }
                    });
                }
            });

        },
        // 选择头像按钮
        choice() {
            // alert('111');
            this.onLoadWx()
        },
        // 上传头像的点击事件
        WxUpLoadImg() {
            var self = this;
            // alert(self.localIds);
            let post_data = {
                "SERVERID": this.serverid // 返回图片的服务器端ID
            }
            // alert('SERVERID:'+ " " + post_data.SERVERID)
            self.post('PictureManagerController/wxModelFileUpload', post_data,{ interfaceType: "collect"}).then(response => {
                if (response.code == 200) {
                    // alert('12345');
                    self.msgalert('上传成功');
                    self.Imgsrce = self.ImgSrc + response.data.imgName;
                    localStorage.setItem('headImg', self.Imgsrce);
                    self.$router.push('modifyInfo');
                }
            }, response => {
                alert(response.msg);
            });

        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            })
        }
    },
    mounted() {
        // this.ImgSrce = this.$route.query.headimgurl;
        let Imgsrce = localStorage.getItem('headImg');
        if (!this.notEmpty(Imgsrce)) {
            this.Imgsrce = Imgsrce;
        } else {
            this.Imgsrce = 'http://Img.guoanfamily.com/touxiang.jpg';
        }
    }
}
</script>

<style lang="less" scoped>
.ImgDiv {
    width: 70%;
    height: 50%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 15%;
    right: 0;
    top: 0; // background: red;
    margin: auto;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
}

.bottomDiv {
    position: fixed; // background: red;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2.2rem;
    font-size: .3rem;
    z-index: 10;
}

.immeditBookingPay1 {
    background: #fff;
    font-size: .4rem !important;
    line-height: 1.1rem;
    color: #d7000f;
}

.immeditBookingPay {
    background: url('../../../static/new/img/btnbj.png') no-repeat !important;
    background-size: 100% !important;
    font-size: .4rem !important;
    line-height: 1.1rem;
    margin-top: 0;
}
</style>

