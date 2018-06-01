// pages/hostC8/hostC8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    process:[
      {
        text:'工厂下单',
        icon_class:'xiadan-icon',
      },
      {
        text: '工厂发货',
        icon_class: 'fahuo-icon',
      },
      {
        text: '短信通知用户：设备预计上架时间，提醒用户做前期准备',
        icon_class: 'tongzhi1-icon',
      },
      {
        text: '设备达到矿场，完成上架',
        icon_class: 'shangjia-icon',
      },
      {
        text: '矿场管理后台进行账号设备的绑定操作',
        icon_class: 'liebiao-icon',
      },
      {
        text: '绑定完成',
        icon_class: 'bangding-icon',
      },
      {
        text: '短信通知用户：设备已于xx时间开始挖矿',
        icon_class: 'tongzhi2-icon',
      },
      {
        text: '完成',
        icon_class: 'wancheng-icon',
      }
    ],
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
    ]
  },
  add:function(){
    if (wx.getStorageSync("info") == null || wx.getStorageSync("info") == '' || wx.getStorageSync("info") == undefined) {
      wx.showToast({
        title: '未登录',
        icon: 'none'
      })
      return;
    }
    var _this = this;
    wx.showLoading({
      title: '',
    })
    wx.request({
      url: getApp().globalData.baseUrl + 'product/addCart',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        pro_id: '4',
        user_id: wx.getStorageSync("info").user_id
      },
      success: function (res) {
        console.log(res);
        wx.hideLoading();
        if (res.data.status) {
          _this.setData({
            count: ++_this.data.count
          })
        } else {
          wx.showToast({
            title: '添加失败',
            icon: 'none'
          })
        }
      }
    })
  },
  path: function (e) {
    wx.switchTab({
      url: e.currentTarget.dataset.url,
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