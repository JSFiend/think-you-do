-------------------------------------- 2019.06.07 端午节 -------------------------------------------------------
## 路由模块
提供 get、post 请求方式的响应，并且可以链式调用处理函数。
使用方式像 express 一样。好像：
``` js
const Router = require('tyd-Router');
const router = new Router();

router.get('/', () => {}, () => {}, () => {});
```

### 实现
模块提供 get、post 方法， 用数组把请求的 url、handlers 保存起来，匹配到 url 就依次执行 handler。实现：
``` js

class tydRouter {
  constructor() {
    this.getRequestList = [];
    this.postRequestList = [];
  }

  get(url, ...handlers) {
    this.getRequestList.push({
      url,
      handlers,
    });
  }

  requestHandler(request, response) {
    const { getRequestList } = this;
    const { method, url } = request;
    let target = null;
    if (method === 'GET') {
      target = getRequestList.find(router => router.url === url);
    }
    if (target) {
      target.handlers.forEach((item) => {
        item.call(this, request, response);
      });
    }
    response.end('router success');
  }
}

module.exports = tydRouter;

```

-------------------------------------- 2019.06.17 周一 -------------------------------------------------------

### 要实现的功能
* next 办法，传递式调用回调办法
* req、res 增强
* 支持 use、all、get、post
