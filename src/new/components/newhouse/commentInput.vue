<template>
<div>
    <div class="fixed_input">
        <textarea v-model="cuurInput" @input="inputHandler($event.target)" id="re_input" :style="{'height':inputHeight}" type="text" value="" autofocus="autofocus" ref="replay_input" :placeholder="cuurPlaceholder"></textarea>
        <span class="submit_comment" @click="submitComment">发布</span>
    </div>
    <div class="fixed_shade" @click="hideShade"></div>
</div>
</template>
<script>
export default {
    name: "commentInput",
    props: {
        showInput: {
            //是否显示输入
            type: Boolean,
            default: false
        },
        wordLimit: {
            //字数限制
            type: Number,
            required: true
        },
        detailId: {
            //详情ID
            type: String,
            default: '',
            required: true
        },
        replayId: {
            //被回复的评论ID
            type: String,
            default: ''
        },
        parentId: {
            //所属父评论ID
            type: String,
            default: ''
        },
        topicType: {
            //主题类型（房源评价，资讯评价）
            type: String,
            default: '',
            required: true
        },
        replayName: {
            //回复二级评论的账号
            type: String,
            default: ''
        }
    },
    data: () => ({
        cuurInput: '',
        cuurPlaceholder: '',
        inputHeight: '.6rem',
        show_input: true,
        inputSource: 0 //记录哪个位置打开的输入【0:详情直接回复，1:回复一级评论,2:回复二级评论】
    }),
    methods: {
        hideShade() {
            this.show_input = false;
            if (this.cuurInput != '') {
                let map = new Map();
                map.set("detailId", this.detailId);
                map.set("parentId", this.parentId);
                map.set("replayId", this.replayId);
                map.set("value", this.cuurInput);
                this.setSession('record', map)
            }
        },
        show_alert(con) {
            let len = this.wordLimit;
            this.$vux.alert.show({
                title: '提示信息',
                content: con,
                onHide() {
                    re_input.value = re_input.value.slice(0, len);
                }
            })
        },
        inputHandler(node) {
            let _height = node.scrollHeight;
            //console.log(_height)
            this.inputHeight = _height + 'px';
            let n = this.cuurInput.length;
            if (n > this.wordLimit) {
                this.show_alert("输入字数限制" + this.wordLimit + "字以内");
                re_input.value = re_input.value.slice(0, this.wordLimit);
            }
        },
        submitComment() {
            //点击发布
            if (this.cuurInput.length > 0) {
                let phone = String(this.getStorage("userPhone"));
                let userName = this.getStorage("userName") != "null" && this.getStorage("userName") != "undefined" && this.getStorage("userName") != null && this.getStorage("userName");
                if (this.parentId) {
                    if (this.replayId) {
                        //回复二级评论
                        var opt = {
                            topictype: this.topicType,
                            parentdcommentid: this.replayId,
                            pid: this.parentId,
                            useraccount: userName ? this.getStorage("userName") : phone.substring(0, 3) + '****' + phone.substring(7, 11),
                            wordcontent: '@' + this.replayName + '//' + this.cuurInput,
                            modularid: this.detailId
                        }

                    } else {
                        //回复一级评论
                        var opt = {
                            topictype: this.topicType,
                            parentdcommentid: this.parentId,
                            pid: this.parentId,
                            useraccount: userName ? this.getStorage("userName") : phone.substring(0, 3) + '****' + phone.substring(7, 11),
                            wordcontent: this.cuurInput,
                            modularid: this.detailId
                        }

                    }
                } else {
                    //回复详情
                    var opt = {
                        topictype: this.topicType,
                        wordcontent: this.cuurInput,
                        modularid: this.detailId,
                        useraccount: userName ? this.getStorage("userName") : phone.substring(0, 3) + '****' + phone.substring(7, 11)
                    }
                }
                //console.log(opt, userName);
                this.post('/commentapp/saveUserComment', opt, {
                    interfaceType: 'newhouse'
                }).then(
                    res => {
                        if (res.data) {
                            this.$emit('updata', res.data);
                            this.show_input = false;
                            this.setSession("record", undefined)
                        }
                    }
                )


            } else {
                this.show_alert('请输入评论内容')
            }
        }
    },
    created() {
        if (this.replayName) {
            this.cuurPlaceholder = "回复 " + this.replayName.slice(0, 36) + ":";
        } else {
            this.cuurPlaceholder = "写评论";
        };
        if (this.parentId) {
            if (this.replayId) {
                this.inputSource = 2;
            } else {
                this.inputSource = 1;
            }
        } else {
            this.inputSource = 0;
        };
        let map = new Map(this.getSession("record"));
        //console.log(map)
        if (map.get("detailId") == this.detailId && map.get("parentId") == this.parentId && map.get("replayId") == this.replayId) {
            this.cuurInput = map.get("value");
        }

    },
    mounted() {
        this.$refs.replay_input.focus();
    },
    watch: {
        showInput(val) {
            this.show_input = val;
        },
        show_input(val) {
            this.$emit('changeInputState', val);
        }
    }
}
</script>
<style lang="less" scoped>
.fixed_shade {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.replay_btn {
    position: relative;
}
.abs_input {
    display: flex;
    position: absolute;
    align-items: center;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    input {
        width: 100%;
        height: 100%;
        border: 0;
    }
    span {
        display: none;
    }
}
.fixed_input {
    display: flex;
    position: fixed;
    align-items: center;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 10001;
    background: #ffffff;
    padding: 0.2rem;
    textarea {
        flex: 1;
        resize: none;
        height: 0.6rem;
        line-height: 0.4rem;
        max-height: 1.2rem;
        border: 0;
        padding: 0.1rem;
        background: #e7e7e7;
        border-radius: 0.05rem;
        font-size: 0.26rem;
        color: #323232;
        &::-webkit-input-placeholder {
            color: #909090;
        }
    }
    span {
        display: inline-block;
        align-self: flex-end;
        line-height: 0.6rem;
        padding: 0 0.5rem 0 0.2rem;
        font-size: 0.26rem;
        color: #d7000f;
    }
}
</style>
