<template>
	<view class="tabbar" :style="{backgroundColor: backgroundColor, height: setTabHeight + 'upx'}">
		<slot></slot>
	</view>
</template>

<script>
	import Vue from 'vue'
	
	export default {
		name: 'adTabbar',
		components: {},
		props: {
			// 背景色
			backgroundColor: {
				type: String,
				default: "#FFFFFF"
			},
			// tabbar高度
			tabHeight: {
				type: [String, Number],
				default: 130
			}
		},
		computed: {
			// 设置Tabbar高度
			setTabHeight() {
				let info = plus.navigator.getSafeAreaInsets();
				let tabh = parseFloat(this.tabHeight) + info.bottom / 2;
				// Vue.prototype.TabBarHeight = tabh;
				// console.log('Vue.prototype.TabBarHeight: ' + Vue.prototype.TabBarHeight)
				return tabh;
			},
		},
		data() {
			return {
				
			}
		},
		methods: {}
	}
</script>

<style>
	.tabbar {
		/*foot*/
		position: fixed;
		width: 100%;
		min-height: 100upx;
		bottom: 0;
		z-index: 1024;
		display: flex;
		
		/*cu-bar*/
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		
		/*tabbar*/
		padding: 0;
		/* height: calc(130upx + env(safe-area-inset-bottom) / 2); */
		padding-bottom: calc(env(safe-area-inset-bottom) / 2);
		
		/*shadow*/
		box-shadow: 0 -1upx 6upx rgba(0, 0, 0, 0.1);
		
		color: #666666;
		
		/*other*/
	}
</style>
