<template>
	<div id="root">
		<vbanner>
			<span slot="userName">{{$store.state.name}}</span></vbanner>
		<div id="Outer">
			<div id="Inner">
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

	export default {
		data(){
			return{

			}
		},
		components:{
			vfooter,
			vbanner
		}
	}
</script>s