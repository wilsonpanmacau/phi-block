// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_list:[
      {
        text:'全部订单',
        style:'w1',
        order_type:''
      },
      {
        text: '未付款',
        style: 'w2',
        order_type:'0'
      },
      {
        text: '正在付款',
        style: 'w1',
        order_type:'1'
      },
      {
        text: '已付款',
        style: 'w2',
        order_type:'2'
      },
      {
        text: '已过期',
        style: 'w2',
        order_type:'3'
      }
    ],
    list:[],
    active_index:0
  },
  select:function(e){
    var _this = this;
    this.setData({
      active_index:e.currentTarget.dataset.index
    },function(){
      // 获取数据
      _this.getData();
    })
  },
  getData:function(){
    var _this = this;
    this.setData({
      list: []
    })
    wx.request({
      url: getApp().globalData.baseUrl + 'order/list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        user_id: wx.getStorageSync('info').user_id,
        status: _this.data.menu_list[_this.data.active_index].order_type
      },
      success: function (res) {
        wx.hideLoading();
        if (res.data.status) {
          for (var i = 0; i < res.data.data.orders.length; i++) {
            res.data.data.orders[i].status_text = _this.getState(res.data.data.orders[i].status);
          }
          _this.setData({
            list: res.data.data.orders
          })
        } else {
          wx.showToast({
            title: '暂无数据',
            icon: 'none'
          })
        }
        console.log(res.data);

      }
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
    })
  },
  getState:function(status){
    switch(status){
      case "0":
        return "未付款";
      case "1":
        return "付款中";
      case "2":
        return "付款成功";
      case "3":
        return "已过期"
    }
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
    var _this = this;
    wx.showLoading({
      title: '加载数据',
    })
    wx.request({
      url: getApp().globalData.baseUrl + 'order/list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        user_id: wx.getStorageSync('info').user_id
      },
      success: function (res) {
        wx.hideLoading();
        if (res.data.status){
          for (var i = 0; i < res.data.data.orders.length; i++) {
            res.data.data.orders[i].status_text = _this.getState(res.data.data.orders[i].status);
          }
          _this.setData({
            list: res.data.data.orders
          })
        }else{
          wx.showToast({
            title: '暂无数据',
            icon:'none'
          })
        }
        console.log(res.data);
        
      }
    })
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