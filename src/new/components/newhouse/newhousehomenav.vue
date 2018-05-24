<template>
    <div class='nav_wrap'>
        <div v-for='(item,index) in imglist' :key='index' @click='navigation(item)'>
            <img :src="item.picturename" alt="">
            <div>
                <p>{{item.modulename}}</p>
                <p>{{item.titlecontent}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                imglist:[]
            }
        },
        created(){
            this.get('/dynamictitle/DynamicTitleA/getFiveList',{interfaceType:'newhouse'}).then(res=>{
                res.data.forEach(item=>{
                    item.picturename = this.concatFileUrl(item.picturename);
                })
                this.imglist = res.data;
            })
        },
        methods:{
            navigation(item){
                if(item.pageroutingurl.indexOf('?') !=-1){
                    let index = item.pageroutingurl.indexOf("?"),str = item.pageroutingurl.slice(index + 1),param = {};
                    if(str.indexOf('&') != -1){
                        let arr = str.split('&');
                        arr.forEach(item=>{
                            param[item.split('=')[0]] = item.split('=')[1];
                        })
                    }else{
                        param[str.slice(0,str.indexOf('='))] = str.slice(str.indexOf('=') + 1);
                    }
                    this.$router.push({path:item.pageroutingurl,query:param})
                }else{
                    this.$router.push({path:item.pageroutingurl})
                }
            }
        }
    }
</script>
<style lang='less' scoped>
    .nav_wrap{
        width:100%;
        padding:0.24rem 0.2rem;
        box-sizing: border-box;
        overflow: hidden;
        background-color: white;
        &>div{
            margin-left:0.05rem;
            margin-bottom:0.06rem;
            width:2.25rem;
            height:1.72rem;
            position: relative;
            text-align:left;
            float: left;
            &>div{
                position:absolute;
                top:0.3rem;
                left: 0.1rem;
                &>p:nth-child(1){
                    font-size:0.28rem;
                    font-weight:900;
                }
                &>p:nth-child(2){
                    font-size:0.18rem;
                    color:#757575;
                }
            }
            &>img{
                height: 100%;
                border-radius: 0.05rem;
            }
        }
        &>div:nth-child(1){
            width:2.5rem;
            height:3.5rem;
            margin-left:0;
            margin-bottom:0;
        }
    }
</style>

