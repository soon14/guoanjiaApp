<style scoped lang="scss"> 
	@import "../../style/theme.scss";
	@import "../../style/public.scss";
	.banner{
		width: 6.9rem;
		height: 3rem;
		margin: auto;
		border-radius: 0.1rem;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/entrustImg.png) no-repeat center;
		background-size:100% 100%;
	}
	
	
	
	.vux-x-icon {
		fill: white;
	}
		::-webkit-input-placeholder { /* WebKit browsers */
		    color:   #8b8b8b;
		}
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
		    color:    #8b8b8b;
		}
		::-moz-placeholder { /* Mozilla Firefox 19+ */
		    color:    #8b8b8b;
		}
		:-ms-input-placeholder { /* Internet Explorer 10+ */
		    color:    #8b8b8b;
		}
	.input-search {
		display: block;
		margin-top: 0.16rem;
	}

	img {
		width: 100%;
		height: 100%;
	}

	.content {
		background: #e8e8e8;
		box-sizing: border-box;
		text-align: left;
		.content-room {
			background: white;
			box-sizing: border-box;
			padding: 0.48rem 0.42rem 0.2rem 0.23rem;
			position: relative;
		}
		
		.content-img {
			width: 2.8rem;
			height: 2.1rem;
			float: left;
			margin-right: 0.34rem;
			img{
				width: 100%;
				height: 100%;
				border-radius: 0.1rem;
			}
		}
		.content-room-title1{
			font-size: 0.32rem;
			color: black;
		}
		.content-room-title2{
			font-size: 0.26rem;
			color: #666666;
			margin-top: 0.2rem;
		}
		.content-room-title3{
			font-size: 0.28rem;
			color: black;
			margin-top: 0.1rem;
		}
		.content-tabs{
			overflow: hidden;
			padding-top: 0.1rem;
			.content-tabs-item {
				padding: 0.1rem 0.2rem;
				float: left;
				margin-right: 0.2rem;
				font-size: 0.24rem;
				color: #999999;
				background: #F5F5F5;
			}
		}
		
		.status {
			position: absolute;
			width: 1.06rem;
			height: 0.43rem;
			border-radius: 5px;
			text-align: center;
			line-height: 0.43rem;
			font-size: $mostFontSize;
			background: #e55054;
			color: #fff6ef;
			right: 0.5rem;
			bottom:0.2rem;
		}
		.content-person {
			background: white;
			box-sizing: border-box;
			margin-top: 0.2rem;
			.content-person-name{
				box-sizing: border-box;
				padding-left: 0.27rem;
				margin-top: 0.25rem;
			}
			.content-person-name>span {
				float: left;
				 font-size: 0.3rem;
			}
		}
		.content-person>div {
			height: 0.9rem;
		}
		.content-message {
			background: white;
			box-sizing: border-box;
			padding: 0.35rem 0.35rem;
			p{
				text-indent:2px;
			}
		}

		.content-date{
			width:100%;
			height:1rem;
			background: white;
			
			.content-data-inner{
				width: 6.9rem;
				border-bottom: 1px solid #CCCCCC;
			}
		}
		.content-date>span{
			width:2%;
			display: block;
			float:left;
			color: #ec4d63;
			line-height: 1rem;
			margin-left:4%;
		}
		.content-date>div{
			width:85%;
			height:1rem;
			float:left;
			line-height: 1rem;
			margin-left:3%;
			overflow:hidden;
		}
		.vux-cell-placeholder{
			overflow: hidden !important;
		}
		.content-message>textarea {
			outline: none;
			border: 0;
			width: 100%;
			height: 2.4rem;
			background: #f5f5f5;
			border-radius: 3px;
			font-size: $mostFontSize;
			box-sizing: border-box;
			padding-top: 0.15rem;
			text-indent: 1em;
			resize:none;
		}
	}

	.delegation-center-name{
        height: 1.2rem;
        background:#fff;
        overflow: hidden;
        border-bottom:1px solid #EEEEEE;
        width: 6.9rem;
        margin: auto;
        padding-top: 0.1rem;
        .delegation-center-name-top{
            width:100%;
            height: 0.7rem;
            margin-top:0.2rem;
            p{
                width:20%;
                height: 100%;
                line-height: 0.7rem;
                font-size: 0.3rem;
                float: left;
                text-align: center;
                color: black;
                font-size: 0.32rem;
            }
            div{
                float: left;
                width:65%;
                height: 80%;
                border:0;
                background-size:100% 100%;
                input{
                    display: block;
                    width:100%;
                    margin-top: 2%;
                    height:100%;
                    float:left;
                    margin-left:4%;
                    outline:none;
                    background:transparent;
                    border:none;
                    outline:medium;
                    font-size: 0.28rem;
                     *:focus {
                         outline: none;
                         background-color: transparent;
                     }
                     ::selection{background:transparent; }
                     ::-moz-selection{background:transparent; }
                }
                p{
                    width:25%;
                    float: left;
                    color:$partColor;
                }
            }
            .sexSelect{
            	.gonggongde{
            		width: 1.5rem;
            		height: 0.5rem;
            		float: left;
            		line-height: 0.64rem;
            		margin-top: 0.05rem;
            		font-size: 0.28rem;
            	}
            	.nande{
            		background: url(../../../../static/rent/yk/selected.png) no-repeat center;
            		background-size:23% ;
            		background-position: 0.13rem 0.12rem;
            		text-indent: 0.55rem;
            	}
            	.nvde{
            		background: url(../../../../static/rent/yk/noselect.png) no-repeat center;
            		background-size:23% ;
            		background-position: 0.13rem 0.12rem;
            		text-indent: 0.55rem;
            	}
            }
        }
        .delegation-center-name-bottom{
            width:100%;
            height: 0.7rem;
            margin-top:0.2rem;
            span{
                display: block;
                height: 100%;
                width:10%;
                line-height: 0.75rem;
                color:$partColor;
                text-align: center;
                font-size: 0.3rem;
                float:left;
            }
            p{
                width:20%;
                height: 100%;
                line-height: 0.7rem;
                font-size: 0.3rem;
                float: left;
            }
            div{
                float: left;
                width:65%;
                height: 80%;
                border:0;
                background-image: url("../../../assets/home/Delegation-bage.png");
                background-size:100% 100%;
                input{
                    display: block;
                    width:70%;
                    margin-top: 0.05rem;
                    height:100%;
                    float:left;
                    margin-left:4%;
                    font-size:$fewFontSize;
                    outline:none;
                    background:transparent;
                    border:none;
                    outline:medium;
                     *:focus {
                         outline: none;
                         background-color: transparent;
                     }
                     ::selection{background:transparent; }
                     ::-moz-selection{background:transparent; }
                }
                p{
                    width:25%;
                    float: left;
                    color:$partColor;

                }
            }
        }
    }
            
    .content-message{
    	width: 6.9rem;
    	margin:auto;
    }
    .content-message>textarea {
		outline: none;
		border: 0;
		width: 100%;
		height: 2.4rem;
		background: #f5f5f5;
		border-radius: 3px;
		font-size: $mostFontSize;
		box-sizing: border-box;
		padding-top: 0.15rem;
		text-indent: 1em;
		resize:none;
	}
	.submit-btn{
		width: 6.9rem;
		height: 0.9rem;
		margin: auto;
		text-align: center;
		line-height: 0.9rem;
		color:white;
		font-size: 0.32rem;
		background: #E34B3E;
		border-radius: 0.1rem;
		margin-top: 0.45rem;
	}
	.popping{
        width:100%;
        height: 90%;
        background:#efeff4;
        z-index: 10;
        position: absolute;
        left:0;
        top:1.3rem;
        font-size:12px;
        .popping-top{
            position: absolute;
            top:10px;
        }
        .weui-search-bar{

        }
    }
	
	
	
