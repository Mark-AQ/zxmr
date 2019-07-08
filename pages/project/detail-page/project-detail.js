// pages/project/detail-page/project-detail.js

var WxParse = require('../../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    priceData: "",
    titleData: "",
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
  onLoad: function(options) {
    var price = options.price;
    var title = options.title;
    this.setData({
      priceData: price,
      titleData: title
    });

    var article = '<p><b><font color=\"#880000\">中华神灸“眼灸”功效</font></b></p><p>中华神灸——眼灸结合了三重生物脉冲波、艾润眼精华，药艾独特配方、通过透皮给药将三大功效于一体作用与眼部，达到疏通眼部经络，放松眼周肌肉，改善眼球供血的作用，能快速提升和恢复视力，解除眼部疲劳。</p><p>10分钟可缓解眼部疲劳感——艾灸温热之性，活血行气</p><p>15分钟缓解眼部干涩——眼部按摩原理，通经活络</p><p>20分钟提升视力——温热药性渗透，活血化瘀</p><p>使用结束后，你的视力会提升，眼睛透亮的像被水洗过一样水润，眼部的各种症状基本消除。</p><p><b> <span style=\"color: rgb(136, 0, 0);\">中华神灸眼灸亮点与功能</span></b></p><p><u>独特“生物脉冲波“设计：</u></p><p>三重不同波段的“生物脉冲波”，结合眼灸舒适的轮廓和硅胶凸点，循序渐进的激活眼部周围的神经系统，快速让眼睛周围神经和经络的放松，达到通经活络的功效，促进头、眼、面部气血得到供应，让人瞬间神清气爽，精神倍增。</p><p>第一重生物脉冲波：3—5分钟可激活眼部的神经系统，眼睛会有放松和舒适感。</p><p>第二重生物脉冲波：1—2分钟激活眼部的神经元，整个眼部有温暖舒适感；</p><p>第三重生物脉冲波：3—5分钟激活经络系统，灸之透诸经，治百病。</p><p><u>艾润眼精华独有配方：</u></p><p>昊美国际与上海中医药大学针灸推拿研究所联合，专属于眼睛的“艾润眼精华”配方，可快速通过艾灸加热时将精华的有效成分释放出来，通过眼周皮肤及穴位吸收。一方面可以保持眼周毛细血管水液充足，15分钟滋润眼周及眼球；另一方面润眼精华液中的中草药精华可以通过艾灸的热气蒸腾进入毛孔穴位，提升视力，改善细纹，调理眼睛的亚健康，让眼睛如天池一般的清澈动人。</p><p><b><font color=\"#880000\">安全、携带、适用范围广泛</font></b></p><p>   中华神灸“眼灸”设计体积较小，配有移动电。适用于任何场合，任何人群，任何时间。“眼灸”运用艾灸的温热之性结合双控温技术，释放出眼睛最适宜、最科学的39.3的温度。针对儿童的假性近视和老花眼，都可安全使用。</p><p><br></p>';
    var that = this;
    WxParse.wxParse('article', 'html', article, that, 5);

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