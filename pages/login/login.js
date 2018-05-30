// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    pwd:''
  },
  // 输入手机号或者邮箱
  getPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  // 输入密码
  getPwd:function(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  // 登录操作
  login:function(){
    if(this.data.phone === '' || this.data.pwd === ''){
      wx.showToast({
        title: '不能为空',
        icon:'none',
      })
    }else{
      // 登录跳转
      var _this = this;
      wx.request({
        url: getApp().globalData.baseUrl+'user/login',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'POST',
        data:{
          account:_this.data.phone,
          password:_this.data.pwd
        },
        success:function(res){
          console.log(res.data);
          if(res.data.status){
            // 登录成功
            // 将用户信息保存到缓存中
            wx.setStorageSync('info', res.data.data);
            wx.showToast({
              title: "登录成功",
              duration:3000,
              complete:function(){
                wx.reLaunch({
                  url: '../home/home',
                })
              }
            })
          }else{
            // 登录失败
            wx.showToast({
              title: res.data.msg,
              icon:'none'
            })
          }
        },
        fail:function(){
          wx.showToast({
            title: '接口调用失败',
            icon:'none',
          })
        }
      })
      
    }
  },
  reg:function(e){
    wx.navigateTo({
      url: '../reg/reg',
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