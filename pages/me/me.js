// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    me:null
  },
  login:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  myorder:function(e){
    
    if(this.data.me == null || this.data.me == ''){
      wx.showToast({
        title: '未登录',
        icon:'none'
      })
      return ;
    }

    wx.navigateTo({
      url: '../order/order?type=' + e.currentTarget.dataset.type,
    })

  },
  goPath:function(e){
    if (this.data.me == null || this.data.me == '') {
      wx.showToast({
        title: '未登录',
        icon: 'none'
      })
      return;
    }
    console.log('111');
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })
  },
  quit:function(){
    if (this.data.me == null || this.data.me == '') {
      wx.showToast({
        title: '未登录',
        icon: 'none'
      })
      return;
    }
    wx.showModal({
      title: '提示',
      content: '确认退出?',
      success:function(res){
        
        if(res.confirm){
          // 确认
          wx.removeStorageSync('info');
          wx.switchTab({
            url: '../home/home',
          })
        }else{
          // 取消
        }
      }
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
    // 从缓存中拿取数据
    this.setData({
      me: wx.getStorageSync('info')
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