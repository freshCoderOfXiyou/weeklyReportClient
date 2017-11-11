<template>
<!-- 序号栏目其他栏目类别维护更新活动专题故障处理弹窗数量登录注册提交两次密码输入不一至,请检查重新输入.密码或者帐号不存在. -->
<div id="operaMain">
	<vhead></vhead>
	<div id="operaMainMid">
	<span>{{dateValue}}</span>
	<input type="month" name="" v-model="dateValue">
	<div id="operationHeader">
		<span id="opHeaderIndex">序号</span>
		<span id="opHeaderColumn">栏目</span>
		<span id="opHeaderAnother">其他栏目</span>
		<span id="opHeaderJob">类别</span>
		<span id="opHeaderCount">数量</span>
		<span id="opHeaderAdd">新增</span>
		<span id="opHeaderDelete">删除</span>
	</div>
	<div id="operationLine" v-for="item in lineData">
		<span id="operLineIndex">{{item.index}}</span>
		<span id="operLineColumn">
			<span v-for="item in chooseJsonCh">
				<input type="radio" name="column" :id="item">
				<label :for="item"> {{item}} </label>
			</span>
		</span>
		<span id="operLineAnother">
			<select :selectedIndex="selectValue" @change="selectAnother">
				<option v-for="item in selectData" :value="item.ename">{{item.cname}}</option>
			</select>
		</span>
		<span id="operLineJob">
			<span v-for="item in jobJsonData">
				<input type="radio" name="job"  :id="item.ename">
				<label :for="item.ename"> {{item.cname}} </label>
			</span>
		</span>
		<span id="operLineCount">
			<input type="number" name="" id="operLineCountInput">
		</span>
		<span id="operLineAdd">
			<span @click="addLine">+</span>
		</span>
		<span id="operLineDelete">
			<span @click="deleteLine(item.index)" :data-index="item.index">X</span>
		</span>
	</div>
	<div>{{selectValue}}</div>

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
	#opHeaderIndex{
		flex: 1;
	}
	#opHeaderColumn{
		flex: 8;
	}
	#opHeaderAnother{
		flex: 2;
	}
	#opHeaderJob{
		flex: 6;
	}
	#opHeaderCount{
		flex: 1;
	}
	#opHeaderAdd{
		flex: 1;
	}
	#opHeaderDelete{
		flex: 1;
	}
#operaMainMid{
	width: 1190px;
	height: 600px;
	margin: 0 auto;
	background: #eee;
}
#operationLine{
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
}
	#operLineIndex{
		flex: 1;
		background: #ccc;
	}
	#operLineColumn{
		flex:8;
	}
	#operLineColumn>span>label , input,#operLineJob>span>label{
		cursor: pointer;
	}
	#operLineAnother{
		flex: 2;
		background: #ccc;

	}
	#operLineJob{
		flex: 6;
	}

	#operLineCount{
		background: #ccc;
		flex: 1;
	}
	#operLineAdd{
		flex: 1;

	}
	#operLineDelete{
		background: #ccc;
		flex: 1;

	}

	#operLineAdd>span,#operLineDelete>span{
		width: 30px;
		height: 20px;
		line-height: 20px;
		background: #ccc;
		border: 1px solid #999;

		display: inline-block;
		/*margin-top: 5px;*/
		cursor: pointer;
		/*color: red;*/
		font-size: 18px;
		/*transform: translateY(5px);*/
	}
	#operLineAdd>span:hover{
		color: white;
		background: green;
	}
	#operLineDelete>span:hover{
		color:white;
		background: red;
	}
	#operLineCountInput{
		width: 50px;
	}
</style>
<script type="text/javascript">
	import vfooter from "@/components/vfooter.vue"
	import vhead from "@/components/vhead.vue"
	var testJson = ["life","sports","series","film"]
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
				lineData:[
					{index:1,column:"",job:"",num:""}
				]
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
			}
		},
		components:{
			vfooter,
			vhead
		},
		mounted:function(){
			this.nowDate = new Date()
			this.nowYear = this.nowDate.getFullYear()
			var tempMon = this.nowDate.getMonth()+1
			this.nowMonth = ( tempMon < 10 ) ? "0"+tempMon : tempMon
			var tempDate = this.nowYear + "-" + this.nowMonth
			this.dateValue = tempDate

			//
			for (var i = this.chooseJsonEn.length - 1; i >= 0; i--) {
				var chName = this.ChForEn[this.chooseJsonEn[i]]
				this.chooseJsonCh.push(chName)
			}
		}
	}
</script>