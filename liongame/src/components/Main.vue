<template>
	<div>
		<font class = "main-title">YOUNG圈</font>
		<div class = "close-btn">
			<icon type="clear"></icon>
		</div>
		<div class = "flower-div1">
			<span><img src="../assets/images/ocean.png" class="flower-btn"/></span><br>
			<span><img src="../assets/images/money.png" class="flower-btn"/></span>
		</div>
		<div class = "flower-div2">
			<img src="../assets/images/ocean.png" class="flower-btn" v-on:click="showDynamic()"/><br>
			<img src="../assets/images/tool.png" class="flower-btn" v-on:click="showStage()"/><br>
			<img src="../assets/images/ocean.png" class="flower-btn" v-on:click="showGround()"/><br>
			<img src="../assets/images/ocean.png" class="flower-btn" v-on:click="showCommunity()"/>
		</div>
		<div>
			<img src="../assets/images/gold.png" class="gold"/>
		</div>
		<div>
			<img src="../assets/images/store.png" class="store"/>
		</div>
		<div>
			<img src="../assets/images/lion2.png" class="lion"/>
		</div>
		<div class = "ocean-div">
			<span><img src="../assets/images/ocean.png" class="ocean-btn"/></span>
			<span><img src="../assets/images/ocean.png" class="ocean-btn"/></span>
			<span><img src="../assets/images/ocean.png" class="ocean-btn"/></span>
			<span><img src="../assets/images/bag.png" class="ocean-btn"/></span>
		</div>
		
		<!-- 动态弹窗 -->
		<div v-transfer-dom>
			<popup v-model="dynamicstate">
				<div class="popup0">
				</div>
			</popup>
		</div>
		<!-- 道具弹窗 -->
		<div v-transfer-dom>
			<popup v-model="stageproperty">
				<div class="popup0">
				</div>
			</popup>
		</div>
		<!-- 游乐场弹窗 -->
		<div v-transfer-dom>
			<popup v-model="pleasureground">
				<div class="popup0">
				</div>
			</popup>
		</div>
		<!-- 圈子弹窗 -->
		<div v-transfer-dom>
			<popup v-model="community">
				<div class="popup0">
				</div>
			</popup>
		</div>
	</div>
</template>

<script>
	import {Icon,TransferDom,Popup} from 'vux'
	export default {
	  name:'Main',
		directives: {
			TransferDom
		},
	  components: {
			Icon,
			TransferDom,
			Popup
	  },
	  data(){
		  return{
				dynamicstate: false,
				stageproperty:false,
				pleasureground:false,
				community:false
		  }
	  },
		methods: {
			//显示动态菜单
			showDynamic(){
				this.dynamicstate = true;
			},
			//显示道具菜单
			showStage(){
				this.stageproperty = true;
			},
			//显示游乐场弹窗
			showGround(){
				this.pleasureground = true;
			},
			showCommunity(){
				this.community = true;
			}
		},
	}
</script>

<style>
	html,body{
		width:100%;
		height:100%;
	}
	
	body{
		background: url(../assets/images/forest.png) no-repeat top center;
		background-size: 100% 100%;
	}
	
	.main-title{
		float:left;
		margin-left:10px;
		margin-top:-50px;
		color:#FFFFFF;
	}
	
	.ocean-div{
		margin-top:-20px;
	}
	
	.ocean-btn{
		width:50px;
	}
	
	.flower-div1{
		float:left;
		margin-top:40px;
	}
	
	.flower-div2{
		float:right;
		padding-right:15px;
		margin-top:40px;
	}
	
	.flower-btn{
		margin-top:10px;
		width:40px;
	}
	
	.lion{
		width:100px;
		margin-top:-10%;
		margin-left:-20%;
	}
	
	.close-btn{
		margin-top:-50px;
		float:right;
		padding-right:15px;
	}
	
	.store{
		width:120px;
		margin-top:-10%;
		margin-left:65%;
	}
	
	.gold{
		width:70px;
		margin-top:220px;
		margin-left:160px;
	}
	
	.icon-font{
		display:block;
		font-size:12px;
		margin-top:-10px;
	}
	
	.popup0 {
		padding-bottom:15px;
		height:200px;
	}
</style>