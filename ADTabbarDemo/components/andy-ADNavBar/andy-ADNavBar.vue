<template>
	<view class="navBase" :style="[{height:customBarHeight + 'px'}]">
		<view class="navBar" :style="style" :class="[bgImage!=''?'none-bg bg-white bg-img':'',bgColor]">
			<view class="leftView" :style="{height: customBarHeight - statusBarHeight + 'px', color: backColor}" @tap="backClick">
				<view class="adIcon back" :style="{color: backColor}" v-if="!isRoot"></view>{{!isRoot ? backText : ''}}
				<slot name="left" v-if="!isRoot"></slot>
			</view>
			<view class="middleView" :style="[{top:statusBarHeight + 'px'}]" v-if="title == ''">
				<slot name="middle"></slot>
			</view>
			<view class="titleView" :style="[{top:statusBarHeight + 'px', color: titleColor}]" v-if="title != ''">{{title}}</view>
			<view class="rightView" :style="{height: customBarHeight - statusBarHeight + 'px'}">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'adNavBar',
		data() {
			return {
				// 顶部状态栏高度 - 电池栏
				statusBarHeight: parseFloat(this.StatusBarHeight),
				// 自定义导航栏的高度 - 包括电池栏的高度
				customBarHeight: parseFloat(this.CustomBarHeight),
			};
		},
		computed: {
			style() {
				var statusBarHeight= this.statusBarHeight;
				var customBarHeight = this.customBarHeight;
				console.log('电池栏高度：' + statusBarHeight + ', 导航栏高度：' + customBarHeight);
				var bgImage = this.bgImage;
				var style = `height:${customBarHeight}px;padding-top:${statusBarHeight}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				console.log(style);
				return style
			}
		},
		props: {
			// 是否根页面
			isRoot: {
				type: [Boolean, String],
				default: false
			},
			// 页面标题
			title: {
				type: String,
				default: ''
			},
			// 页面标题文字颜色
			titleColor: {
				type: String,
				default: '#FFFFFF'
			},
			// 返回文字
			backText: {
				type: String,
				default: ''
			},
			// 返回按钮和文字颜色
			backColor: {
				type: String,
				default: '#FFFFFF'
			},
			// 导航栏背景图 - 背景图优先级高于背景色
			bgImage: {
				type: String,
				default: ''
			},
			// 导航栏背景色
			bgColor: {
				type: String,
				default: ''
			},
		},
		methods: {
			// 返回事件
			backClick: function(e) {
				// 如果是根页面，则直接return
				if (this.isRoot == true) {
					return;
				}
				// 如果当前页面集合中的页面数量大于1，说明当前页面不是根页，才执行返回
				if (getCurrentPages().length > 1) {
					uni.navigateBack({
						delta: 1
					});
				}
			},
		}
	}
</script>

<style>
	@font-face {
	  font-family: 'adIcon';
	  src: url('ADIcon.ttf') format('truetype');
	}
	.adIcon {
	  font-family: "adIcon";
	  font-size: 20px;
	  font-weight: normal;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	.back:before {
	  content: "\e60a";
	}
	
	.navBase {
		display: block;
		position: relative;
		width: 100vw;
	}
	.navBar {
		/* #ifdef MP-WEIXIN */
		padding-right: 220upx;
		/* #endif */
		/* #ifdef MP-ALIPAY */
		padding-right: 150upx;
		/* #endif */
		
		position: fixed;
		width: 100%;
		min-height: 100upx;
		top: 0;
		z-index: 1024;
		box-shadow: 0 1upx 6upx rgba(0, 0, 0, 0.1);
		
		display: flex;
		flex-direction: row;
		/* align-items: center; */
		justify-content: space-between;
	}
	
	.leftView {
		display: flex;
		align-items: center;
		justify-content: center;
		
		padding-left: 30upx;
		padding-right: 30upx;
	}
	.titleView {
		position: absolute;
		text-align: center;
		max-width: 60%;
		left: 50%;
		bottom: 0;
		margin: auto;
		height: 60upx;
		font-size: 32upx;
		line-height: 60upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		-webkit-transform:translate(-50%);
	}
	.middleView {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32upx;
		cursor: none;
		pointer-events: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.rightView {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		
		padding-right: 16upx;
	}
	
	.rightView  view {
		margin-left: 16upx;
	}
	
	.bg-white {
		color: #ffffff;
	}
	
	.bg-img {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	
	.midView {
		width: 50%;
		background-color: #4CD964;
	}
</style>
