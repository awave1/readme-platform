import { Response, Request, NextFunction, Router } from 'express'

const router: Router = Router()

export const getApiVersion = (req: Request, res: Response) => {
  res.send({ apiVersion: '0.0.1' })
}
