<template>
<!-- 序号栏目其他栏目类别维护更新活动专题故障处理弹窗数量登录注册提交两次密码输入不一至,请检查重新输入.密码或者帐号不存在. -->
<div id="operaMain">
	<vbanner></vbanner>
	<div id="operaMainMid">
	<span>{{dateValue}}</span>
	<input type="month" name="" v-model="dateValue">
	<span id="search" @click="searchInfo">查询</span>
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
	<div class="operationLine" v-for="item in lineData">
		<span class="operLineIndex">{{item.index}}</span>
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
	<p>{{showData}}</p>

	
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
		background: #aaa;
		color:white;
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
				man:"江杨阳",
				showData:{}
			}
		},
		methods:{
			searchInfo:function(){
				axios.post("/work/query",{date:this.dateValue})
				.then((res)=>{
					console.log(res.data.data)
					var ajaxData = res.data.data
 					for (var i = 0; i < ajaxData.length; i++) {
 						var thisColumnName = ajaxData[i].column
 						if (this.showData[thisColumnName]) {
 							this.showData[thisColumnName].fixedNum += ajaxData[i].fixedNum
 							this.showData[thisColumnName].updateNum += ajaxData[i].updateNum
 							this.showData[thisColumnName].activityNum += ajaxData[i].activityNum
 							this.showData[thisColumnName].themeNum += ajaxData[i].themeNum
 							this.showData[thisColumnName].debuggerNum += ajaxData[i].debuggerNum
 							this.showData[thisColumnName].otherNum += ajaxData[i].otherNum
 						}else{
 							this.showData[thisColumnName] = ajaxData[i]
 						}
 					}
					for(var i =0  , len = ajaxData.length ; i < len ; i++){
						ajaxData[i].index = i +1
						ajaxData[i].totalNum = ajaxData[i].fixedNum + ajaxData[i].updateNum +ajaxData[i].activityNum +ajaxData[i].themeNum +ajaxData[i].debuggerNum +ajaxData[i].otherNum 
						this.lineData.push(ajaxData[i])
					}

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
			this.nowDate = new Date()
			this.nowYear = this.nowDate.getFullYear()
			var tempMon = this.nowDate.getMonth()+1
			this.nowMonth = ( tempMon < 10 ) ? "0"+tempMon : tempMon
			var tempDate = this.nowYear + "-" + this.nowMonth
			this.dateValue = tempDate

		}
	}
</script>