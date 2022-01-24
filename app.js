import 'dotenv/config'
import express from 'express'
import { checkJwt } from './middlewares/jwt.js'
import { session } from './middlewares/session.js'
import { adminRouter } from './routes/admin.js'
import { jwtRouter } from './routes/jwt.js'
import { homeRouter } from './routes/main.js'

const port = process.env.PORT
const app = express()

app.use(session())
app.use(express.json())

app.use('/', homeRouter)
app.use('/admin', checkJwt, adminRouter)
app.use('/jwt', jwtRouter)

app.listen(port, () => {
  console.log(`app run at http://localhost:${port}`)
})
