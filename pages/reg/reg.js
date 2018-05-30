// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    codeURL:'http://172.17.170.100/block/image_captcha.php',
    isSendMsgCode:false,
    msgcode:'发送验证码',
    timer:null,
    count:5,
    phone:'',
    pwd:'',
    repwd:'',
    code:''
  },
  // 获取图片验证码输入
  getCode:function(e){
    this.setData({
      code:e.detail.value
    })
  },
  // 输入手机号
  getPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  // 失去焦点后，验证手机格式
  checkPhone:function(){
    if(this.data.phone === ''){
      return ;
    }
    var reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    var _this = this;
    if(reg.test(this.data.phone)){
      // 手机格式正确
    }else{
      // 手机格式错误
      wx.showToast({
        icon:"none",
        title: '手机格式错误',
        success:function(){
          _this.setData({
            phone:''
          })
        }
      })
    }
  },
  // 获取密码
  getPwd:function(e){
    this.setData({
      pwd:e.detail.value
    })
  },
  getRepwd:function(e){
    this.setData({
      repwd:e.detail.value
    })
  },
  // 验证两次密码是否一致
  checkPwd:function(){
    if(this.data.repwd === ''){
      return;
    }else{
      if(this.data.repwd !== this.data.pwd){
        // 不相等
        var _this = this;
        wx.showToast({
          icon:'none',
          title: '密码不一致',
          success:function(){
            _this.setData({
              repwd:''
            })
          }
        })
      }
    }
  },
  // 更改图片验证码
  changeCode:function(){
    var base = this.data.codeURL.split('?')[0];
    this.setData({
      codeURL: base + "?" + new Date().getTime()
    })
  },
  sendMsgCode:function(){
    // 先判断 验证码是否正确
    // 如果不正确则重新生成一张验证码图片，并提示错误

    //

    // 当已经点了发送后，不能再点击。
    if (!this.data.isSendMsgCode){
      // 发送验证码
      // 开始倒计时
      console.log('倒计时')
      this.countDown();
      
    }else{
      console.log('正在倒计时')
    }
  },  
  countDown:function(){
    
    var _this = this;
    if(this.data.count === -1){
      
      this.setData({
        timer:null,
        msgcode: '发送验证码',
        isSendMsgCode: false,
        count:5
      })
    }else{
     
      this.setData({
        timer: setTimeout(function () {
          var count = _this.data.count;
          _this.setData({
            msgcode: count + "秒重新发送",
            count: --count,
            isSendMsgCode: true,
          })
          _this.countDown();
        }, 1000)
      })
    }
   
  },
  // 提交
  submit: function () {
    var _this = this;
    if(this.data.phone === '' || this.data.code === '' || this.data.pwd === '' || this.data.repwd === '')    {
      // 不能为空
      wx.showToast({
        title: '不能为空',
        icon:'none',
      })
    }else{
      wx.request({
        url: getApp().globalData.baseUrl + 'user/register',
        header:{
          'content-type': 'application/x-www-form-urlencoded'
        },
        method:'POST',
        data:{
          password:_this.data.pwd,
          phone:_this.data.phone,
          captcha:_this.data.code
        },
        success:function(res){
          // 接口调用成功
          console.log(res);
          if(res.data.status){
            // 注册成功
            wx.showToast({
              title: '注册成功',
            })
          }else{
            wx.showToast({
              title: res.data.msg,
              icon:'none',
              success:function(){
                // 重置所有变量和验证码
                _this.setData({
                  codeURL: 'http://172.17.170.100/block/image_captcha.php',
                  phone: '',
                  pwd: '',
                  repwd: '',
                  code: ''
                })
              }
            })
          }
        },
        fail:function(){
          // 接口调用失败
          wx.showToast({
            title: "接口调用失败",
            icon: 'none',
            success: function () {
              // 重置所有变量和验证码
              _this.setData({
                codeURL: 'http://172.17.170.100/block/image_captcha.php',
                phone: '',
                pwd: '',
                repwd: '',
                code: ''
              })
            }
          })
        }
      })
    }
  },
  back:function(){
    wx.navigateBack({
      delta:1
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