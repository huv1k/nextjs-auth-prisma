import { extendType, objectType } from 'nexus'
import { isAdmin } from '../rules'

export const user = objectType({
  name: 'User',
  definition: (t) => {
    t.model.id()
    t.model.name()
    t.model.image()
  },
})

export const userQueries = extendType({
  type: 'Query',
  definition: (t) => {
    t.field('viewer', {
      type: 'User',
      resolve: async (_, {}, { prisma, id }) => {
        return prisma.user.findUnique({ where: { id } })
      },
    })
    t.list.field('users', {
      type: 'User',
      authorize: isAdmin,
      resolve: async (_, {}, { prisma }) => {
        return prisma.user.findMany()
      },
    })
  },
})
