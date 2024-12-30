App({
  onLaunch: function() {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    
    // 设置设计稿基准宽度(iPhone 6/7/8/SE2: 375px)
    const designWidth = 375;
    
    this.globalData = {
      systemInfo: systemInfo,
      ratio: systemInfo.windowWidth / designWidth,
      statusBarHeight: systemInfo.statusBarHeight,
      safeArea: systemInfo.safeArea,
      screenWidth: systemInfo.screenWidth,
      screenHeight: systemInfo.screenHeight,
      windowWidth: systemInfo.windowWidth,
      windowHeight: systemInfo.windowHeight
    };
  },
  
  globalData: {
    systemInfo: null,
    ratio: 1,
    statusBarHeight: 0,
    safeArea: null,
    screenWidth: 375,
    screenHeight: 667,
    windowWidth: 375,
    windowHeight: 667
  }
});
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'xxty-2gkxf9dh9bd1422c', // 替换为你的云环境 ID
        traceUser: true,
      });
    }
  }
});