const app = getApp();

// 布局常量配置
export const LAYOUT = {
  // 设计稿基准宽度
  DESIGN_WIDTH: 375,
  
  // 最大内容宽度(px)
  MAX_CONTENT_WIDTH: 600,
  
  // 页面边距(rpx)
  PAGE_PADDING: 30,
  
  // 内容边距(rpx)
  CONTENT_PADDING: 24,
  
  // 组件间距(rpx)
  SPACING: {
    SMALL: 10,
    NORMAL: 20,
    LARGE: 30
  },
  
  // 边框圆角(rpx)
  RADIUS: {
    SMALL: 8,
    NORMAL: 12,
    LARGE: 16
  },
  
  // 字体大小(rpx)
  FONT: {
    SMALL: 24,
    REGULAR: 28,
    MEDIUM: 32,
    LARGE: 36
  }
};

// 计算真实的px尺寸
export function rpxToPx(rpx) {
  return rpx * app.globalData.ratio;
}

// 获取页面可用宽度
export function getContentWidth() {
  const { windowWidth } = app.globalData;
  const maxWidth = Math.min(windowWidth, LAYOUT.MAX_CONTENT_WIDTH);
  const pagePadding = rpxToPx(LAYOUT.PAGE_PADDING * 2);
  return maxWidth - pagePadding;
}

// 获取安全区域边距
export function getSafeAreaInsets() {
  const { safeArea, screenHeight } = app.globalData;
  return {
    top: safeArea ? safeArea.top : 0,
    bottom: safeArea ? screenHeight - safeArea.bottom : 0
  };
}