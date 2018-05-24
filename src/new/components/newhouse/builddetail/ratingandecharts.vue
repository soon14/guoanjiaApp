<template>
    <div>
        <div class='ratings'>
            <div>
                <div>
                    <div>
                        <img :src="data[0].reviewheadpicture" alt="">
                    </div>
                </div>
                <div>
                    <div>
                        <span>{{data[0].reviewname}}</span>
                        <span>{{data[0].reviewposition}}</span>
                    </div>
                    <div :class="{'wordShow':cssShow}">
                        <span>专业点评：</span>{{data[0].reviewcontent}}
                    </div>
                </div>
            </div>
            <div id='myecharts'></div>
        </div> 
    </div>
</template>
<script>
    export default { 
        data() {
            return {
                indicator:[],
                value:[]
            }
        },
        props:{
            data:{
                type:Array,
                required:true
            },
            cssShow:{
                type:Boolean,
                default:false
            }
        },
        computed: {
            option(){
                let that=this;
                return {
                    baseOption:{
                        tooltip: {},
                        radar:{   
                                axisLine:{
                                    lineStyle:{
                                        color:"#c5dff7"
                                    }
                                },
                                splitLine:{
                                    lineStyle:{
                                        color:"#c5dff7"
                                    }
                                },
                                splitArea:{
                                    show:false
                                },
                                name:{
                                    color:'#8599e8'
                                },
                                nameGap:5,
                                indicator: that.indicator,
                                center: ['50%', '50%']
                            },
                        series: [
                            {
                                type: 'radar',
                                areaStyle: {
                                    normal: {
                                        color:'#8dbffd'
                                    }
                                },
                                lineStyle:{
                                    normal: {
                                        color:'transparent'
                                    } 
                                },
                                data: [
                                    {
                                        name:'打分情况',
                                        value: that.value
                                    }
                                ]
                            }
                        ],
                    }
                }
            }
        },
        created(){
            this.get('/buildapp/BuildBaseInfoA/getReviewList?indexname=&statics=1',{
                interfaceType:"newhouse"
            }).then(res=>{
                if(res.data instanceof Array && res.data.length != 0){
                    res.data.forEach(item=>{
                        this.indicator.push({
                            text:item.indexname,
                            max:item.indextotalscore
                        })
                    })
                }
                //循环遍历使用冒泡排序，对雷达图的数据进行排序，使之与this.value的顺序保持一致，避免打分情况错乱
                this.data.forEach(item=>{
                    if(item.reviewresults!=''){
                        JSON.parse(item.reviewresults).forEach((Item,index)=>{
                            this.value.push(Item.indexscore);
                            this.indicator.forEach((ITEM,INDEX)=>{
                                if(Item.indexname == ITEM.text){
                                    let obj = {...this.indicator[index]};//es6展开运算符，进行对象的拷贝，冒泡排序
                                    this.indicator[index].text = Item.indexname;
                                    this.indicator[INDEX] = obj;
                                }
                            })
                        });
                    }
                });
                //确保没有打分的项目给予未打分的提示
                this.indicator.forEach((item,index)=>{
                    if(this.value.length-1<index){
                        this.value[index] = '未打分';
                    }                 
                })
                this.$nextTick(_=>{
                    let that = this;
                    // 基于准备好的dom，初始化echarts实例
                    this.myChart = this.$echarts.init(document.getElementById('myecharts'));
                    this.myChart.setOption(that.option);
                    window.onresize = this.myChart.resize;
                })
            })
            
        }
    } 
</script>
<style lang="less" scoped>
.ratings{
    padding:0.28rem 0 0.25rem 0;
    background: #fff;
    &>div{
        display: flex;
        &>div:nth-child(1){
            text-align: center;
            font-size:0;
            margin-right:0.2rem;
            &>div{
                margin:0 auto;
                border-radius: 50%;
                background:#c7c7c6;
                overflow: hidden;
                width:0.76rem;
                height:0.76rem; 
                img{
                    width:100%;
                    height:100%; 
                }
            }  
        }
        &>div:nth-child(2){
            font-size:0;
            text-align: justify;
            &>div:nth-child(1){
                margin-bottom:0.1rem;
                &>span:nth-child(1){
                    font-size:0.24rem;
                    color:#323232;
                    font-weight:900;
                    margin-right:0.1rem;
                }
                &>span:nth-child(2){
                    font-size:0.2rem;
                    color:#f4141e;
                    font-weight:600;
                }
            }
            &>div:nth-child(2){
                line-height: 0.43rem;
                font-size:0.24rem;
                color:#323232;
                font-weight:600;
                &.wordShow{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }
                &>span{
                    font-size:0.24rem;
                    color:#909090;
                    font-weight:900;
                    margin-right:0.1rem;
                }
            }
        }
    }
    #myecharts{
        width:100%;
        height:3.8rem;
    }
}
</style>

