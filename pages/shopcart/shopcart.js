// pages/shopcart/shopcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    products:[
      {
        name:"天天链托管版N1M",
        price:'2497.01',
        count:1,
        src:'http://www.phi-block.com/upload/news/1523832120918458645.png',
        isSelect:false,
      },
      {
        name: "以太算力服务器-C8",
        price: '84000.00',
        count: 1,
        src: 'http://www.phi-block.com/upload/news/1523832130265190991.png',
        isSelect: false,
      },
      {
        name: "天天链托管版N1M",
        price: '2497.01',
        count: 1,
        src: 'http://www.phi-block.com/upload/news/1523832120918458645.png',
        isSelect: false,
      },
      {
        name: "以太算力服务器-C8",
        price: '84000.00',
        count: 1,
        src: 'http://www.phi-block.com/upload/news/1523832130265190991.png',
        isSelect: false,
      },
      {
        name: "天天链托管版N1M",
        price: '2497.01',
        count: 1,
        src: 'http://www.phi-block.com/upload/news/1523832120918458645.png',
        isSelect: false,
      },
      {
        name: "以太算力服务器-C8",
        price: '84000.00',
        count: 1,
        src: 'http://www.phi-block.com/upload/news/1523832130265190991.png',
        isSelect: false,
      }
    ],
    isAllSelect:false,
    total:"0"
  },
  add:function(e){
    var _this = this;
    var index = parseInt(e.currentTarget.dataset.index);
    this.data.products[index].count = this.data.products[index].count + 1;
    this.setData({
      products: _this.data.products
    })
    this.caculateTotalMoney();
  },
  deletea: function (e) {
    var _this = this;
    var index = parseInt(e.currentTarget.dataset.index);
    if (this.data.products[index].count === 1){
      // 当前数量是1，当再次减1时，即从购物车中删除该产品
      this.deleteProduct(index);
    }else{
      this.data.products[index].count = this.data.products[index].count - 1;
    }
    
    this.setData({
      products: _this.data.products
    })
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