var memjs = require('memjs')
var express = require('express')
var app = express()

// 连接到本应用的Memcache服务
var mc = memjs.Client.create(process.env.MEMCACHE_SERVERS, {
    username: process.env.ACCESSKEY,
    password: process.env.SECRETKEY,
});

app.get('/', function (req, res) {
    // 往mc里set一个值，然后再取出来返回

    mc.set('foo', 'bar', function(err, success) {
        if (err) {
            res.send('mc.set failed')
            return
        }

        mc.get('foo', function(err, value, key) {
            if (err) {
                res.send('mc.get failed')
                return
            }

            res.send(value)
        })
    })
})

app.listen(process.env.PORT || 5050)
