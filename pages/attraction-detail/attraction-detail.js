Page({
  data: {
    attraction: {},
    count: 1
  },

  onLoad(options) {
    const { id } = options;
    this.loadAttraction(id);
  },

  // 模拟加载项目详情
  loadAttraction(id) {
    const attractions = [
      { id: 1, name: "动力滑翔伞", price: 238, description: "体验空中翱翔" },
      { id: 2, name: "雪地摩托车", price: 50, description: "体验雪地速度" }
    ];
    const attraction = attractions.find(item => item.id === parseInt(id));
    this.setData({ attraction });
  },

  // 购买数量调整
  changeCount(e) {
    const { action } = e.currentTarget.dataset;
    let { count } = this.data;
    if (action === 'increase') count++;
    if (action === 'decrease' && count > 1) count--;
    this.setData({ count });
  },

  // 支付
  handlePayment() {
    const { attraction, count } = this.data;
    wx.cloud.callFunction({
      name: 'getPayParams',
      data: {
        orderId: attraction.id,
        totalFee: attraction.price * count * 100
      },
      success: (res) => {
        wx.requestPayment({
          ...res.result.payment,
          success: () => {
            wx.redirectTo({
              url: `/pages/order-detail/index?id=${attraction.id}`
            });
          },
          fail: () => {
            wx.showToast({ title: '支付失败', icon: 'none' });
          }
        });
      }
    });
  }
});