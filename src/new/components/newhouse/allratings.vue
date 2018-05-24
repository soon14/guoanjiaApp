<template>
<div style="height: 100%;">
    <div class='allratings' :class="[{'handleHead':showInput||showDetail},{'andhandleHead':AndroidOrIos()&&(showInput||showDetail)},AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
        <h1>专家点评</h1>
        <ratingandecharts :data='housedata.reviewrecordArrayList' v-if='housedata.reviewrecordArrayList.length != 0 && housedata.reviewrecordArrayList != null'></ratingandecharts>
        <div class="empty" v-else>暂无专家点评信息</div>
        <comment style='padding-bottom:0.9rem;' topicType="房源评价" :detailId='this.$route.query.id' :page='0' :size='5' :isPull='true'></comment>
    </div>
    <newhousefooter></newhousefooter>
</div>
</template>
<script>
const ratingandecharts = resolve => require(['./builddetail/ratingandecharts'], resolve);
const newhousefooter = resolve => require(['./builddetail/newhousefooter'], resolve);
const comment = resolve => require(['./comment'], resolve);
export default {
    data () {
        return {
            housedata:null,
            showInput:false,
            showDetail:false
        }
    },
    created(){
        this.housedata = this.getStorage('housedata');
    },
    components: {
        ratingandecharts,
        newhousefooter,
        comment
    },
    methods:{}
} 
</script>
<style lang='less' scoped>
.allratings{
    padding:0.2rem;
    box-sizing: border-box;
    h1{
        font-size:0.3rem;
        font-weight:600;
        color:#323232;
        height:0.66rem;
        line-height: 0.66rem;
        text-align: left;
    }
    .empty{
        font-size:0.16rem;
        height:0.6rem;
        line-height: 0.6rem;
    }
}
.handleHead {
    top: 0;
    padding-top: 1.3rem;
    z-index: 1001;
    overflow-y: hidden;
}
.andhandleHead {
    padding-top: 1.1rem;
    z-index: 1001;
    overflow-y: hidden;
}
</style>

