<template>
	<div id="root">
		<vbanner >
			<span slot="userName">{{$store.state.name}}</span>
		</vbanner>
		<div id="personOuter">
			<div id="personInner">
				<div id="personInfoLine">
					<div id="personInfoLineTit">个人信息维护页面</div>
					<p> {{$store.state.works}}</p>
					<operaMain :operas="operaComArr" @pageOperaClickEvent="pageRefreshClick" @pageOperaSubmitEvent="pageSubmitClick"></operaMain>
					<div id="personInfoLineCon"></div>
				</div>
			</div>
		</div>
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
	import store from "@/store"
	import vfooter from "@/components/vfooter.vue"
	import vbanner from "@/components/banner.vue"
	import operaMain from "@/components/operaMain.vue"
	import axios from "axios"
	import swal from "sweetalert"
	export default {
		data(){
			return{
				operaComArr:[
					{txt:"工号",id:"userCenterId",value:"9009",errMsg:"",errMsgIf:false,disabled:true},
					{txt:"姓名",id:"userCenterName",value:"",errMsg:"请输入您的姓名",errMsgIf:false,disabled:true},
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
		store,
		components:{
			vfooter,
			vbanner,
			operaMain
		},
		methods:{
			pageRefreshClick:()=>{

			},
			pageSubmitClick:function(){
				let locUsrId = this.operaComArr[0].value;
				let locUsrName = this.operaComArr[1].value;
				let locFirUsrPsw = this.operaComArr[2].value;
				let locSecUsrPsw = this.operaComArr[3].value;
				let locJobs = this.operaComArr[4].checks;
				
				// 判断用户哪些信息有过修改
				let sendData = {}; // 最终向后台提交的信息，根据如下的判断逐步加入到对象之中，
				// 加入用户ID
				sendData.id = locUsrId;
				// 判断密码是否有输入
				if (locFirUsrPsw != "" || locSecUsrPsw != "") {
					if (locFirUsrPsw != locSecUsrPsw ) {
						this.operaComArr[3].errMsgIf = true;
						return ;
					}
					else{
						this.operaComArr[3].errMsgIf = false;
						sendData.psw = locSecUsrPsw;
					}
				}

				// 此处先只判断用户是否输入用户名，不作是否更改的判断
				if (locUsrName!="") {
					sendData.name = locUsrName;
				}

				// 直接将获取的数据推送到后端存储起来
				var locUsrJobs = []; //保存用户选中的数据
				// console.log(this.operaComArr[4].checks);
				for(var i=0,len=this.operaComArr[4].checks.length;i<len;i++){
					// console.log(this.operaComArr[4].checks[i].checked)
					let locObj = this.operaComArr[4].checks[i];
					if (locObj.checked) {
						let locEname = locObj.ename;
						let locCname = locObj.cname;
						let locColumnObj = {ename:locObj.ename , cname:locObj.cname,id:locObj.id};
						// console.log(locColumnObj);
						locUsrJobs.push(locColumnObj);
					}

				}
				sendData.works = locUsrJobs;

				console.log(sendData);

				// 提交后台
				axios.post("/apiregister/update",sendData).then((res)=>{
					let locRes = res.data;
					if (locRes.result == "1") {
						// 失败了
						swal({
						  title: "更新成功",
						  text: "成功更新用户数据",
						  icon: "success",
						  dangerMode: false,
						});
					}
					else{
						// 失败了
						swal({
						  title: "更新失败",
						  text: "更新用户数据服务器异常",
						  icon: "error",
						  dangerMode: false,
						});

					}
				}).catch((err)=>{
					// 失败了
					swal({
					  title: "更新失败",
					  text: "更新用户数据客户端异常",
					  icon: "error",
					  dangerMode: false,
					});

				})

				// 判断用户名是否有改动


			},
			getCookie:(name)=>{
				var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
				if(arr=document.cookie.match(reg))
				return decodeURIComponent(arr[2]);
				else
				return null;
			}
		},
		mounted:function(){
			// 没有初始化vuex时触发
			if (!this.$store.state.init) {
				// 初始化用户名以及用户ID
				this.$store.commit('initName');
			}
			// 读取cookie

			this.operaComArr[0].value = this.$store.state.id;
			this.operaComArr[1].value = this.$store.state.name;
			// 渲染工号以及姓名

			console.log(this.$store.state.works);
			// 请求所有栏目数据
			axios.get("/column/all").then((res)=>{
				var localRes = res.data;
				var localSinCheck = null;
				// 将栏目数据保存之data之中
				if(localRes.status == 1){
					// 成功所有栏目数据
					localRes.doc.forEach((item,index,array)=>{
						localSinCheck = {cname:item.cname,ename:item.ename,checked:false,id:item._id}
						var locId = item._id
						// 将用户维护的栏目选择出来
						this.$store.state.works.forEach((itemB,indexB,arrB)=>{
							// debugger;
							if (itemB.id == locId) {
								localSinCheck.checked = true;
							}
						})
						this.operaComArr[4].checks.push(localSinCheck)					
					})
					// 获取用户的栏目数据
					let locWorks = this.$store.state.work;

				}
				// 渲染
			})
			.catch((err)=>{

			})
		}
		// 显示初始化的时候加载数据
	}
</script>