</style>
<template>
	<div>
		<IosorAndroid></IosorAndroid>
		<div style="height: 1rem;" v-if="!this.$store.state.showWxTitle"></div>		
		<div class="banner"></div>
		<div style="padding-bottom: 0.3rem;">
			<div class="content-person">
				<div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">手机</p>
	                    <div class="delegation-center-name-top-bage">
	                        <input type="text" placeholder="请输入您的手机号" v-model="phone" maxlength="11">
	                    </div>
	                </div>
	            </div>
	            <div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">姓名</p>
	                    <div class="delegation-center-name-top-bage">
	                        <input type="text" placeholder="请输入您的姓名" v-model="userName" maxlength="11">
	                    </div>
	                </div>
	            </div>
	            <div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">称呼</p>
	                    <div class="sexSelect">
	                    	<div class="gonggongde" :class="[isMan?'nande':'nvde']" @click="switchman">先生</div>
	                    	<div class="gonggongde" :class="[!isMan?'nande':'nvde']"  @click="switchwoman" >女士</div>
	                    </div>
	                </div>
	            </div>
	            <div class="delegation-center-name">
	                <div class="delegation-center-name-top">
	                    <p class="p1">小区</p>
	                    <div class="delegation-center-name-top-bage" @click="poppingOnOff">
	                        <input  type="text" placeholder="填写您要委托的房屋所在小区" v-model="plotName" maxlength="11">
	                    </div>
	                </div>
	            </div>
	            <div class="content-message">
					<textarea v-model="message" cols="30" rows="10" placeholder="其他信息"></textarea>
				</div>
			</div>
			<div class="submit-btn" @click="present">
				提交信息
			</div>
			<div class="popping" v-show="poppingShow">
	            <search class="popping-top"
	                @result-click="resultClick"
	                @on-change="getResult"
	                :results="results"
	                v-model="value"
	                position="absolute"
	                auto-scroll-to-top top="0px"
	                @on-focus="onFocus"
	                @on-cancel="onCancel"
	                @on-submit="onSubmit"
	                ref="search">
	            </search>
	        </div>
			
			
		</div>
	</div>
