<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .Lessee-box{
        background:$greyColor;
        width:100%;
        height:100%;
        .Lessee-box-center{
            width:100%;
            height:90%;
            overflow: hidden;
            .Lessee-box-center-details{
                width:90%;
                margin-left:5%;
                height: 2.6rem;
                margin-top:1rem;
                background:#fff;
                .details-top{
                    width:90%;
                    margin-left:5%;
                    height: 25%;
                    border-bottom:solid 1px #dbdbdb;
                    p{
                        font-size: 12px;
                        float:right;
                        line-height:0.6rem;
                    }
                }
                .details-bottom{
                    width:90%;
                    margin-left:5%;
                    height: 75%;
                    overflow: hidden;
                    .details-bottom-left{
                        width:40%;
                        height:80%;
                        margin-top:3%;
                        float:left;
                        img{
                            width:90%;
                            height:100%;
                        }
                    }
                    .details-bottom-right{
                        width:60%;
                        height:80%;
                        margin-top:3%;
                        float:right;
                        .details-bottom-right-div1{
                            width:100%;
                            height: 32%;
                            p{
                                font-size: 14px;
                                line-height:0.5rem;
                            }
                        }
                        .details-bottom-right-div2{
                            width:100%;
                            height: 32%;
                            p{
                                font-size: 12px;
                                line-height:0.5rem;
                            }
                        }
                        .details-bottom-right-div3{
                            width:100%;
                            height: 32%;
                            p{
                                font-size: 14px;
                                line-height:0.5rem;
                                float:left;
                                color:$partColor;
                            }
                            span{
                                display: block;
                                float: left;
                                line-height:0.5rem;
                                font-size: 12px;
                            }
                            img{
                                width:30%;
                                height: 65%;
                                margin-top:3%;
                                margin-right:2%;
                                float:right;
                            }
                        }
                    }
                }
            }
            .Lessee-box-center-tenancies{
                width:90%;
                margin-left:5%;
                height: 3.16rem;
                margin-top:0.2rem;
                background:#fff;
                .tenancies-div1,.tenancies-div2,.tenancies-div3,.tenancies-div4{
                    width:100%;
                    height: 0.79rem;
                    p{
                        font-size: 12px;
                        line-height: 0.79rem;
                    }
                    .tenancies-p1{
                        float: left;
                        text-indent: 20px;
                    }
                    .tenancies-p2{
                        float:right;
                        margin-right:0.1rem;
                    }
                    .tenancies-p3{
                        float:right;
                        margin-right:0.1rem;
                    }
                }


            }
            .Lessee-box-center-partnership{
                width:90%;
                margin-left:5%;
                height: 1.16rem;
                margin-top:0.2rem;
                background:#fff;
                p{
                    font-size: 12px;
                    line-height:1.16rem;
                };
                .partnership-p1{
                    float:left;
                    text-indent: 20px;
                }
                .partnership-p2,.partnership-p3{
                    float:right;
                    margin-right:0.1rem;
                }
            }
            .Lessee-box-center-sign{
                width:90%;
                margin-left:5%;
                height: 1.16rem;
                margin-top:0.2rem;
                background:#fff;
                .sign-p1{
                    float: left;
                    font-size: 12px;
                    line-height: 1.16rem;
                    text-indent: 20px;
                }
                .sign-p2{
                    float: right;
                    font-size: 12px;
                    line-height: 1.16rem;
                    margin-right:0.1rem;
                }
            }
        }
        .delegation-img{
            width:100%;
            height: 1%;
            background:url("../../../assets/home/delegation-back.png");
        }
        .delegation-bottom{
            width:100%;
            height: 9%;
            background:#fff;
            .delegation-bottom-top{
                width:100%;
                height:30%;
            }
            .delegation-bottom-bottom{
                width:100%;
                height:70%;
                .delegation-bottom-bottom-button{
                    width:25%;
                    height: 100%;
                    float:left;
                    margin-left:6.2%;
                    border-radius:10px 10px 0 0;
                    img{
                        width:0.35rem;
                        height:0.35rem;
                        float:left;
                        margin:15% 5% 0 22%;
                        display: block;
                    }
                    p{
                        display: block;
                        font-size: 14px;
                        margin-top:15%;
                        color:#fff;
                    }
                }
                .button-green{
                    background:$labelThree;
                }
                .button-red{
                     background:$mineColor;
                     img{
                        width:0.35rem;
                        height:0.35rem;
                        float:left;
                        margin:15% 5% 0 10%;
                        display: block;
                    }
                }
                .button-yellow{
                     background:$switchThree;
                }
            }

        }
    }
</style>

<template>
    <div class="Lessee-box">
        <div class="Lessee-box-top">
            <PageHeader></PageHeader>
        </div>
        <div class="Lessee-box-center">
            <div class="Lessee-box-center-details">
                <div class="details-top">
                    <p>GBADCD12376</p>
                </div>
                <div class="details-bottom">
                    <div class="details-bottom-left">
                        <img src="../../../assets/home/Lessee-img.png" alt="">
                    </div>
                    <div class="details-bottom-right">
                        <div class="details-bottom-right-div1">
                            <p>朝阳区通惠家园</p>
                        </div>
                        <div class="details-bottom-right-div2">
                            <p>7单元3号楼209</p>
                        </div>
                        <div class="details-bottom-right-div3">
                            <p>2130</p>
                            <span>元/月</span>
                            <img src="../../../assets/home/DepositContract-lxz.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="Lessee-box-center-tenancies">
                <div class="tenancies-div1">
                    <p class="tenancies-p1">租期</p>
                    <p class="tenancies-p2">2017.03.06-2017.04.12</p>
                </div>
                <div class="tenancies-div2">
                    <p class="tenancies-p1">付款方式</p>
                    <p class="tenancies-p2">季付</p>
                </div>
                <div class="tenancies-div3">
                    <p class="tenancies-p1">物业交割信息</p>
                    <p class="tenancies-p2" style="color:#76b48f">已确认</p>
                </div>
                <div class="tenancies-div4">
                    <p class="tenancies-p1">租约账单</p>
                    <p class="tenancies-p2">待支付</p>
                    <p class="tenancies-p3">3期</p>
                </div>
            </div>
            <div class="Lessee-box-center-partnership">
                <p class="partnership-p1">合租人</p>
                <p class="partnership-p3">168****1234</p>
                <p class="partnership-p2">刘女士</p>
            </div>
            <div class="Lessee-box-center-sign">
                <p class="sign-p1">签约主题信息</p>
                <p class="sign-p2">13627272727</p>
            </div>
        </div>
        <div class="delegation-img"></div>
        <div class="delegation-bottom">
            <div class="delegation-bottom-top"></div>
            <div class="delegation-bottom-bottom">
                <div class="delegation-bottom-bottom-button button-green">
                    <img src="../../../assets/home/green.png" alt="">
                    <p>找房</p>
                </div>
                <div class="delegation-bottom-bottom-button button-red">
                    <img src="../../../assets/home/red.png" alt="">
                    <p>约看清单</p>
                </div>
                <div class="delegation-bottom-bottom-button button-yellow">
                    <img src="../../../assets/home/yellow.png" alt="">
                    <p>我的</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from '../../components/public/PageHeader';//导航
    export default {
        data() {
            return {}
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        components: {
            PageHeader
        }
    }
</script>
