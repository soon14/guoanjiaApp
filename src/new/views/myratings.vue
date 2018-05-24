<template>
<div :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
    <ul style="padding-bottom:0" v-if="message.name">
        <li @click="jumproute('interactivemessage')" class='vux-1px-b'>
            <div>
                <div>
                    <img :src="messageImg" alt="">
                </div>
            </div>
            <div>
                <h1>互动消息</h1>
                <p>
                    <span>{{message.name?message.name:'暂无回复'}}</span>
                    <span v-if="message.name">给您留言了</span>
                </p>
                <span v-html="message.date?message.date:''"></span>
            </div>
        </li>
    </ul>
    <ul style="box-shadow:none">
        <li class='vux-1px-b' v-for='(item,index) in list' :key='index'>
            <div>
                <div>
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div>
                <h1 @click="openDetail(item.topictype,item.id)">{{item.title}}</h1>
                <p @click="openDetail(item.topictype,item.id)" class="fold" :class="{'unfold':item.isunfold&&!item.unfoldState,'unfoldState':item.unfoldState}">
                    <span>{{item.content}}</span>
                </p>
                <span class="unfold_btn" v-if="item.isunfold && !item.unfoldState" @click="item.unfoldState=true">【展开】</span>
                <span v-html="item.date"></span>
                <div class="status_2" v-if="item.status==2">
                    <span>上级评论被删除！</span>
                </div>
            </div>
        </li>
    </ul>
    <div class="no_data" v-if="no_data">
        暂无评论
    </div>
