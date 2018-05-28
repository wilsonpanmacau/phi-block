// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[
    ]
  },
  add:function(){
   
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },
  edit:function(e){
    var _this = this;
    wx.navigateTo({
      url: '../editAddress/editAddress?address='+JSON.stringify(_this.data.address[e.currentTarget.dataset.index]),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: getApp().globalData.baseUrl +'address/list',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method:'POST',
      data:{
        user_id:wx.getStorageSync('info').user_id
      },
      success:function(res){
        _this.setData({
          address: res.data.data.addresses
        })
        console.log(res.data.data.addresses);
      }
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