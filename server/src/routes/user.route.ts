import Router from 'express-promise-router'
import { Request, Response } from 'express';
import db from '../db'
import User from '../models/User'
import UserController from '../controllers/UserController'


/**
 * For every route file, we need to initialize router like this and export it like shown at the bottom
 */
const router = Router()

/**
 * Create new user in database
 */
router.post('/create', async (req: Request, res: Response) => {
  // A unary operator like plus triggers the valueOf method 
  // in the Date object and it returns the timestamp (without any alteration).
  const timestamp = new Date().toJSON()
  const user = new User(
    req.body.first, 
    req.body.last, 
    req.body.username,
    req.body.email,
    req.body.password,
    timestamp
  )

  const result = await UserController.createNewUser(user)
  res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM r_users WHERE id = $1', [id])
  res.send(rows[0])
})

export default router
