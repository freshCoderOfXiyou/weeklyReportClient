<template>
	<div id="root">
		<vbanner></vbanner>
		<div id="personOuter">
			<div id="personInner">
				<div id="personInfoLine">
					<div id="personInfoLineTit"></div>
					<div id="personInfoLineCon"></div>
				</div>
			</div>
		</div>
		<vfooter></vfooter>
	</div>
</template>
<style type="text/css">
#personOuter{
	width: 100%;
	background: #eee;

}
#personInner{	
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
</script>