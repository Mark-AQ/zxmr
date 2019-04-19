// pages/project/home-page/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrls: [
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3581593367,3870380999&fm=26&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555323084660&di=ce065d088eb02f0e7b7c0c034b4cb28c&imgtype=0&src=http%3A%2F%2Ffile16.zk71.com%2FFile%2FCorpEditInsertImages%2F2018%2F05%2F30%2Fsheji-9336_20180530104844.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555323084659&di=291a8ef45fa2022e5a236c7960ed0361&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fs%2F18%2F1463136052159.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555323084658&di=c400cc30a2ceb40987628c3a0a3f7ad2&imgtype=0&src=http%3A%2F%2Fimg.zx123.cn%2FResources%2Fzx123cn%2Fuploadfile%2F2016%2F1209%2F8ebbbd901412c09455cc438a38d11e1a.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555323084652&di=f8e2da5f7b5381325199f24c674773e6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b2e4577dc7d70000018c1bab21e1.jpg%40900w_1l_2o_100sh.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = require('../../../data/recommend-data.js')
    this.setData({
      homeData: data.homeData
    })
  },

  // 跳转到公司简介
  companyInfoTap: function() {
    wx.navigateTo({
      url: '/pages/project/home-page/company-info/company-info'
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})