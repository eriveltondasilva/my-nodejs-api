import { PrismaClient } from '@prisma/client'

let prisma

export default function prismaSingleton() {
  if (!prisma) {
    prisma = new PrismaClient()
  }

  return prisma
}
