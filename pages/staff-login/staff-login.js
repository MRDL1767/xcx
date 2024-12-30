Page({
  data: {
    phone: '',
    code: '',
    phoneError: '',
    sendCodeBtnText: '发送验证码',
    sendCodeBtnDisabled: false
  },
  handlePhoneInput(e) {
    const phone = e.detail.value;
    this.setData({
      phone
    });
    if (!phone) {
      this.setData({
        phoneError: '请输入手机号'
      });
    } else if (!/^\d{11}$/.test(phone)) {
      this.setData({
        phoneError: '手机号格式错误'
      });
    } else {
      this.setData({
        phoneError: ''
      });
    }
  },
  handleCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },
  handleSendCode() {
    const phone = this.data.phone;
    if (!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return;
    }
    // 发送验证码逻辑
    wx.cloud.callFunction({
      name: 'sendSmsCode',
      data: {
        phone
      },
      success(res) {
        console.log(res);
        if (res.result.success) {
          wx.showToast({
            title: '验证码发送成功',
            icon: 'success'
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
    this.setData({
      sendCodeBtnText: '重新发送',
      sendCodeBtnDisabled: true
    });
    setTimeout(() => {
      this.setData({
        sendCodeBtnText: '发送验证码',
        sendCodeBtnDisabled: false
      });
    }, 60000);
  },
  handleLogin() {
    const phone = this.data.phone;
    const code = this.data.code;
    // 登录逻辑
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