<style>
  /*  .pull-to-refresh-layer .spinner-holder{
        display: none;
    }*/
</style>

<style scoped lang="scss">
    .house-list{
        width: 100px;
        height: 100%;
    }
    .list-item{
        width: 100%;
        height: 100%;
        background-color: #e8e8e8;
    }
    .table-view{
        padding:0px 5%;
        .table-view-cell{
            background-color: #fff;
            box-shadow: 0px 2px 0px #bbbbbb;
            position: relative;
            border-radius: 5px;
            width: 100%;
            height: 5.4rem;
            margin:0.5rem 0px;
            .house-object{
                float: left;
                width: 30%;
                height: 80%;
                .pull-left{
                    display: inline-block;
                    width: 3.9rem;
                    height: 3.2rem;
                    margin-left: 0.5rem;
                    margin-top:0.7rem;
                }
            }
            .house-body{
                float: left;
                width: 70%;
                font-size: 0.7rem;
                margin-top:0.7rem;
                p,.house-desc,.house-label{
                    text-align: left;
                    margin-left: 0.79rem;
                    padding: 0.15rem;
                }
                .bedroom{
                    color:#555;
                    margin-right:0.3rem;
                }
                .area{
                    color:#555;
                    display:inline-block;
                }
                .label{
                    display:inline-block;
                    background-color: #e99064;
                    padding: 0.15rem 0.3rem;
                    border-radius:3px;
                    color:#ffffff;
                }

            }
            .house-bottom{
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 20%;
                font-size: 0.7rem;
                .money-month{
                    margin-left:0.8rem;
                    &:first-child{
                        color:#f26061;
                    }
                }
            }
        }

    }
</style>

<template>
    <div class="house-list">
        <scroller class="scroller"
            :on-refresh="refresh"
            :on-infinite="infinite"
            ref="myList"
        >
                <div class="list-item">
                    <ul class="table-view">
                        <li class="table-view-cell" v-for="item in list" :key="item.id">
                             <router-link :to="{name:'',query:{id:item.id }}">
                            <!-- <router-link> -->
                                <div class="house-top">
                                    <div class="house-object">
                                         <img class="pull-left" src="../../../../static/rent/img/house-list/house-list.png">
                                    </div>
                                    <div class="house-body">
                                        <p v-text="item.title"></p>
                                        <div class="house-desc">
                                            <span class="bedroom">1号楼-南卧</span>
                                            <span class="area">21㎡|22层</span>
                                        </div>
                                         <div class="house-label">
                                            <span class="label">朝南</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="house-bottom">
                                    <p class="money-month"><span>2130</span><span>元/月</span></p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
        </scroller>
    </div>
</template>

<script>
    export default {
         props: {
            selectType:{
                type:String,
                default:""
            }
        },
        data() {
            return {
                list: [
                    {img_url:'open.png',title:"中星张杨苑",id:"1",}
                ],

                listPosition: null,

                preventLoad: false,
            }
        },

        created() {
            this.getListData();
        },

        activated(){
            this.preventLoad = false;
            if(this.listPosition){
                setTimeout(()=>{
                    this.$refs.myList.scrollBy(0, this.listPosition.top, true);
                }, 100)
            }
        },

        deactivated(){
            this.preventLoad = true;
            this.listPosition = this.$refs.myList.getPosition();
        },

        mounted() {

        },

        methods: {

            getListData(){
                // this.list.img_url = this.list.map(item =>{
                //     return this.concatFileUrl(item.img_url);
                // })
                // // let url = "";
                // switch (this.selectType){
                //     case "houseList":
                //         url = "";
                //         break;
                //     default:
                //         break;
                // }
                // this.post(url, {

                // }).then((res) => {

                // });
            },

            refresh(done){
                setTimeout(()=>{
                    let first = this.list[0];
                    this.list.unshift(first-1)
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
                // console.log("infinite", this.preventLoad)

                setTimeout(()=>{
                    let last = this.list[this.list.length - 1] || 0;
                    this.list.push(last+1)
                    //后台返回是否还有数据，还有数据设置为false
                    //后台没有数据了设置为true
                    done(false)
                }, 1000)

                //done(true);
            },
        },

        components: {}
    }
</script>
