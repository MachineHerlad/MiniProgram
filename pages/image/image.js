// pages/image/image.js
Page({
  data: {
    imagePath:'',
    nowTime: new Date().toLocaleString(),
    isActive:false
  },
  handleTextChange() {
    this.setData({
      isActive : !this.data.isActive
    })
  },
  onLoad() {
    /* setInterval( () => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000) */
  },
  handleImageChoose() {
    wx.chooseImage({
      success:(res) => {
        const path = res.tempFilePaths[0]

        this.setData({
          imagePath:path
        })
      }
    })
  }
})