</div>
</template>
<script>
import messageImg from '../../../static/new/newhouseimg/message.png';
import zixunImg from '../../../static/new/newhouseimg/zixun.png';
import fangyuanImg from '../../../static/new/newhouseimg/fangyuanshitu.png';
export default {
    data() {
        return {
            messageImg: messageImg,
            fangyuanImg: fangyuanImg,
            zixunImg: zixunImg,
            no_data: false,
            list: [],
            message: {
                name: "",
                date: ""
            }
        }
    },
    methods: {
        jumproute(path) {
            this.$router.push({
                path: path
            });
        },
        GetDateDiff(date) {
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
            let time = date.replace(/\-/g, "/");
            return time;
        },
        getDateDiff(dateStr) {
            var publishTime = dateStr / 1000,
                d_seconds,
                d_minutes,
                d_hours,
                d_days,
                timeNow = parseInt(new Date().getTime() / 1000),
                d,

                date = new Date(publishTime * 1000),
                Y = date.getFullYear(),
                M = date.getMonth() + 1,
                D = date.getDate(),
                H = date.getHours(),
                m = date.getMinutes(),
                s = date.getSeconds();
            //小于10的在前面补0
            if (M < 10) {
                M = '0' + M;
            }
            if (D < 10) {
                D = '0' + D;
            }
            if (H < 10) {
                H = '0' + H;
            }
            if (m < 10) {
                m = '0' + m;
            }
            if (s < 10) {
                s = '0' + s;
            }

            d = timeNow - publishTime;
            d_days = parseInt(d / 86400);
            d_hours = parseInt(d / 3600);
            d_minutes = parseInt(d / 60);
            d_seconds = parseInt(d);

            if (d_days > 0 && d_days < 3) {
                return d_days + '天前';
            } else if (d_days <= 0 && d_hours > 0) {
                return d_hours + '小时前';
            } else if (d_hours <= 0 && d_minutes > 0) {
                return d_minutes + '分钟前';
            } else if (d_seconds < 60) {
                if (d_seconds <= 0) {
                    return '刚刚发表';
                } else {
                    return d_seconds + '秒前';
                }
            } else if (d_days >= 3 && d_days < 30) {
                return Y + '.' + M + '.' + D + '&nbsp;' + H + ':' + m;
            } else if (d_days >= 30) {
                return Y + '.' + M + '.' + D + '&nbsp;' + H + ':' + m;
            }
        },
        openDetail(type, detailid) {
            if (type == '资讯展示') {
                this.$router.push({
                    path: 'informationDetail',
                    query: {
                        id: detailid
                    }
                });
            } else if (type == '房源评价') {
                this.$router.push({
                    path: 'newhousebuilddetail',
                    query: {
                        buildID: detailid
                    }
                });
            }
        }
    },
    created() {
        //do something after creating vue instance
        this.$vux.loading.show();
        this.get("/commentapp/findYourSelfComment", {
            interfaceType: 'newhouse'
        }).then(
            (res) => {
                //console.log(res);
                if (res.status == 200) {
                    if (res.data.newcomment != "null") {
                        //console.log(res.data.newcomment);
                        this.message.name = res.data.newcomment.useraccount;
                        this.message.date = this.getDateDiff(Date.parse(this.GetDateDiff(res.data.newcomment.createtime)));
                    } else {
                        this.message.name = '';
                        this.message.date = '';
                    }
                    if (res.data.commentself.length > 0) {
                        res.data.commentself.forEach((item) => {
                            let obj = {};
                            obj.title = item.wordtheme;
                            obj.id = item.modularid;
                            if (item.topictype == '房源评价') {
                                obj.topictype = '房源评价';
                                obj.img = this.fangyuanImg;
                            } else if (item.topictype == '资讯展示') {
                                obj.topictype = '资讯展示';
                                obj.img = this.zixunImg;
                            }
                            obj.status = item.status;
                            if (item.status == 0) {
                                obj.content = item.wordcontent;
                            } else if (item.status == 1) {
                                obj.content = "该内容因违规，被删除！";
                            } else if (item.status == 2) {
                                obj.content = item.wordcontent;
                            }
                            obj.date = this.getDateDiff(Date.parse(this.GetDateDiff(item.createtime)));
                            obj.isunfold = false;
                            obj.unfoldState = false;
                            this.list.push(obj);
                        })
                        this.$nextTick(() => {
                            document.querySelectorAll(".fold").forEach((item, index) => {
                                if (item.offsetWidth < item.scrollWidth) {
                                    //console.log(index)
                                    this.list[index].isunfold = true;
                                }
                            })
                        })
                    } else {
                        this.no_data = true;
                    }

                }
            }
        ).then(() => {
            this.$vux.loading.hide();
        })
    }
}
</script>
<style lang='less' scoped>
ul {
    padding: 0 0.2rem 0.4rem;
    box-sizing: border-box;
    box-shadow: 0 3px 0 #d6d6d6 inset;
    li {
        display: flex;
        padding-bottom: 0.32rem;
        box-sizing: border-box;
        & > div:nth-child(1) {
            width: 1.2rem;
            padding-top: 0.35rem;
            box-sizing: border-box;
            & > div {
                width: 0.92rem;
                height: 0.92rem;
                border-radius: 50%;
                margin: 0 auto;
                & > img {
                    width: 0.92rem;
                    height: 0.92rem;
                }
            }
        }

        & > div:nth-child(2) {
            flex: 1;
            padding-top: 0.4rem;
            box-sizing: border-box;
            font-size: 0;
            color: #909090;
            text-align: left;
            min-width: 0;
            & > h1 {
                font-size: 0.32rem;
                color: #323232;
                font-weight: 900;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                word-break: break-all;
            }
            & > p {
                // display: -webkit-box;
                // -webkit-box-orient: vertical;
                // -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-width: 0;
                font-size: 0.26rem;
                margin: 0.17rem 0 0.27rem;
                & > span:nth-child(1) {
                    margin-right: 0.2rem;
                    word-break: break-all;
                    font-size: 0.26rem;
                }
            }
            .unfoldState {
                white-space: normal;
            }
            span {
                font-size: 0.26rem;
            }
            .status_2 {
                margin-top: 0.17rem;
                line-height: 2;
                padding: 0 0.1rem;
                background: #EDEDED;
            }

        }

    }
}
.unfold {
    display: inline-block;
    vertical-align: top;
    width: 80%;
}
.unfold_btn {
    display: inline-block;
    vertical-align: top;
    width: 20%;
    text-align: center;
    font-size: 0.26rem;
    margin: 0.17rem 0 0.27rem;
    color: #68A8E8;
}
.no_data {
    font-size: 0.3rem;
    margin-top: 0.5rem;
    color: #757575;
}
</style>
<style>
.vux-loading {
    font-size: 16px;
}
</style>
