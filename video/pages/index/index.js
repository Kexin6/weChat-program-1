const app = getApp()

Page({
  data: {
    // 用于分页的属性
  //  totalPage: 1,
  //  page: 1,
  //  videoList: [],

    screenWidth: 350,
    serverUrl: "",

    searchContent: ""
  },

  onLoad: function (params) {
    var me = this;
    var screenWidth = wx.getSystemInfoSync().screenWidth();

    me.setData({
      screenWidth: screenWidth,
 
    });
  },

})
