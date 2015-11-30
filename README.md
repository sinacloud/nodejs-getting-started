# NodeJS应用示例

MySQL服务使用示例

## 安装node-mysql

```
$ npm install --save mysql
```

## 连接数据库

```js
var mysql      = require('mysql');

// 连接共享型MySQL
var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    port     : process.env.MYSQL_PORT,
    user     : process.env.ACCESSKEY,
    password : process.env.SECRETKEY,
    database : 'app_' + process.env.APPNAME
});
```

## 操作数据库

```
connection.query('show status', function(err, rows) {
    if (err) {
        // 处理错误
    }

    // 处理query的结果 
});
```
