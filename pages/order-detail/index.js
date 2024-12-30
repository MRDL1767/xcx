Page({
  data: {
    orderId: null, // 订单ID
    order: {}, // 订单信息
    qrCodeUrl: '', // 动态二维码地址
    isVerified: false, // 核销状态
    refreshingQRCode: false // 防止重复刷新二维码
  },

  onLoad(options) {
    const { id } = options; // 获取订单ID
    this.setData({ orderId: id });
    this.loadOrderDetails();
  },

  // 加载订单详情
  loadOrderDetails() {
    const { orderId } = this.data;

    // 模拟获取订单详情（实际应替换为接口请求）
    const orders = [
      {
        id: '1',
        status: '待核销',
        name: '动力滑翔伞',
        price: 238,
        count: 1,
        totalPrice: 238,
        orderNumber: '202312300001',
        orderTime: '2024-12-30 14:00',
        description: '体验空中翱翔的刺激',
        isVerified: false
      },
      {
        id: '2',
        status: '已完成',
        name: '雪地摩托车',
        price: 50,
        count: 2,
        totalPrice: 100,
        orderNumber: '202312300002',
        orderTime: '2024-12-30 15:00',
        description: '体验雪地速度与激情',
        isVerified: true
      }
    ];

    const order = orders.find(o => o.id === orderId);

    if (order) {
      this.setData({
        order,
        isVerified: order.isVerified
      });

      // 如果订单需要核销，生成二维码
      if (order.status === '待核销') {
        this.generateQRCode();
      }
    } else {
      wx.showToast({
        title: '订单不存在',
        icon: 'error',
        duration: 2000
      });
    }
  },

  // 生成二维码
  generateQRCode() {
    const { orderId } = this.data;

    wx.cloud.callFunction({
      name: 'generateQRCode',
      data: { orderId, timestamp: Date.now() },
      success: (res) => {
        this.setData({
          qrCodeUrl: res.result.qrCodeUrl
        });
      },
      fail: () => {
        wx.showToast({
          title: '二维码生成失败',
          icon: 'error'
        });
      }
    });
  },

  // 刷新二维码
  refreshQRCode() {
    if (this.data.refreshingQRCode) return;

    this.setData({ refreshingQRCode: true });
    this.generateQRCode();

    setTimeout(() => {
      this.setData({ refreshingQRCode: false });
    }, 3000); // 防止频繁刷新
  },

  // 去支付
  handlePay() {
    wx.showToast({
      title: '支付成功',
      icon: 'success',
      duration: 2000
    });

    // 模拟支付完成后更新订单状态
    const updatedOrder = { ...this.data.order, status: '待核销' };
    this.setData({ order: updatedOrder });
  },

  // 再次购买
  handleRepurchase() {
    wx.showToast({
      title: '再次购买',
      icon: 'success',
      duration: 2000
    });
  }
});