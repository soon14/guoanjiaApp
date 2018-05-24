<style scoped lang="scss">
     @import "../../style/theme.scss";
     .content{
            width: 100%;
            margin: 0 auto;
            top: 4.5rem;
            position: absolute;
            width: 100%;
            margin-top: 0.5rem;
            height: 8.3rem;
         .complaint-log{
            width: 92%;
            height: auto;
            padding:0rem 0.3rem;
            .complaint-left{
                .complaint-number{
                width: 5.9rem;
                height: 0.62rem;
                font-size:$mostFontSize;
                line-height: 0.62rem;
                    span{
                        &:first-child{
                        color: $friendlyColor;
                        float: left;
                        }
                        &:last-child{
                            float: right;
                            margin-right:0.3rem;
                        }
                    }
                }
                .complaint-img{
                    margin-top: 0.1rem;
                    font-size: $reminderFontSize;
                    overflow: hidden;
                    position:relative;
                    .current-index{
                        width: 1rem;
                        height: 0.6rem;
                        background-color:#FF943C;
                        float:left;
                        position: relative;

                        .index{
                            width:0.4rem;
                            height: 0.4rem;
                            text-align:center;
                            line-height: 0.4rem;
                            font-size:0.25rem;
                            border:1px solid #fff;
                            color:#fff;
                            position:absolute;
                            top:50%;
                            left: 50%;
                            margin-left:-0.2rem;
                            margin-top:-0.2rem;
                            border-radius:50%;
                        }
                    }
                    .relt{
                        float: left;
                        border: 1px solid #F6A9A9;
                        width: 1rem;
                        height: 0.5rem;
                        text-align:center;
                        line-height:0.5rem;
                        background-color:#F18787;
                        border-radius:3px;
                        color:#fff;
                        }
                    img{
                        float: left;
                        width: 1.4rem;
                        height: 1.4rem;
                    }
                    .complaint-content{
                        width: 4.7rem;
                        float: left;
                        text-indent:24px;
                        margin-left: 0.2rem;
                        font-size: $reminderFontSize;
                        position:relative;
                        .tenant{
                            font-size: $mostFontSize;
                            margin-bottom:0.2rem;
                            font-weight: 600;
                        }
                        .time{
                        	text-align: left;
                            white-space: pre-wrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            margin-bottom:0.2rem;
                        }
                        .created-time {
                        	text-align: left;
                            display: block;
                        }
                    }
                }
            }
            .result{
                width:0.28rem;
                line-height:0.3rem;
                float: right;
                font-size:$mostFontSize;
                color:$unselectedColor;
                position: absolute;
                top:50%;
                right: 0.4rem;
                margin-top: -0.4rem;
                text-align: left;
            }
         }
     }
    .resultColor {
        color:#1FB94B!important;
    }
</style>

<template>
    <div class="content">
        <scroller class="scroller"
            :on-refresh="refresh"
            :on-infinite="infinite"
            ref="myList"
        >
                <ul class="complaint-log">
                    <li :style="note" v-for="(list,index) in content" :key="index">
                        <div class="complaint-left">
                            <div class="complaint-number">
                            <span>投诉单号</span>
                            <span>{{list.id}}</span>
                            </div>
                            <div class="complaint-img">
                                <div>
                                    <div class="current-index">
                                        <div class="index">{{list.index}}</div>
                                    </div>
                                    <div class="complaint-content">
                                        <!-- <div class="behavior">{{list.questionDescription}}</div> -->
                                        <div class="time">{{list.questionDescription}}</div>
                                        <div class="created-time">投诉时间：{{list.createTime}}</div>
                                    </div>
                                    <div style="clear:both;"></div>
                                </div>
                                <div style="margin-top:0.12rem">
                                    <div class="relt" v-if='list.bool'>结果</div>
                                    <!--  -->
                                    <div class="complaint-content">
                                        <!-- <div class="behavior">{{list.questionDescription}}</div> -->
                                        <div class="time" v-if='list.bool'>{{list.dealResult}}</div>
                                        <!--  -->
                                    </div>
                                    <div style="clear:both;"></div>
                                </div>

                            </div>
                        </div>
                        <div class="result" :class="{'resultColor':!list.bool}">
                            {{list.orderName}}
                        </div>
                    </li>
                </ul>
        </scroller>
    </div>
</template>

<script>
import tousu from "../../../../static/rent/tousu.png"
import tousu1 from "../../../../static/rent/tousu1.png"
// import logoSrc from './../../assets/avatar.png'
    export default {
        data() {
          return {
              tousu1:tousu1,
              note:{
                  backgroundColor:'#fff',
                  height:'auto',
                  backgroundSize: '100%',
                  marginTop:'0.38rem',
                  paddingLeft:'0.3rem',
                  borderRadius: '0.2rem',
                  position:'relative',
              },
              //userId:this.getStorage(this.KEYS.USER_INFO).id,
              currentPageNo:"1",//当前第几页
              pageCount:"5",//每页显示几条
              flag:"",//是否有下页
              content:[],
          }
        },
        created() {
            this.creatData();
        },
        components: {

        },
        computed: {
        },
        methods: {
            refresh(done){
                setTimeout(()=>{
                    //let first = this.list[0];
                    // this.list.unshift(first-1)
                    //后台返回是否还有数据，还有数据设置为false
                    //后台没有数据了设置为true
                    done(true)
                }, 1000)
            },

            infinite(done){
                if(this.preventLoad){
                    done(true);
                    return;
                }

                setTimeout(()=>{
                    //let last = this.list[this.list.length - 1] || 0;
                    // this.list.push(last+1)
                    //后台返回是否还有数据，还有数据设置为false
                    //后台没有数据了设置为true
                    done(true)
                }, 1000)

                //done(true);
            },
            creatData(){
                this.post("CComplaintController/getComplaint",{
                    //userId:this.userId,
                    currentPageNo:this.currentPageNo,//当前第几页
                    sourceCode:"0056001"
                }).then(res =>{
                    this.currentPageNo = res.currentPageNo;//第几页
                    this.pageCount = res.pageCount;//每页显示几条
                    this.flag = res.pageCount;//是否有下页
                    this.content = res.content; //内容页
                    this.content.forEach((item,index)=>{
                        if(item.orderName =="已结束"){
                            this.$set(this.content[index],"bool",true);
                        }
                    })
                })
            }
        }
    }
</script>
