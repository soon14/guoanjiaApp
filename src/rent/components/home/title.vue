<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
.title-box{
    width:100%;
    height:$height;
    .box{
    height:$height;
    width:90%;
    margin-left:5%;
        .img1,p,div{
            float: left;
        }
        .img1{
            width:0.3rem;
            height:0.3rem;
            margin-top:0.22rem;
        }
        p{
            font-size: $titleFontSize;
            line-height: $height;
            margin-left:0.1rem;
        }
        div{
        height:$height;
        width:3.8rem;
        margin:0 0.1rem;
        line-height:0.1rem;
            span{
                display:inline-block;
                height: 1px;
                background:#f1f1f1;
                width:100%;
            }
        }
        .img2{
            height: 0.5rem;
            width:0.8rem;
            margin-top:0.15rem;
            float:right;
        }
    }
}
</style>

<template>
    <div class="title-box">
        <div class="box">
            <img src="../../../assets/home/activity.png" class="img1">
            <p>{{activity}}</p>
            <div><span></span></div>
            <img src="../../../assets/home/shortcut.png" class="img2">
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            activity: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                activity:"this.activity"
            }
        },

        created() {

        },

        mounted() {

        },

        methods: {},

        components: {}
    }
</script>
