// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quetions: [
      {
        ask: '用户收到K码后如何返现：',
        answer: '用户收到 K 码后去华夏万家金服 APP 进行返现，返现分 4 期（每期为一季度 ）：Q1 10% ； Q2 20% ；Q3 20% ；Q4 50%。							',
        date: '2018-04-16'
      },
      {
        ask: '用户收到K码后如何返现：',
        answer: '用户收到 K 码后去华夏万家金服 APP 进行返现，返现分 4 期（每期为一季度 ）：Q1 10% ； Q2 20% ；Q3 20% ；Q4 50%。							',
        date: '2018-04-16'
      },
      {
        ask: '用户收到K码后如何返现：',
        answer: '用户收到 K 码后去华夏万家金服 APP 进行返现，返现分 4 期（每期为一季度 ）：Q1 10% ； Q2 20% ；Q3 20% ；Q4 50%。							',
        date: '2018-04-16'
      }
    ],
    menu:[
      {
        text:'产品问题'
      },
      {
        text: '产品问题'
      },
      {
        text: '产品问题'
      }
    ],
    active_index:-1,
  },
  clickMenu:function(e){
    this.setData({
      active_index:parseInt(e.currentTarget.dataset.index)
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