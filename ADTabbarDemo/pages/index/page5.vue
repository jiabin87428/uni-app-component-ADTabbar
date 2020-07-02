<template name="page5">
	<!-- <view class="pageView bg-red maxHeight" @click="closeClick">Page 5 (Click To Close)</view> -->
	<view>
		<web-view :webview-styles="webviewStyles" src="/hybrid/html/test.html" @message="handleMessage"></web-view>
	</view>
</template>

<script>
	
	export default {
		name: "page5",
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		onLoad() {
	
		},
		methods: {
			// 关闭
			// closeClick: function(e) {
			// 	uni.navigateBack();
			// },
			handleMessage(evt) {
				console.log('接收到的消息：' + JSON.stringify(evt.detail.data));  
			},
		}
	}
</script>

<style>
</style>
