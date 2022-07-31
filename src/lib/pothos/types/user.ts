import { prisma } from '../../utils/prisma'
import { builder } from '../builder'

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('email', {
      nullable: true,
    }),
    image: t.exposeString('image', {
      nullable: true,
    }),
  }),
})

builder.queryType({
  fields: (t) => ({
    viewer: t.prismaField({
      type: 'User',
      nullable: true,
      resolve: (_query, _root, _args, { userId }) => {
        return prisma.user.findUnique({ where: { id: userId } })
      },
    }),
    users: t.prismaField({
      type: ['User'],
      authScopes: {
        isAdmin: true,
      },
      resolve: () => {
        return prisma.user.findMany({})
      },
    }),
  }),
})
