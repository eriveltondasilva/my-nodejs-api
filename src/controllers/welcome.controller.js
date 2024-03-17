import { APP_HOST } from '../app/env.js'

function getWelcome(_, res) {
  res.send({
    welcome: 'Hello World!',
    separator: '--------------------',
    title: 'API DOCUMENTATION',
    get_all_books: [`${APP_HOST}/api/books`, 'GET'],
    get_book_by_id: [`${APP_HOST}/api/books/1`, 'GET'],
    create_book: [`${APP_HOST}/api/books`, 'POST'],
    update_book: [`${APP_HOST}/api/books/1`, 'PUT'],
    delete_book: [`${APP_HOST}/api/books/1`, 'DELETE'],
  })
}

export default { getWelcome }
