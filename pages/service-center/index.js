import { SearchOutline, CarOutline, SmileOutline, CompassOutline, HeartOutline, ToolOutline } from '@ant-design/icons-mini';

Page({
  data: {
    services: [
      {
        id: 1,
        name: '失物招领',
        icon: SearchOutline, // 使用 Ant Design 图标
        page: '/pages/service-details/index?id=1'
      },
      {
        id: 2,
        name: '轮椅预订',
        icon: CarOutline,
        page: '/pages/service-details/index?id=2'
      },
      {
        id: 3,
        name: '军人免费申请',
        icon: SmileOutline,
        page: '/pages/service-details/index?id=3'
      },
      {
        id: 4,
        name: '医疗救助',
        icon: CompassOutline,
        page: '/pages/service-details/index?id=4'
      },
      {
        id: 5,
        name: '投诉建议',
        icon: HeartOutline,
        page: '/pages/service-details/index?id=5'
      },
      {
        id: 6,
        name: '志愿者服务',
        icon: ToolOutline,
        page: '/pages/service-details/index?id=6'
      }
    ]
  },

  // 跳转到服务详情页面
  navigateToService(e) {
    const { page } = e.currentTarget.dataset;
    wx.navigateTo({
      url: page
    });
  }
});