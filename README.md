## 说明

### DoraCMS 使用的技术栈：

```
1、nodejs 12 + eggjs 2
2、vue-cli
3、mongodb 4+
```


## 安装
### 准备环境
#### 在安装 `DoraCMS` 之前，需要确保您已经完成了以下工作
> [环境准备详情访问](https://www.doracms.com/backend/dev/)  

* 已经安装好了 `nodejs` , 版本 `v12.13.0`
* 已经安装并启动了 `Mongodb`，版本 `4.0`

### 运行
#### 开发者 (需要下载源码）
[源码搭建开发环境](https://www.doracms.com/backend/dev/) 

### 访问
#### 浏览器通过以下方式访问（具体访问地址依赖于配置）

```
http://127.0.0.1:8080  // 开发环境
http://120.25.150.169:8080  // 生产环境只配了IP，端口号已加入安全组
```


## 其它
### 生产环境配置
* 修改`config.default.js`
    ```js
    cluster: {
            listen: {
                port: 8080,
                hostname: '0.0.0.0',
            }
        },
    ```
    
 * 修改`config.prod.js`
   ```js
        client: {
                url: 'mongodb://127.0.0.1:27017/newsite',
                options: {
                    auth: { authSource: "admin" },
                    user: 'xxx',
                    pass: 'xxxxx',
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    keepAlive: 3000
                },
            },

            ...

            // 服务地址配置
        server_path: 'http://106.55.43.96:8080',
        server_api: 'http://106.55.43.96:8080/api',
    ```
### 开发环境启动
```javascript
npm run dev
```

### 生产环境启动
不使用pm2
```js
npm run start
```


```javascript
pm2 start server.js --name doracms2
```


### 生产环境停止
不使用pm2
```js
npm run stop
```


```javascript
pm2 stop doracms2
```

### 生产环境重启
```javascript
pm2 restart doracms2
```s

### api文档
```javascript
api访问地址： http://127.0.0.1:8080/static/apidoc/index.html
```

### 首页
```javascript
http://127.0.0.1:8080
```

### 后台登录
```javascript
http://127.0.0.1:8080/dr-admin
登录账号：doramart/123456    doracms/123456
```


# LICENSE

MIT


