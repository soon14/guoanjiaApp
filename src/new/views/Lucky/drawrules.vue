<template>
  <div class="bj" :class="{'WeixinBj':IsWeixin,'IosTop':IsIosTop}">
    <div class="rulediv"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            IsWeixin:false,
            IsIosTop:false,
        }
    },
    created(){
        let ua = navigator.userAgent.toLowerCase();
        if(ua.match(/micromessenger/i) == "micromessenger"){
            this.IsWeixin = true;
        }else{
            this.IsIosTop = true;
        }
    }
}
</script>

<style lang='less' scoped>
    .bj{
        width:100%;
        height:100%;
        position: fixed;
        left:0;
        top: 0;
        margin-top: 1.3rem;
        background:url('https://img.guoanfamily.com/newYearActivity/rulebj.jpg') no-repeat center;
        background-size:100% 100%;
        &.WeixinBj{
            margin-top: 0;
             .rulediv{
                  top: 0;
             }
        }
        &.IosTop{
            margin-top: 1.3rem;
             .rulediv{
                  top: 1.3rem;
             }
        }
        .rulediv{
            width:100%;
            height: 80%;
            background:url('https://img.guoanfamily.com/newYearActivity/explain2.png') no-repeat center;
            background-size: 98% ;
            position: fixed;
            top: 3%;
        }
    }
</style>
