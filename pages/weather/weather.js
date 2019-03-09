let bmap = require('../../utils/bmap-wx.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		weatherData:'',
		res:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let BMap = new bmap.BMapWX({
			ak:"fgTTmVxbSnTQ7Phyff8GxEWYlERtIr0B"
		})
		let fail = data=>console.log(data)
		let success=data=>{
			let weatherData = data.currentWeather[0]
			weatherData=`城市:${weatherData.currentCity}\nPM2.5:${weatherData.pm25}\n日期:${weatherData.date}\n温度:${weatherData.temperature}\n天气:${weatherData.weatherDesc}\n风力:${weatherData.wind}\n`
			console.log(data)
			this.setData({
				weatherData:weatherData
			})
		}
		BMap.weather({
			fail:fail,
			success:success
		})
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
	
	}
})