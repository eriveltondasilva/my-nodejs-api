import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getAllBooks() {
  return await prisma.book.findMany()
}

async function getBookById(id) {
  return await prisma.book.findUnique({
    where: {
      id: Number(id),
    },
  })
}

async function createBook(data) {
  return await prisma.book.create({
    data,
  })
}

async function updateBook(id, data) {
  return await prisma.book.update({
    where: {
      id: Number(id),
    },
    data,
  })
}

async function deleteBook(id) {
  return await prisma.book.delete({
    where: {
      id: Number(id),
    },
  })
}

export default { getAllBooks, getBookById, createBook, updateBook, deleteBook }
