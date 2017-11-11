<template>
	<div id="root">
		<vbanner></vbanner>
		<div id="columnManOuter">
			<div id="columnManInner">
				<tab :tabs="headerComponentArr"></tab>
				<operaMain></operaMain>
			</div>
		</div>
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
	export default {
		data(){
			return{
				headerComponentArr:[
					{id:"addColumn" , txt:"增加栏目",bdColor:"lightgreen",handle:""},
					{id:"deleteColumn" , txt:"删除栏目",bdColor:"lightred",handle:""},
					{id:"updateColumn" , txt:"修改栏目",bdColor:"lightblue",handle:""},
					{id:"queryColumn" , txt:"查看所有栏目",bdColor:"orange",handle:""}
				]
			}
		},
		components:{
			vfooter,
			vbanner,
			tab,
			operaMain
		}
	}
</script>