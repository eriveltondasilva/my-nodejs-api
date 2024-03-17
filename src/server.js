import { APP_PORT } from './app/env.js'

export default function server(app) {
  const message = `🚀 Server is running on port: ${APP_PORT}`

  app.listen(APP_PORT, () => {
    console.log(message)
  })
}
