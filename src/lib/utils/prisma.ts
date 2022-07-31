import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient
}

export const prisma = global.prisma ?? new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma
}
