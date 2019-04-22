// pages/project/project-page/project.js

var a = -1;
var b = -1;
var c = -1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyArrs: [],
    salesArrs: [],
    statesIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var data = require('../../../data/project-classify-data.js')
    this.setData({
      classifyData: data.classifyData
    })

    var recommend = require('../../../data/recommend-data.js')
    this.setData({
      homeData: recommend.homeData
    })

  },

/// 跳转详情
  onCellTap: function (options) {
    var price = options.currentTarget.dataset.price;
    var title = options.currentTarget.dataset.title;
    console.log(price);
    wx.navigateTo({
      url: '/pages/project/detail-page/project-detail?price=' + price + '&title=' + title
    })
  },


  changeBoxBtn: function (options) {
    var data = this.data.classifyData;
    var num = options.target.dataset.num;
    var tempArr = [];
    var index = 0;
    num = Number(num);
    if (num == 0) {
      tempArr = data;
      index = num + 1;
      a += 1;
      b = -1;
      c = -1;
      if (a%2 == 1) {
        index = 5;
      }
      this.setData({
        classifyArrs: tempArr,
        statesIndex: index
      })
      console.log(tempArr);
    } else if (num == 1) {
      index = num += 1;
      b += 1;
      a = -1;
      c = -1;
      if (b % 2 == 1) {
        index = 5;
      }
      console.log(index);
      this.setData({
        statesIndex: index,
        salesArrs: [{indx: 1, text: "从低到高" }, {indx: 2, text: "从高到低" }],
        classifyArrs: tempArr
      })
      console.log(this.data.salesArrs);
    } else if (num == 2) {
      index = num + 1;
      c += 1;
      a = -1;
      b = -1;
      if (c % 2 == 1) {
        index = 5;
      }
      this.setData({
        statesIndex: index,
        salesArrs: [{ indx: 1, text: "从低到高" }, { indx: 2, text: "从高到低" }]
      })
    }
  },

  coverTap: function () {
    a = -1;
    b = -1;
    c = -1;

    this.setData({
      statesIndex: 6,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})