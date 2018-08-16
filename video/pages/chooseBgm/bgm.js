const app = getApp()

Page({
    data: {
     bgmList: [],
     serverUrl: "",
     videoParas: {}
    },

    onLoad: function (params) {
      var me = this;
      console.log(params);
      me.setData({
        videoParas: params,
      });
      wx.showLoading({
        title: '请耐心等待…',
      })
      var serverUrl = app.serverUrl;
      wx.request({
        url: serverUrl + '/bgm/list',
        method: "POST",
        header: {
          'content-type':'application/json'
        },
        success: function(res) {
          console.log(res.data);
          wx.hideLoading();
          if (res.data.status == 200) {
            var bgmList = res.data.data;
            me.setData({
              bgmList: bgmList,
              serverUrl: serverUrl
            });
          }
        }
      })
    },
    upload: function (e) {
      //作用域对象
      var me = this;
      var bgmId = e.detail.value.bgmId;
      var description = e.detail.value.description;
      console.log("bgmId: " + bgmId);
      console.log("Description: " + description);

      var duration = me.data.videoParas.duration;
      var height = me.data.videoParas.height;
      var tempVideoUrl = me.data.videoParas.tempVideoUrl;
      var tempCoverUrl = me.data.videoParas.tempCoverUrl;
      var width = me.data.videoParas.width;

      wx.showLoading({
        title: '上传中...',
      })
      var serverUrl = app.serverUrl;
      // fixme 修改原有的全局对象为本地缓存
     // var userInfo = app.getGlobalUserInfo();

      wx.uploadFile({
        url: serverUrl + '/video/upload',
        formData: {
          userId: app.userInfo.id,    // fixme 原来的 app.userInfo.id
          bgmId: bgmId,
          description: description,
          videoSeconds: duration,
          videoHeight: height,
          videoWidth: width,
        },
        filePath: tempVideoUrl,
        //与后端一样
        name: 'file',
        header: {
          'content-type': 'application/json', // 默认值
         // 'headerUserId': app.userInfo.id,
         // 'headerUserToken': app.userInfo.userToken
        },
        
        success: function (res) {
         var data = JSON.parse(res.data);
         console.log(res);
          wx.hideLoading();
          if (data.status == 200) {
            wx.showToast({
              title: '上传成功!',
              icon: "success"
            });
            // 上传成功后跳回之前的页面
            wx.navigateBack({
              delta: 1,
            })

           var videoId = data.data;

            wx.showLoading({
             title: '上传中...',
             })

             wx.uploadFile({
               url: serverUrl + '/video/uploadCover',
               formData: {
                 userId: app.userInfo.id,
                 videoId: videoId
               },
               filePath: tempCoverUrl,
               name: 'file',
               header: {
                 'content-type': 'application/json' // 默认值
             },
              success: function (res) {
                 var data = JSON.parse(res.data);
                 wx.hideLoading();
                 if (data.status == 200) {
                   wx.showToast({
                     title: '封面上传成功!',
                    icon: "success"
                   });
                   wx.navigateBack({
                     delta: 1,
                   })
                } else {
                   wx.showToast({
                    title: '封面上传失败!',
                     icon: "none"
                   });
                 }

               }
             })


         } else if (res.data.status == 502) {
            wx.showToast({
              title: 'res.data.msg',
              duration: 2000,
              icon: "none"
            });
            wx.redirectTo({
              url: '../userLogin/login',
            })
          } else {
            wx.showToast({
              title: '上传失败~~',
              icon: "none"
            });
          }

        }
      })
    }
})
