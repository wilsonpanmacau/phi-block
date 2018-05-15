// pages/ddw/ddw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {
        text: '认识日日赢',
        view: 'ddw'
      },
      {
        text: '获得日日赢',
        view: 'getddw'
      },
      {
        text: "存储日日赢",
        view: 'saveddw'
      },
      {
        text: '处罚规则',
        view: 'guize'
      },

    ],
    ddw_top5:[
      {
        p:'139****9099',
        n:'3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      }
    ],
    broad_top5:[
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      }
    ],
    share_top5:[
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      },
      {
        p: '139****9099',
        n: '3.52'
      }
    ],
    toView:"first"
  },
  toView:function(e){
    this.setData({
      toView:e.currentTarget.dataset.view
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