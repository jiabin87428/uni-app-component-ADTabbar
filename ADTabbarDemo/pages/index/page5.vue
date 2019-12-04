<template name="page5">
	<view class="pageView bg-red maxHeight" @click="closeClick">Page 5 (Click To Close)</view>
</template>

<script>
	export default {
		name: "page5",
		data() {
			return {
				
			}
		},
		onLoad() {
	
		},
		methods: {
			// 关闭
			closeClick: function(e) {
				uni.navigateBack();
			},
		}
	}
</script>

<style>
</style>
