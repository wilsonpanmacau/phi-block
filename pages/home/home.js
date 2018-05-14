// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      "http://cdn.phi-block.com/templates/default/images/banner1.jpg",
      "http://cdn.phi-block.com/templates/default/images/banner1.jpg"
    ],
    swiper:{
      autoplay:true,
      interval:3000,
      circular:true,
      indicatorDots:true,
      indicatorColor:"rgba(255,255,255,0.5)",
      indicatorActiveColor:"#fff"
    },
    process:[
      {
        icon:'http://cdn.phi-block.com/templates/default/images/home_icon1.png',
        step:'购买斐讯产品，完成支付',
      },
      {
        icon:'http://cdn.phi-block.com/templates/default/images/home_icon02.png',
        step:'交付托管'
      },
      {
        icon: 'http://cdn.phi-block.com/templates/default/images/home_icon2.png',
        step: '等待购买的产品发货，到斐讯数据中心'
      },
      {
        icon: 'http://cdn.phi-block.com/templates/default/images/home_icon3.png',
        step: '购买的产品到达后，由公司专业人员部署'
      },
      {
        icon: 'http://cdn.phi-block.com/templates/default/images/home_icon4.png',
        step: '产品部署完成后，开始挖矿获得收益'
      }
    ],
    news:[
      {
        img:'http://cdn.phi-block.com/templates/default/images/home_news1.jpg',
        title:'N1到N1M，从斐讯布局逻辑看如何抢占区块链红利？',
        desc:'区块链在当下的火爆无需多说，但面对币圈与区块链项目火热而动荡的情况，每个人都呈现出一种复杂的心态——即蠢蠢欲动，又担心风险。',
        date:'2018-04-11'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/home_news1.jpg',
        title: '斐讯区块链交流沙龙即将开启，共商投资方法论',
        desc: '当下的区块链行业，市场表现波动不定。各方跟风入局，区块链泡沫在阳光下光彩琉璃，却一戳即破。',
        date: '2018-04-11'
      },
      {
        img: 'http://cdn.phi-block.com/templates/default/images/home_news1.jpg',
        title: '斐讯N1M首挖日即将来临 最后上车机会',
        desc: '据了解，斐讯将于4月18日盛大开启N1M首挖，这或许会给投资者们一种全新的区块链投资选择——N1M，首创矿机托管模式，一键托管；全新数字资产日日盈，抢先入局，抢占更多红利。',
        date: '2018-04-11'
      },
    ]
  },
  go:function(event){
    wx.navigateTo({
      url: '..'+event.currentTarget.dataset.url,
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