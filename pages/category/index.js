// pages/history/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
  
	},
  
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
  
	},
  
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
  
	},
  
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
  
	},
  
	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
  
	},
  
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
  
	},
  
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
  
	},
  
	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
  
	},
  
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
  
	},
	// 跳转到硬质塑料瓶分类界面
	gotoHatdBottle:function(){
		wx.navigateTo({
		  url: '../hardBottle/index',
		})
	},
	// 跳转到软质塑料瓶分类界面
	gotosoftBottle:function(){
		wx.navigateTo({
			url: '../softBottle/index',
		})
	},	
	// 跳转易拉罐分类界面
	gotopopCan:function(){
		wx.navigateTo({
			url: '../popCan/index',
		})
	},
	// 跳转大个塑料瓶分类界面
	gotobigBottle:function(){
		wx.navigateTo({
			url: '../bigBottle/index',
		})
	},
  })