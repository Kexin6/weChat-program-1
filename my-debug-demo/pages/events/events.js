var common = require('../utils/common.js')

Page({
  data: {

  },

  clickMe: function(e) {
    console.log("被点击事件触发...");
    console.log(e);

    var customData = e.currentTarget.dataset.customdata;
    var customName = e.currentTarget.dataset.customname;
    var sex = e.currentTarget.dataset.sex;
    console.log(customData);
    console.log(customName);
    console.log(sex);

    common.sayHello("Cassie");
    common.sayGoodbye("imooc");
  }
})