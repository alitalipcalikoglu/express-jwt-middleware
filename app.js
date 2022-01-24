import 'dotenv/config'
import express from 'express'
import { JwtService } from './services/index.js'
import { checkJwt } from './middlewares/jwt.js'
import { session } from './middlewares/session.js'

const port = process.env.PORT
const app = express()

app.use(session())
app.use(express.json())

app.get('/', (req, res) => {
  res.end('Home page')
})

app.get('/admin', checkJwt, (req, res) => {
  res.end('Admin page')
})

app.get('/jwt', (req, res) => {
  const token = JwtService.generate({ username: 'test-user' }, process.env.JWT_SECRET_KEY)
  res.send(token)
})

app.listen(port, () => {
  console.log(`app run at http://localhost:${port}`)
})
