import Router from 'express-promise-router'
import { Request, Response } from 'express';
import db from '../db'

/**
 * For every route file, we need to initialize router like this and export it like shown at the bottom
 */
const router = Router()

router.post('/new', async (req: Request, res: Response) => {
  const results = []
  const data = [
    req.body.name, 
    req.body.username,
    req.body.email
  ]

  const result = await db.query('INSERT INTO r_users(name, username, email) VALUES ($1, $2, $3) RETURNING *;', data)
  res.json(result.rows[0])
})

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM r_users WHERE id = $1', [id])
  res.send(rows[0])
})

export default router
