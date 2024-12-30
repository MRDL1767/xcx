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
      {
        id: 1,
        name: "动力滑翔伞",
        category: "机动项目",
        price: 238,
        unit: "元/人",
        description: "体验空中翱翔的刺激",
        tags: ["刺激", "空中运动"],
        notice: "需提前预约，视天气情况开放"
      },
      {
        id: 2,
        name: "雪地摩托车",
        category: "机动项目",
        price: 50,
        unit: "元/10分钟",
        description: "体验雪地速度与激情",
        tags: ["刺激", "雪地运动"],
        notice: "需要驾驶证"
      },
      {
        id: 3,
        name: "卡丁车",
        category: "机动项目",
        price: 50,
        unit: "元/10分钟",
        description: "体验赛道竞速乐趣",
        tags: ["竞速", "亲子"],
        notice: "身高限制140cm以上"
      },
      {
        id: 4,
        name: "摩托车",
        category: "机动项目",
        price: 30,
        unit: "元/10分钟",
        description: "体验骑行乐趣",
        tags: ["休闲", "运动"],
        notice: "需要驾驶证"
      },
      {
        id: 5,
        name: "雪圈",
        category: "雪上项目",
        price: 30,
        unit: "元/人/小时",
        description: "轻松享受滑雪乐趣",
        tags: ["休闲", "亲子"],
        notice: "穿着需要注意保暖"
      },
      {
        id: 6,
        name: "无动力游乐设施",
        category: "雪上项目",
        price: 0,
        unit: "免费",
        description: "适合亲子游玩的游乐设施",
        tags: ["免费", "亲子"],
        notice: "使用时注意安全"
      },
      {
        id: 7,
        name: "烧烤美食",
        category: "休闲娱乐",
        description: "特色美食和烧烤",
        tags: ["美食", "休闲"],
        notice: "可提前预订"
      },
      {
        id: 8,
        name: "蒙古包",
        category: "休闲娱乐",
        description: "特色蒙古包休息区",
        tags: ["休息", "特色"],
        notice: "可提前预订"
      },
      {
        id: 9,
        name: "团建活动",
        category: "特色活动",
        description: "承接中小型团建活动",
        tags: ["团建", "商务"],
        notice: "需提前预约"
      },
      {
        id: 10,
        name: "婚礼服务",
        category: "特色活动",
        description: "特色婚礼策划和服务",
        tags: ["婚礼", "庆典"],
        notice: "需提前预约"
      },
      {
        id: 11,
        name: "赛马项目",
        category: "特色活动",
        description: "特色赛马体验",
        tags: ["特色", "运动"],
        notice: "需提前预约"
      }
    ],
    filteredAttractions: []
  },

  onLoad() {
    this.filterAttractions();
  },

  onSearch(e) {
    this.setData({
      searchKey: e.detail
    }, () => {
      this.filterAttractions();
    });
  },

  onTabChange(e) {
    const id = e.currentTarget.dataset.id;
    this.setData({
      activeTab: id
    }, () => {
      this.filterAttractions();
    });
  },

  filterAttractions() {
    let { attractions, activeTab, searchKey } = this.data;
    let filtered = [...attractions];

    // 按分类筛选
    if (activeTab !== 0) {
      const category = this.data.tabs[activeTab].name;
      filtered = filtered.filter(p => p.category === category);
    }

    // 按关键词搜索
    if (searchKey) {
      const key = searchKey.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(key) || 
        p.tags.some(tag => tag.toLowerCase().includes(key))
      );
    }

    this.setData({
      filteredAttractions: filtered
    });
  },

  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/attraction-detail/attraction-detail?id=${id}`
    });
  },

  showNotice(e) {
    const notice = e.currentTarget.dataset.notice;
    wx.showModal({
      title: '项目提示',
      content: notice,
      showCancel: false
    });
  }
});