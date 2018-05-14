// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:{
      icon:'close',
      list:"hide"
    },
    plan: {
      icon: 'close',
      list: "hide"
    },
    service: {
      icon: 'close',
      list: "hide"
    }
  },
  click:function(e){
    console.log(this.data.product.list);
    switch(e.currentTarget.dataset.type){
      case "1":
        if (this.data.product.list === 'hide') {
          this.setData({
            product: {
              icon: 'open',
              list: 'show'
            }
          })
        } else {
          this.setData({
            product: {
              icon: 'close',
              list: 'hide'
            }
          })
        }
        break;
      case "2":
        if (this.data.service.list === 'hide') {
          this.setData({
            service: {
              icon: 'open',
              list: 'show'
            }
          })
        } else {
          this.setData({
            service: {
              icon: 'close',
              list: 'hide'
            }
          })
        }
        break;
      case "3":
        if (this.data.plan.list === 'hide') {
          this.setData({
            plan: {
              icon: 'open',
              list: 'show'
            }
          })
        } else {
          this.setData({
            plan: {
              icon: 'close',
              list: 'hide'
            }
          })
        }
        break;
    }
    
  },
  goPath:function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
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