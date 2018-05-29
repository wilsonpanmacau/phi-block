// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_list:[
      {
        text:'有效订单',
        style:'w1'
      },
      {
        text: '未付款',
        style: 'w2'
      },
      {
        text: '正在付款',
        style: 'w1'
      },
      {
        text: '已付款',
        style: 'w2'
      },
      {
        text: '已过期',
        style: 'w2'
      }
    ],
    list:[],
    active_index:0
  },
  select:function(e){
    this.setData({
      active_index:e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this= this;
    console.log(options);
    this.setData({
      active_index:parseInt(options.type)
    },function(){
      wx.request({
        url: getApp().globalData.baseUrl + 'order/list',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data:{
          user_id:wx.getStorageSync('info').user_id
        },
        success:function(res){
          console.log(res.data);
          _this.setData({
            list:res.data.data.orders
          })
        }
      })
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