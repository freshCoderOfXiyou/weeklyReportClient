<template>
	<div>
		<vhead>
			<span slot="userName">登录</span> 
		</vhead>
		<loadMain></loadMain>
		<vfooter></vfooter>
	</div>
</template>

<style type="text/css">
	body{
		background: rgba(0,0,0,0);
	}
</style>

<script type="text/javascript">
	import vfooter from "@/components/vfooter.vue"
	import vhead from "@/components/vhead.vue"
	import loadMain from "@/components/loadMain.vue"
	// import canvas_net from "@/assets/js/canvas_net.js"

	export default {
		data(){
			return{

			}
		},
		components:{
			vfooter,
			vhead,
			loadMain
		}
	}
</script>