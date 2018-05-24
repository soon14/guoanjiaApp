<template>
<div id="commentDetail">
    <transition name="page">
        <div class="page" v-show="show">
            <div class="page_head vux-1px-b">
                <span class="page_close" @click="closeDetail"></span>
            </div>
            <div class="page_body">
                <scroller>
                    <div class="topic_wrap">
                        <div class="comment_box">
                            <img :src="(cuurComment.userimg==null)?defaultimg:cuurComment.userimg" alt="" class="comment_L">
                            <div class="comment_R">
                                <div class="comment_username">
                                    <span class="user_name">{{cuurComment.useraccount}}</span>
                                    <span class="comment_zan" :class="{'zaned':cuurComment.judgepoint}" @click="$parent.handlePoint(cuurComment.id,topicIndex)"><i></i>{{cuurComment.pointsnumber}}</span>
                                </div>
                                <div class="comment_con">
                                    <span v-html="cuurComment.wordcontent"></span>
                                </div>
                                <div class="comment_state">
                                    <span>{{new Date($parent.GetDateDiff(cuurComment.createtime)).Format("yyyy.MM.dd")}}<span class="dot" v-if="cuurComment.judgeuser">•</span><span class="delete" @click="detalDeleteTop(cuurComment.id,topicIndex)" v-if="cuurComment.judgeuser">删除</span></span>
                                    <span>回复({{cuurComment.children.length}})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="replay_wrap">
                        <div class="replay_tit">
                            <span>全部回复</span>
                        </div>
                        <div class="replay_con" v-if="detailComment.children.length">
                            <div class="comment_box" v-show="item.display=='通过'?true:false" v-for="(item,index) in cuurComment.children">
                                <img :src="(item.userimg==null)?defaultimg:item.userimg" alt="" class="comment_L">
                                <div class="comment_R">
                                    <div class="comment_username">
                                        <span class="user_name">{{item.useraccount}}</span>
                                        <span class="comment_zan" :class="{'zaned':item.judgepoint}" @click="handlePointDetail(item.id,index)"><i></i>{{item.pointsnumber}}</span>
                                    </div>
                                    <div class="comment_con" @click="replay(item.useraccount,item.pid,item.parentdcommentid)">
                                        <span v-html="$parent.formatContent(item.wordcontent)"></span>
                                    </div>
                                    <div class="comment_state">
                                        <span>{{new Date($parent.GetDateDiff(item.createtime)).Format("yyyy.MM.dd")}}<span class="dot" v-if="item.judgeuser">•</span><span class="delete" @click="detalDelete(item.id,topicIndex,index)" v-if="item.judgeuser">删除</span></span>
                                        <span @click="replay(item.useraccount,item.pid,item.parentdcommentid)">回复</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="replay_con" v-else>
                            <span class="no_replay">暂无回复</span>
                        </div>
                    </div>
                </scroller>
            </div>
            <div class="page_footer vux-1px-t" v-show="!showInput">
                <div class="repaly_box" @click="replay_top(detailComment.useraccount,detailComment.id)">
                    <i></i>
                    <input type="text" placeholder="写评论" readonly value="">写评论</input>
                </div>
            </div>
        </div>
    </transition>
    <!-- 评论输入回复 -->
    <commentinput v-if="showInput" @updata="updata" @changeInputState="changeInputState" :parentId="parentId" :wordLimit="wordLimit" :detailId="detailId" :replayId="replayId" :topicType="topicType" :replayName="replayName"></commentinput>

