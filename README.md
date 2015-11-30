# NodeJS应用示例

在新浪云的Memcache服务面板中创建了Memcache后，就可以在应用中使用任意支持SASL
认证的nodejs客户端来操作Memcache了。比如使用 [memjs](https://github.com/alevy/memjs) 。

## 安装memjs

```
$ npm install --save memjs
```

## 使用memjs创建和Memcache服务的连接

```js
var memjs = require('memjs');

var mc = memjs.Client.create(process.env.MEMCACHE_SERVERS, {
    username: process.env.ACCESSKEY,
    password: process.env.SECRETKEY,
});
```

## 读写数据

```js
mc.set('foo', 'bar');
mc.get('foo', function (err, value, key) {
    if (value != null) {
        console.log(value.toString());
    }
});
```
