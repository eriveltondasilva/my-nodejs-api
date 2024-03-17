import { json } from 'express'

export default function middleware(app) {
  app.use(json())
}
