<template>
	<div id="operaArea">
		<div id="operaHead" class="operaMain">
			<div id="operaHeadIndex" class="operaMainIndex">序号</div>
			<div id="operaHeadName" class="operaMainKey">内容</div>
			<div id="operaHeadContent" class="operaMainValue">值</div>
		</div>
		<!-- v-if循环带上索引的方法 -->
		<div id="operaLine" class="operaMain" v-for="(items,index) in operas">
			<!-- 左边序号显示 -->
			<div class="operaMainIndex">
				{{index + 1}}
			</div>
			<!-- 中间内容说明 -->
			<div class="operaMainKey">
				{{items.txt}}
			</div>
			<!-- 右边显示内容或者输入内容 -->
			<!-- 显示一行数据，或者输入一个数据 -->
			<div class="operaMainValue" v-if="!items.isChecks">
				<input type="text" :id="items.id" v-model="items.value" :disabled="items.disabled" :class="{ disabledInput : items.disabled }">
				<span class="operaMainValueErrMsg" v-show="items.errMsgIf">{{items.errMsg}}</span>
			</div>
			<!-- 多项选择 -->
			<div class="operaMainChecks" v-else>
				<div class="operaChecksSin" v-for="x in items.checks">
					<!-- 绑定input时，不论什么类型，都应该通过v-model来绑定 -->
					<input type="checkbox" v-model="x.checked" :id="x.ename" >
					<label :for="x.ename">{{x.cname}}</label>
				</div>
			</div>
		</div>
		<div id="operaFooter">
			<div id="operaFooterRefresh" class="operaFooterSub common_btn" @click="operaRefresh">刷新</div>
			<div id="operaFooterSubmit" class="operaFooterSub  common_btn" @click="operaSubmit" >提交</div>
		</div>
	</div>
</template>
<style type="text/css">
	#operaArea{
		width: 100%;
	}
		#operaHead{
			background: #101923;
			color:white;
			text-align: center;
			
		}
			#operaHeadIndex{

			}
			#operaHeadName{

			}
			#operaHeadContent{

			}
		.operaMain{
			width: 100%;
			display: flex;
			border: 1px solid black;
			border-top: none;
		}
			.operaMainIndex{
				flex: 1;
				height: 30px;
				line-height: 30px;

			}
			.operaMainKey{
				flex: 5;
				border-left: 1px solid black;
				border-right: 1px solid black;
			}
			/*右边显示选择1*/
			.operaMainValue{
				flex:5;
				/*text-align: center;*/
				display: flex;
				padding:0 5px;
			}
				.operaMainValue input{
					display: block;
					width: 200px;
					height: 23px;
					line-height: 23px;
					margin: 0 auto;
					font-size: 20px;
					outline: none;
					text-indent: 5px;
					flex: 1;
				}
				.operaMainValueErrMsg{
					flex: 1;
					color: red;
				}
			/*右边显示选择2*/
			.operaMainChecks{
				flex: 5;
				padding: 0 5px;
				/*background: red;height: 50px;*/
			}
				.operaChecksSin{
					float: left;
					background: yellow;
					height: 30px;
					line-height: 30px;
					margin:0 5px;
					user-select: none;	
					/*cursor: pointer;*/
				}
					.operaChecksSin>input,.operaChecksSin>label{
						cursor: pointer;
					}
		#operaFooter{
			display: flex;
			height: 60px;
			padding: 10px 100px;

		}
			.operaFooterSub{
				flex: 1;
				height: 40px;
				line-height: 40px;
			}
			#operaFooterRefresh{
				margin-right: 75px;
			}
			#operaFooterSubmit{
				margin-left: 75px;
			}
</style>
<script type="text/javascript">
	import axios from "axios"
	export default {
		data(){
			return{

			}
		},
		props:[
			"operas"
		],
		methods:{
			// 这里不能使用箭头函数，报错this.$emit不是函数
			operaRefresh:function(){
				console.log("child");
				this.$emit("pageOperaClickEvent","我是参数");
			},
			operaSubmit:function(){

				this.$emit("pageOperaSubmitEvent","我是提交");
			}
		},
		components:{
			
		},
		operaSubmit:{

		}
	}
</script>