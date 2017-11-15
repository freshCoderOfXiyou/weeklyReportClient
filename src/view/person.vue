<template>
	<div id="root">
		<vbanner></vbanner>
		<div id="personOuter">
			<div id="personInner">
				<div id="personInfoLine">
					<div id="personInfoLineTit">个人信息维护页面</div>
					<operaMain :operas="operaComArr" @pageOperaClickEvent="pageRefreshClick" @pageOperaSubmitEvent="pageSubmitClick"></operaMain>
					<div id="personInfoLineCon"></div>
				</div>
			</div>
		</div>
		<p>{{operaComArr}}</p>
		<vfooter></vfooter>
	</div>
</template>
<style type="text/css">
#personOuter{
	width: 100%;
	background: #eee;

}
#personInner{	
	width: 1190px;
	margin: 0 auto;
	height: 900px;
}
</style>
<script type="text/javascript">
	
	import vfooter from "@/components/vfooter.vue"
	import vbanner from "@/components/banner.vue"
	import operaMain from "@/components/operaMain.vue"
	import axios from "axios"

	export default {
		data(){
			return{
				operaComArr:[
					{txt:"工号",id:"userCenterId",value:"9009",errMsg:"",errMsgIf:false,disabled:true},
					{txt:"姓名",id:"userCenterName",value:"",errMsg:"请输入您的姓名",errMsgIf:false},
					{txt:"修改密码",id:"userCenterPsw",value:"",errMsg:"你的密码不安全，长度应大于八",errMsgIf:false},
					{txt:"确认密码",id:"userCenterPswSec",value:"",errMsg:"两次密码不一致",errMsgIf:false},
					{txt:"选择维护栏目",id:"userCenterColumns",value:"",errMsg:"维护栏目不能为零哦",errMsgIf:false,isChecks:true,
						checks:[
							// 数据结构示例
							// {cname:"栏目",ename:"column",checked:""}
						]
					}
				]
			}
		},
		components:{
			vfooter,
			vbanner,
			operaMain
		},
		methods:{
			pageRefreshClick:()=>{

			},
			pageSubmitClick:function(){
				var locUsrId = this.operaComArr[0].value;
				var locUsrName = this.operaComArr[1].value;
				var locFirUsrPsw = this.operaComArr[2].value;
				var locSecUsrPsw = this.operaComArr[3].value;
				debugger;
				var locJobs = this.operaComArr[4].checks;
				var locUsrJobs = []; //保存用户选中的数据
				// 循环遍历checks，选出用户选中的
				locJobs.forEach((item,index,arr)=>{
					if (item.checked) {
						console.log(item);
					}
				})
			}
		},
		mounted:function(){
			// 请求所有栏目数据
			axios.get("/column/all").then((res)=>{
				var localRes = res.data;
				var localSinCheck = null;
				// 将栏目数据保存之data之中
				if(localRes.status == 1){
					// 成功获取数据
					localRes.doc.forEach((item,index,array)=>{
						localSinCheck = {cname:item.cname,ename:item.ename,checked:false}
						this.operaComArr[4].checks.push(localSinCheck)					
					})
					console.log()

				}
				// 渲染
			})
			.catch((err)=>{

			})
		}
		// 显示初始化的时候加载数据
	}
</script>