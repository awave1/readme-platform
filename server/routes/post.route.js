const Router = require('express-promise-router')
const db = require('../db')
const Post = require('../models/Post')

const router = Router()

router.post('/create', (req, res) => {
  if (!req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty" } })

  if (!req.body.title)
    return res.status(422).json({ errors: { title: "can't be empty" } })

  if (!req.body.title && !req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty", title: "can't be empty" } })

})

module.exports = router
