// mock/attractions-data.js

const attractionsDetail = {
  1: {
    id: 1,
    name: "动力滑翔伞",
    status: "open",
    images: [],
    tags: ["刺激", "空中运动"],
    price: 238,
    unit: "元/人",
    details: {
      duration: "约15-20分钟",
      ageLimit: "18岁以上",
      heightLimit: "无特殊限制",
      weather: "晴天可飞，风速小于5级",
      capacity: "4人/小时"
    },
    instructions: [
      "需提前预约",
      "视天气情况开放",
      "需要签署免责声明",
      "请穿着舒适衣物",
      "携带身份证"
    ],
    rules: "1. 必须提前预约\n2. 按照教练指示行动\n3. 遵守安全规定\n4. 不可携带重要物品\n5. 听从天气预警"
  },
  2: {
    id: 2,
    name: "雪地摩托车",
    status: "open",
    images: [],
    tags: ["刺激", "雪地运动"],
    price: 50,
    unit: "元/10分钟",
    details: {
      duration: "10分钟/次",
      ageLimit: "需要驾驶证",
      heightLimit: "身高150cm以上",
      weather: "雪天正常开放",
      capacity: "10辆同时运营"
    },
    instructions: [
      "需要驾驶证",
      "穿着保暖衣物",
      "注意安全驾驶",
      "按指定路线行驶"
    ],
    rules: "1. 需出示驾驶证\n2. 遵守安全规则\n3. 按规定路线行驶\n4. 注意保暖"
  },
  3: {
    id: 3,
    name: "卡丁车",
    status: "open",
    images: [],
    tags: ["竞速", "亲子"],
    price: 50,
    unit: "元/10分钟",
    details: {
      duration: "10分钟/次",
      ageLimit: "8岁以上",
      heightLimit: "140cm以上",
      weather: "雨天暂停",
      capacity: "8辆同时运营"
    },
    instructions: [
      "身高限制140cm以上",
      "穿平底鞋",
      "系好安全带",
      "听从工作人员指挥"
    ],
    rules: "1. 注意安全\n2. 按规定路线行驶\n3. 不得碰撞其他车辆\n4. 遵守场地规则"
  },
  7: {
    id: 7,
    name: "烧烤美食",
    status: "open",
    images: [],
    tags: ["美食", "休闲"],
    price: null,
    unit: "具体价格以现场为准",
    details: {
      duration: "不限时",
      capacity: "100人同时用餐",
      weather: "全天候开放",
      ageLimit: "不限"
    },
    instructions: [
      "可提前预订",
      "提供代烤服务",
      "现场点餐",
      "注意用火安全"
    ],
    rules: "1. 禁止带入外部食品\n2. 注意防火安全\n3. 保持场地整洁\n4. 文明用餐"
  },
  9: {
    id: 9,
    name: "团建活动",
    status: "open",
    images: [],
    tags: ["团建", "商务"],
    price: null,
    unit: "具体价格以协商为准",
    details: {
      duration: "半天/一天",
      capacity: "20-200人",
      weather: "室内外结合",
      ageLimit: "不限"
    },
    instructions: [
      "需提前预约",
      "可定制活动方案",
      "提供专业策划服务",
      "含餐饮服务"
    ],
    rules: "1. 提前15天预约\n2. 签订合同\n3. 按照约定执行\n4. 遵守场地规则"
  }
};

export default attractionsDetail;