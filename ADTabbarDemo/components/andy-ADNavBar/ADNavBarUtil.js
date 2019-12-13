import Vue from 'vue'

// 设置各平台状态栏和导航栏的高度
const setADNavBar = function () {
	uni.getSystemInfo({
		success: function(e) {
			// #ifndef MP
			Vue.prototype.StatusBarHeight = e.statusBarHeight;
			if (e.platform == 'android') {
				Vue.prototype.CustomBarHeight = e.statusBarHeight + 50;
			} else {
				Vue.prototype.CustomBarHeight = e.statusBarHeight + 45;
				console.log('APP.vue 电池栏高度:' + e.statusBarHeight);
			};
			// #endif
			// #ifdef MP-WEIXIN
			Vue.prototype.StatusBarHeight = e.statusBarHeight;
			let custom = wx.getMenuButtonBoundingClientRect();
			Vue.prototype.Custom = custom;
			Vue.prototype.CustomBarHeight = custom.bottom + custom.top - e.statusBarHeight;
			// #endif		
			// #ifdef MP-ALIPAY
			Vue.prototype.StatusBarHeight = e.statusBarHeight;
			Vue.prototype.CustomBarHeight = e.statusBarHeight + e.titleBarHeight;
			// #endif
		}
	})
}

export default {
    setADNavBar
}