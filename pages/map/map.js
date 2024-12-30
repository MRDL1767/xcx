Page({
  data: {
    latitude: 45.123456,  // 替换为实际的园区坐标
    longitude: 126.123456,  // 替换为实际的园区坐标
    scale: 16,
    markers: [{
      id: 1,
      latitude: 45.123456,  // 与上面相同的坐标
      longitude: 126.123456,
      width: 30,
      height: 30
    }],
    distance: ''
  },

  onLoad() {
    this.getLocation();
  },

  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        const distance = this.calculateDistance(
          res.latitude, 
          res.longitude, 
          this.data.latitude, 
          this.data.longitude
        );
        this.setData({
          distance: distance < 1000 
            ? distance.toFixed(0) + 'm'
            : (distance / 1000).toFixed(1) + 'km'
        });
      },
      fail: () => {
        wx.showToast({
          title: '请开启位置权限',
          icon: 'none'
        });
      }
    });
  },

  openLocation() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '冰雪欢乐园',
      address: '哈尔滨市某某区某某路123号',
      scale: 18
    });
  },

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // 地球半径，单位米
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  },

  deg2rad(deg) {
    return deg * (Math.PI/180);
  }
});