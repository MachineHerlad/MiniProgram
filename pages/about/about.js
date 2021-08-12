// pages/about/about.js

// getApp（）获取 APP（）产生的实例对象
const app =  getApp()
console.log(app.globalData.name);

// 注册一个页面
Page({
  handleGetUserInfo(event) {
    console.log(event);
  }

})