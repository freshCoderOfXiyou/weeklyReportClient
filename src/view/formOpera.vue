<template>
<!-- 序号栏目其他栏目类别维护更新活动专题故障处理弹窗数量登录注册提交两次密码输入不一至,请检查重新输入.密码或者帐号不存在. -->
<div id="operaMain">
	<vbanner></vbanner>
	<div id="operaMainMid">
	<span>{{dateValue}}</span>
	<input type="month" name="" v-model="dateValue">
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
	<div class="operationLine" v-for="item in lineData">
		<span class="operLineIndex">{{item.index}}</span>
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

	<div id="submit" @click="subInfo">submit</div>
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
	import vbanner from "@/components/banner"
	import axios from "axios"

	var testJson = ["movie","series","child","entertain"]
	export default {
		data(){
			return{
				nowDate:"chushi",
				nowYear:"chushi",
				nowMonth:"chushi",
				testDate:"2017-10",
				dateValue:"2017-09",
				chooseJsonEn:["movie","series","child","entertain"],
				chooseJsonCh:[],
				ChForEn : {movie:'电影',series:'电视剧',child:'少儿',entertain:'娱乐',sport:'体育',news:'新闻',loveLearn:'爱学习',docu:'记录',loveParent:'爱爸妈',fitness:'健身',music:'音乐',lovePet:'爱宠',finance:'财经',lanmu:'栏目',demand:'点播',hd:'高清',game:'游戏',mongo:'芒果',esports:'电竞',blockbuster:'大片',indexPage:'首页',palyControl:'播控',hzLife:'杭州生活',personCenter:'个人中心',hzBorad:'杭州发布'},
				selectData:[
					// {ename:'null',	cname:''},
					{ename:'movie',	cname:'电影'},
					{ename:'series',cname:'电视剧'},
					{ename:'child',	cname:'少儿'},
					{ename:'entertain',cname:'娱乐'},
					{ename:'sport',cname:'体育'},
					{ename:'news',cname:'新闻'},
					{ename:'loveLearn',	cname:'爱学习'},
					{ename:'docu',cname:'记录'},
					{ename:'loveParent',cname:'爱爸妈'},
					{ename:'fitness',cname:'健身'},
					{ename:'music',	cname:'音乐'},
					{ename:'lovePet',cname:'爱宠'},
					{ename:'finance',cname:'财经'},
					{ename:'lanmu',	cname:'栏目'},
					{ename:'demand',cname:'点播'},
					{ename:'hd',cname:'高清'},
					{ename:'game',cname:'游戏'},
					{ename:'mongo',	cname:'芒果'},
					{ename:'esports',cname:'电竞'},
					{ename:'blockbuster',cname:'大片'},
					{ename:'indexPage',	cname:'首页'},
					{ename:'palyControl',cname:'播控'},
					{ename:'hzLife',cname:'杭州生活'},
					{ename:'personCenter',cname:'个人中心'},
					{ename:'hzBorad',cname:'杭州发布'}
				],
				selectValue:0,
				jobJsonData:[
					{ename:'fixed',	cname:'维护'},
					{ename:'update',cname:'更新'},
					{ename:'activity',cname:'活动'},
					{ename:'thematic',cname:'专题'},
					{ename:'bugger',cname:'故障'},
					{ename:'iframe',cname:'弹窗'}
				],
				lineData:[],
				manId:"7003",
				man:"江杨阳"
			}
		},
		methods:{
			selectAnother:()=>{
				console.log("trigger select component onchange event")
			},
			addLine:function(){
				var lineDataLen = this.lineData.length
				var newLineData = {index:lineDataLen + 1,column:"",job:"",num:""}
				this.lineData.push(newLineData)
			},
			deleteLine:function(arg){
				console.log(arg)
				this.lineData.splice(arg-1,1)
			},
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
						date:this.dateValue , 
						man:this.man , 
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
						break
					}
					else{
						sendData.push(tempObj)
					}

				}//end for
				console.log("send data ",sendData)
				axios.post("/work/add",sendData)
				.then((res)=>{
					console.log(res)
				})
				.catch((err)=>{
					console.log("jyy error"+err)
				})
			}//end subinfo
		},
		components:{
			vfooter,
			vhead,
			vbanner
		},
		mounted:function(){
			this.nowDate = new Date()
			this.nowYear = this.nowDate.getFullYear()
			var tempMon = this.nowDate.getMonth()+1
			this.nowMonth = ( tempMon < 10 ) ? "0"+tempMon : tempMon
			var tempDate = this.nowYear + "-" + this.nowMonth
			this.dateValue = tempDate

			//
			for (var i = 0 , len= testJson.length; i < len ; i++) {
				var thisEname = testJson[i]
				var thisCname =this.ChForEn[thisEname]
				var thisObj = {index:i+1,lineEname:thisEname,lineCname:thisCname,fixedNum:0,updateNum:0,
					activityNum:0,themeNum:0,debuggerNum:0,otherNum:0 }
				this.lineData.push(thisObj)	
			}
		}
	}
</script>