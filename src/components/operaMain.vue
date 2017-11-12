<template>
	<div id="operaArea">
		<div id="operaHead" class="operaMain">
			<div id="operaHeadIndex" class="operaMainIndex">序号</div>
			<div id="operaHeadName" class="operaMainKey">内容</div>
			<div id="operaHeadContent" class="operaMainValue">值</div>
		</div>
		<div id="operaLine" class="operaMain" v-for="items in operas">
			<div class="operaMainIndex">
				1
			</div>
			<div class="operaMainKey">
				{{items.txt}}
			</div>
			<div class="operaMainValue">
				<input type="text" :id="items.id" v-model="items.value">
			</div>
		</div>
		<div id="operaFooter">
			<div id="operaFooterRefresh" class="operaFooterSub common_btn" @click="operaRefresh">刷新</div>
			<div id="operaFooterSubmit" class="operaFooterSub  common_btn" @click="operaSubmit">提交</div>
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
			.operaMainValue{
				flex:5;
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