</div>
</template>
<script>
import commentinput from './commentInput';
export default {
    name: "commentDetail",
    props: ['cuurComment', 'topicIndex'],
    data: () => ({
        defaultimg: '',
        show: false,
        showInput: false,
        parentId: '',
        wordLimit: '',
        detailId: '',
        replayId: '',
        topicType: '',
        replayName: '',
        detailComment: ''
    }),
    components: {
        commentinput
    },
    methods: {
        closeDetail() {
            //关闭详情
            this.show = false;
            setTimeout(() => {
                this.$parent.showDetail = false;
            }, 200)
        },
        updata(obj) {
            //更新数据
            this.$emit('updataTopic', obj)
        },
        changeInputState(val) {
            //改变输入状态
            this.showInput = val;
            if (!val) {
                this.replayId = '';
            }
        },
        checkLogin() {
            //检查登录状态
            if (this.$parent.loginStatus) {

            } else {
                let self = this;
                this.$vux.alert.show({
                    content: "尚未登录，无法发表评论",
                    onHide(){
                        self.$store.commit("showLogin");
                    }
                })
                return false;
            }
        },
        handlePointDetail(id, index) {
            //点赞
            if (this.$parent.loginStatus) {
                this.get('/commentapp/flushpointsnumber?aid=' + id + '&topictype=' + this.$parent.topicType, {
                    interfaceType: 'newhouse'
                }).then(
                    res => {
                        //console.log(res)
                        if (res.status == 200) {
                            if (this.cuurComment.children[index].judgepoint) {
                                this.cuurComment.children[index].judgepoint = false;
                                this.cuurComment.children[index].pointsnumber--;
                            } else {
                                this.cuurComment.children[index].judgepoint = true;
                                this.cuurComment.children[index].pointsnumber++;
                            }

                        }
                    }
                )
            } else {
                this.$parent.showAlert('尚未登录')
            }

        },
        replay(replayName, pid, replayId) {
            //回复二级评论
            if (this.$parent.loginStatus) {
                this.replayName = replayName;
                this.parentId = pid;
                this.replayId = replayId;
                this.showInput = true;
            } else {
                this.$parent.showAlert('尚未登录')
            }

        },
        replay_top(replayName, pid) {
            //回复一级评论
            if (this.$parent.loginStatus) {
                this.replayName = replayName;
                this.parentId = pid;
                this.showInput = true;
            } else {
                this.$parent.showAlert('尚未登录')
            }
        },
        detalDeleteTop(id, index) {
            //删除详情内一级评论
            this.$parent.deleteComent(id, index);
        },
        detalDelete(id, topicIndex, index) {
            //删除二级评论
            this.get('/commentapp/deleteComment?id=' + id, {
                interfaceType: 'newhouse'
            }).then(
                res => {
                    if (res.status == 200) {
                        this.$parent.comments[topicIndex].children[index].display = "不通过";
                    }
                }
            )
        }
    },
    created() {
        //初始化部分数据
        this.defaultimg = this.$parent.defaultimg;
        this.wordLimit = this.$parent.wordLimit;
        this.detailId = this.$parent.detailId;
        this.topicType = this.$parent.topicType;
        this.detailComment = this.cuurComment;
    },
    mounted() {
        this.show = true;
    },
    watch: {
        cuurComment: {
            //动态更新详情页面
            handler: function(val) {
                this.detailComment = val;
            },
            deep: true
        }
    }
}
</script>
<style lang="less" scoped>
.page-enter,
.page-leave-to {
    transform: translate3d(0,100%,0);
}
.page-enter-to,
.page-leave {
    transform: translate3d(0,0,0);
}
.topic_wrap {
    padding: 0.3rem 0.2rem;
    border-bottom: 0.2rem solid #f8f8f8;
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
        min-width: 0;
        .comment_username {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 0.7rem;
            flex-flow: nowrap;
            min-width: 0;
            .user_name {
                font-size: 0.26rem;
                color: #57BDE7;
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .comment_zan {
                width: 30%;
                text-align: right;
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
.page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: #ffffff;
    transition: all 0.2s;
    .page_head {
        position: relative;
        height: 1.2rem;
        .page_close {
            position: absolute;
            left: 0;
            top: 0;
            width: 1.2rem;
            height: 1.2rem;
            background: url("../../../../static/new/newhouseimg/Exit.png") no-repeat center;
            background-size: 0.3rem;
        }
    }
    .page_body {
        position: fixed;
        top: 1.2rem;
        left: 0;
        bottom: 1rem;
        right: 0;
    }
    .page_footer {
        position: fixed;
        z-index: 10000;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0.2rem 0;
        background: #ffffff;
        .repaly_box {
            width: 6.6rem;
            height: 0.6rem;
            margin: 0 auto;
            position: relative;
            background: #e7e7e7;
            text-align: left;
            font-size: 0;
            border-radius: 0.05rem;
            i {
                position: absolute;
                width: 0.36rem;
                height: 0.36rem;
                vertical-align: top;
                left: 0.1rem;
                top: 0.11rem;
                background: url("../../../../static/new/newhouseimg/replay_ico.png") no-repeat center;
                background-size: contain;
            }
            input {
                position: absolute;
                background-color: transparent;
                border: none;
                padding: 0.12rem 0.3rem 0.13rem 0.7rem;
                height: 0.6rem;
                outline: 0;
                width: 100%;
                font-size: 0.26rem;
                color: #323232;
                &::-webkit-input-placeholder {
                    color: #909090;
                }
            }
        }
        .detail_inputting {
            margin-left: 0.3rem;
            width: 6rem;
            i {
                display: none;
            }
            input {
                padding-left: 0.2rem;
            }
            span {
                position: absolute;
                right: -1.2rem;
                top: 0;
                width: 1rem;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.26rem;
                color: #d7000f;
            }
        }
    }
}
.replay_wrap {
    padding: 0 0.2rem;
    .replay_tit {
        text-align: left;
        font-size: 0.3rem;
        color: #323232;
        line-height: 1rem;
    }
    .replay_con {
        .no_replay {
            font-size: 0.3rem;
            color: #757575;
        }
    }
}
.fixed_shade {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
</style>
