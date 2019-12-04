<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.pageView {
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 90vh;
		color: #FFFFFF;
	}
	.maxWidth {
		width: 100%;
	}
	
	.maxHeight {
		height: 100vh;
	}
	
	.bg-blue {
		background-color: #007AFF;
	}
	
	.bg-orange {
		background-color: #F0AD4E;
	}
	
	.bg-red {
		background-color: #DB3838;
	}
	
	.bg-green {
		background-color: #349E40;
	}
	
	.bg-purple {
		background-color: #9822AE;
	}
</style>
