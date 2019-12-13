<template>
	<view class="itemView">
		<image class="itemImg" :class="icon" mode="aspectFit" :src="icon"></image>
		<text class="bradge" v-if="showBradge && bradgeNum != '0'">{{parseInt(bradgeNum) > 99 ? '99+' : bradgeNum}}</text>
	</view>
</template>

<script>
	export default {
		name: 'adRightBarItem',
		data() {
			return {
				
			};
		},
		computed: {
			
		},
		props: {
			// 图标路径
			icon: {
				type: String,
				default: ''
			},
			// 是否显示角标 默认true, 但是如果角标为0，则就算为true，也不显示
			showBradge: {
				type: Boolean,
				default: true
			},
			// 角标数量
			bradgeNum: {
				type: String,
				default: "0"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.itemView {
		/* width: 40upx;
		height: 40upx; */
		display: flex;
		flex-direction: row;
	}
	.itemImg {
		width: 40upx;
		height: 40upx;
	}
	.bradge {
		/* position: absolute; */
		background-color: #D61E42;
		padding: 0upx 5upx 0upx 5upx;
		min-width: 20upx;
		max-width: 60upx;
		height: 30upx;
		border-radius: 15upx;
		text-align: center;
		line-height: 30upx;
		font-size: 18upx;
		z-index: 1024;
		margin-left: -15upx;
		margin-top: -15upx;
	}
</style>
