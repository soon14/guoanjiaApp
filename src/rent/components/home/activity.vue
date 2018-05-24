<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 2rem;
.box{
    background:#f4f4f4;
    height:100%;
    .activity{
        height: 6rem;
        background:#fff;
        margin-top:0.5rem;
        border-top:solid #e1e1e1 1px;
        border-bottom:solid #e1e1e1 1px;
        .activity-box{
            width:90%;
            height:100%;
            margin-left:5%;
            .activity-top{
                width:100%;
                height: 2.5rem;
                .activity-left{
                    width:40%;
                    height:100%;
                    float: left;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .activity-right{
                    width:60%;
                    height:100%;
                    float: left;
                    h3{
                        font-size:$littleFontSize;
                        margin-top: 0.5rem;
                        margin-left:10px;
                        font-weight: 600;
                    }
                    p{
                        font-size: $mostFontSize;
                        margin-top:0.1rem;
                        margin-left:10px;
                    }
                }
            }
            .activity-bottom{
                width:100%;
                height: 2.5rem;
                margin-top:2px;
                .activity-left{
                    width:40%;
                    height:100%;
                    float: left;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .activity-right{
                    width:60%;
                    height:100%;
                    float: left;
                    h3{
                        font-size:$littleFontSize;
                        margin-top: 0.5rem;
                        margin-left:10px;
                        font-weight: 600;
                    }
                    p{
                        font-size: $mostFontSize;
                        margin-top:0.1rem;
                        margin-left:10px;
                    }
                }
            }
        }
    }
    .templet{
        width:100%;
        height: 13.5rem;
        background:#fff;
        margin-top:0.5rem;
    }
}
</style>

<template>
    <div class="box">
        <div class="activity">
            <div class="activity-box">
                <div class="activity-top">
                    <div class="activity-left">
                        <img src="../../../assets/home/activity1.png" alt="">
                    </div>
                    <div class="activity-right">
                        <h3>梦享家计划</h3>
                        <p>参加“梦享家计划”</p>
                        <p>毕业我们依然“住”在一起</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        components: {}
    }
</script>
