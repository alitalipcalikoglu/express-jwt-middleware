import { JwtService } from '../services/index.js'

export const checkJwt = (req, res, next) => {
  const token = req.headers.token || req.body.token || req.query.token
  if (!token) return res.json({ status: false, message: 'Unauthorized' })

  const verify = JwtService.verify(token, process.env.JWT_SECRET_KEY)
  if (!verify) return res.json({ status: false, message: 'Invalid token' })

  next()
}
