<template>
	<div id="accessBanner">
		<div id="accessBannerIn">
			<div id="acceBanTil">模板开发工作量统计系统</div>
			<ul id="acceBanList">
				<li>
					<router-link to="/form">录入</router-link>	
				</li>
				<li>
					<router-link to="/show">查询</router-link>	
				</li>
				<li>
					<router-link to="/graph">图表</router-link>	
				</li>
				<li>
					<router-link to="/person">个人</router-link>	
				</li>
				<li>
					<router-link to="/columnManage">栏目管理</router-link>	
				</li>
				<li>
					<router-link to="/userManage">用户管理</router-link>	
				</li>
			</ul>
			<div id="acceBanUserName"  class="acceBanUserBtn">
				<slot name="userName"></slot>
			</div>
			<div id="acceBanExit" class="acceBanUserBtn">退出</div>
		</div>
	</div>

</template>
<style type="text/css">
#accessBanner{
	width: 100%;
	height: 45px;
	background: #07111b;
}

	#accessBannerIn{
		width: 1190px;
		height: 45px;
		line-height:45px;
		/*background: red;*/
		margin: 0 auto;
	}
		#acceBanTil{
			float: left;
			color:#f01414;
			font-weight: bold;
			letter-spacing: 1px;
			font-size: 18px;
		}
		#acceBanList{
			float: left;
			margin-left: 20px;
		}
		#acceBanList li{
			float: left;
			list-style: none;
			/*background: yellow;*/
			/*width: 70px;*/
			margin: 0 10px;
		}
		#acceBanList li a{
			text-decoration: none;
			color:#ccc;
		}
		#acceBanList li a:hover{
			text-decoration: none;
			color: white;
		}
		#acceBanList li a:activite{
			text-decoration: none;
		}
	.acceBanUserBtn{
		width: 70px;
		/*background: yellow;*/
		color: #ccc;
		float: right;
		cursor: pointer;
	}
	.acceBanUserBtn:hover{
		color: white;
	}
</style>
<script type="text/javascript">
	
</script>