import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import PrismaAdapter from '@next-auth/prisma-adapter'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

const auth: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],
    secret: process.env.JWT_SECRET,
    session: {
      jwt: true,
    },
    callbacks: {
      jwt: async (token, user) => {
        const { role, id } = token

        if (!role) {
          const { id, role } = user as User

          return { role, id }
        }

        return { role, id }
      },
    },
    // Prisma adapter returns for User `id` string instead of `number`
    // @ts-ignore
    adapter: PrismaAdapter({ prisma }),
  })

export default auth
