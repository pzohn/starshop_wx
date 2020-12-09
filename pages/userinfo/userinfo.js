var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex: '',
    phone: '',
    area: '',
    name: '',
    email: '',
    school: '',
    class: '',
    grade: '',
    card: '',
    age: '',
    nation: ''
  },

  formSubmit: function (e) {
    if (e.detail.value.school == '') {
      wx.showModal({
        title: '错误提示',
        content: '学校不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.area == '') {
      wx.showModal({
        title: '错误提示',
        content: '校区不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.grade == '') {
      wx.showModal({
        title: '错误提示',
        content: '年级不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.class == '') {
      wx.showModal({
        title: '错误提示',
        content: '班级不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.name == ''){
      wx.showModal({
        title: '错误提示',
        content: '姓名不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.sex == '') {
      wx.showModal({
        title: '错误提示',
        content: '性别不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.nation == '') {
      wx.showModal({
        title: '错误提示',
        content: '民族不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.card == '') {
      wx.showModal({
        title: '错误提示',
        content: '身份证不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.phone == '') {
      wx.showModal({
        title: '错误提示',
        content: '联系电话不能为空',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }

    if (e.detail.value.sex != '男' && e.detail.value.sex != '女') {
      wx.showModal({
        title: '错误提示',
        content: '性别格式有误',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    if (e.detail.value.age == 0 || e.detail.value.age > 30) {
      wx.showModal({
        title: '错误提示',
        content: '请输入正确的年龄',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
          }
        }
      })
      return;
    }
    var sex = 0;
    if (e.detail.value.sex == '男'){
      sex = 1;
    } 
    wx.request({
      url: 'https://www.hattonstar.com/memberUpdate',
      data: {
        name: e.detail.value.name,
        age: 10,
        email: 'xxx@163.com',
        phone: e.detail.value.phone,
        sex: sex,
        school: e.detail.value.school,
        area: e.detail.value.area,
        class: e.detail.value.class,
        grade: e.detail.value.grade,
        card: e.detail.value.card,
        nation: e.detail.value.nation,
        wx_id: app.globalData.wx_id
      },
      method: 'POST',
      success: function (res) {
        console.l
        wx.showModal({
          title: '提示',
          content: '更新成功！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              wx.navigateBack({
                delta: 1
              });
            }
          }
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var wxUserInfo = wx.getStorageSync('wxUserInfo');
    this.setData({
      avatarUrl: wxUserInfo.avatarUrl
    });
    this.initData();
  },

  initData: function () {
    var page = this;
    wx.request({
      url: 'https://www.hattonstar.com/memberSelect',
      data: {
        wx_id: app.globalData.wx_id
      },
      method: 'POST',
      success: function (res) {
        var sex = '女';
        if (res.data.sex == 1){
          sex = '男'
        }
        page.setData({
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email,
          age: res.data.age,
          sex:sex,
          card: res.data.card,
          nation: res.data.nation,
          school: res.data.school,
          area:res.data.area,
          class: res.data.class,
          grade: res.data.grade,
        });
      },
      fail: function (res) {
        wx.showModal({
          title: '错误提示',
          content: '服务器无响应，请联系工作人员!',
          success: function (res) {
            if (res.confirm) {
            } else if (res.cancel) {
            }
          }
        })
      }
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