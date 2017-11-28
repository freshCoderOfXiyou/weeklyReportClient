<template>
<!-- 序号栏目其他栏目类别维护更新活动专题故障处理弹窗数量登录注册提交两次密码输入不一至,请检查重新输入.密码或者帐号不存在. -->
<div id="operaMain">
	<vbanner>
			<span slot="userName">{{$store.state.name}}</span></vbanner>
	<div id="operaMainMid">
	<div id="showInput">
		<span id="showInputBegin" class="timeContainer">
			<span>查询的起始时间：</span>
			<input type="month" name="" v-model="startDate">
		</span>
			
		<span id="showInputEnd" class="timeContainer">
			<span>查询的结束时间：</span>
			<input type="month" name="" v-model="endDate">
		</span>
		<span id="search" @click="searchInfo">查询</span>
	</div>
	<div id="operationHeader">          
		<span id="opHeaderIndex">序号</span>
		<span id="opHeaderColumn">栏目</span>
		<span id="opHeaderFixed">维护</span>
		<span id="opHeaderUpdate">更新</span>
		<span id="opHeaderActivity">活动</span>
		<span id="opHeaderThemecollec">专题</span>
		<span id="opHeaderDebugger">故障</span>
		<span id='opHeaderOther'>其它</span>
		<span id="opHeaderTotal">总计</span>
	</div>
	<div class="operationLine" v-for="(item,index) in lineData">
		<span class="operLineIndex">{{index+1}}</span>
		<span class="operLineColumn" :data-column="item.lineEname">
			<span>{{item.columnCname}}</span>
		</span>
		<span class="operLineFixed">{{item.fixedNum}}</span>
		<span class="operLineUpdate">{{item.updateNum}}</span>
		<span class="operLineActivity">{{item.activityNum}}</span>
		<span class="operLineTheme">{{item.themeNum}}</span>
		<span class="operLineDebugger">{{item.debuggerNum}}</span>
		<span class="operLineIFrame">{{item.otherNum}}</span>
		<span class="operLineTotal">{{item.totalNum}}</span>

	</div>
	<p>{{lineData}}</p>

	
	</div>
	<vfooter></vfooter>
</div>
</template>
<style type="text/css">
#operaMain{

}
#operationHeader{
	width: 100%;
	height: 30px;
	background: black;
	color: white;
	margin: 0 auto;
	line-height: 30px;
	display: flex;
}
	#operationHeader .operLineIndex{
		flex: 1;
	}
	#operationHeader>span{
		flex: 2;
	}
	#search{
		display: inline-block;
		background: lightgreen;
		/*color:white;*/
		display: inline-block;
		width: 80px;
		height: 25px;
		cursor: pointer;
	}
#operaMainMid{
	width: 1190px;
	height: 600px;
	margin: 0 auto;
	background: #eee;
}
.operationLine{
	width: 100%;
	margin: 0 auto;
	/*background: ;*/
	color: black;
	box-sizing: border-box;
	display: flex;
	height: 30px;
	line-height: 30px;
	border:1px solid black;
	border-top: none;
	border-left: none;
}
	.operationLine > span{
		flex: 1;
		border-left: 1px solid black;
	}
	.operationLine > span:frist-child{
		border-left: none;
	}
	.operationLine > span > input {
		width: 90%;
		height: 90%;
		font-size: 20px;
		background: #EEE;
		text-align: center;
		border:none;
		outline: none;
		cursor: pointer;
	}
#submit{
	width: 150px;
	height: 50px;
	background: red;
	color: white;
	cursor: pointer;
}
</style>
<script type="text/javascript">
	import vfooter from "@/components/vfooter.vue"
	import vhead from "@/components/vhead.vue"
	import vbanner from "@/components/banner.vue"
	import axios from "axios"

	var testJson = ["movie","series","child","entertain"]
	export default {
		data(){
			return{
				startDate:"",
				endDate:"",
				lineData:[],
				showData:{}
			}
		},
		methods:{
			searchInfo:function(){

				// 清空数据
				let locLen = this.lineData.length
				if (locLen!=0) {
					this.lineData.splice(0,locLen)
				}

				axios.post("/work/query",
					{
						start:parseInt(this.startDate.replace("-","")) ,
						end:parseInt(this.endDate.replace("-","")) 
					}
				)
				.then((res)=>{
					console.log(res.data.data)
					let ajaxData = res.data.data
					let jobTotal = {columnCname:"分类总计",fixedNum:0,updateNum:0,themeNum:0,debuggerNum:0,otherNum:0,activityNum:0}
					// 将数据推到this.lineData之中

 					// 将对象转化为数组，使用v-if循环渲染
 					for(var item in ajaxData){
 						if (ajaxData[item].man!=undefined) {
 							this.lineData.push(ajaxData[item])
 						}
 					}

 					// 计算各个栏目总计
 					this.lineData.forEach((item,index,arr)=>{
 						item.totalNum = item.fixedNum + item.updateNum +item.activityNum +item.themeNum +item.debuggerNum +item.otherNum 
 						jobTotal.fixedNum += item.fixedNum
 						jobTotal.updateNum += item.updateNum
 						jobTotal.activityNum += item.activityNum
 						jobTotal.themeNum += item.themeNum
 						jobTotal.debuggerNum += item.debuggerNum
 						jobTotal.otherNum += item.otherNum
 					})

 					jobTotal.totalNum = jobTotal.fixedNum +jobTotal.updateNum +jobTotal.activityNum +jobTotal.themeNum +jobTotal.debuggerNum +jobTotal.otherNum;

 					this.lineData.push(jobTotal);
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		components:{
			vfooter,
			vhead,
			vbanner
		},
		mounted:function(){
			// 根据当前时间初始化查询时间
			this.nowDate = new Date()
			this.nowYear = this.nowDate.getFullYear()
			var tempMon = this.nowDate.getMonth()+1
			this.nowMonth = ( tempMon < 10 ) ? "0"+tempMon : tempMon
			var tempDate = this.nowYear + "-" + this.nowMonth
			this.startDate = tempDate
			this.endDate = tempDate

		}
	}
</script>