import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getAllBooks() {
  return await prisma.book.findMany({
    include: {
      author: true,
    },
  })
}

async function getBookById(id) {
  return await prisma.book.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      author: true,
    },
  })
}

async function createBook(data) {
  //
}

async function updateBook(id, data) {
  //
}

async function deleteBook(id) {
  //
}

export default { getAllBooks, getBookById, createBook, updateBook, deleteBook }
