// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: {
      "lng": 121.15912,
      "lat": 31.02271
    },
    markers: [{
      id: 1,
      latitude: 31.02271,
      longitude: 121.15912,
      callout:{
        content:'上海斐讯数据通信技术有限公司',
        color:'#fff',
        fontSize:16,
        borderColor:'#000',
        borderRadius:5,
        bgColor:'#000000',
        padding:5,
        display:'ALWAYS'
      }
    }],
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
  
  }
})