import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.end('Admin page')
})

export { router as adminRouter }
