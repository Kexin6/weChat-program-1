const app = getApp()

Page({
    data: {

    },

    onLoad: function (params) {
      var me = this;
      var redirUrl = params.redirUrl;
      // debugger;
      if (redirUrl != null && redirUrl != undefined && redirUrl != '') {
        redirUrl = redirUrl.replace(/#/g, "?");
        redirUrl = redirUrl.replace(/@/g, "=");

        me.redirUrl = redirUrl;
      }
    },

    doLogin: function(e) {
      var me = this;
      var formObject = e.detail.value;
      var username = formObject.username;
      var password = formObject.password;

      // 简单验证: 检测用户名密码是否为空
      if (username.length == 0 || password.length == 0) {
        //api：相当于alert 弹窗
        wx.showToast({
          title: '用户名或密码不能为空',
          icon: 'none',
          duration: 2000
        })
      } else {
        var serverUrl = app.serverUrl;
        //Important: In case of system delay
        wx.showLoading({
          title: '请耐心等待...',
        });
        wx.request({
          url: serverUrl + '/login',
          method: "POST",
          //json对象
          data: {
            username: username,
            password: password
          },
          header: {
            'content-type': 'application/json' // 默认值
          },

          //回调函数
          success: function(res) {
            console.log(res.data);
            //cancel the loading when success
            wx.hideLoading();
            var status = res.data.status;
            if (status == 200) {
              //交互反馈-弹框
              wx.showToast({
                title: "登录成功!",
                icon: 'success',
                duration: 1000
              }),

              app.userInfo = res.data.data;
              //app.setGlobalUserInfo(res.data.data);
              // 页面跳转
              // if (redirUrl != null && redirUrl != undefined && redirUrl != '') {
              //   wx.redirectTo({
              //     url: redirUrl,
              //   })
              // } else {
              //   wx.redirectTo({
              //     url: '../mine/mine',
              //   })
              // }
              wx.navigateTo({
                url: '../mine/mine',
              })
                
            } else if (status == 500) {
              //失败
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 2000
              })
            }
          }
        })
      }
    },

    goSignUpPage:function() {
      wx.navigateTo({
        url: '../userRegist/regist',
      })
    }
})