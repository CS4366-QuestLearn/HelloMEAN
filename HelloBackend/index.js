var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.use('/api', require('./example/router'))

module.exports = app