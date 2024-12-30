Page({
  data: {
    tabs: [
      { id: 0, name: '全部订单' },
      { id: 1, name: '待付款' },
      { id: 2, name: '待核销' },
      { id: 3, name: '已完成' }
    ],
    activeTab: 0, // 当前选中的标签
    orders: [], // 所有订单数据
    filteredOrders: [] // 筛选后的订单
  },

  onLoad() {
    this.loadOrders(); // 加载订单数据
  },

  // 加载订单数据
  loadOrders() {
    // 模拟订单数据（实际应替换为接口请求）
    const orders = [
      {
        id: 1,
        name: '动力滑翔伞',
        price: 238,
        count: 1,
        totalPrice: 238,
        status: '待付款',
        image: 'https://example.com/image1.jpg'
      },
      {
        id: 2,
        name: '雪地摩托车',
        price: 50,
        count: 2,
        totalPrice: 100,
        status: '待核销',
        image: 'https://example.com/image2.jpg'
      },
      {
        id: 3,
        name: '雪圈',
        price: 30,
        count: 1,
        totalPrice: 30,
        status: '已完成',
        image: 'https://example.com/image3.jpg'
      },
      {
        id: 4,
        name: '烧烤美食',
        price: 80,
        count: 1,
        totalPrice: 80,
        status: '待付款',
        image: 'https://example.com/image4.jpg'
      }
    ];

    this.setData({ orders }, () => {
      this.filterOrders(); // 筛选订单
    });
  },

  // 切换分类标签
  changeTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      activeTab: id
    }, () => {
      this.filterOrders();
    });
  },

  // 筛选订单
  filterOrders() {
    const { orders, activeTab, tabs } = this.data;
    const activeTabName = tabs[activeTab].name;

    // 筛选逻辑
    let filteredOrders = orders;
    if (activeTab !== 0) {
      filteredOrders = orders.filter(order => order.status === activeTabName);
    }

    this.setData({ filteredOrders });
  },

  // 跳转到订单详情页
  navigateToDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/order-detail/index?id=${id}`
    });
  },

  // 去支付
  handlePay(e) {
    const { id } = e.currentTarget.dataset;

    // 模拟支付逻辑
    wx.showToast({
      title: `支付订单ID: ${id}`,
      icon: 'success',
      duration: 2000
    });

    // 模拟支付完成后更新订单状态
    const updatedOrders = this.data.orders.map(order => {
      if (order.id === id) {
        return { ...order, status: '待核销' };
      }
      return order;
    });

    this.setData({ orders: updatedOrders }, () => {
      this.filterOrders();
    });
  }
});