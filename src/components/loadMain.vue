<template >
	<div id="loadMain">
		<!--  -->
		<div id="loadInner">
			<h4></h4>
			<div id="loadForm">      
				<div id="choose">
					<div id="chooseLoad" @click="choose(1)">登录</div>
					<div id="chooseRegister" @click="choose(2)">注册</div>
				</div>
				<div id="userId" class="inputLine">
					<label for="userId">工号</label>
					<input type="text" name="userId" v-model="userId">		
				</div>
				<!-- <div id="userLabel" v-show='registerArea' class="inputLine">
					<label for="userName">姓名</label>
					<input type="text" name="userName"  v-model="username">
				</div> -->
				<div id="userPswLabel" class="inputLine">
					<label for="userPsw">密码</label>
					<input type="password" name="userPsw" v-model="userpsw">
				</div>
				<div id="confirmPswLabel" v-show='registerArea' class="inputLine">
					<label for="userPswConfrim">确认密码</label>
					<input type="password" name="userPswConfrim" v-model="confirmpsw">
				</div>
				<!-- <div id="work" v-show='registerArea'>
					<div v-for="item in work">
						<input type="checkbox" :name="item.ename" v-model="item.check" :id='item.ename'>
						<label :for="item.ename">{{item.cname}}</label>
					</div>
				</div> -->
				<div id="submitDiv" @click="subInfo">
					提交
				</div>
				<!-- <p>
					{{work}}
				</p> -->
				<div id="alert">
					<span  v-show="inputError">{{notSameTip}}</span>
					<span  v-show="pswError">{{badPswTip}}</span>
				</div>
				<!-- <div ></div> -->
			</div>
		</div>
	</div>	
</template>

<style type="text/css">

	#loadMain{
		width: 100%;
		/*background: yellow;*/
	}
		#choose{
			overflow: hidden;
			margin-bottom: 10px;
		}
		#choose>div{
			float: left;
			width: 150px;
			/*margin-right: 5px;*/
			background: black;
			color:white;
			margin:0 15px;
			cursor: pointer;
			height: 50px;
			line-height: 50px;
		}
		#choose>div:hover{
			color:red;
		}
		#loadInner{
			width: 1190px;
			/*background: #ececec;*/
			margin:0 auto;
			height: 575px;
			position: relative;
		}
		#loadForm{
			width: 372px;
			height: 350px;
			background: rgba(0,0,0,0.5);
			padding: 20px;
			position: absolute;
			right: 60px;
			top: 60px;
		}
		/*#loadForm>div{
			width: 400px;
			height: 50px;
			line-height: 50px;
			background: yellow;
		}*/
		.inputLine{
			width: 95%;
			/*background: red;*/
			margin-top: 5px;
			display: flex;
			color:black;
			height: 30px;
			line-height: 30px;
			background: #dedede;
			padding: 7px 5px;
			/*transition: width height;*/
			/*cursor: pointer;*/
		}
		.inputLine  label{
			flex: 1;
			/*background: rgba(0,0,0,0.9);*/
		}
		.inputLine input{
			flex:4;
			text-indent: 5px;
			font-size: 16px;
			outline: none;
		}
		#work>div{
			float: left;
		}
		#alert{
			color:red;
		}
		#submitDiv{
			width: 98%;
			line-height: 40px;
			height: 40px;
			letter-spacing: 15px;
			background: lightgreen;
			margin:10px 0;
			color:black;
			cursor: pointer;
		}
</style>

<script type="text/javascript">	

import axios from "axios"
import swal from "sweetalert"
import router from "@/router/index.js"
export default {

	data(){
		return{
			registerArea:false,
			username:"",
			userpsw:"",
			confirmpsw:"",
			inputError:false,
			pswError:false,
			userId:"",
			selectedWork:[],
			/*work:['电影','电视剧','少儿','娱乐','体育','新闻','爱学习','记录','爱爸妈','健身','音乐','爱宠','财经','栏目','点播','高清','游戏','芒果','电竞','大片','首页','播控','杭州生活','个人中心','杭州发布']*/
			work:[{ename:"movie",cname:'电影',check:false},{ename:"series",cname:'电视剧',check:false},{ename:"child",cname:'少儿',check:false},{ename:"entertain",cname:'娱乐',check:false},{ename:"sport",cname:'体育',check:false},{ename:"news",cname:'新闻',check:false},{ename:"loveLearn",cname:'爱学习',check:false}],
			notSameTip:"两次输入的密码不相同哦,再试一下吧~_~",
			badPswTip:"密码不正确或者帐号不存在哦......"
		}
	},
	methods:{
		subInfo() {
			var fristPsw = this.userpsw;
			var secondPsw = this.confirmpsw;
			var thisName = this.username
			for (var i = this.work.length - 1; i >= 0; i--) {
				if (this.work[i].check) {
					this.selectedWork[i]=this.work[i].ename	
				}	
			}
			if ( this.registerArea ) {
				this.inputError = ! (fristPsw === secondPsw) 
			}
			if (this.registerArea) {
				console.log("for register api")
				axios.post("/apiregister/register",{
						psw:this.userpsw,
						id:this.userId
					})
					.then((res)=>{
						// console.log(res.data)
						var registBool = res.data.register;
						if (registBool) {
							// 注册成功
							swal({
							  title: "恭喜注册成功",
							  text: "使用注册的账号来登陆吧～",
							  icon: "success",
							  dangerMode: false,
							});

						}
						else{
							// 失败了
							swal({
							  title: "sorry，注册失败了",
							  text: "请联系管理员💔",
							  icon: "error",
							  dangerMode: false,
							});

						}
					})
					.catch(function (error) {
					    console.log(error);
					    // axios内部错误
						swal({
						  title: "sorry，系统出了一些问题",
						  text: "请联系管理员💔",
						  icon: "error",
						  dangerMode: false,
						});

					});
			}
			else{
				axios.post("/apiregister/load",{
					psw:this.userpsw,
					id:this.userId
				}).then((res)=>{
					var loadBool = parseInt(res.data.result);
					console.log(loadBool)
					debugger;
					if (loadBool) {
						// 成功
						router.push("/person")
					}
					else{
						// axios内部错误
						swal({
						  title: "sorry,账号或者密码不正确🙅",
						  text: "请重新填写账号密码～",
						  icon: "error",
						  dangerMode: false,
						});
						setTimeout(function(){
							swal.close();
						},2000)
					}
				})
				.catch((err)=>{
					console.error(err)
				})
			}

		},
		choose(arg){
			if (arg == 1) {
				this.registerArea = false
			}else{
				this.registerArea = true 
			}

		}
	}
}
</script>
