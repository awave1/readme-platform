import Router from 'express-promise-router'
import { Request, Response } from 'express'
import db from '../db'
import Post from '../models/Post'

const router = Router()

router.post('/create', (req: Request, res: Response) => {
  if (!req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty" } })

  if (!req.body.title)
    return res.status(422).json({ errors: { title: "can't be empty" } })

  if (!req.body.title && !req.body.content)
    return res.status(422).json({ errors: { content: "can't be empty", title: "can't be empty" } })

})

export default router
