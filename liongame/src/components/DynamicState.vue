<template>
	<div v-transfer-dom>
		<popup v-model="show">
			<div class="popup0">
			</div>
		</popup>
	</div>
</template>

<script>
	import {TransferDom,Popup} from 'vux'
	export default {
		name:'DynamicState',
		directives: {
			TransferDom
		},
		components: {
			Popup
		},
		data(){
			return{
				show: true
			}
		},
		methods: {
			showMenu(){
				this.show = false;
			}
		},
	}
</script>

<style>
	.popup0 {
		padding-bottom:15px;
		height:200px;
	}
</style>
