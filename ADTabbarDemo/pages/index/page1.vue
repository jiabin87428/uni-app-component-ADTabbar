<template name="page1">
	<view class="bg-white">
		<adNavBar bgColor="bg-g-red" :isRoot="false">
			<view class="midView" slot="middle">
				<view class="adIcon search"></view>
				<view class="searchView">请输入搜索内容</view>
			</view>
			<adRightBarItem slot="right" bradgeNum="125" icon="adIcon message"></adRightBarItem>
			<adRightBarItem slot="right" bradgeNum="23" icon="adIcon notification"></adRightBarItem>
		</adNavBar>
		<mescroll-uni :top="customBarHeight" :bottom="tabBarHeight" :down="downOption" @down="downCallback" @up="upCallback">
			<block v-for="(item, index) in dataList" :key="index">
				<adCell :text="item.title" :detail="item.id" :note="item.content" @click="getData"></adCell>
			</block>
		</mescroll-uni>
	</view>
</template>

<script>
	import adNavBar from '@/components/andy-ADNavBar/andy-ADNavBar.vue';
	import adRightBarItem from '@/components/andy-ADNavBar/andy-ADRightBarItem.vue';
	import adCell from '@/components/andy-adcell/andy-adcell.vue';
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import AppConfig from '@/common/appConfig.js';
	
	export default {
		name: "page1",
		components: {MescrollUni, adNavBar, adRightBarItem, adCell},
		data() {
			return {
				customBarHeight: this.CustomBarHeight,
				tabBarHeight: AppConfig.TabbarHeight,
				pageNum: 0,
				pageRows: 15,
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				dataList: []
			}
		},
		methods: {
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.pageNum = 0;
				//联网加载数据
				this.getListDataFromNet(this.pageNum, this.pageRows, (list, hasNext) => {
					//联网成功的回调,隐藏下拉刷新的状态
					mescroll.endSuccess(list.length, hasNext);
					//设置列表数据
					this.dataList = list;
				}, () => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				})
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				console.log('加载更多');
				//联网加载数据
				this.getListDataFromNet(this.pageNum, this.pageRows, (curPageData, hasNext)=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					// console.log("mescroll.num=" + mescroll.num + ", mescroll.size=" + mescroll.size + ", curPageData.length=" + curPageData.length);
			
					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
			
					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
			
					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)

					//设置列表数据
					this.dataList = this.dataList.concat(curPageData);
					this.pageNum++;
				}, () => {
					//联网失败的回调,隐藏下拉刷新的状态
					mescroll.endErr();
				})
			},
			/*联网加载列表数据
			在您的实际项目中,请参考官方写法: http://www.mescroll.com/uni.html#tagUpCallback
			请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
			实际项目以您服务器接口返回的数据为准,无需本地处理分页.
			* */
			getListDataFromNet(pageNum, pageRows, successCallback, errorCallback) {
				wx.showNavigationBarLoading();
				//延时一秒,模拟联网
				setTimeout(function() {
					try {
						wx.hideNavigationBarLoading();
						let newArr = [];
						for (let i = 0; i < pageRows; i++) {
							let upIndex = pageNum * pageRows + i + 1;
							let newObj = {
								id:upIndex,
								title: "【新闻" + upIndex + "】 标题标题标题标题标题",
								content: "内容内容内容内容内容内容内容内容内容"
							};
							newArr.push(newObj);
						}
						//联网成功的回调
						successCallback && successCallback(newArr, pageNum > 2 ? false : true);
					} catch (e) {
						//联网失败的回调
						errorCallback && errorCallback();
					}
				}, 1000)
			},
			
			getData: function(e) {
				// let data = uni.getStorageSync('TESTA');
				let data = plus.storage.getItem('TESTA')
				uni.showModal({
				    title: 'data',
				    content: data,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style>
	.midView {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 80%;
		padding-left: 10upx;
		padding-right: 10upx;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 24upx;
	}
	.searchView {
		width: 100%;
		color: #FFFFFF;
		font-size: 32upx;
		margin-left: 10upx;
		text-align: left;
	}
</style>
