import { PrismaClient, User } from '@prisma/client'
import { NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export type JwtToken = {
  role: User['role']
  id: User['id']
}

export type Context = {
  prisma: PrismaClient
  req: NextApiRequest
} & JwtToken

export const createContext = async ({
  req,
}: {
  req: NextApiRequest
}): Promise<Context> => {
  const secret = process.env.JWT_SECRET

  const token = (await getToken({ req, secret })) as JwtToken

  return {
    req,
    prisma,
    ...token,
  }
}
