// pages/hero/hero.js
import regeneratorRuntime from '../../lib/runtime/runtime';
import {request} from "../../request/request";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hero:{},
        skins:[],
        spells:[],
        image_null:'https://game.gtimg.cn/images/lol/act/img/skin/big20000.jpg'
    },
    heroId: 0,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.heroId = options.id;
        console.log(this.heroId);
        this.getHeroPerson();
    },

    async getHeroPerson(){
        const url = "https://game.gtimg.cn/images/lol/act/img/js/hero/" +this.heroId+".js";
        const hero = await request({url});
        
        this.setData({
            hero:hero.data.hero,
            skins:hero.data.skins,
            spells:hero.data.spells
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