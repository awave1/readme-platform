import Router from 'express-promise-router'
import { Request, Response } from 'express'
import db from '../db'
import User from '../models/User'
import UserController from '../controllers/UserController'
import passport from 'passport'
import { NextFunction } from 'express-serve-static-core'

const router = Router()

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
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

export default router
