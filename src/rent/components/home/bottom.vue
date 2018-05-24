<template>
    <div class="box">
        <div class="delegation-img"></div>
        <div class="delegation-bottom">
            <div class="delegation-bottom-top"></div>
            <div class="delegation-bottom-bottom">
                <div class="delegation-bottom-bottom-button button-green" @click="Homepage">
                    <img src="../../../assets/home/green.png" alt="">
                    <p>找房</p>
                </div>
                <div class="delegation-bottom-bottom-button button-red" @click="appointList">
                    <img src="../../../assets/home/red.png" alt="">
                    <p>约看清单</p>
                </div>
                <div class="delegation-bottom-bottom-button button-yellow" @click="mine">
                    <img src="../../../assets/home/yellow.png" alt="">
                    <p>我的</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            Homepage(){//跳转到首页
                this.$router.push({path:'/HomePage'})
            },
            appointList(){//跳转约看清单
                this.$router.push('/appointList')
            },
            mine(){
				this.$store.state.isIndexTrue = false;
				this.$store.state.isonLineTrue = false;
				this.$store.state.isMyTrue = true;
				this.$router.push('/PersonalCenter')
            }
        }
    }
</script>
<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .box{
        width:100%;
        height: 0.9rem;
        background:tan;
        position: fixed;
        bottom :0;
        z-index: 1000;
        .delegation-img{
            width:100%;
            height: 10%;
            background:url("../../../assets/home/delegation-back.png");
        }
        .delegation-bottom{
            width:100%;
            height: 90%;
            background:#fff;
            .delegation-bottom-top{
                width:100%;
                height:20%;
            }
            .delegation-bottom-bottom{
                width:100%;
                height:80%;
                .delegation-bottom-bottom-button{
                    width:28%;
                    height: 100%;
                    float:left;
                    margin-left:4%;
                    border-radius:10px 10px 0 0;
                    text-align: left;
                   
                    img{
                        width:0.35rem;
                        height:0.35rem;
                        float:left;
                        margin:10px 5px 0 22%;
                        display: block;
                    }
                    p{
                        display: block;
                        font-size: $fewFontSize;
                        margin-top:10%;
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
                        margin:10px 5px 0 10%;
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
