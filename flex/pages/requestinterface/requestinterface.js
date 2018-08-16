
Page({
  data:{
   

  },
  clickMe:function() {
    wx.request({
      url: 'https://www.imooc.com', 
      data: {
        id:1001,
        name:"imooc"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }
 
})
