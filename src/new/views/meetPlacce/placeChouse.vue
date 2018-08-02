<style lang='less' >
    .server_order{
        position: relative;
        width:100%;
        overflow-y: scroll;
        .server_order_color{
            font-size: 14px;
            width: 24%;
            height: 60px;
            position: absolute;
            top: 40px;
            left: 0;
            box-sizing: border-box;
            padding: 5px;
            li{
                margin-top: 5px;
            }
            .color_box{
                display: inline-block;
                width: 12px;
                height: 12px;
                border:1px solid #333;
                border-radius: 50%;

            }
        }
    }
    .bg-red{
        background-color: red !important;
    }
    .bg-green{
        background-color: #1AAD19 !important;
    }
    .bg-orange{
        background-color: orange !important;
    }
    .bg-gray{
        background-color: gray !important;
    }
     .bg-orangered{
        background-color: orangered !important;
    }
    .dsply-non{
        display: none !important;
    }
</style>

<template>
    <div class="server_order">

       
        <!--日历展示-->
        <div style="marign-top:60px;"></div>
        <template>
            <fullcalendar
                :events="fcEvents"
                locale="zn"
                @changeMonth = "changeMonth"
                @eventClick="eventClick"
                first-day="1"
                lang="zh"
            >
            </fullcalendar>
        </template>
    </div>
</template>
<script>
import fullCalendar from "../../components/fullCalendar/fullCalendar"
export default {
    data () {
        return {
            value2:"",
            fcEvents : [],//demoEvents,
            currentTime:"",
            loadingData:[],
            pickerOptions1:{
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
        }
    },
    methods:{
        toShowData(res){//初始化日历上注册的事件
            let  that =this

            this.fcEvents = res.map(item =>{
                var titlesName = {
                    title: item.title,
                    start: item.start,
                    content: '无',
                    YOUR_DATA :{storageNumberList:item.storageNumberList, title: item.title, start: item.start ,id:item.id ,status:item.status,flagNumber:item.flagNumber}//7-18晚修改
                }
                titlesName.cssClass=titlesName.YOUR_DATA.status==='0'?'bg-red':'bg-green';
                if(titlesName.YOUR_DATA.flagNumber==='0'){
                   titlesName.cssClass='bg-orange'
                }
                var itemsDate = new Date(item.start);

                var theDay=(new Date())-24*60*60*1000



                if(theDay>itemsDate){//过期
                   titlesName.cssClass='dsply-non'//过期不显示
                }
                return titlesName
            })
        },
        // 请求
        toGetMonth(data){
            this.get("order/storage/findAll?start="+data,{interfaceType: "metorRest"}).then(res=>{
                this.loadingData = res

                this.toShowData(res)
            })
        },
        //改变月份事件
        changeMonth(currentStart,end, start ){
            this.currentTime = start.substring(0,7);
            this.toGetMonth(this.currentTime)
        },

        // 事件点击
        eventClick(event, jsEvent, pos){
            if(event.YOUR_DATA.status!="0"&&event.YOUR_DATA.flagNumber!="0"){
                 const datetime = {};
                datetime.date =  event.start;
                datetime.YOUR_DATA =  event.YOUR_DATA
                datetime.title =  event.title
                var theDay  = new Date(event.start)
                var toDayDate =  new Date()
                    toDayDate =  new Date(toDayDate.setDate(toDayDate.getDate()-1));
                this.$store.state.YOUR_DATA={}
                this.$store.state.YOUR_DATA = event.YOUR_DATA

            //    之后开始跳转
                this.$router.push({name:"placeOpaction"})
            }
        },
        turnPersonCent(){
            this.$router.push({name:"personalCenter"})
        }


    },
    components: {
        'fullcalendar': fullCalendar
    }
}
</script>

