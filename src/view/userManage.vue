<template>
	<div id="root">
		<vbanner></vbanner>
		<div id="Outer">
			<div id="Inner">
				<tab :tabs="userManTabs" @pageTabClickEvent="pageTabClick"></tab>
			</div>
		</div>
		<vfooter></vfooter>
	</div>
</template>
<style type="text/css">
#Outer{
	width: 100%;
	background: #eee;

}
#Inner{	
	width: 1190px;
	margin: 0 auto;
	height: 900px;
}
</style>
<script type="text/javascript">
	
	import vfooter from "@/components/vfooter.vue"
	import vbanner from "@/components/banner.vue"
	import tab from "@/components/tabComponent"

	export default {
		data(){
			return{
				userManTabs:[
					{id:"addUser" , txt:"增加用户",bdColor:"lightgreen",handle:""},
					{id:"deleteUser" , txt:"删除用户",bdColor:"lightred",handle:""},
					{id:"updateUser" , txt:"修改用户",bdColor:"lightblue",handle:""},
					{id:"queryUser" , txt:"查看所有用户",bdColor:"orange",handle:""}
				]

			}
		},
		components:{
			vfooter,
			vbanner,
			tab
		},
		methods:{
			pageTabClick:function(arg) {
				console.log("page",arg)
			}
		}
	}
</script>