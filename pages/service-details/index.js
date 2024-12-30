import { SearchOutline, CarOutline, SmileOutline, CompassOutline, HeartOutline, ToolOutline } from '@ant-design/icons-mini';

Page({
  data: {
    serviceId: null,
    serviceName: '',
    serviceDescription: '',
    icon: '', // 动态加载图标
    formFields: [],
    formData: {}
  },

  onLoad(options) {
    const { id } = options;
    const serviceData = this.getServiceData(id);
    this.setData({
      serviceId: id,
      ...serviceData
    });

    // 动态设置页面标题
    wx.setNavigationBarTitle({
      title: serviceData.name + '详情'
    });
  },

  // 模拟获取服务数据
  getServiceData(id) {
    const services = {
      1: {
        name: '失物招领',
        description: '帮助游客找回丢失物品，请填写相关信息。',
        icon: SearchOutline,
        formFields: [
          { name: '物品名称', key: 'itemName', placeholder: '请输入丢失物品名称' },
          { name: '丢失地点', key: 'lostLocation', placeholder: '请输入丢失地点' },
          { name: '联系方式', key: 'contact', placeholder: '请输入您的联系方式' }
        ]
      },
      2: {
        name: '轮椅预订',
        description: '为行动不便的游客提供轮椅服务，请填写预订信息。',
        icon: CarOutline,
        formFields: [
          { name: '姓名', key: 'name', placeholder: '请输入您的姓名' },
          { name: '联系电话', key: 'phone', placeholder: '请输入联系电话' },
          { name: '预约时间', key: 'time', placeholder: '请输入预约时间' }
        ]
      }
    };

    return services[id] || {};
  },

  // 表单输入事件
  onInputChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`formData.${key}`]: value
    });
  },

  // 提交表单
  submitForm() {
    const { formData, serviceName } = this.data;
    wx.showToast({
      title: `${serviceName}申请已提交`,
      icon: 'success',
      duration: 2000
    });

    // 模拟提交表单逻辑...
    console.log('提交表单数据：', formData);
  }
});