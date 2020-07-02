<template>
	<view class="baseView" id="baseView">
		<page1 v-if="curPage=='page1'"></page1>
		<page2 v-if="curPage=='page2'"></page2>
		<page3 v-if="curPage=='page3'"></page3>
		<page4 v-if="curPage=='page4'"></page4>
		<adTabbar :tabHeight='tabHeight'>
			<adTabbarItem text="首页" dataCur="page1" class="maxWidth" @click="navClick" :textColor="curPage=='page1'? '#DF421D':'#9B9B9B'" :icon="'../../static/andy-ADTabbar/home' + [curPage=='page1'?'-hover':''] + '.png'"></adTabbarItem>
			<adTabbarItem text="订单" dataCur="page2" class="maxWidth" @click="navClick" :textColor="curPage=='page2'? '#DF421D':'#9B9B9B'" :icon="'../../static/andy-ADTabbar/order' + [curPage=='page2'?'-hover':''] + '.png'"></adTabbarItem>
			<!--自定义中间View，可以注释掉就是正常4个Tab菜单-->
			<view class="middleItem" @click="middleClick">
				<view class="buttonView">+</view>
				<text>自定义</text>
			</view>
			<adTabbarItem text="图表" dataCur="page3" class="maxWidth" @click="navClick" :textColor="curPage=='page3'? '#DF421D':'#9B9B9B'" :icon="'../../static/andy-ADTabbar/chart' + [curPage=='page3'?'-hover':''] + '.png'"></adTabbarItem>
			<adTabbarItem text="我的" dataCur="page4" class="maxWidth" @click="navClick" :textColor="curPage=='page4'? '#DF421D':'#9B9B9B'" :icon="'../../static/andy-ADTabbar/my' + [curPage=='page4'?'-hover':''] + '.png'"></adTabbarItem>
		</adTabbar>
	</view>
</template>

<script>
	import AppConfig from '@/common/appConfig.js';
	import adTabbar from '@/components/andy-ADTabbar/andy-ADTabbar.vue';
	import adTabbarItem from '@/components/andy-ADTabbar/andy-ADTabbarItem.vue';
	
	export default {
		components: {
		    adTabbar,
			adTabbarItem
		},
		data() {
			return {
				curPage: 'page1',
				tabHeight: AppConfig.TabbarHeight,
			}
		},
		onLoad() {

		},
		methods: {
			// 导航栏切换
			navClick: function(e) {
				this.curPage = e.currentTarget.dataset.cur
			},
			// 中间按钮点击
			middleClick: function(e) {
				uni.navigateTo({
				    url: 'page5',
				    animationType: 'slide-in-bottom',
				    animationDuration: 200
				});
			},
		}
	}
</script>

<style>
	.middleItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		font-size: 22upx;
	}
	.buttonView {
		width: 100upx;
		height: 100upx;
		border-radius: 50upx;
		margin-top: -60upx;
		background-color: #349E40;
		margin-bottom: 10upx;
		
		color: #FFFFFF;
		line-height: 100upx;
		text-align: center;
		font-size: 50upx;
	}
</style>
