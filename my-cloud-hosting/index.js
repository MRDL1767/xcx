// 引入 Express 框架
const express = require('express');
const app = express();

// 中间件：解析 JSON 请求体
app.use(express.json());

// 示例接口：欢迎信息
app.get('/', (req, res) => {
  res.send('欢迎访问我的云托管服务！');
});

// 示例接口：创建订单
app.post('/createOrder', (req, res) => {
  const { user_id, total_amount } = req.body;

  if (!user_id || !total_amount) {
    return res.status(400).json({ success: false, message: '缺少必要参数' });
  }

  // 示例：返回订单创建结果
  res.json({
    success: true,
    data: {
      order_id: '123456',
      user_id,
      total_amount,
      status: 'pending',
      created_at: new Date()
    }
  });
});

// 启动服务
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`服务已启动，监听端口 ${port}`);
});