</template>

<script>
	import IosorAndroid from '../../../new/components/IosorAndroid'
	import { Search, Group, Cell, XButton, AlertPlugin} from 'vux'
	export default{
		components :{
			IosorAndroid,
			Search,
            Group,
            Cell,
            XButton
		},
		data(){
			return{
				phone:"",
				userName:"",
				renterSex:1,
				isMan:true,
				communityName:"",
				message:"",
				poppingShow:false,
				values:[],//保存搜索数据，回显用
				results: [],
				value:"",
				plotName:"",
				plotid:""
			}
		},
		methods:{
			switchman(){
				this.isMan = true;
				this.renterSex = 1;
			},
			switchwoman(){
				this.isMan = false;
				this.renterSex = 0;
			},
			poppingOnOff(){
                this.value = this.plotName;
                this.poppingShow = true;
            },
            
			getResult(val) {//输入事件
                this.post('CommunityController/findCommunityList',{
                    'communityName':this.value
                }).then((res) =>{
                    this.values = res.data;
                    this.results = val ? getResult(res.data) : [];
                })
            },
			onSubmit () {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: '没有检索您的小区'+'\r'+'请在备注中输入您的小区名称'
                })
            },
            onFocus () {//搜索单击事件
                this.value = "";
            },
            onCancel () {//取消单击事件
                this.poppingShow = false;
            },
            resultClick (item) {//选中单击事件
                this.poppingShow = false
                this.plotName = this.values[item.other].name;
                this.plotid = this.values[item.other].id;

            },
			present(){//保存
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if(this.phone == ""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入手机号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                if(this.userName ==""){
                   this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入姓名",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                if(!myreg.test(this.phone))
                {
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入有效手机号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return false;
                }
                // console.log(this.userName,this.phone,this.plotid,this.customerSourceCode);
               this.post('CEntrusController/saveCEntrus',{
                    'id':'',
                    'userName':this.userName,
                    'phone':this.phone,
                    'communityId':this.plotid,
                    'remark':this.remark,
                    'customerSourceCode':this.customerSourceCode,
                    'sex':this.renterSex
                }).then((res) =>{
                    if(res.code == 0){
                        let _this = this;
                        this.$vux.confirm.show({
                            //title:"是否取消",
                            content:'保存成功',
                            onCancel () {//取消执行
                                _this.$router.push('/HomePage')
                            },
                            onConfirm () {//确定执行
                                _this.$router.push('/HomePage')
                            }
                        })

                    }else{
                        this.$vux.confirm.show({
                            //title:"是否取消",
                            content:res.msg,
                            onCancel () {//取消执行
                            },
                            onConfirm () {//确定执行
                            }
                        })
                    }
                })
            },

		}
	}
	function getResult (val) {
	    let rs = []
	    for (let i = 0; i < val.length; i++) {
	      rs.push({
	        title: val[i].name,
	        other: i
	      })
	    }
	    return rs
	}
</script>

