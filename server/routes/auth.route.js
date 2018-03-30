const Router = require('express-promise-router')
const passport = require('passport')
const db = require('../db')
const UserController = require('../controllers/UserController')
const { isLoggedIn } = require('../authUtils')

const router = Router()

router.post('/login', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (user) {
      req.logIn(user, (reqerr) => {
        if (reqerr) {
          res.status(400).json({ success: false })
        }
        res.json({ success: true })
      })
    }
  })(req, res, next)
})

router.get('/login', isLoggedIn, async (req, res, next) => {
  console.log(req.user)
  if(req.session.user)
    res.status(200).json({
      success: true,
      user: req.session.user
    })
  else
    res.status(401).json({
      success: false,
      user: {}
    })
})

module.exports = router
