
Page({
  data:{
    placeholder:"UserID",
    password:"password",
    arr:[
      { name: "HTML", value: "HTML" },
      { name: "CSS", value: "CSS" },
      { name: "JavaScript", value: "JavaScript" },
      { name: "Java", value: "Java" },
      { name: "C", value: "C" },
      { name: "SQL", value: "SQL" },
      { name: "Spring", value: "Spring" },
      { name: "C++", value: "C++" },
      { name: "Python", value: "Python" },
    ],
    arr2:[
      { name: "HTML", value: "HTML" },
      { name: "CSS", value: "CSS" },
      { name: "JavaScript", value: "JavaScript" },
      { name: "Java", value: "Java" },
      { name: "C", value: "C" },
      { name: "SQL", value: "SQL" },
      { name: "Spring", value: "Spring" },
      { name: "C++", value: "C++" },
      { name: "Python", value: "Python" },
    ],
    dateshow: "YYYY-MM-DD",
    regionshow: "省-市-区",
    sexValue:"sex",
    age: 0,
    text:"备注",
    allValue:""
    
   


  },
  confirmevent:function(e) {
    var id = e.detail.value;
    this.setData({
      placeholder: id
    });
  },
  confirmEvent2:function(e) {
    var pw = e.detail.value;
    this.setData({
      password: pw
    });
  },
  checkboxchange:function(e) {
    var arr = e.detail.value;
    this.setData({
      arr2: arr
    });
  },
  datechange: function (e) {
    var date = e.detail.value;
    this.setData({
      dateshow: date
    })
  },
  datecancel: function (e) {
    this.setData({
      dateshow: "YYYY-MM-DD"
    })
  },
  regionchange: function (e) {
    var region = e.detail.value;
    this.setData({
      regionshow: region
    })
  },
  regioncancel: function (e) {
    this.setData({
      regionshow: "省-市-区"
    })
  },
  sex:function(e) {
    var choice = e.detail.value;
    this.setData({
      sexValue : choice
    });

  },
  agechange:function(e) {
    var agevar = e.detail.value;
    this.setData({
      age:agevar
    });
  },
  textconfirm:function(e) {
    var textvar = e.detail.value;
    this.setData({
      text: textvar
    });
  },
  submit:function(e) {
    debugger;
    console.log(e.detail.value);
  }



})
