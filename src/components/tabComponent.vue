<template>
	<div id="operationClass" @click="tabClick">
		<div class="operationClassSin" :id="items.id" v-for="items in tabs" :style="{background:items.bgColor}"  >{{items.txt}}</div>
	</div>
</template>
<style type="text/css">

#operationClass{
	display: flex;
}
	.operationClassSin{
		flex: 1;
		height: 35px;
		border-radius: 6px;
		line-height: 35px;margin:10px;
		color: black;
		background: #055cb3;
		transition: transform 0.5s ease-out;
	}
	.operationClassSin:hover{
		color: white;
		cursor: pointer;
		transform: scale(1.03);
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