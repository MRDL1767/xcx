Page({
  data: {
    phone: '',
    code: ''
  },
  handlePhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  handleCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },
  handleLogin() {
    const phone = this.data.phone;
    const code = this.data.code;
    wx.cloud.callFunction({
      name: 'staffLogin',
      data: {
        phone,
        code
      },
      success(res) {
        console.log(res);
        if (res.result.success) {
          wx.navigateTo({
            url: '/pages/staff/staff'
          });
        } else {
          wx.showToast({
            title: res.result.message,
            icon: 'none'
          });
        }
      },
      fail(err) {
        console.error(err);
      }
    });
  }
});