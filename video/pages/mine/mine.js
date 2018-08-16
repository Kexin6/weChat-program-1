//获取应用实例
const app = getApp()

Page({
  data: {
    faceUrl: "../resource/images/noneface.png",
    isMe: true,
  },

  onLoad: function (params) {
    //Get id
    var me = this;
    //全局对象
    var user = app.userInfo;
   
    wx.showLoading({
      title: '请耐心等待... ',
    });

    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/user/query?userId=' + user.id,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        //cancel the loading when success
        wx.hideLoading();
        var status = res.data.status;
        if (status == 200) {
          var userInfo = res.data.data;
          var faceUrl = "../resource/images/noneface.png"
          if (userInfo.faceImage != null && userInfo.faceImage != '' && userInfo.faceImage != undefined) {
            faceUrl = serverUrl + userInfo.faceImage;
          }
          
          //设置关注，粉丝与获赞等对象相关属性
          me.setData({
            faceUrl: faceUrl,
            followCounts:userInfo.followCounts,
            fansCounts:userInfo.fansCounts,
            receiveLikeCounts:userInfo.receiveLikeCounts,
            nickname: userInfo.nickname,
          });

        } else if (status == 500) {
          wx.showToast({
            title: res.data.msg,
            icon:'none',
            duration:2000,
          })
        }
      }
    })

  },

  logout: function(){
    var user = app.userInfo;
    var serverUrl = app.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // 调用后端
    wx.request({
      url: serverUrl + '/logout?userId=' + user.id,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading();
        if (res.data.status == 200) {
          // 登录成功跳转 
          wx.showToast({
            title: '注销成功',
            icon: 'success',
            duration: 2000
          });
          //app.userInfo = null;
          // 注销以后，清空缓存
          wx.removeStorageSync("userInfo")
          // 页面跳转
          wx.redirectTo({
            url: '../userLogin/login',
          })
          
        }
      }
    })
  },

  changeFace: function () {
    var setme = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);

        wx.showLoading({
          title: 'uploading...',
        })
        var serverUrl = app.serverUrl;
        // fixme 修改原有的全局对象为本地缓存
       // var userInfo = app.getGlobalUserInfo();

        wx.uploadFile({
          url: serverUrl + '/user/uploadFace?userId=' + app.userInfo.id,
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'application/json', // 默认值
            //'headerUserId': userInfo.id,
            //'headerUserToken': userInfo.userToken
          },

          //If successful
          success: function (res) {
            var data = JSON.parse(res.data);
            console.log(data);
            wx.hideLoading();
            if (data.status == 200) {
              wx.showToast({
                title: '上传成功!',
                icon: "success",
              });

              var imageUrl = data.data;
              setme.setData({
                faceUrl: serverUrl + imageUrl
              });

            //Server's issue
            } else if (data.status == 500) {
              wx.showToast({
                title: data.msg,
              });
            
            } else if (res.data.status == 502) {
              wx.showToast({
                title: res.data.msg,
                duration: 2000,
                icon: "none",
                success: function () {
                  wx.redirectTo({
                    url: '../userLogin/login',
                  })
                }
              });

            }

          }
        })


      }
    })
  },
  changePic: function () {
    var setme = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);

        wx.showLoading({
          title: 'uploading...',
        })
        var serverUrl = app.serverUrl;
        // fixme 修改原有的全局对象为本地缓存
        // var userInfo = app.getGlobalUserInfo();

        wx.uploadFile({
          url: serverUrl + '/user/uploadFace?userId=' + app.userInfo.id,
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'application/json', // 默认值
            //'headerUserId': userInfo.id,
            //'headerUserToken': userInfo.userToken
          },

          //If successful
          success: function (res) {
            var data = JSON.parse(res.data);
            console.log(data);
            wx.hideLoading();
            if (data.status == 200) {
              wx.showToast({
                title: '上传成功!',
                icon: "success",
              });

              var imageUrl = data.data;
              setme.setData({
                faceUrl: serverUrl + imageUrl
              });

              //Server's issue
            } else if (data.status == 500) {
              wx.showToast({
                title: data.msg,
              });

            } else if (res.data.status == 502) {
              wx.showToast({
                title: res.data.msg,
                duration: 2000,
                icon: "none",
                success: function () {
                  wx.redirectTo({
                    url: '../userLogin/login',
                  })
                }
              });

            }

          }
        })


      }
    })
  },

  uploadVideoEvent: function() {
    var me = this;
    wx.chooseVideo({
      sourceType: ['album'],
      success: function (res) {
        console.log(res);
        var duration = res.duration;
        var height = res.height;
        var width = res.width;
        var tempVideoUrl = res.tempFilePath;
        var tempCoverUrl = res.thumbTempFilePath;
        
        if (duration > 12) {
          wx.showToast({
            title: '视频长度请在10s以内',
            icon: 'none',
            duration: 3000
          })
        } else {
          //Choose bgm
          wx.navigateTo({
            url: '../chooseBgm/bgm?duration=' + duration + "&height=" + height + "&width=" + width + "&tempVideoUrl=" + tempVideoUrl + "&tempCoverUrl=" + tempCoverUrl,
          })
        }
      }
    })
  },

})



