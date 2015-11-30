var mysql   = require('mysql');
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    // 连接共享型MySQL
    var connection = mysql.createConnection({
        host     : process.env.MYSQL_HOST,
        port     : process.env.MYSQL_PORT,
        user     : process.env.ACCESSKEY,
        password : process.env.SECRETKEY,
        database : 'app_' + process.env.APPNAME
    });

    connection.query('show status', function(err, rows) {
        if (err) {
            res.send(err)
            return
        }

        res.send(rows)
    })

    connection.end()
})

app.listen(process.env.PORT || 5050)
