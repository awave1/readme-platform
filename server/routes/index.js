const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
  res.send({ readmeApiVer: "0.0.1" })
})

module.exports = router

