<template>
<div id="comment_wrap">
    <div class="comment_tit">
        <span>用户点评</span>
        <span @click="_showInput">发表评论</span>
    </div>
    <div class="comment_box" v-for="(comment,index) in comments" :class="{'last':index==(comments.length-1)}" :key="comment.id" v-show="comment.display=='通过'?true:false">
        <img :src="(comment.userimg==null)?defaultimg:comment.userimg" alt="" class="comment_L">
        <div class="comment_R">
            <div class="comment_username">
                <span class="user_name">{{comment.useraccount}}</span>
                <span class="comment_zan" @click="handlePoint(comment.id,index)" :class="{'zaned':comment.judgepoint}"><i></i>{{comment.pointsnumber}}</span>
            </div>
            <div class="comment_con" @click="openDetail(index)">
                <span v-html="comment.wordcontent"></span>
            </div>
            <div class="comment_state">
                <div><span @click="openDetail(index)">{{new Date(GetDateDiff(comment.createtime)).Format("yyyy.MM.dd")}}</span><span class="dot" v-if="comment.judgeuser">•</span><span class="delete" @click="deleteComent(comment.id,index)" v-if="comment.judgeuser">删除</span></div>
                <span @click="openDetail(index)">回复({{comment.children.length}})</span>
            </div>
            <div class="reply_wrap" v-if="comment.children.length && comment.children[0].display=='通过'">
                <div class="replay_box" v-show="comment.children[0].display=='通过'" @click="openDetail(index)">
                    <span>{{comment.children[0].useraccount}}：</span>
                    <span v-html="formatContent(comment.children[0].wordcontent)"></span>
                </div>
                <div class="replay_all" v-if="comment.children.length>1">
                    <span @click="openDetail(index)">查看全部{{comment.children.length}}条评论</span>
                </div>
            </div>
        </div>
    </div>
    <div class="all_load" v-if="all_load">
        <span>已加载全部评论</span>
    </div>
    <div class="no_data" v-if="no_data&&(comments.length==0)">
        <span>暂无评论</span>
    </div>
    <!-- 评论详情组件 -->
    <commentdetail v-if="showDetail" @updataTopic="updataTopic" :topicIndex="topicIndex" :cuurComment="cuurComment" ref="detail"></commentdetail>
    <!-- 评论回复输入组件 -->
    <commentinput v-if="showInput" @updata="updata" @changeInputState="changeInputState" :wordLimit="wordLimit" :detailId="detailId" :topicType="topicType"></commentinput>
