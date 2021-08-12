Page({
  data:{
    students:[
      {name:'111'},
      {name:'222'},
      {name:'333'},
      {name:'444'},
      {name:'555'}
    ],
    counter:0
  },
  increment() {
    this.setData({
      counter: ++this.data.counter
    })
  },
  decrement() {
    this.setData({
      counter: --this.data.counter
    })
  }
})