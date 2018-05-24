<style scoped lang="scss">
@import "../../style/theme.scss";
@import "../../style/animate.min.css";
$height: 0.8rem;
%swiperP{  //swiper公共样式P标签  每个页面的底部透明度
    width: 100%;
    height: 1rem;
    bottom: 10%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
    position: absolute;
};
%swiperBoult{//swiper公共样式 每个页面的向上提示按钮
    width: 0.60rem;
    height: 0.50rem;
    left: 47%;
    bottom: 3%;
    position: absolute;
};
#bounceUp {
  -moz-animation: bounceUp 2s infinite;
  -webkit-animation: bounceUp 2s infinite;
  animation: bounceUp 2s infinite;
}
@-moz-keyframes bounceUp {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  60% {
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
@-webkit-keyframes bounceUp {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  60% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
@keyframes bounceUp {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-25px);
    -ms-transform: translateY(-25px);
    -webkit-transform: translateY(-25px);
    transform: translateY(-25px);
  }
  60% {
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
}
    .delegation-box{
        width:100%;
        height:100%;
        .titleHeight{
            width: 100%;
            height:1.3rem;
            /*border-bottom: $baseBorder;*/
            z-index: 100;
            background: #e24e59;
            position: relative;
        }
        .back-btn{
            float: left;
            height: 100%;
            width: 1.3rem;
            background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
            background-size:0.47rem;
            display: inline-block;
        }
        .middle{
            text-align: center;
            height:100%;
            line-height:1.3rem;
            font-size:0.35rem;
            .middleTitle{
                margin-left:-1.3rem;
                color:#fff;
            }
        }
        .shareDelegation{
            float:right;
            width:1.3rem;
            height:100%;
            position: absolute;
            right:0;
            top:0;
            z-index: 101;
            img{
                width:20px;
                height:20px;
                position:absolute;
                margin:auto;
                left:0;
                right:0;
                top:0;
                bottom:0;
            }
        }
        .delegation-top{
            width:100%;
            height:auto;
        }
        .delegation-center::-webkit-scrollbar{display:none;}//去掉滚动条
        .delegation-center{
            width:100%;
            height: 100%;
            .swiper-container,.swiper-wrapper{
               width:100%;
                height: 100%; 
            }
            .swiperPhoneA{
                width: 6rem;
                height: 0.6rem;
                left: 8%;
                bottom: 11.5%;
                z-index: 9;
                position: absolute;
            }
            .swiperPhone{
                width: 6rem;
                height: 0.6rem;
                bottom: 11.5%;
                z-index: 9;
                position: absolute;
                -webkit-animation-duration: 3s; //动画持续时间
                -webkit-animation-delay: 1s;//动画延迟时间
            //-webkit-animation-iteration-count: infinite; //动画执行次数
            }
            .yi{
                height:100%;
                width:100%;
                background:url("https://media.guoanfamily.com/www/001/img.jpg") no-repeat;
                background-size: 100% 100%;
                position: relative;
                span{                
                    background: rgba(255, 255, 255, 0.4);
                    position: absolute;                
                    z-index: 1;
                    display:none;
                }
                .yiCspan1{
                    width: 4.8rem;
                    height: 2.8rem;
                    top: 9%;
                    left: 10%;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .yiCspan2{
                    width: 5.78rem;
                    height: 2.6rem;
                    bottom: 25%;
                    right: 0;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                p{
                    width: 6.4rem;
                    height: 1rem;
                    left: 5%;
                    bottom: 10%;
                    background: rgba(195, 13, 35,1);
                    z-index: 1;
                    position: absolute;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .yiCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 8%;
                    top: 4%;
                    display:none;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数          
                }
                .yiCer{
                    width: 2rem;
                    height: 0.64rem;
                    position: absolute;
                    left: 18%;
                    top: 12%;
                    z-index: 2;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 0.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数   
                }
                .yiCsan{
                    width: 2rem;
                    height: 0.64rem;
                    position: absolute;
                    left: 28%;
                    top: 18%;
                    z-index: 2;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数   
                }
                .yiCsi{
                    width: 2rem;
                    height: 0.64rem;
                    position: absolute;
                    left: 40%;
                    top: 24%;
                    z-index: 2;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数   
                }
                .yiCwu{
                    width: 4rem;
                    height: 1.4rem;
                    position: absolute;
                    right: 14%;
                    bottom: 30%;
                    z-index: 2;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数   
                }
                p{
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数 
                }
                .yiCliu{
                        width: 6rem;
                        height: 0.6rem;
                        left: 8%;
                        bottom: 11.5%;
                        z-index: 2;
                        position: absolute;
                        display:none;
                        -webkit-animation-duration: 3s; //动画持续时间
                        -webkit-animation-delay: 2.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数   
                }
                .yiCqi{
                    @extend %swiperBoult;//向上滑动提示
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数   
                }
            }
            .er{
                background:url("https://media.guoanfamily.com/www/002/img.jpg") no-repeat;
                background-size: 100% 100%;
                position: relative;
                .erCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 8%;
                    top: 4%;
                    display:none;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .erCer{
                    width: 3.6rem;
                    height: 1.6rem;
                    position: absolute;
                    left: 8%;
                    top: 12%;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .erCsan{
                    width: 3.6rem;
                    height: 1.4rem;
                    position: absolute;
                    right: 6%;
                    top: 36%;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 0.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .erCsi{
                    width: 6rem;
                    height: 0.6rem;
                    left: 8%;
                    bottom: 11.5%;
                    z-index: 2;
                    position: absolute;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .erCwu{
                    @extend %swiperBoult;//向上滑动提示
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                p{
                    width: 6.4rem;
                    height: 1rem;
                    left: 5%;
                    bottom: 10%;
                    background: rgba(92,59, 70, 0.6);
                    z-index: 1;
                    position: absolute;
                    display:none;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
            }
            .san{
                background:url("https://media.guoanfamily.com/www/003/sanImg.jpg") no-repeat;
                background-size: 100% 100%;
                position: relative;
                .sanCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 8%;
                    top: 4%;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .sanCer{
                    width: 4rem;
                    height: 1.6rem;
                    position: absolute;
                    left: 8%;
                    top: 12%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .sanCsan{
                    width: 3.8rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 20%;
                    top: 30%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .sanCliu{
                    width: 3rem;
                    height: 3.5rem;
                    position: absolute;
                    top: 45%;
                    left: 8%;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .sanCqi{
                    width: 4rem;
                    height: 2.6rem;
                    position: absolute;
                    right: 0%;
                    bottom: 20%;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .sanCwu{
                   @extend %swiperBoult;//向上滑动提示
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                p{
                    //swiper公共样式P标签  每个页面的底部透明度
                @extend %swiperP;
                -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .swiperPhoneA{
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                
            }
            .si{
                background:url("https://media.guoanfamily.com/www/004/img2.png") no-repeat;
                background-size: 100% 100%;
                position: relative;
                .siCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 8%;
                    top: 4%;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .siCer{
                    width: 4.1rem;
                    height: 1.8rem;
                    position: absolute;
                    left: 13%;
                    top: 14%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .siCsan{
                    width: 4.4rem;
                    height: 1rem;
                    position: absolute;
                    left: 13%;
                    top: 36%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .swiperPhone{
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .siCwu{
                    @extend %swiperBoult;//向上滑动提示
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .p{
                    //swiper公共样式P标签  每个页面的底部透明度
                @extend %swiperP;
                -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
            }
            .wu{
                background:url("https://media.guoanfamily.com/www/005/img.jpg") no-repeat;
                background-size: 100% 100%;
                position: relative;
                .wuCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    left: 13%;
                    top: 4%;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .wuCer{
                    width: 4rem;
                    height: 1.8rem;
                    position: absolute;
                    right:8%;
                    top: 8%;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .wuCsan{
                    width: 4rem;
                    height: 1.8rem;
                    position: absolute;
                    right: 7%;
                    top: 30%;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 0.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
            .swiperPhone{
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .wuCwu{
                    @extend %swiperBoult;//向上滑动提示
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .p{
                    //swiper公共样式P标签  每个页面的底部透明度
                @extend %swiperP;
                -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
            }
            .liu{
                background:url("https://media.guoanfamily.com/www/006/img.jpg") no-repeat;
                background-size: 100% 100%;
                position: relative;
                .liuCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 8%;
                    top: 4%;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .liuCer{
                    width: 4rem;
                    height: 1rem;
                    position: absolute;
                    left: 13%;
                    top: 12%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .liuCsan{
                    width: 4rem;
                    height: 1rem;
                    position: absolute;
                    right: 13%;
                    top: 22%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .liuCsi{
                    width: 5.4rem;
                    height: 1rem;
                    position: absolute;
                    left: 17%;
                    top: 34%;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .swiperPhone{
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .liuCliu{
                    @extend %swiperBoult;//向上滑动提示
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .p{
                    //swiper公共样式P标签  每个页面的底部透明度
                @extend %swiperP;
                -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
            }
            .qi{
                background: url("https://media.guoanfamily.com/www/007/qiImg1.jpg") no-repeat;
                background-size: 100% 100%;
                position: relative;
                
                .qiCyi{
                    width: 1.2rem;
                    height: 1.2rem;
                    position: absolute;
                    left: 13%;
                    top: 4%;
                    -webkit-animation-duration: 1s; //动画持续时间
                    -webkit-animation-delay: 0s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .qiCer{
                    width: 3.8rem;
                    height: 1.2rem;
                    position: absolute;
                    right: 10%;
                    top: 4%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.4s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .qiCsan{
                    width: 2.4rem;
                    height: 2rem;
                    position: absolute;
                    left: 16%;
                    top: 21%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .qiCsi{
                    width: 5.4rem;
                    height: 3rem;
                    position: absolute;
                    left: 16%;
                    top: 45%;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .qiCwu{
                    width: 2.4rem;
                    height: 2rem;
                    position: absolute;
                    right: 12%;
                    top: 21%;
                    -webkit-animation-duration: 2s; //动画持续时间
                    -webkit-animation-delay: 0.8s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .swiperPhoneA{
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .qiCqi{
                    @extend %swiperBoult;//向上滑动提示
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 2s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
                .p{
                width: 6.4rem;
                    height: 1rem;
                    left: 5%;
                    bottom: 10%;
                    background: rgba(195, 13, 35,1);
                    z-index: 1;
                    position: absolute;
                    -webkit-animation-duration: 3s; //动画持续时间
                    -webkit-animation-delay: 1.6s;//动画延迟时间
                    //-webkit-animation-iteration-count: infinite; //动画执行次数
                }
            }
            .ba{           
                .ba-top{
                    width:100%;
                    height:22%;
                    img{
                        height:100%;
                        width:100%;
                    }
                }
                .ba-center{
                    width:100%;
                    height:65%;
                    overflow: scroll;
                }
                .ba-bottom{
                    width: 90%;
                    height: 8%;
                    margin-left: 5%;
                    background: #c9151d;
                    color: #fff;
                    border-radius: 5px;
                    line-height: 0.8rem;
                    text-align: center;
                    font-size: 0.4rem;
                }
                .delegation-separate{//分隔线
                    width:100%;
                    height:0.1rem;
                    background:#e8e8e8;
                }
                .delegation-center-name{
                    width: 90%;
                    height: 22%;
                    background: #fff;
                    overflow: hidden;
                    margin-left: 5%;
                    .delegation-center-name-top{
                        width:100%;
                        height: 0.7rem;
                        span{
                            display: block;
                            height: 100%;
                            width:10%;
                            line-height: 0.75rem;
                            color:$partColor;
                            text-align: center;
                            font-size: 0.26rem;
                            float:left;
                        }
                        p{
                            width:20%;
                            height: 100%;
                            line-height: 0.8rem;
                            font-size: 0.26rem;
                            float: left;
                        }
                        div{
                            float: left;
                            width:65%;
                            height: 80%;
                            border:0;
                            background-image: url("../../../assets/home/Delegation-bage.png"); 
                            background-size:100% 100%;
                            input{
                                display: block;
                                width:70%;
                                margin-top: 2%;
                                height:100%;
                                float:left;
                                margin-left:4%;
                                font-size:0.26rem;
                                outline:none;
                                background:transparent;
                                border:none;
                                outline:medium;
                                *:focus { 
                                    outline: none;
                                    background-color: transparent;
                                }
                                ::selection{background:transparent; }
                                ::-moz-selection{background:transparent; }
                            }
                            p{
                                width:25%;
                                float: left;
                                color:$partColor;

                            }
                        }
                    }
                    .delegation-center-name-bottom{
                        width:100%;
                        height: 0.7rem;
                        span{
                            display: block;
                            height: 100%;
                            width:10%;
                            line-height: 0.75rem;
                            color:$partColor;
                            text-align: center;
                            font-size: 0.26rem;
                            float:left;
                        }
                        p{
                            width:20%;
                            height: 100%;
                            line-height: 0.8rem;
                            font-size: 0.26rem;
                            float: left;
                        }
                        div{
                            float: left;
                            width:65%;
                            height: 80%;
                            border:0;
                            background-image: url("../../../assets/home/Delegation-bage.png"); 
                            background-size:100% 100%;
                            input{
                                display: block;
                                width:70%;
                                margin-top: 2%;
                                height:100%;
                                float:left;
                                margin-left:4%;
                                font-size:0.26rem;
                                outline:none;
                                background:transparent;
                                border:none;
                                outline:medium;
                                *:focus { 
                                    outline: none;
                                    background-color: transparent;
                                }
                                ::selection{background:transparent; }
                                ::-moz-selection{background:transparent; }
                            }
                            p{
                                width:25%;
                                float: left;
                                color:$partColor;

                            }
                        }
                    }
                }
                .delegation-center-titleTwo{
                    background: #fff;
                    width: 90%;
                    height: 5%;
                    margin-top: 0.2rem;
                    margin-left: 5%;                
                    .delegation-center-titleTwo-left{
                        width:15%;
                        height: 100%;
                        float:left;
                        position: relative;
                        img{
                            width:0.4rem;
                            height:0.4rem;
                            margin:auto;
                            position: absolute;
                            left: 0;
                            right:0;
                            top:0;
                            bottom:0;
                        }
                    }
                    .delegation-center-titleTwo-right{
                        width: 85%;
                        height: 100%;
                        float: right;
                        line-height: 0.46rem;
                        text-align: left;
                        p{
                            font-size: 0.26rem;
                            color:$mostColor;
                        }
                    }
                }
                .delegation-separate2{
                    width:100%;
                    height:1px;
                    margin-top:0.2rem;
                    background:#e8e8e8;
                }

                .delegation-center-house{
                    width: 90%;
                    height: 14%;
                    margin-left: 7%;
                    background: #ffffff;
                    overflow: hidden;
                    .delegation-center-house-top{
                        width:100%;
                        height: 0.7rem;
                        margin-top:0.2rem;
                        p{
                            width:20%;
                            height: 100%;
                            line-height: 0.8rem;
                            font-size:0.26rem;
                            float: left;
                        }
                        div{
                            float: left;
                            width:65%;
                            height: 80%;
                            border:0;
                            margin-left:5%;
                            background-image: url("../../../assets/home/Delegation-bage.png"); 
                            background-size:100% 100%;
                            span{
                                display: block;
                                width:70%;
                                height:100%;
                                float:left;
                                line-height: 0.6rem;
                                margin-left:4%;
                                text-align:center;
                                font-size:0.26rem;
                                outline:none;
                                background:transparent;
                                border:none;
                                color:#ababab;
                                outline:medium;
                                *:focus { 
                                    outline: none;
                                    background-color: transparent;
                                }
                                ::selection{background:transparent; }
                                ::-moz-selection{background:transparent; }
                            }
                            .fontColor{
                                color:$mostColor;
                            }
                            p{
                                width:25%;
                                float: left;
                                color:$partColor;

                            }
                        }
                    }
                }
                .delegation-center-rest{
                    width: 90%;
                    height: 30%;
                    margin-left: 3%;
                    background: #fff;
                    margin-top: 0.05rem;
                    textarea{
                        width:90%;
                        height:80%;
                        border-radius: 5px;
                        margin:5% 0 0 5%;
                        resize:none;
                        font-size:$fewFontSize;
                        text-indent: 8px;
                        line-height:0.5rem;
                        border:solid $lineColor 1px;
                        background:#f5f5f5;
                    }
                }
                .delegation-center-button{
                    width:100%;
                    height: 0.7rem;
                    margin:0.5rem 0;
                    text-align: center;
                    button{
                        display:block;
                        height: 100%;
                        width:60%;
                        border:0;
                        background:$partColor;
                        color:#fff;
                        font-size:0.32rem;
                        border-radius: 5px;
                        margin-left:20%;
                    }
                }
            }
        }
        .popping{
            width:100%;
            height: 90%;
            background:#efeff4;
            z-index: 10;
            position: absolute;
            left:0;
            top:1.3rem;
            font-size:12px;
            .popping-top{
                position: absolute;
                top:10px;
            }
            .weui-search-bar{

            }
        }

    }
    .emptyios{
        height: 1.3rem;
        line-height:1.3rem;
	}
	.emptyandroid{
        height: 1.1rem;
        line-height:1.1rem;
	}
    .souTopandroid{
        top:1.1rem;
    }
    .souTopios{
        top:1.3rem;
    }
    // 微信分享样式
    .shareAlert{
        width:100%;
        height: 0rem;
        position: fixed;
        transition: .9s;
        bottom: 0;
        background:#fff;
        border-top: 2px solid #f2f2f2;
        z-index: 999;
        .shareIcon{
            width:100%;
            height: 1.5rem;
            div{
                float: left;
                width:1.5rem;
                height: 1.5rem;
                background:red;
                margin-left: .3rem;
                position: relative;
            }
            div:nth-child(1){
                background:url(../../../../static/new/img/Wx.png) no-repeat;
                background-size: 60%;
                background-position: 50% 26%;
                span{
                    display: block;
                    width:100%;
                    font-size:.3rem;
                    position: absolute;
                    bottom: 0;
                }
            }
            div:nth-child(2){
                background:url(../../../../static/new/img/friends.png) no-repeat;
                background-size: 60%;
                background-position: 50% 26%;
                span{
                    display: block;
                    width:100%;
                    font-size:.3rem;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
        .exitShare{
            padding-top:5px;
            font-size: .4rem;
                border-top:1px solid #e6e6e6;
                margin-top: .6rem;
                bottom: 0;
                text-align: center;
                width:100%;

        }
    }
    .shareAlert1{
        transition: .9s;
        height: 3rem;
    }
    .market {
        width: 100%;
        height: 100%;
        background: transparent;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        margin: auto;
        z-index: 998;
    }
    
</style>

<template>
    <div class="delegation-box fixContent">
        <div id="titleHeight" ref="titleHeight" class="titleHeight" :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle">
            <span class="back-btn" @click="back"></span>
            <div class="middle">
                <span class="middleTitle">业主委托</span>
            </div>
            <div class="shareDelegation" @click="buildShare" v-if="navigatorIsPc"><img src="https://media.guoanfamily.com/www/share.png" alt=""></div>
        </div>
        <div class="delegation-center" ref="centerHeight" :style="{height:centerHeight}">
            <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide class="yi">
                    <div ref="yi">
                        <img class="yiCyi animated tada" src="https://media.guoanfamily.com/www/009/img3.png" alt="">
                        <img class="yiCer animated bounceIn" src="https://media.guoanfamily.com/www/001/img4.png" alt="">
                        <img class="yiCsan animated bounceIn" src="https://media.guoanfamily.com/www/001/img1.png" alt="">
                        <img class="yiCsi animated bounceIn" src="https://media.guoanfamily.com/www/001/img3.png" alt="">
                        <img class="yiCwu animated bounceIn" src="https://media.guoanfamily.com/www/001/img2.png" alt="">
                        <a class="yiCliu" href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" src="https://media.guoanfamily.com/www/009/img4.png" alt=""></a>
                        <img class="yiCqi animated bounceUp" id="bounceUp" src="https://media.guoanfamily.com/www/009/img5.png" alt="">
                        <span class="yiCspan1 animated bounceInLeft"></span>
                        <span class="yiCspan2 animated bounceInRight"></span>
                        <p class="animated fadeInLeftBig"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="er">
                    <div ref="er">                                     
                        <img class="erCyi animated wobble" id="dowebok" src="https://media.guoanfamily.com/www/009/img3.png" alt="">
                        <img class="erCer animated bounceInDown" id="dowebok" src="https://media.guoanfamily.com/www/002/img2.png" alt="">
                        <img class="erCsan animated bounceInDown" id="dowebok" src="https://media.guoanfamily.com/www/002/img1.png" alt="">
                        <a class="swiperPhoneA animated bounceIn"  href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/009/img4.png" alt=""></a>
                        <img class="erCwu animated bounceInUp" id="dowebok bounceUp" src="https://media.guoanfamily.com/www/009/img.png" alt="">
                        <p class="animated fadeInLeftBig"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="san">
                    <div ref="san">
                        <img class="sanCyi animated swing" id="dowebok" src="https://media.guoanfamily.com/www/009/img3.png" alt="">
                        <img class="sanCer animated slideInLeft" id="dowebok" src="https://media.guoanfamily.com/www/003/img2.png" alt="">
                        <img class="sanCsan animated slideInRight" id="dowebok" src="https://media.guoanfamily.com/www/003/img3.png" alt="">
                        <img class="sanCliu animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/003/img4.png" alt="">
                        <img class="sanCqi animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/003/img5.png" alt="">
                        <a class="swiperPhoneA animated bounceIn" href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/009/img6.png" alt=""></a>
                        <img class="sanCwu animated bounceInUp" id="dowebok bounceUp" src="https://media.guoanfamily.com/www/009/img.png" alt="">
                        <p class="animated bounceInLeft"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="si">
                    <div ref="si">
                        <img class="siCyi animated rubberBand" id="dowebok" src="https://media.guoanfamily.com/www/009/img3.png" alt="">
                        <img class="siCer animated rollIn" id="dowebok" src="https://media.guoanfamily.com/www/004/img3.png" alt="">
                        <img class="siCsan animated rollIn" id="dowebok" src="https://media.guoanfamily.com/www/004/img.png" alt="">                    
                        <a class="swiperPhoneA animated bounceIn"href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/009/img6.png" alt=""></a>
                        <img class="siCwu animated bounceInUp" id="dowebok bounceUp" src="https://media.guoanfamily.com/www/009/img.png" alt="">
                        <p class="p animated bounceInLeft"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="wu">
                    <div ref="wu">
                        <img class="wuCyi animated tada" id="dowebok" src="https://media.guoanfamily.com/www/009/img3.png" alt="">
                        <img class="wuCer animated rotateInDownRight" id="dowebok" src="https://media.guoanfamily.com/www/005/img2.png" alt="">
                        <img class="wuCsan animated rotateInDownRight" id="dowebok" src="https://media.guoanfamily.com/www/005/img1.png" alt="">                    
                        <a class="swiperPhoneA animated bounceIn" href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/009/img6.png" alt=""></a>
                        <img class="wuCwu animated bounceInUp" id="dowebok bounceUp" src="https://media.guoanfamily.com/www/009/img.png" alt="">
                        <p class="p animated bounceInLeft"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="liu">
                    <div ref="liu">
                        <img class="liuCyi animated swing" id="dowebok" src="https://media.guoanfamily.com/www/009/img3.png" alt="">                  
                        <img class="liuCer animated bounceInLeft" id="dowebok" src="https://media.guoanfamily.com/www/006/img1.png" alt="">
                        <img class="liuCsan animated bounceInRight" id="dowebok" src="https://media.guoanfamily.com/www/006/img2.png" alt="">
                        <img class="liuCsi animated bounceInUp" id="dowebok" src="https://media.guoanfamily.com/www/006/img3.png" alt="">
                        <a class="swiperPhoneA animated bounceIn" href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/009/img6.png" alt=""></a>
                        <img class="liuCliu animated bounceUp" id="dowebok bounceUp" src="https://media.guoanfamily.com/www/009/img.png" alt="">
                        <p class="p animated bounceInLeft"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="qi">
                    <div ref="qi">
                        <img class="qiCyi animated rubberBand" id="dowebok" src="https://media.guoanfamily.com/www/009/img3.png" alt=""> 
                        <img class="qiCer animated flipInY" id="dowebok" src="https://media.guoanfamily.com/www/007/img1.png" alt="">
                        <img class="qiCsan animated bounceInLeft" id="dowebok" src="https://media.guoanfamily.com/www/007/img2.png" alt="">
                        <img class="qiCsi animated bounceIn" id="dowebok" src="https://media.guoanfamily.com/www/007/img4.png" alt="">
                        <img class="qiCwu animated bounceInRight" id="dowebok" src="https://media.guoanfamily.com/www/007/img3.png" alt="">
                        <a class="swiperPhoneA animated bounceIn" href="tel:400-900-2225"><img class="swiperPhone animated bounceIn" src="https://media.guoanfamily.com/www/009/img4.png" alt=""></a>
                        <img class="qiCqi animated bounceInUp" id="dowebok bounceUp" src="https://media.guoanfamily.com/www/009/img.png" alt="">
                        <p class="p animated bounceInLeft"></p>
                    </div>
                </swiper-slide>
                <swiper-slide class="ba">
                    <div class="ba-top">    
                        <img src="https://media.guoanfamily.com/www/008/img.jpg" alt="">
                    </div>
                    <div class="ba-center">
                        <div class="delegation-center-name">
                            <div class="delegation-center-name-top">
                                <span>*</span>
                                <p class="p1">手机号</p>
                                <div class="delegation-center-name-top-bage">
                                    <input type="text" placeholder="请输入您的手机号" v-model="phone" maxlength="11">
                                    <p>(必填)</p>
                                </div>
                            </div>
                            <div class="delegation-center-name-bottom">
                                <span>*</span>
                                <p class="p1">姓&nbsp;&nbsp;&nbsp;名</p>
                                <div>
                                    <input type="text" placeholder="请输入您的姓名"  v-model="userName">
                                    <p>(必填)</p>
                                </div>
                            </div>
                        </div>
                        <div class="delegation-separate"></div>
                        <div class="delegation-center-titleTwo">
                            <div class="delegation-center-titleTwo-left">
                                <img src="../../../assets/home/delegation-house.png" alt="">
                            </div>
                            <div class="delegation-center-titleTwo-right">
                                <p>房屋信息</p>
                            </div>
                        </div>
                        <div class="delegation-separate2"></div>
                        <div class="delegation-center-house">
                            <div class="delegation-center-house-top commonality">
                                <p class="p1">小区名称</p>
                                <div>
                                    <span :class="{fontColor:isfontColor}" @click="poppingOnOff">{{plotName}}</span>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="delegation-separate"></div>
                        <div class="delegation-center-titleTwo">
                            <div class="delegation-center-titleTwo-left">
                                <img src="../../../assets/home/delegation-house.png" alt="">
                            </div>
                            <div class="delegation-center-titleTwo-right">
                                <p>备注</p>
                            </div>
                        </div>
                        <div class="delegation-separate2"></div>
                        <div class="delegation-center-rest">
                            <textarea maxlength="180" placeholder="请输入其他情况,如果没有匹配到您的小区,请在此处输入" v-model="remark"></textarea>
                        </div>
                    </div>                    
                    <div class="ba-bottom" @click="present">提交</div>
                </swiper-slide>
                <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']"></div>
            </swiper>
        </div>
        <!-- 分享时候的底部弹出框 -->
        <div class="shareAlert" :class="{'shareAlert1':shareAlert}">
            <div style="width:100%;height:100%;positon:releative;">
                <div class="shareIcon">
                     <div class="weixin" @click="weixinhaoyoufenxiangClick">
                        <span>微信</span>
                    </div>
                    <div class="pengyou" @click="weixinFriendsClick">
                        <span>朋友圈</span>
                    </div>
                </div>
                <div class="exitShare" @click="exitShareClick">取消</div>
            </div>
        </div>
        <!--遮罩层-->
		<div class="market" v-show="market" @click.stop="markedClick"></div>
        <!-- <ga-page-bottom></ga-page-bottom> -->
        <div :class="{souTopIos:isSou,souTopandroid:isAndroid}" class="popping" v-show="poppingShow">
            <search class="popping-top"
                @result-click="resultClick"
                @on-change="getResult"
                :results="results"
                v-model="value"
                position="absolute"
                auto-scroll-to-top top="0px"
                @on-focus="onFocus"
                @on-cancel="onCancel"
                @on-submit="onSubmit"
                ref="search">
            </search>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';//轮播   
    require('swiper/dist/css/swiper.css')    //注意这里
    import { Search, Group, Cell, XButton, AlertPlugin} from 'vux'
    import PageHeader from '../../components/public/PageHeader';//导航
    export default {
        data() {
            var that = this;
            return {
                swiperOption: {
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    on:{
                        slideChangeTransitionEnd: function(){    
                            // console.log(this.activeIndex+"s");                        
                            if(this.activeIndex == 0){
                                that.addClass(0);
                                that.removeClass(1);
                            }
                            if(this.activeIndex == 1){
                               that.addClass(1);
                               that.removeClass(0);
                               that.removeClass(2);
                            }
                            if(this.activeIndex == 2){
                                that.addClass(2);
                                that.removeClass(1);
                                that.removeClass(3);
                            }
                            if(this.activeIndex == 3){
                                that.addClass(3);
                                that.removeClass(2);
                                that.removeClass(4);
                            }
                            if(this.activeIndex == 4){
                               that.addClass(4);
                               that.removeClass(3);
                               that.removeClass(5);
                            }
                            if(this.activeIndex == 5){
                                that.addClass(5);
                                that.removeClass(4);
                                that.removeClass(6);
                            }
                            if(this.activeIndex == 6){
                               that.addClass(6);
                               that.removeClass(5);
                            }
                            if(this.activeIndex == 7){
                               that.removeClass(6);
                            }
                        },
                    },
                },
                market: false,
				shareAlert:false,
                centerHeight:0,//为center设置高度初始化
                parentMsg:"在线委托",
                id:"",
                userName:"",//姓名
                phone:"",//电话
                remark:'',//备注
                results: [
                ],
                values:[],//保存搜索数据，回显用
                value: '',
                poppingShow:false,
                plotName:'请选择小区',//小区名称
                plotid:"",//小区id
                isfontColor:false,
                customerSourceCode:"",
                isSou:false,//控制搜索的margin-top
                isAndroid:true,//控制搜索的margin-top
                androidOrIos:true,	//默认为安卓登录
                titleH:0,
                navigatorIsPc:true//判断是否是pc浏览器，如果是pc浏览器就关闭分享
            }
        },

        created() {
            // console.log("created",this.$route.query.id);
            // this.id = this.$route.query.id;
            // if(this.id != "" || this.id != null){
            //     this.post('CEntrusController/getOneCEntrus',{
            //         'userId':this.id
            //     }).then((res) =>{
            //         console.log(res);
            //         this.id = res.data.id;//id
            //         this.userName = res.data.userName;//姓名
            //         this.phone = res.data.phone;//电话
            //         this.plotid = res.data.communityId;//小区id
            //         this.remark = res.data.remark;//备注
            //     })
            // }
            // let judge = this.isECTouch();//判断是否是微信浏览器 true是微信，false是普通浏览器
            // if(judge){
            //     this.customerSourceCode = "0020004";//微信
            // }else{
            //     this.customerSourceCode = "0020008";//m站
            // }
            let platform = localStorage.getItem('platform');
            if(platform == null || platform =='null' || platform == undefined || platform == ""){
                this.navigatorIsPc = false;
            }else{
                this.navigatorIsPc = true;
            }
            this.isIosAndroid();
            
        },

        mounted() {
            this.broadcast(this.EVENTS.PAGE_LOADING_END, "HomePage");  
            this.swiper.slideTo(0, 1000, true);
            this.reset();
            
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        methods: {
            back(){
                this.$router.back(-1);
            },
            buildShare(){
				this.market = true;
     			this.shareAlert = true;
			},
			// 遮罩层的点击事件
		    markedClick() {
		      	this.market = false;
		      	this.shareAlert =  false;
            },
            // 取消分享的点击事件
	        exitShareClick(){
	            let setTime = setTimeout(()=>{
	               this.market = false;
	            },900)
	            this.shareAlert = false;
	        },
            addClass(ev){
                var arr = [this.$refs.yi.children,this.$refs.er.children,this.$refs.san.children,
                this.$refs.si.children,this.$refs.wu.children,this.$refs.liu.children,this.$refs.qi.children];
                let children = arr[ev];
                for(var i=0;i<children.length;i++){
                    children[i].style.display='block';
                }
            },
            removeClass(ev){
                var arr = [this.$refs.yi.children,this.$refs.er.children,this.$refs.san.children,
                this.$refs.si.children,this.$refs.wu.children,this.$refs.liu.children,this.$refs.qi.children];
                let children = arr[ev];
                for(var i=0;i<children.length;i++){
                    children[i].style.display='none';  
                }
            },
            reset(){//动态设置center高度
                let windowHeght = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                if(this.$store.state.showWxTitle){
                    this.centerHeight ="100%";
                }else{
                     let titleH = this.$refs.titleHeight.clientHeight;
                     this.centerHeight = (windowHeght-titleH)+"px";
                }
            },
            isIosAndroid(){
                //判断是安卓还是ios登录，定义到变量中
				if(this.AndroidOrIos()){
                    // console.log("安卓");
                    //安卓
                    this.isAndroid = true;
                    this.isSou = false;
                    this.androidOrIos = true;
                    this.customerSourceCode = "00200015";//00200015安卓APP   00200016iosAPP
				}else{
                    // console.log("ios");
                    //ios
                    this.isSou = true;
                    this.isAndroid = false;
                    this.androidOrIos = false;
                    this.customerSourceCode = "00200016";//00200015安卓APP   00200016iosAPP
				}
			},
            poppingOnOff(){
                this.value = this.plotName;
                this.poppingShow = true;
            },
            present(){//保存
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(this.phone == ""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入手机号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                if(this.userName ==""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入姓名",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                if(!myreg.test(this.phone))
                {
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入有效手机号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                // console.log(this.userName,this.phone,this.plotid,this.customerSourceCode);
               this.post('CEntrusController/saveCEntrus',{
                    'id':'',
                    'userName':this.userName,
                    'phone':this.phone,
                    'communityId':this.plotid,
                    'remark':this.remark,
                    'customerSourceCode':this.customerSourceCode
                }).then((res) =>{
                    if(res.code == 0){
                        let _this = this;
                        this.$vux.confirm.show({
                            //title:"是否取消",
                            content:'保存成功',
                            onCancel () {//取消执行
                                _this.$router.push('/Homepage')
                            },
                            onConfirm () {//确定执行
                                _this.$router.push('/Homepage')
                            }
                        })

                    }else{
                        this.$vux.confirm.show({
                            //title:"是否取消",
                            content:res.msg,
                            onCancel () {//取消执行
                            },
                            onConfirm () {//确定执行
                            }
                        })
                    }
                })
            },
            Homepage(){//跳转到首页
                this.$router.push('/Homepage')
            },
            ykList(){//跳转约看清单
                this.$router.push('/ykList')
            },
            setFocus () {
                this.$refs.search.setFocus()
            },
            resultClick (item) {//选中单击事件
                this.poppingShow = false
                this.plotName = this.values[item.other].name;
                this.plotid = this.values[item.other].id;
                this.isfontColor=true;
                //window.alert('you click the result item: ' + JSON.stringify(item))

            },
            getResult (val) {//输入事件
                this.post('CommunityController/findCommunityList',{
                    'communityName':this.value
                }).then((res) =>{
                    this.values = res.data;
                    this.results = val ? getResult(res.data) : [];
                })
            },
            onSubmit () {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: '没有检索您的小区'+'\r'+'请在备注中输入您的小区名称'
                })
            },
            onFocus () {//搜索单击事件
                this.value = "";
            },
            onCancel () {//取消单击事件
                this.poppingShow = false;
            },
            // 微信好友分享
		    weixinhaoyoufenxiangClick(){
		        this.wxShare();
		    },
		    // 分享到微信朋友方法
		    wxShare(){
                let self = this;
                console.log(111);
		        Wechat.share({
		            message: {
		                title: "国安家——您的资产管理专家", //标题
		                description:"租期一站式托管，安全放心，稳定收益", //描述
		                thumb: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
		                media: {
		                    type: Wechat.Type.WEBPAGE,
		                    webpageUrl: "https://www.guoanfamily.com/guoanjiaApp/#/Delegation?from=true", //连接地址指打开分享时页面地址
		                }
		            },
		            scene: Wechat.Scene.SESSION   // share to Timeline
		        }, function () {
		            this.msgalert('已成功分享给朋友');
		        }, function (reason) {
		        //    this.msgalert('已取消分享');
		        });
            },
            // 微信朋友圈分享
		    weixinFriendsClick(){
		      	this.friendShare();
		    },
		    //分享到朋友圈方法
		    friendShare(){
		        let self = this;
		        //console.log(self.shareName,self.advantageEnvironment);
		        //console.log("https://www.guoanfamily.com/rentHouse/wap/#/HouseList/houseDetail?id=" + self.id + "&productType=" + self.productType);
		        Wechat.share({
		            message: {
		                title:"国安家——您的资产管理专家", //标题
		                description:"租期一站式托管，安全放心，稳定收益", //描述
		                thumb: "https://media.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
		                media: {
		                    type: Wechat.Type.WEBPAGE,
		                    webpageUrl: "https://www.guoanfamily.com/guoanjiaApp/#/Delegation?from=true", //连接地址指打开分享时页面地址
		                }
		            },
		            scene: Wechat.Scene.TIMELINE   // share to Timeline
		        }, function () {
		            this.msgalert('已成功分享到朋友圈');
		        }, function (reason) {
		            // this.msgalert('已取消分享');
		        });
		    },
        },

        components: {
            PageHeader,
            Search,
            Group,
            Cell,
            XButton
        }
    }
function getResult (val) {
    let rs = []
    for (let i = 0; i < val.length; i++) {
      rs.push({
        title: val[i].name,
        other: i
      })
    }
    return rs
}
</script>
