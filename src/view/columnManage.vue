<template>
	<div id="root">
		<vbanner>
			<span slot="userName">{{$store.state.name}}</span></vbanner>
		<div id="columnManOuter">
			<div id="columnManInner">
				<tab :tabs="headerComponentArr"></tab>
				<operaMain :operas="operaComArr" @pageOperaClickEvent="pageTabClick" @pageOperaSubmitEvent="pageSubmitClick"></operaMain>
			</div>
		</div>
		{{operaComArr}}
		<vfooter></vfooter>
	</div>
</template>
<style type="text/css">
#columnManOuter{
	width: 100%; 
	background: #eee;

}
#columnManInner{	
	width: 1190px;
	margin: 0 auto;
	height: 900px;
}
	#addColumnMain{
		width: 100%;
	}
</style>
<script type="text/javascript">
	
	import vfooter from "@/components/vfooter.vue"
	import vbanner from "@/components/banner.vue"
	import tab from "@/components/tabComponent"
	import operaMain from "@/components/operaMain"
	import axios from "axios"
	import swal from "sweetalert"
	export default {
		data(){
			return{
				headerComponentArr:[
					{id:"addColumn" , txt:"增加栏目",bdColor:"lightgreen",handle:""},
					{id:"deleteColumn" , txt:"删除栏目",bdColor:"lightred",handle:""},
					{id:"updateColumn" , txt:"修改栏目",bdColor:"lightblue",handle:""},
					{id:"queryColumn" , txt:"查看所有栏目",bdColor:"orange",handle:""}
				],
				operaComArr:[
					{txt:"栏目中文名",id:"columManCname",value:"",errMsg:"输入不能为空，且不能含有空格",errMsgIf:false},
					{txt:"栏目英文名",id:"columManEname",value:"",errMsg:"输入不能为空，且不能含有空格",errMsgIf:false}
				]
			}
		},
		components:{
			vfooter,
			vbanner,
			tab,
			operaMain
		},
		methods:{
			pageSubmitClick:function(arg){
				console.log("栏目管理"+arg);
				var localEname = this.operaComArr[0].value;
				var localCname = this.operaComArr[1].value;
				var localEnameErrBool = false;
				var localCnameErrBool = false;

				// 检查输入是否合法，不合法的情况下提示用户
				if (localEname === "" || localEname.indexOf(" ")>-1) {
					this.operaComArr[0].errMsgIf = true;
					localEnameErrBool = true;
				}
				else{
					this.operaComArr[0].errMsgIf = false;
					localEnameErrBool = false;
				}

				if (localCname === "" || localCname.indexOf(" ")>-1) {
					this.operaComArr[1].errMsgIf = true;
					localCnameErrBool = true;
				}
				else{
					this.operaComArr[1].errMsgIf = false;
					localCnameErrBool = false;
				}

				// 判断是否合法，不合法终止函数
				if (localCnameErrBool || localCnameErrBool) {
					return 0;
				}

				// 向后端发送数据
				var sendData = {cname:this.operaComArr[0].value,ename:this.operaComArr[1].value};

				axios.post("/column/add",sendData)
				.then((res)=>{
					// 接受后端返回的数据 receive data from server
					console.log(res);

					var localServerData = res.data;
					// 成功 suc
					if (localServerData.done) {
						swal({
						  title: "操作成功！",
						  text: "增加栏目成功了，用户可以将该栏目作为自己的维护。",
						  icon: "success",
						  dangerMode: false,
						});
					}
					// 失败 fail
					else{
						swal({
						  title: "操作失败了！",
						  text: "增加栏目失败了，请联系管理员处理。",
						  icon: "error",
						  dangerMode: false,
						});
					}

					// 2s之后关闭swal
					setTimeout(()=>{
						swal.close();
					},2000)
				})
				.catch((err)=>{
					console.log("post提交栏目新增出现异常",err);
				})
			},
			pageTabClick:(arg)=>{
				console.log("栏目管理"+arg);
			}
		}
	}
</script>