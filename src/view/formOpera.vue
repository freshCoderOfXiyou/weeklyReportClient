<template>
<!-- 序号栏目其他栏目类别维护更新活动专题故障处理弹窗数量登录注册提交两次密码输入不一至,请检查重新输入.密码或者帐号不存在. -->
<div id="operaMain">
	<vbanner>
			<span slot="userName">{{$store.state.name}}</span></vbanner>
	<div id="operaMainMid">
		<div id="formTime" class="timeContainer">
			<span>请输入操作时间：</span>
			<input type="month" name="" v-model="dateValue">
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
	</div>
	<div class="operationLine" v-for=" (item ,index) in lineData">
		<span class="operLineIndex">{{index+1}}</span>
		<span class="operLineColumn" :data-column="item.lineEname">
			<span>{{item.lineCname}}</span>
		</span>
		<span class="operLineFixed">
			<input type="number" name="" class="fixedInput" v-model="item.fixedNum" min='0'>
		</span>
		<span class="operLineUpdate">
			<input type="number" name="" class="updateInput" v-model="item.updateNum" min='0'>
		</span>
		<span class="operLineActivity">
			<input type="number" name="" class="activityInput" v-model="item.activityNum" min='0'>
		</span>
		<span class="operLineTheme">
			<input type="number" name="" class="themeInput" v-model="item.themeNum" min='0'>
		</span>
		<span class="operLineDebugger">
			<input type="number" name="" class="debuggerInput" v-model="item.debuggerNum" min='0'>
		</span>
		<span class="operLineIFrame">
			<input type="number" name="" class="IFrameInput" v-model="item.otherNum" min='0'>
		</span>
	</div>
	<div id="formOperaBtns">
		<div id="formOperaBtnsRefresh" @click="refreshInfo" class="common_btn">刷新</div>
		<div id="formOperaBtnsSubmit" @click="subInfo" class="common_btn">提交</div>
	</div>
	<p>
		{{lineData}}
	</p>
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
	#operationHeader span{
		flex: 1;
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
#formOperaBtns{
	/*width: 98%;*/
	display: flex;
	/*height: 50px;*/
	padding: 15px 100px;
	/*box-sizing: padding-box;*/
}
	#formOperaBtns>div{
		flex:1;

	}
</style>
<script type="text/javascript">
	import store from "@/store"
	import vfooter from "@/components/vfooter.vue"
	import vhead from "@/components/vhead.vue"
	import vbanner from "@/components/banner"
	import axios from "axios"
	import router from "@/router"
	import swal from "sweetalert"

	var testJson = ["movie","series","child","entertain"]
	export default {
		data(){
			return{
				dateValue:"2017-09",
				lineData:[],
				man:this.$store.state.name,
				manId:this.$store.state.id
			}
		},
		methods:{
			subInfo:function(){
				// there alawys has one more data , so use array 
				var sendData = []
				var tempObj = {}
				var thisLineData = {}
				// cycle data of lineData 
				for(var i=0,len=this.lineData.length;i<len;i++){

					thisLineData = this.lineData[i]

					tempObj = {
						column:thisLineData.lineEname,
						columnCname : thisLineData.lineCname, 
						date:parseInt(this.dateValue.replace("-","")) , 
						man:this.man, 
						manId : this.manId, 
						fixedNum : parseInt(thisLineData.fixedNum),
						updateNum : parseInt(thisLineData.updateNum),
						activityNum : parseInt(thisLineData.activityNum),
						themeNum:parseInt(thisLineData.themeNum),
						debuggerNum : parseInt(thisLineData.debuggerNum),
						otherNum : parseInt(thisLineData.otherNum)
					}

					if (tempObj.fixedNum == 0 && tempObj.updateNum == 0 && tempObj.activityNum == 0 && 
						tempObj.debuggerNum == 0 && tempObj.otherNum == 0 && tempObj.themeNum == 0) {
						break;
					}
					else{
						sendData.push(tempObj)
					}

				}//end for
				// console.log(sendData);
				// 没有提交任何数据
				if (sendData.length < 1) {
					swal({
					  title: "数据为空",
					  text: "您还没有输入数据呢，请输入数据后再尝试提交～_～",
					  icon: "warning",
					  dangerMode: false,
					});
					return;
				}
				axios.post("/work/add",sendData)
				.then((res)=>{
					if (res.data.status == 1) {
						// 失败了
						swal({
						  title: "提交成功",
						  text: "您的数据已经成功保存",
						  icon: "success",
						  dangerMode: false,
						});
					}else{
						// 失败了
						swal({
						  title: "提交失败",
						  text: "数据在服务端发生了一些意外～_～",
						  icon: "error",
						  dangerMode: false,
						});

					}

				})
				.catch((err)=>{
					console.log("jyy error"+err)
					// 失败了
					swal({
					  title: "提交失败",
					  text: "数据在客户端发生异常",
					  icon: "error",
					  dangerMode: false,
					});
				})
			},//end subinfo
			refreshInfo:function(){
				// router.push("/person")
				router.go(0);
			}
		},
		components:{
			vfooter,
			vhead,
			vbanner
		},
		mounted:function(){
			// 没有初始化vuex时触发
			if (!this.$store.state.init) {
				// 初始化用户名以及用户ID
				this.$store.commit('initName');
			}
			this.nowDate = new Date()
			this.nowYear = this.nowDate.getFullYear()
			var tempMon = this.nowDate.getMonth()+1
			this.nowMonth = ( tempMon < 10 ) ? "0"+tempMon : tempMon
			var tempDate = this.nowYear + "-" + this.nowMonth
			this.dateValue = tempDate

			// 从vuex中得到数据渲染
			this.$store.state.works.forEach((item,index,arr)=>{
				let locEname = item.ename;
				let locCname = item.cname;
				let locId = item.id;
				var thisObj = {lineEname:locEname,lineCname:locCname,fixedNum:0,updateNum:0,
					activityNum:0,themeNum:0,debuggerNum:0,otherNum:0 }
				this.lineData.push(thisObj);
			})
		}
	}
</script>