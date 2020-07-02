<script>
	import ADNavBarUtil from 'components/andy-ADNavBar/ADNavBarUtil.js'
	
	export default {
		onLaunch: function() {
			console.log('App Launch');
			ADNavBarUtil.setADNavBar();
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	@import "components/main.css";
	
	@font-face {
	  font-family: 'adIcon';
	  src: url('./components/andy-ADNavBar/ADIcon.ttf') format('truetype');
	}
	.adIcon {
	  font-family: "adIcon";
	  font-size: 20px;
	  font-weight: normal;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	.search:before {
		margin-left: 20upx;
		content: "\e600";
	}
	.message:before {
		content: "\e6d7";
	}
	.notification:before {
		content: "\e64b";
	}
	/*每个页面公共css */
	.pageView {
		width: 100%;
		height: 100%;
		text-align: center;
		flex-direction: column;
		color: #FFFFFF;
	}
	.baseView{
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		/* align-items: center; */
	}
	.pageText {
		
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
	
	/*红色渐变*/
	.bg-g-red {
		background-image: linear-gradient(45deg, #D61C41, #F67855);
		color: #ffffff;
	}
</style>
