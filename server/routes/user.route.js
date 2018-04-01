
const express = require('express')
const db = require('../db')
const User = require('../models/User')
const UserController = require('../controllers/UserController')

/**
 * For every route file, we need to initialize router like this and export it like shown at the bottom
 */
const router = express.Router()

/**
 * Create new user in database
 */
router.post('/create', async (req, res) => {

  if (!req.body.email)
    return res.status(422).json({errors: {email: "can't be blank"}})

  if (!req.body.password)
    return res.status(422).json({errors: {password: "can't be blank"}})

  const timestamp = new Date().toJSON()
  const user = new User(
    req.body.first,
    req.body.last,
    req.body.username,
    req.body.email,
    req.body.password,
    timestamp,
  )

  const result = await UserController.createNewUser(user)
  res.json(result)
})

/**
 * get user by username
 */
router.get('/:username', async (req, res) => {
  const { username } = req.params

  const result = await UserController.getUserByUsername(username)
  if (result === undefined)
    res.status(422).json({ success: false })
  else
    res.status(200).json(result)
})

module.exports = router
