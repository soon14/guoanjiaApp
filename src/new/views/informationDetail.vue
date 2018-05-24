<template>
<!-- 资讯详情 -->
<div style="height: 100%;position:relative;" :class="{'handlerWrap':showInput||showDetail}" v-if="show">
    <div class="infoDetail" :class="[{'handleHead':showInput||showDetail},{'andhandleHead':AndroidOrIos()&&(showInput||showDetail)},AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
        <div class="article_tit">
            {{title}}
        </div>
        <div class="article_state">
            <span>来自{{articleSource}}</span>
            <span>{{date}}</span>
        </div>
        <div class="article_con" v-if="articleContent" v-html="articleContent"></div>
        <!-- 评论组件  -->
        <comment ref="comment" :isPull="true" topicType="资讯展示" :detailId="detailID" :page="0" :size="5"></comment>
    </div>
    <div class="comment_fixed vux-1px-t" v-if="show">
        <span class="do_comment" @click="detailShowInp">
        写评论
    </span>
        <span class="comment_view">{{browseQuantity}}</span>
        <span class="comment_zan" :class="{'comment_zaned':isThumbs}" @click="thumbs">{{pointQuantity}}</span>
    </div>
</div>
</template>

<script>
import comment from '../components/newhouse/comment';
export default {
    name: "informationDetail",
    data: () => ({
        title: '',
        articleContent: '',
        articleSource: '',
        date: '',
        browseQuantity: 0,
        pointQuantity: 0,
        showInput: false,
        show: false,
        showDetail: false,
        isThumbs: false,
        thumbsList: ''
    }),
    components: {
        comment
    },
    computed: {
        detailID() {
            //路由获取资讯ID
            return this.$route.query.id
        }
    },
    created() {
        this.$vux.loading.show();
        //console.log(this.detailID)
        this.post('/consult/findById', {
            "id": this.detailID
        }, {
            interfaceType: "newhouse"
        }).then(res => {
            if (res.data) {
                //console.log(res.data)
                this.title = res.data.name;
                this.articleContent = res.data.content;
                this.articleSource = res.data.source;
                this.date = new Date(this.GetDateDiff(res.data.updateTime)).Format("yyyy.MM.dd");
                this.browseQuantity = res.data.browseQuantity;
                this.pointQuantity = res.data.pointNumber;
                this.id = res.data.id;
                this.show = true;
            }
        }).then(()=>{
            this.$vux.loading.hide();
        })
        if (this.getStorage('thumbsList')) {
            let map = new Map(this.getStorage('thumbsList'));
            //console.log(map)
            if (map.has(this.detailID)) {
                this.isThumbs = true
            };
            this.thumbsList = map;
        } else {
            this.thumbsList = new Map();
        }
        this.get(`/consult/app/addViewNum?id=${this.$route.query.id}`, {
            interfaceType: 'newhouse'
        });
    },
    methods: {
        GetDateDiff(date) {
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
            let time = date.replace(/\-/g, "/");
            return time;
        },
        detailShowInp() {
            let self = this;
            if (this.$refs.comment.loginStatus) {
                this.$refs.comment._showInput();
            } else {
                this.$vux.alert.show({
                    content: "尚未登录，无法发表评论",
                    onHide(){
                        self.$store.commit("showLogin");
                    }
                })
            }
        },
        thumbs() {
            //资讯详情点赞
            if (this.isThumbs) {
                if (this.pointQuantity > 0) {
                    this.pointQuantity--;
                    this.isThumbs = !this.isThumbs;
                    this.thumbsList.delete(this.detailID);
                    let opt = {
                        Id: this.detailID,
                        IsThumbs: -1
                    }
                    //console.log(opt);
                    this.post('/consult/appThumbs', opt, {
                        interfaceType: 'newhouse'
                    }).then(
                        res => {
                            if (res.status == 200) {
                                this.setStorage('thumbsList', this.thumbsList)
                            }
                        }
                    )
                }
            } else {
                this.pointQuantity++;
                this.isThumbs = !this.isThumbs;
                this.thumbsList.set(this.detailID, true);
                let opt = {
                    Id: this.detailID,
                    IsThumbs: 1
                }
                this.post('/consult/appThumbs', opt, {
                    interfaceType: 'newhouse'
                }).then(
                    res => {
                        if (res.status == 200) {
                            this.setStorage('thumbsList', this.thumbsList)
                        }
                    }
                )
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.infoDetail {
    box-sizing: border-box;
    background: #f5f5f5;
    padding-bottom: 1rem;
    z-index: 1000;
    &::-webkit-scrollbar {
        display: none;
    }
}
.handlerWrap {
    z-index: 1002;
}
.handleHead {
    top: 0;
    padding-top: 1.3rem;
    overflow: hidden;
    z-index: 1002;
}
.andhandleHead {
    padding-top: 1.1rem;
}
.article_tit {
    font-size: 0.4rem;
    text-align: left;
    line-height: 1.5;
    color: #323232;
    padding: 0.3rem 0.2rem;
    background: #fff;
}

.article_state {
    font-size: 0.22rem;
    text-align: left;
    color: #757575;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #fff;
    padding: 0 0.2rem 0.2rem;
    line-height: 0.4rem;
    box-sizing: border-box;
    span {
        display: inline-block;
    }
    span:nth-child(1) {
        margin-right: 0.5rem;
    }
}
.comment_fixed {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 0.98rem;
    left: 0;
    bottom: 0;
    font-size: 0.28rem;
    color: #323232;
    flex-wrap: nowrap;
    background: #ffffff;
    z-index: 1001;
    span {
        display: inline-block;
        text-align: right;
        line-height: 1.5;
        padding-top: 0.06rem;
    }
    .do_comment {
        flex: 1;
        text-align: left;
        background: url("../../../static/new/newhouseimg/detail_comment.png") no-repeat left;
        background-size: 0.38rem auto;
        margin-left: 0.3rem;
        padding-left: 0.5rem;
    }
    .comment_view {
        background: url("../../../static/new/newhouseimg/detail_view.png") no-repeat left;
        background-size: 0.44rem auto;
        padding-left: 0.56rem;
        margin-right: 0.4rem;
    }
    .comment_zan {
        background: url("../../../static/new/newhouseimg/detail_zan.png") no-repeat left;
        background-size: 0.38rem auto;
        padding-left: 0.5rem;
        margin-right: 0.3rem;
    }
    .comment_zaned {
        background: url("../../../static/new/newhouseimg/detail_zaned.png") no-repeat left;
        background-size: 0.38rem auto;
    }

}
</style>
<style lang="less">
.article_con {
    font-size: 0.28rem;
    text-indent: 2em;
    line-height: 1.5;
    text-align: left;
    background: #f5f5f5;
    padding: 0.3rem 0.2rem;
    color: #323232;
    p {
        margin-bottom: 0.2rem;
    }
    img {
        border-radius: 0.04rem;
        display: block;
        margin: 0.2rem auto;
    }
}
.vux-loading {
    font-size: 0.3rem;
}
</style>
