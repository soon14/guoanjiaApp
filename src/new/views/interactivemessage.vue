<template>
<div :class="[AndroidOrIos() ? 'HomeContentndroid' : 'HomeContent',{'wx_content':isECTouch()}]">
    <ul>
        <li v-for='(item,index) in list' :key='index'>
            <div>
                <div>
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div>
                <h1 @click="openDetail(item.topictype,item.id)">
                     <span>{{item.name}}</span>
                     <span>给您留言了</span>
                </h1>
                <p @click="openDetail(item.topictype,item.id)" class="fold" :class="{'unfold':item.isunfold&&!item.unfoldState,'unfoldState':item.unfoldState}">
                    <span>{{item.content}}</span>
                </p>
                <span class="unfold_btn" v-if="item.isunfold && !item.unfoldState" @click="item.unfoldState=true">【展开】</span>
                <span v-html="item.date"></span>
                <div class="status_2">
                    <li>
                        <div>
                            <div>
                                <img :src="item.pimg" alt="">
                            </div>
                        </div>
                        <div>
                            <h1 @click="openDetail(item.topictype,item.id)">
                                 <span>{{item.pname}}</span>
                            </h1>
                            <p @click="openDetail(item.topictype,item.id)" class="fold" :class="{'unfold':item.pisunfold&&!item.punfoldState,'unfoldState':item.punfoldState}">
                                <span>{{item.pcontent}}</span>
                            </p>
                            <span class="unfold_btn" v-if="item.pisunfold && !item.punfoldState" @click="item.punfoldState=true">【展开】</span>
                            <span v-html="item.pdate"></span>
                        </div>
                    </li>
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
import defaultImg from '../../../static/new/newhouseimg/defaultimg.png';
export default {
    data() {
        return {
            defaultImg: defaultImg,
            list: [],
            no_data: false
        }
    },
    methods: {
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
        this.get("/commentapp/findInteractiveMessage", {
            interfaceType: 'newhouse'
        }).then(
            (res) => {
                //console.log(res);
                if (res.status == 200) {
                    if (res.data.length > 0) {
                        res.data.forEach((item) => {
                            let obj = {};
                            if (item.userimg) {
                                obj.img = this.concatFileUrl(item.userimg);
                            } else {
                                obj.img = this.defaultImg;
                            }
                            obj.id = item.modularid;
                            obj.name = item.useraccount;
                            obj.content = item.wordcontent;
                            obj.date = this.getDateDiff(Date.parse(this.GetDateDiff(item.createtime)));
                            obj.isunfold = false;
                            obj.unfoldState = false;
                            if (item.topictype == '房源评价') {
                                obj.topictype = '房源评价';
                            } else if (item.topictype == '资讯展示') {
                                obj.topictype = '资讯展示';
                            }
                            if (item.parentcomment.userimg) {
                                obj.pimg = this.concatFileUrl(item.parentcomment.userimg);
                            } else {
                                obj.pimg = this.defaultImg;
                            }
                            obj.pname = item.parentcomment.useraccount;
                            obj.pcontent = item.parentcomment.wordcontent;
                            obj.pdate = this.getDateDiff(Date.parse(this.GetDateDiff(item.parentcomment.createtime)));
                            obj.pisunfold = false;
                            obj.punfoldState = false;
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
        ).then(
            () => {
                this.$vux.loading.hide();
            }
        )
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
                font-weight: 600;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                word-break: break-all;
                span {
                    font-size: 0.32rem;
                }
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
                padding: 0 0.1rem;
                background: #EDEDED;
                li {
                    padding-bottom: 0.15rem;
                }
                div {
                    padding-top: 0.15rem;
                }
            }

        }

    }
}
.unfold {
    display: inline-block;
    vertical-align: top;
    width: 72%;
}
.unfold_btn {
    display: inline-block;
    vertical-align: top;
    width: 28%;
    text-align: center;
    font-size: 0.26rem;
    margin: 0.17rem 0 0.27rem;
    color: #68A8E8;
}
</style>
<style>
.vux-loading {
    font-size: 16px;
}
</style>
