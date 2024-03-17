import { APP_PORT } from './app/env.js'

export default function server(app) {
  const message = `🚀 Server is running on port: ${APP_PORT}`

  try {
    app.listen(APP_PORT, () => {
      console.log(message)
    })
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
