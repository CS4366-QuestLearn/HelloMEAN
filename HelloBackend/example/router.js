var ex = require('./example-model')
var router = require('express').Router()

function getExample (req, res) {
  ex.findAll(function (error, examples) {
   if (error) {
     res.status(500).send(error)
     return
   }
   res.json(examples)
 })
}

function createExample (req, res) {
  // 201 indicates that an entry was successfully created
  res.status(201).send()
}

router.post('/example', createExample)
router.get('/example', getExample)

module.exports = router