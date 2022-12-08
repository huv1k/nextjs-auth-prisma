import type { User } from '@prisma/client'
import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { schema } from '../../lib/pothos/schema'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createYoga<
  {
    req: NextApiRequest
    res: NextApiResponse
  },
  {
    userId: User['id']
    userRole: User['role']
  }
>({
  graphqlEndpoint: '/api/graphql',
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
