<template>
	<div id="headerArea">
		<div id="headerInnerArea">
			<span>互动电视家庭产品部模板开发工作量统计系统</span>
			<span id="headerExit">退出</span>
			<span id="headerName">
				<slot name="userName" ></slot>
			</span>
		</div>
	</div>
</template>
<style type="text/css">
	#headerArea{
		width: 100%;
		height: 35px;
		background: #333;
	}
	#headerInnerArea{
		width: 1190px;
		height: 100%;
		margin:0 auto;
		/*background: black;*/
		line-height: 35px;
		color:white;
	}
		#headerName{
			float: right;
			margin-right: 10px;
			cursor: pointer;
			transition: transfrom;
		}
		#headerExit{
			float: right;
			margin-right:20px;
			cursor: pointer;
			transition: transfrom 1s;
		}
		#headerName:hover , #headerExit:hover{
			color:#ddd;
			transform: translate(-2px) ;
		}
</style>
<script type="text/javascript">
	export default {
		data(){
			return{

			}
		},
		methods:{

		},
		components:{
			
		}
	}
</script>