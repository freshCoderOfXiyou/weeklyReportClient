<template>
	<div id="operationClass" @click="tabClick">
		<div class="operationClassSin common_btn" :id="items.id" v-for="items in tabs" :style="{background:items.bgColor}"  >{{items.txt}}</div>
	</div>
</template>
<style type="text/css">

#operationClass{
	display: flex;
}
	.operationClassSin{
		flex: 1;
		height: 35px;
		line-height: 35px;margin:10px;
	}
</style>
<script type="text/javascript">
	export default {
		props:[
			"tabs"
		],
		data(){
			return{

			}
		},
		methods:{
			tabClick:function (e) {
				console.log("components",e.target.id);
				var eTarget = e.target.id ;
				this.$emit("pageTabClickEvent", "pageTabClickEvent")
			}
		},
		components:{
			
		}
	}
</script>