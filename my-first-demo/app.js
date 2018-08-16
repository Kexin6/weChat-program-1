//app.js
App({
  onLaunch: function (options) {
    console.log("Trigger onLaunch")
  },
  onShow: function (options) {
    console.log("Trigger onShow")
  },
  onHide: function () {
    console.log()
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: 'I am global data',
  courseName: 'coding'
})