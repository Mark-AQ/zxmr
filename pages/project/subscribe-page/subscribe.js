// pages/project/subscribe-page/subscribe.js  预约
Page({
  // 
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = require('../../../data/beautician-data.js')
    this.setData({
      beauticianData: data.beauticianData
    })
  },

  /// 拨打电话 
  phoneTap: function () {
    wx.makePhoneCall({
      phoneNumber: '0755-23611550' // 仅为示例，并非真实的电话号码
    })
  },
  /// 预约
  subscribeTap: function () {
    console.log("点击率预约");
  },

  // 个人详情
  cellItemTap: function (event) {
    console.log(event);
    let pageId = event.currentTarget.dataset.pageid;
    wx.navigateTo({
      url: '/pages/project/subscribe-page/personal-info/personal-info?id=' + pageId, 
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