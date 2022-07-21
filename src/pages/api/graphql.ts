import type { User } from '@prisma/client'
import { createServer } from '@graphql-yoga/node'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { schema } from '../../lib/pothos/schema'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createServer<
  {
    req: NextApiRequest
    res: NextApiResponse
  },
  {
    userId: User['id']
    userRole: User['role']
  }
>({
  schema,
  context: async ({ req }) => {
    const token = await getToken({ req })

    if (token) {
      return { userId: token.id, userRole: token.role }
    }

    return {
      userId: 'unauthenticated',
      userRole: 'USER',
    }
  },
})
