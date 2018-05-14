//app.js
App({
  onLaunch: function () {
    // 获取设备信息
    try{
      var res = wx.getSystemInfoSync();
      // console.log(res.windowHeight);
      this.globalData.height = res.windowHeight;
    }catch(e){
      console.log(e);
    }
  },
  globalData: {
    userInfo: null,
    height:null
  }
})