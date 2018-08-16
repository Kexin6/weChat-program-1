Page({
 data: {
   mytxt: '这是一个test页面',
    color: 'green'
  },
  onLoad: function() {
    var appInstance = getApp()
    console.log(appInstance.courseName); // I am global data
    this.setData({
      mytxt: appInstance.courseName
      //替换了wxml中的mytxt文本
    });
 },
 onReady: function () {
   // Do something when page ready.
   console.log("触发 onReady")
 },
 onShow: function () {
   // Do something when page show.
   console.log("触发 onShow")
 },
 onHide: function () {
   // Do something when page hide.
   console.log("触发 onHide")
 },
 onUnload: function () {
   // Do something when page close.
   console.log("触发 onUnload")
 },
 clickMe: function() {
  // wx.navigateTo({
    // url: "../another/anothertest"
    wx.redirectTo({
    url: "../another/anothertest"
   })
 }
    
});
