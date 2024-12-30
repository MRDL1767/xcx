Page({
  data: {
    searchKey: '',
    activeTab: 0,
    tabs: [
      { id: 0, name: '全部' },
      { id: 1, name: '机动项目' },
      { id: 2, name: '雪上项目' },
      { id: 3, name: '休闲娱乐' },
      { id: 4, name: '特色活动' }
    ],
    attractions: [
      { id: 1, name: "动力滑翔伞", category: "机动项目", price: 238, tags: ["刺激", "空中运动"] },
      { id: 2, name: "雪地摩托车", category: "机动项目", price: 50, tags: ["刺激", "雪地运动"] },
      { id: 5, name: "雪圈", category: "雪上项目", price: 30, tags: ["休闲", "亲子"] },
      { id: 7, name: "烧烤美食", category: "休闲娱乐", description: "特色美食和烧烤" },
      { id: 10, name: "婚礼服务", category: "特色活动", description: "特色婚礼策划和服务" }
    ],
    filteredAttractions: []
  },

  onLoad() {
    this.filterAttractions(); // 初次加载时筛选
  },

  // 搜索框输入
  onSearch(e) {
    this.setData({
      searchKey: e.detail.value
    }, () => {
      this.filterAttractions();
    });
  },

  // 切换分类
  onTabChange(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({
      activeTab: id
    }, () => {
      this.filterAttractions();
    });
  },

  // 筛选项目
  filterAttractions() {
    const { attractions, activeTab, searchKey } = this.data;
    let filtered = attractions;

    // 分类筛选
    if (activeTab !== 0) {
      const category = this.data.tabs.find(tab => tab.id === activeTab).name;
      filtered = filtered.filter(item => item.category === category);
    }

    // 关键字搜索
    if (searchKey) {
      const key = searchKey.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(key) || 
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(key)))
      );
    }

    this.setData({ filteredAttractions: filtered });
  },

  // 跳转到详情页
  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/attraction-detail/index?id=${id}`
    });
  }
});