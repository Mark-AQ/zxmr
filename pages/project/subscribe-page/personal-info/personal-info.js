// pages/project/subscribe-page/personal-info/personal-info.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    wokes:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = require('../../../../data/beautician-data.js')
    let index = options.id;
    let dic = data.beauticianData[index - 1];
    // let dic = data.beauticianData[0];
    this.setData({
      model: dic
    })
    let name = dic.name;
    wx.setNavigationBarTitle({
      title: name,
    })
    
    var data = require('../../../../data/recommend-data.js')
    this.setData({
      wokes: data.homeData[0]
    })
  },

  // 点击了二维码
  qrCodeTap: function () {
    console.log("点击了二维码");
  },

  // 拨打电话
  dialPhoneTap: function () {
    wx.makePhoneCall({
      phoneNumber: '0755-23611550' // 仅为示例，并非真实的电话号码
    })
  },

  subscribeBtnTap: function () {
    console.log("点击了预约");
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