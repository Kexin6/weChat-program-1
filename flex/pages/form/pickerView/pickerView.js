Page({
 data:{
   year:[1990,1995,2000,2005,2010,2015,2020],
   month:[1,2,3,4,5,6,7,8,9,10,11,12],
   day:[1,5,10,15,20,25,30],
   myvalue:"choose date",
 },
 changeme:function(e) {
   var index = e.detail.value;
   var year = this.data.year[index[0]];
   var month = this.data.month[index[1]];
   var day = this.data.day[index[2]];
  this.setData({
    myvalue : "Date: " + year + "-" + month + "-" + day
  });

 }
})
