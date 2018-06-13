// pages/confirm/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check:false,
    list:[],
    address:null,
    total:0,
    name1:'111'
  },
  addAddress:function(){
    wx.navigateTo({
      url: '../c_addAddress/c_addAddress',
    })
  },
  changeAddress:function(){
    var _this = this;
    wx.navigateTo({
      url: '../changeAddress/changeAddress?addr_id='+_this.data.address.address_id,
    })
  },
  add:function(){
    var _this = this;
    var arr =[];
    for(var i=0;i<this.data.list.length;i++){
      var obj = {};
      obj.pro_id = this.data.list[i].pro_id;
      obj.count = this.data.list[i].count;
      arr.push(obj);
    }

    if (this.data.address == null || this.data.address == ''){
      wx.showToast({
        title: '未选择地址',
        icon:'none'
        
      })

      return ;
    }
    wx.request({
      url: getApp().globalData.baseUrl + 'order/add',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        user_id:wx.getStorageSync('info').user_id,
        pro_list:JSON.stringify(arr),
        address_id:_this.data.address.address_id
      },
      success:function(res){
        console.log(res.data);
        wx.showToast({
          title: '购买成功',
          success:function(){
            wx.removeStorageSync('addr');
            wx.redirectTo({
              url: '../order/order?type=0',
            })
          }
        })
        
      }
    })
  },
  checkboxChange:function(){
    if(!this.data.check){
      // 如果当前未选中，点击之后，应该弹出一个提示框
      this.setData({
        check: this.data.check
      })
    }else{
      this.setData({
        check: !this.data.check
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load')
    var _this = this;
    
    this.setData({
      list: JSON.parse(options.list)
    },function(){
      // 计算总价格
      var sum = 0;

      for(var i=0;i<_this.data.list.length;i++){
        sum = sum + _this.data.list[i].count * _this.data.list[i].price;
      }
      this.setData({
        total:sum
      })
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
    console.log('show')
    var _this = this;
    // 首先从缓存获取地址
    if(wx.getStorageSync('addr')!==''){
      this.setData({
        address: wx.getStorageSync('addr')
      })

      return ;
    }

    // 获取地址
    // 获取默认地址
    wx.request({
      url: getApp().globalData.baseUrl + 'address/list',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        user_id: wx.getStorageSync("info").user_id
      },
      success: function (res) {
        console.log(res.data);
        if(!res.data.status){
          return ;
        }
        for (var i = 0; i < res.data.data.addresses.length; i++) {
          if (res.data.data.addresses[i].is_default == 1) {
            console.log('1111');
            _this.setData({
              address: res.data.data.addresses[i]
            })
            break;
          }
        }
      }
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