</div>
</template>
<script>
import commentdetail from './commentDetail';
import commentinput from './commentInput';
export default {
    name: "comment",
    props: {
        topicType: {
            //主题类型(房源评价,资讯展示,限购政策)
            type: String,
            required: true
        },
        detailId: {
            //主题ID
            type: String,
            required: true
        },
        page: {
            //分页
            type: Number,
            default: 0
        },
        size: {
            //单页数量
            type: Number,
            default: 5
        },
        isPull: {
            //是否开启上拉加载（true:开启，false:关闭）
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        defaultimg: require('../../../../static/new/newhouseimg/defaultimg.png'), //默认头像
        comments: [], //评论数据
        cuurComment: null,
        showDetail: false,
        showInput: false,
        parentId: '',
        selfPhone: '', //登录用户手机号码
        loginStatus: false, //是否登录
        wordLimit: 200, //字数限制
        topicIndex: 0, //打开详情记录详情的一级评论的数组位置
        no_data: false, //控制显示暂无评论
        nextPage: 0, //下一页
        resState: true, //请求状态
        all_load: false //控制显示已加载全部评论
    }),
    components: {
        commentdetail,
        commentinput
    },
    computed: {
        screenH() {
            //获取屏幕高
            return window.screen.height;
        },
        changeLoginStatus() {
            return this.$store.state.isLogin;
        }
    },
    methods: {
        openDetail(index) {
            //打开详情
            this.cuurComment = this.comments[index];
            this.showDetail = true;
            this.topicIndex = index;
        },
        _showInput() {
            //显示输入回复页面，判断登录状态
            let self = this;
            if (this.loginStatus) {
                this.showInput = true;
            } else {
                this.$vux.alert.show({
                    content: "尚未登录，无法发表评论",
                    onHide() {
                        self.$store.commit("showLogin");
                    }
                })
            }
        },
        updata(obj) {
            //更新一级评论数据
            this.comments.unshift(obj);
        },
        updataTopic(obj) {
            //更新二级评论评论数据
            this.comments[this.topicIndex].children.push(obj)
        },
        formatContent(str) {
            //格式化评论内容
            if (str.indexOf('//') > 0) {
                let arr = str.split("//");
                return '<i style="color: #57bde7">' + arr[0] + '//' + '</i>' + arr[1]
            } else {
                return str;
            }
        },
        GetDateDiff(date) {
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
            //解决ios 显示不出时间
            let time = date.replace(/\-/g, "/");
            return time;
        },
        deleteComent(id, index) {
            //删除一级评论
            this.get('/commentapp/deleteComment?id=' + id, {
                interfaceType: 'newhouse'
            }).then(
                res => {
                    if (res.status == 200) {
                        this.comments[index].display = "不通过";
                        this.showDetail = false;
                    }
                }
            )
        },
        handlePoint(id, index) {
            //点赞
            if (this.loginStatus) {
                this.get('/commentapp/flushpointsnumber?aid=' + id + '&topictype=' + this.topicType, {
                    interfaceType: 'newhouse'
                }).then(
                    res => {
                        //console.log(res)
                        if (res.status == 200) {
                            if (this.comments[index].judgepoint) {
                                this.comments[index].judgepoint = false;
                                this.comments[index].pointsnumber--;
                            } else {
                                this.comments[index].judgepoint = true;
                                this.comments[index].pointsnumber++;
                            }

                        }
                    }
                )
            } else {
                this.showAlert('尚未登录')
            }

        },
        showAlert(con) {
            //显示alert弹框
            let self = this;
            this.$vux.alert.show({
                content: con,
                onHide() {
                    self.$store.commit("showLogin");
                }
            })
        },
        changeInputState(val) {
            //改变输入状态
            this.showInput = val;
        }
    },
    watch: {
        showDetail(newval) {
            this.$parent.showDetail = newval
        },
        showInput(newval) {
            this.$parent.showInput = newval
        },
        changeLoginStatus(newval) {
            if (newval) {
                this.comments = [];
                this.get('/commentapp/ShowPageUserComment?topictype=' + this.topicType + '&modularid=' + this.detailId + '&page=' + this.page + '&size=' + this.size, {
                    interfaceType: 'newhouse'
                }).then(
                    res => {
                        //console.log(res)
                        if (res.data != null) {
                            this.comments = res.data.comment;
                            this.wordLimit = res.data.rule[0].wordnumber;
                            let n = res.data.comment.length;
                            if (n == 0) {
                                this.no_data = true;
                                this.all_load = false;
                                this.resState = false;
                            } else if (n > 0 && n < this.size) {
                                this.all_load = true;
                                this.no_data = false;
                                this.resState = false;
                            }
                        } else {
                            this.no_data = true;
                        }
                    }
                ).then(
                    () => {
                        this.selfPhone = this.getStorage('userPhone');
                        this.loginStatus = true;
                    }
                )
            }
        }

    },
    created() {
        //请求评论列表
        if (!this.LoToken()) {
            this.get('/commentapp/ShowPageUserComment?topictype=' + this.topicType + '&modularid=' + this.detailId + '&page=' + this.page + '&size=' + this.size, {
                interfaceType: 'newhouse'
            }).then(
                res => {
                    //console.log(res)
                    if (res.data != null) {
                        this.comments = res.data.comment;
                        this.wordLimit = res.data.rule[0].wordnumber;
                        let n = res.data.comment.length;
                        if (n == 0) {
                            this.no_data = true;
                            this.all_load = false;
                            this.resState = false;
                        } else if (n > 0 && n < this.size) {
                            this.all_load = true;
                            this.no_data = false;
                            this.resState = false;
                        }
                    } else {
                        this.no_data = true;
                    }
                }
            )
        } else {
            this.get('/comment/ShowPageTravelerComment?topictype=' + this.topicType + '&modularid=' + this.detailId + '&page=' + this.page + '&size=' + this.size, {
                interfaceType: 'newhouse'
            }).then(
                res => {
                    //console.log(res)
                    if (res.data != null) {
                        this.comments = res.data.comment;
                        this.wordLimit = res.data.rule[0].wordnumber;
                        let n = res.data.comment.length;
                        if (n == 0) {
                            this.no_data = true;
                            this.all_load = false;
                            this.resState = false;
                        } else if (n > 0 && n < this.size) {
                            this.all_load = true;
                            this.no_data = false;
                            this.resState = false;
                        }
                    } else {
                        this.no_data = true;
                    }
                }
            )
        }
        //判断是否登录
        if (this.getStorage('userPhone')) {
            this.selfPhone = this.getStorage('userPhone');
            this.loginStatus = true;
        } else {
            this.guest = false;
        }
        //初始化nextPage
        this.nextPage = parseInt(this.page) + 1;
    },
    mounted() {
        //根据ispull判断是否开启touchmove事件
        if (this.isPull) {
            this.$el.addEventListener('touchmove', () => {
                let site = document.querySelector('.last').getBoundingClientRect();
                //console.log(site.top);
                if (!this.LoToken()) {
                    if (site.top <= this.screenH) {
                        if (this.resState) {
                            this.resState = false;
                            this.get('/commentapp/ShowPageUserComment?topictype=' + this.topicType + '&modularid=' + this.detailId + '&page=' + this.nextPage + '&size=' + this.size, {
                                interfaceType: 'newhouse'
                            }).then(
                                res => {
                                    //console.log(res)
                                    if (res.data != null) {
                                        this.comments = this.comments.concat(res.data.comment);
                                        let n = res.data.comment.length;
                                        if (n == 0 && this.comments.length == 0) {
                                            this.no_data = true;
                                            this.resState = false;
                                            this.all_load = false;
                                        } else if (n == 0 && this.comments.length > 0) {
                                            this.all_load = true;
                                            this.resState = false;
                                            this.no_data = false;
                                        } else if (n > 0 && n < this.size) {
                                            this.all_load = true;
                                            this.resState = false;
                                        } else if (n == this.size) {
                                            this.nextPage++;
                                            this.resState = true;
                                        }

                                    }
                                }
                            )
                        }
                    }
                } else {
                    if (site.top <= this.screenH) {
                        if (this.resState) {
                            this.resState = false;
                            this.get('/comment/ShowPageTravelerComment?topictype=' + this.topicType + '&modularid=' + this.detailId + '&page=' + this.nextPage + '&size=' + this.size, {
                                interfaceType: 'newhouse'
                            }).then(
                                res => {
                                    //console.log(res)
                                    if (res.data != null) {
                                        this.comments = this.comments.concat(res.data.comment);
                                        let n = res.data.comment.length;
                                        if (n == 0 && this.comments.length == 0) {
                                            this.no_data = true;
                                            this.resState = false;
                                            this.all_load = false;
                                        } else if (n == 0 && this.comments.length > 0) {
                                            this.all_load = true;
                                            this.resState = false;
                                            this.no_data = false;
                                        } else if (n > 0 && n < this.size) {
                                            this.all_load = true;
                                            this.resState = false;
                                        } else if (n == this.size) {
                                            this.nextPage++;
                                            this.resState = true;
                                        }

                                    }
                                }
                            )
                        }
                    }
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
#comment_wrap {
    padding: 0.3rem 0.2rem;
    margin-top: 0.2rem;
    background: #ffffff;
}
.comment_tit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 0.8rem;
    margin-bottom: 0.3rem;
    & > span:nth-child(1) {
        font-size: 0.3rem;
        color: #323232;
    }
    & > span:nth-child(2) {
        display: inline-block;
        font-size: 0.26rem;
        color: #D7000F;
        cursor: pointer;
    }
}
.comment_box {
    display: flex;
    align-items: flex-start;
    font-size: 0.3rem;
    margin-bottom: 0.2rem;
    .comment_L {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        margin-right: 0.18rem;
    }
    .comment_R {
        flex: 1;
        text-align: left;
        .comment_username {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 0.7rem;
            .user_name {
                font-size: 0.26rem;
                color: #57BDE7;
            }
            .comment_zan {
                color: #757575;
                cursor: pointer;
                i {
                    display: inline-block;
                    width: 0.4rem;
                    height: 0.4rem;
                    margin-right: 0.12rem;
                    vertical-align: text-bottom;
                    background: url("../../../../static/new/newhouseimg/comment_zan.png") no-repeat center;
                    background-size: contain;
                }
            }
            .zaned {
                color: #d7000f;
                i {
                    background: url("../../../../static/new/newhouseimg/comment_zaned.png") no-repeat center;
                    background-size: contain;
                }

            }
        }
        .comment_con {
            font-size: 0.26rem;
            color: #323232;
            line-height: 1.5;
            word-break: break-all;
        }
        .comment_state {
            display: flex;
            justify-content: space-between;
            line-height: 0.6rem;
            font-size: 0.22rem;
            color: #757575;
            .dot {
                margin: 0 0.15rem;
            }
        }
        .reply_wrap {
            padding: 0.2rem 0.15rem;
            background: #f4f5f6;
            .replay_box {
                font-size: 0.26rem;
                line-height: 1.5;
                span:nth-child(1) {
                    color: #57bde7;
                }
                span:nth-child(2) {
                    color: #323232;
                }
            }
            .replay_all {
                color: #57bde7;
                font-size: 0.26rem;
                line-height: 1.5;
                margin-top: 0.1rem;
            }
        }
    }
}
.no_data {
    font-size: 0.26rem;
    line-height: 1rem;
    color: #757575;
}
.all_load {
    font-size: 0.26rem;
    line-height: 1rem;
    color: #757575;
}
</style>
