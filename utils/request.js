// utils/request.js
const app = getApp();

const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${app.globalData.baseUrl}${options.url}`,
      method: options.method || 'GET',
      data: options.data,
      header: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${app.globalData.token}`,
        ...options.header
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          // token过期处理
          app.login().then(() => {
            // 重新发起请求
            request(options).then(resolve).catch(reject);
          }).catch(reject);
        } else {
          reject(res);
        }
      },
      fail: reject
    });
  });
};

export default request;