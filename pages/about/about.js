Page({
  data: {
    userInfo: null,
    menuList: [
      { id: 1, name: '我的订单', icon: '🎫' },
      { id: 2, name: '我的预约', icon: '📅' },
      { id: 3, name: '我的收藏', icon: '⭐' },
      { id: 4, name: '联系客服', icon: '📞' },
      { id: 5, name: '设置', icon: '⚙️' }
    ]
  },

  onLoad() {
    // 检查是否已经登录
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({ userInfo });
    }
  },

  // 登录事件
  onLogin() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        });
        // 保存用户信息到本地缓存
        wx.setStorageSync('userInfo', res.userInfo);
      },
      fail: () => {
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    });
  },

  // 菜单点击事件
  onMenuClick(e) {
    const id = e.currentTarget.dataset.id;
    switch (id) {
      case 1: // 我的订单
        wx.navigateTo({ url: '/pages/order/order' });
        break;

      case 2: // 我的预约
        wx.navigateTo({ url: '/pages/booking/booking' });
        break;

      case 3: // 我的收藏
        wx.showToast({ 
          title: '功能开发中', 
          icon: 'none' 
        });
        break;

      case 4: // 联系客服
        wx.makePhoneCall({
          phoneNumber: '18699071767'  // 替换为实际客服电话
        });
        break;

      case 5: // 设置
        wx.navigateTo({ url: '/pages/settings/settings' });
        break;

      default:
        wx.showToast({
          title: '未知功能',
          icon: 'none'
        });
        break;
    }
  },

  // 跳转到工作人员登录页面
  gotoStaffLogin() {
    wx.navigateTo({
      url: '/pages/staff-login/staff-login'
    });
  }
});