// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[
      
    ],
    isAllSelect:false,
    total:"0"
  },
  // 下单
  gopay:function(){
    var arr = [];
    for(var i = 0;i<this.data.products.length;i++){
      if (this.data.products[i].isSelect){
        arr.push(this.data.products[i])
      }
    }
    // 
    if(arr.length === 0){
      wx.showToast({
        title: '未选中任何产品',
        icon:'none'
      })
    }else{
      wx.navigateTo({
        url: '../confirm/confirm?list=' + JSON.stringify(arr),
      })
    }
    
  },
  add:function(e){
    var _this = this;

    // 购物车产品+1 
    var index = parseInt(e.currentTarget.dataset.index);
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
          pro_id: _this.data.products[index].pro_id,
          user_id: wx.getStorageSync("info").user_id
        },
        success: function (res) {
          console.log(res);
          wx.hideLoading();
          _this.data.products[index].count = parseInt(_this.data.products[index].count) + 1;
          _this.setData({
            products: _this.data.products
          })
          _this.caculateTotalMoney();
        }
      })
   

    
  },
  deletea: function (e) {
    var _this = this;
    var index = parseInt(e.currentTarget.dataset.index);
    
    
    wx.showLoading({
      title: '',
    })

    if (this.data.products[index].count == 1){
      // 当前数量是1，当再次减1时，即从购物车中删除该产品
      // this.deleteProduct(index);
      wx.request({
        url: getApp().globalData.baseUrl + 'product/remove',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          pro_id: _this.data.products[index].pro_id,
          user_id: wx.getStorageSync("info").user_id
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading();
          _this.deleteProduct(index);
        }
      })
      
    }else{
      // this.data.products[index].count = this.data.products[index].count - 1;
      wx.request({
        url: getApp().globalData.baseUrl + 'product/reduce',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          pro_id: _this.data.products[index].pro_id,
          user_id: wx.getStorageSync("info").user_id
        },
        success: function (res) {
          console.log(res.data);
          wx.hideLoading();
          _this.data.products[index].count = parseInt(_this.data.products[index].count) - 1;
          _this.setData({
            products: _this.data.products
          })
          _this.caculateTotalMoney();
        }
      })
    }
    
    this.caculateTotalMoney();
  },
  select:function(e){
    var _this = this;
    var index = parseInt(e.currentTarget.dataset.index);
    if (this.data.products[index].isSelect){
      this.data.products[index].isSelect = false;
    }else{
      this.data.products[index].isSelect = true;
    }
    this.setData({
      products: _this.data.products
    })
    this.caculateTotalMoney();
  },  
  deleteProduct:function(e){
    var index = null;
    if((typeof e) === "number"){
      index = e;
    }else{
      index = parseInt(e.currentTarget.dataset.index);
    }

    var arr = this.data.products;

    arr.splice(e,1);

    var _this = this;

    this.setData({
      products: arr
    })
    this.caculateTotalMoney();
  },
  allselect:function(){
    if(this.data.isAllSelect){
      for(let i=0;i<this.data.products.length;i++){
        this.data.products[i].isSelect = false;
      }


      this.setData({
        isAllSelect:false,
        products: this.data.products
      })
    }else{
      for (let i = 0; i < this.data.products.length; i++) {
        this.data.products[i].isSelect = true;
      }


      this.setData({
        isAllSelect: true,
        products: this.data.products
      })
    }
    // 计算总额
    this.caculateTotalMoney();

  },
  caculateTotalMoney(){
    var sum = 0;
    for (let i = 0; i < this.data.products.length; i++) {
      if (this.data.products[i].isSelect) {
        sum = sum + parseFloat(this.data.products[i].price) * this.data.products[i].count
      }
    }
    this.setData({
      total: +(sum.toFixed(2))
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
    if (wx.getStorageSync("info") == null || wx.getStorageSync("info") == '' || wx.getStorageSync("info") == undefined) {
      
      return;
    }
    var _this = this;
    console.log("购物车");
    wx.showLoading({
      title: '加载数据...',
    })
    wx.request({
      url: getApp().globalData.baseUrl + 'product/cartList',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        user_id: wx.getStorageSync('info').user_id
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        if(res.data.status){
          _this.setData({
            products: res.data.data.products
          })
        }else{
          _this.setData({
            products:[]
          })
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