Page({
  data: {
    banners: [
      { id: 1, image: '', title: '滑雪场' },
      { id: 2, image: '', title: '动力滑翔伞' },
      { id: 3, image: '', title: '雪地摩托' }
    ],
    notice: '欢迎来到新袖田园！目前园区正常开放。',
    hotAttractions: [
      { id: 1, name: '动力滑翔伞', image: '', waitTime: 30 },
      { id: 2, name: '滑雪圈', image: '', waitTime: 15 },
      { id: 3, name: '雪地摩托', image: '', waitTime: 10 },
      { id: 4, name: '碰碰车', image: '', waitTime: 20 }
    ],
    activities: [
      { 
        id: 1, 
        name: '元旦狂欢', 
        time: '每周六 19:00-21:00', 
        image: '',
        isNew: true,
        isHot: true
      },
      {
        id: 2,
        name: '田园探险记',
        time: '每日 14:00-15:00',
        image: '',
        isHot: true
      }
    ]
  },

  onLoad() {
    // 可以在这里调用API获取实时数据
  },

  onBuyTicket() {
    wx.navigateTo({
      url: '/pages/ticket/ticket'
    })
  },

  onQueueInfo() {
    wx.navigateTo({
      url: '/pages/attractions/attractions?tab=queue'
    })
  },

  onViewMap() {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },

  onService() {
    wx.navigateTo({
      url: '/pages/service-center/index'
    })
  },

  onAttractionDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/attraction-detail/attraction-detail?id=${id}`
    })
  },

  onActivityDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/activity-detail/activity-detail?id=${id}`
    })
  },

  onMoreAttractions() {
    wx.switchTab({
      url: '/pages/attractions/attractions'
    })
  },

  onMoreActivities() {
    wx.navigateTo({
      url: '/pages/activities/activities'
    })
  }
})