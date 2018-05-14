// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://cdn.phi-block.com/templates/mobile/images/gr.png',
    date:'2017-12-12',
    items: [
      { name: 'man', value: '男' },
      { name: 'women', value: '女', checked: 'true' },
      { name: 'secret', value: '保密' },
    ]
  },
  choose:function(){
    var _this = this;
    wx.chooseImage({
      count:1,
      success: function(res) {
        console.log(res.tempFilePaths);
        _this.setData({
          src: res.tempFilePaths[0]
        })
      },
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  cancel:function(){
    wx.navigateBack({
      delta:1
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