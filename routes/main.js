import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.end('Home page')
})

export { router as homeRouter }
