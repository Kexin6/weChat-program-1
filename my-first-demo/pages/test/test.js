Page({
 data: {
   mytxt: '这是一个test页面',
    color: 'green'
  },
  onLoad: function() {
    var appInstance = getApp()
    console.log(appInstance.courseName); // I am global data
    this.getData({
      mytxt: appInstance.courseName
      //替换了wxml中的mytxt文本
    });
  }
    
});
