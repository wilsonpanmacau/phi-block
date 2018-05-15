// pages/platinum/platinum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      {
        text:'白金奖励计划',
        view:'plan'
      },
      {
        text:'日日赢',
        view:'ddw'
      },
      {
        text:"N1使用教程",
        view:'n1'
      },
      {
        text:'N1M使用教程',
        view:'n1m'
      },
      {
        text:'使用下载',
        view:'app'
      }
    ],
    toView:"first"
  },
  toView:function(e){
    this.setData({
      toView:e.currentTarget.dataset.view
    })
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