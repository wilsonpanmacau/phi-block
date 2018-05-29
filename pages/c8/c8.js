// pages/c8/c8.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    config:[
      {
        name:'额定算力',
        desc:'230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
      {
        name: '额定算力',
        desc: '230MH/s±5％(ETH)'
      },
    ],
    services: [
      {
        img: 'http://cdn.phi-block.com/templates/default/images/cp_icon3.png',
        title: '强大稳定的带宽资源保障',
        desc: '搭建、安装、入库、调试， 一步到位'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/cp_icon3.png',
        title: '强大稳定的带宽资源保障',
        desc: '搭建、安装、入库、调试， 一步到位'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/cp_icon3.png',
        title: '强大稳定的带宽资源保障',
        desc: '搭建、安装、入库、调试， 一步到位'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/cp_icon3.png',
        title: '强大稳定的带宽资源保障',
        desc: '搭建、安装、入库、调试， 一步到位'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/cp_icon3.png',
        title: '强大稳定的带宽资源保障',
        desc: '搭建、安装、入库、调试， 一步到位'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/cp_icon3.png',
        title: '强大稳定的带宽资源保障',
        desc: '搭建、安装、入库、调试， 一步到位'
      }

    ],
    money:[
      {
        img:'http://cdn.phi-block.com/templates/default/images/gl01.png',
        text:'选择以太坊托管'
      },
      {
        img:'http://cdn.phi-block.com/templates/default/images/gl02.png',
        text:'以太坊入账至托管账户'
      },
      {
        img:'http://cdn.phi-block.com/templates/default/images/gl03.png',
        text:'任意时间，通过微信小程序/APP',
      },
      {
        img:'http://cdn.phi-block.com/templates/default/images/gl04.png',
        text:'提币'
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
  add: function () {
    var _this = this;
    this.setData({
      count: ++_this.data.count
    }, function () {
      wx.request({
        url: getApp().globalData.baseUrl + 'product/addCart',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          pro_id: '2',
          user_id: wx.getStorageSync("info").user_id
        },
        success: function (res) {
          console.log(res)
        }
      })
    })
  },
  path: function (e) {
    console.log(e.currentTarget.dataset.url);
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