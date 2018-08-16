Page({
  data:{
    array:[1,2,3,4,5,6,7,8,9,0],
    arrayObj:[
      {id:1001, name:"Jack"},
      { id: 1002, name: "Rose" },
      { id: 1003, name: "Heal" },
      { id: 1004, name: "Cassie" },
      { id: 1005, name: "Candy" },

    ],
    showme:"Select a person.",
    subObj:[
      {id:1001, subject:"Math"},
      { id: 1002, subject: "English" },
      { id: 1003, subject: "Chinese" },
      { id: 1004, subject: "Science" },
      { id: 1005, subject: "Programming" }
    ],
    show:"Select a course.",
    arrayMulti:[
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    ],
    arrayObjMulti:[
      [
        { id: 1001, name: "Jack" },
        { id: 1002, name: "Rose" },
        { id: 1003, name: "Heal" },
        { id: 1004, name: "Cassie" },
        { id: 1005, name: "Candy" },

      ],
      [
        { id: 1001, name: "Jack" },
        { id: 1002, name: "Rose" },
        { id: 1003, name: "Heal" },
        { id: 1004, name: "Cassie" },
        { id: 1005, name: "Candy" },

      ],
    ],
    timeshow:"Time",
    dateshow:"Date",
    regionshow:"Region"

  },
  changeme: function(e){
    var index = e.detail.value;
    console.log("index is: " + index);
    var id = this.data.arrayObj[index].id;
    var name = this.data.arrayObj[index].name;
    this.setData({
      showme:id + name
    });
  },
  cancelme: function (e) {
    console.log("cancel event is triggered");
  },
  dochange: function(e) {
    var index = e.detail.value;
    console.log("index: " + index);
    var id = this.data.subObj[index].id;
    var subject = this.data.subObj[index].subject;
    this.setData({
      show:id + " " + subject
    });
  },
  docancel: function(e) {
    console.log("Cancelled");
  },
  coloumchange:function(e) {
    console.log(e.detail);
  },
  changemeMulti:function(e) {
    var indexs = e.detail.value;
    var arrayObjMulti = this.data.arrayObjMulti;

    for (var i = 0; i < indexs.length; i ++) {
        var indextemp = indexs[i];
        var id = arrayObjMulti[i][indextemp].id;
        var name = arrayObjMulti[i][indextemp].name;
        console.log(id + ' ' + name);
    }
  },
  timechange:function(e) {
    var time = e.detail.value;
    this.setData({
      timeshow: time
    })
  },
  timecancel:function(e) {
    console.log("Time is cancelled");
    this.setData({
      timeshow: "Time"
    })
  },
  datechange:function(e) {
    var date = e.detail.value;
    this.setData({
      dateshow: date
    })
  },
  datecancel: function (e) {
    console.log("Date is cancelled");
    this.setData({
      dateshow: "Date"
    })
  },
  regionchange: function (e) {
    var region = e.detail.value;
    this.setData({
      regionshow: region
    })
  },
  regioncancel: function (e) {
    console.log("Region is cancelled");
    this.setData({
      regionshow: "Region"
    })
  },

  

})
