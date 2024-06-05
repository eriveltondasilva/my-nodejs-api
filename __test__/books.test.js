import supertest from 'supertest'
import { describe, expect, it } from 'vitest'
import app from '../src/index.js'

const api = supertest(app)
const book = { title: 'test book', author: 'Test Author' }

describe('GET /api/books', () => {
  it('should return a status code of 200', async () => {
    const res = await api.get('/api/books')

    expect(res.status).toEqual(200)
  })
})

describe('GET /api/books/:id', () => {
  it('should return a book with the specified ID', async () => {
    const res = await api.get('/api/books/1')

    expect(res.status).toEqual(200)
    expect(res.body.id).toEqual(1)
  })

  it('should return an error when the book does not exist', async () => {
    const res = await api.get('/api/books/9999999999')

    expect(res.status).toEqual(404)
    expect(res.body.message).toMatch(/book not found/i)
  })
})

describe('POST /api/books', () => {
  it('should create a new book', async () => {
    const res = await api.post('/api/books').send(book)

    expect(res.status).toEqual(201)
    expect(res.body.title).toEqual(book.title)
    expect(res.body.author).toEqual(book.author)

    await api.delete(`/api/books/${res.body.id}`)
  })

  it('should return an error when the book data is incomplete', async () => {
    const book = {}

    const res = await api.post('/api/books').send(book)

    expect(res.status).toEqual(500)
  })
})

describe('PUT /api/books/:id', () => {
  it('should update an existing book', async () => {
    const updatedBook = {
      title: 'updated test book',
      author: 'Updated Test Author',
    }

    // create a book
    const createRes = await api.post('/api/books').send(book)
    expect(createRes.status).toEqual(201)

    const bookId = createRes.body.id

    // get the created book
    const getResBeforeUpdate = await api.get(`/api/books/${bookId}`)
    expect(getResBeforeUpdate.status).toEqual(200)
    expect(getResBeforeUpdate.body).toMatchObject(book)

    // update the created book
    const updateRes = await api.put(`/api/books/${bookId}`).send(updatedBook)
    expect(updateRes.status).toEqual(200)
    expect(updateRes.body).toMatchObject(updatedBook)

    // get the updated book
    const getResAfterUpdate = await api.get(`/api/books/${bookId}`)
    expect(getResAfterUpdate.status).toEqual(200)
    expect(getResAfterUpdate.body).toMatchObject(updatedBook)

    // delete the updated book
    await api.delete(`/api/books/${bookId}`)
  })
})

describe('DELETE /api/books/:id', () => {
  it('should delete an existing book', async () => {
    // create a book
    const createRes = await api.post('/api/books').send(book)
    expect(createRes.status).toEqual(201)

    const bookId = createRes.body.id

    // get the created book
    const getResBeforeDelete = await api.get(`/api/books/${bookId}`)
    expect(getResBeforeDelete.status).toEqual(200)
    expect(getResBeforeDelete.body).toMatchObject(book)

    // delete the created book
    const deleteRes = await api.delete(`/api/books/${createRes.body.id}`)
    expect(deleteRes.status).toEqual(200)

    // get the deleted book
    const getResAfterDelete = await api.get(`/api/books/${bookId}`)
    expect(getResAfterDelete.status).toEqual(404)
  })
})
