/**
 * Auth routes that can be called by the front end
 */

const express = require('express')
const passport = require('passport')
const db = require('../db')
const UserController = require('../controllers/UserController')
const { isLoggedIn } = require('../authUtils')

const router = express.Router()

router.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) {
			return res.status(500).json({err: err})
    }

		if (!user) {
			return res.status(401).json({err: info})
    }

		req.login(user, function(err) {
      if (err) {
				return res.status(400).json({ status: 'Could not log in user' })
      }
      
			return res.status(200).json({ status: 'Login successful!' })
		})
  })(req, res, next)
})

router.get('/logout', (req, res) => {
  req.logout()
})

router.get('/loggedIn', isLoggedIn, (req, res, next) => {
  if(req.user)
    res.status(200).json({
      success: true,
      user: req.user
    })
  else
    res.status(401).json({
      success: false,
      user: undefined
    })
})

module.exports = router
