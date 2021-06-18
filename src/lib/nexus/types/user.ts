import { extendType, objectType } from 'nexus'
import { User } from 'nexus-prisma'
import { isAdmin } from '../rules'

export const user = objectType({
  name: 'User',
  definition: (t) => {
    t.field(User.id.name, User.id)
    t.field(User.name.name, User.name)
    t.field(User.image.name, User.image)
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
