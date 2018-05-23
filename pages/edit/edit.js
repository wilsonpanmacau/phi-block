// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://cdn.phi-block.com/templates/mobile/images/gr.png',
    date:null,
    name:null,
    items: [
      { name: 'male', value: '男' },
      { name: 'female', value: '女'},
      { name: 'secret', value: '保密', checked: 'true' },
    ],
    select:null,
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
    this.setData({
      select: e.detail.value
    })
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
    var me = wx.getStorageSync('info');

    var items = [];

    if (me.gender !== null){
      // 如果性别不为null
      // 需要修改item。
      for (let i = 0; i < this.data.items.length;i++){
        if (this.data.items[i].name === me.gender){
          this.data.items[i].checked = true;
          items.push(this.data.items[i]);
        }else{
          items.push(this.data.items[i]);
        }
      }
      this.setData({
        items:items
      })
    }


    this.setData({
      date: me.birthday === null ? "请输入日期" : me.birthday,
      name:me.user_name
    })
  },
  // 输入姓名
  getName:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  edit:function(){
    var _this = this;
    wx.request({
      url: getApp().globalData.baseUrl + 'user/edit',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data:{
        user_id: wx.getStorageSync('info').user_id,
        user_name:_this.data.name,
        birthday: _this.data.date === "请输入日期" ? null : _this.data.date,
        gender: _this.data.select === 'secret' ? null : _this.data.select,
      },
      success:function(res){
        console.log(res.data);
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