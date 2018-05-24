<style lang="less" scoped>
    .Explain{
        width: 100%;
        height: 100%;
        background: #EE0B0B;
        position: relative;
        *{
            box-sizing: border-box;
        }
        .explay_info{
            width: 100%;
            position: absolute;
            height:90%;
            bottom: 0;
            left: 0;
            background:url('../../../assets/luck/Cbeijinghong.png') center bottom no-repeat;
            background-size: 100%;
            padding: 20px 20px 0; 
            &.phoneHeight{
                height:100%;
            }
            .info{
                background-color: rgba(255, 255, 255, .3);
                color: #fff;
                padding-bottom: 30px;
                border-radius: 5px;
                .title{
                    height: 1.6rem;
                    text-align: center;
                    overflow: hidden;
                    span{
                        display: inline-block;
                        height: 100%;
                        font-size: 20px;
                        color: #fff;
                        line-height: 1.6rem;
                        vertical-align: top;
                    }
                    &::after,
                    &::before{
                        content: "";
                        display: inline-block;
                        width: 0.8rem;
                        height: 100%;
                        transform: translateY(-50%);
                        margin: 0 10px;
                        border-bottom: 1px solid #fff;
                       
                    }
                }
                P{
                    font-size: 14PX;
                    line-height: 28px;
                    padding: 0 24px;
                    text-align: left;
                }
            }
            .lantern{
                position: absolute;
                top: 0;
                left: 0.1rem;
                width: 1.2rem;
                height: 1.2rem;
                background: url("../../../assets/luck/Cdenglong.png") center no-repeat;
                background-size: 80%;
            }
        }
        
    }
</style>
<template>
    <div class="Explain">
        <div class="explay_info" :class="{phoneHeight:PhoneTop}">
            <div class="info" v-if="this.chouseNum==2">
                <p class="title">
                    <span>188元租金抵扣券</span>
                    
                </p>
                <p>
                    1、租金抵扣券仅限首次签约国安家租客及业主使用。
                </p>
                <p>
                    2、如果您是业主身份，所获租金抵扣券，在您房源成功委托后，将作为额外租金奖励使用。不做其他用途。
                </p>
                <p>
                    3、如果您是租客身份，所获租金抵扣券，仅做房租抵扣使用，不做其他用途。
                </p>
                <p>
                    4、租金抵扣券仅限本人使用，不兑现，不找零。
                </p>
                <p>
                    5、租金抵扣券，每人仅限使用一次，有效期至2018年3月31日，不与其他优惠活动重复使用。
                </p>
                <p>
                    6、使用时请出示该有效券码凭据。
                </p>
                <p>
                    7、最终解释权归国安家所有。
                </p>
            </div>
            <div class="info" v-if="this.chouseNum==3">
                <p class="title">
                    <span>服务费八折券</span>
                    
                </p>
                <p>
                    1、服务费8折券仅限首次签约国安家租客使用。
                </p>
                <p>
                    2、服务费8折券仅限本人使用，不兑现，不找零。
                </p>
                <p>
                    3、服务费8折券，每人仅限使用一次，有效期至2018年3月31日，不与其他优惠活动重复使用。
                </p>
                <p>
                    4、使用时请出示该有效券码等凭据。
                </p>
                <p>
                    5、最终解释权归国安家所有。
                </p>
            </div>
            <div class="lantern"></div>
        </div>
       
    </div>
</template>
<script>
    export default {
        data(){
            return {
                chouseNum:"",
                PhoneTop:false,
            }
        },
        created(){
             var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/micromessenger/i) == "micromessenger"){
                this.PhoneTop = true;
            }
        },
        mounted(){
            // if (!this.AndroidOrIos()) {
            //  // console.log(this.AndroidOrIos());
            //     this.AndroidTop = false;
            // } else {
            //     this.AndroidTop = true;
            // }
            this.chouseNum = this.$route.query.Num;
            
        }
    }
</script>



