const Router = require('express-promise-router')
const passport = require('passport')
const db = require('../db')
const UserController = require('../controllers/UserController')

const router = Router()

router.post('/login', async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (user) {
      req.logIn(user, (reqerr) => {
        if (reqerr)
          res.json({ success: false })
        res.json({ success: true })
      })
    }
  })(req, res, next)
})

module.exports = router
