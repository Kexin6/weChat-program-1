Page({
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    mycontent:'<img class="course-banner" src="//img1.mukewang.com/szimg/5ab9be440001b21f05400300.jpg">',
    mycontent2:[
      {
        name: "img",
        attrs:{
          class: "course-banner",
          src: "//img1.mukewang.com/szimg/5ab9be440001b21f05400300.jpg"
        }

      }
    ],
    myPercent: 30 
  },
  addPercent: function(){
    var newPercent = this.data.myPercent + 20;
    this.setData({
      myPercent: newPercent
    })
  }
})