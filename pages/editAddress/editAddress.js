// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    name: '',
    phone: '',
    zipcode: '',
    addr: '',
    isDefault: false,
    id:''
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  getDefault: function (e) {
    var _this = this;
    console.log(e.detail.value);
    this.setData({
      isDefault: !_this.data.isDefault
    })
  },
  getName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  getPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getZipcode: function (e) {
    this.setData({
      zipcode: e.detail.value
    })
  },
  getAddr: function (e) {
    this.setData({
      addr: e.detail.value
    })
  },
  save: function () {
    var _this = this;
    console.log(wx.getStorageSync('info'));
    wx.request({
      url: getApp().globalData.baseUrl + 'address/edit',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        user_id: wx.getStorageSync('info').user_id,
        address_id:_this.data.id,
        name: _this.data.name,
        address: JSON.stringify({
          "province": _this.data.region[0],
          "city": _this.data.region[1],
          "area": _this.data.region[2],
          "street": _this.data.addr
        }),
        phone: _this.data.phone,
        zip_code: _this.data.zipcode,
        is_default: _this.data.isDefault ? 1 : 0,
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);
        if (res.data.status) {
          // 添加成功
          wx.showToast({
            title: '编辑成功',
            icon: 'none',
            success: function () {
              wx.redirectTo({
                url: '../address/address',
              })
            }
          })
        } else {
          // 添加失败
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.address));
   
    this.setData({
      name: JSON.parse(options.address).name,
      phone: JSON.parse(options.address).phone,
      zipcode: JSON.parse(options.address).zip_code,
      isDefault: JSON.parse(options.address).is_default === '1' ? true:false,
      region: [JSON.parse(options.address).address.province, JSON.parse(options.address).address.city, JSON.parse(options.address).address.area],
      addr: JSON.parse(options.address).address.street,
      id: JSON.parse(options.address).address_id
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