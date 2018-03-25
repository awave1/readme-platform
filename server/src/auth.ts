import passport from 'passport'
import db from './db'
import { Strategy as LocalStrategy } from 'passport-local'
import initAuth from './passport'
import UserController from './controllers/UserController'
import { compareSync } from 'bcrypt'
import { NextFunction } from 'express-serve-static-core'
import { Request, Response } from 'express'

const options = {}

initAuth()

const checkPassword = (pass: string, hash: string): boolean => {
  return compareSync(pass, hash)
}

passport.use(new LocalStrategy(options, (username, password, done) => {
  UserController.getUserByUsername(username)
    .then(user => {
      if (checkPassword(password, user.getPassword()))
        done(null, user)
      else
        done(null, false)
    })
    .catch(err => {
      done(err)
    })
}))

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next()
  }
  console.error('user not authenticated')
}
