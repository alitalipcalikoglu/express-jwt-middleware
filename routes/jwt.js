import { Router } from 'express'
import { JwtService } from '../services/index.js'

const router = Router()

router.get('/', (req, res) => {
  const token = JwtService.generate({ username: 'test-user' }, process.env.JWT_SECRET_KEY)
  res.send(token)
})

export { router as jwtRouter }
