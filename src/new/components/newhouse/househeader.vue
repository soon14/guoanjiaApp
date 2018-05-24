<template>
    <div class='househeader_wrap'>
        <div class='onehouse' v-if='houselist.length != 0' @click="jumproute('informationDetail',houselist[0].id)">
            <img :src="houselist[0].pictureURL" alt="">
            <p>{{houselist[0].name}}</p>
        </div>
        <div class='elsehouse'>
            <div>
                <dl v-for='(item,index) in houselist' :key='index' v-if='index != 0' @click="jumproute('informationDetail',item.id)">
                    <dt>
                        <img :src="item.pictureURL" alt="">
                    </dt>
                    <dd>
                        <h3>
                            {{item.name}}
                        </h3>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                houselist:[]
            }
        },
        created(){
            this.post("/consult/appIndexList",{
                city:this.$store.state.area
            },{
                interfaceType:'newhouse'
            }).then(res=>{
                if(res.data!=null){
                    res.data.forEach(item=>{
                        item.pictureURL = this.concatFileUrl(item.pictureURL)
                    })
                    this.houselist = res.data;
                }
            })
        },
        methods:{
            jumproute(path,id){
                this.$router.push({path:path,query:{id:id}})
            }
        }
    }
</script>
<style lang='less' scoped>
.househeader_wrap{
    padding:0 0.2rem;
    .onehouse{
        position: relative;
        margin-bottom:0.2rem;
        img{
            height:4rem;
            width:100%;
        }
        p{
            position: absolute;
            bottom:0;
            width:100%;
            height:0.6rem;
            line-height: 0.6rem;
            background:rgba(0,0,0,0.2);
            padding-left:0.1rem;
            box-sizing:border-box;
            text-align:left;
            font-size:0.32rem;
            color:#fff;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .elsehouse{
        background:white;
        font-size:0;
        width:7.1rem;
        overflow: auto;
        &::-webkit-scrollbar{
            display: none;
        }
        div{
            width:9.51rem;
            dl{
                float: left;
                font-size:0;
                margin-left:0.13rem;
                padding-bottom:0.3rem;
                dt{
                    margin-bottom:0.2rem;
                    height: 1.32rem;
                    width:2.28rem;
                    img{
                        height: 100%;
                        width:100%;
                    }
                }
                dd{
                    font-size:0.22rem;
                    color:#323232;
                    font-weight:500;
                    text-align:left;
                    padding:0 0.1rem;
                    box-sizing: border-box;
                    width:2.28rem;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
            dl:nth-child(1){
                margin-left:0;
            }
        }
    }
}

</style>
