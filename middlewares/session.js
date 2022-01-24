import expressSession from 'express-session'

const sessionConfig = {
  name: 'session-name',
  secret: '123456',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}

export const session = () => expressSession(sessionConfig)
