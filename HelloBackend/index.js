var express = require('express')

var app = express()
app.use('/api', require('./example/router'))

module.exports = app