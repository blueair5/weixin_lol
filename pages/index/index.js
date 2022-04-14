// pages/index/index.js
import {request} from "../../request/request";
Page({

    /**
     * 页面的初始数据
     */
    data: {
       result:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    request({url:"https://apps.game.qq.com/cmc/zmMcnTargetContentList?r0=jsonp&page=2&num=16&target=23&source=web_pc"})
    .then(result => {
      var strD = result.data.replace('callback(', '');
    var str = strD.substring(0, strD.length - 2);
          // console.log(str);
    var rest = JSON.parse(str);
    this.setData({
        result:rest.data.result
    });
    });
   
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