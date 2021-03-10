#!/usr/bin/env node
var app = require('./index')
var config = require('./config')
var mongoose = require('mongoose')


console.log('server process starting')
// REPLACE THE <password> HERE 
mongoose.connect('mongodb+srv://exampleuser:<password>.qqu24.mongodb.net/test-db?retryWrites=true&w=majority')

// Note that there's not much logic in this file.
// The server should be mostly "glue" code to set things up and
// then start listening

// Add headers


app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    console.log('Unable to listen for connections', error)
    process.exit(10)
  }
  console.log('express is listening on http://' +
    config.express.ip + ':' + config.express.port)
})