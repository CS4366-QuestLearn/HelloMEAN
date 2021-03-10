var example = require('./example-model')
var router = require('express').Router()



function getExample (req, res) {
  example.find((err, result) =>
  {
    if(err) {console.log(error)}
    else { res.json(result)}

  })

}

function createExample (req, res) {
  let newEntry = new example({
      a_string: "abcd",
      an_int: 2
    })
    newEntry.save((err, result) => {
      if (err) {console.log("oops")}
      else 
      {
        res.status(201).send()
        // just nice to have
        console.log("entry saved!")
      }
    })
}

router.post('/example', createExample)
router.get('/example', getExample)

module.exports = router