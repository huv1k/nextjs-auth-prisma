import { PrismaClient } from '@prisma/client'
import type { User } from '@prisma/client'
import SchemaBuilder from '@pothos/core'
import PrismaPlugin from '@pothos/plugin-prisma'
import ScopeAuthPlugin from '@pothos/plugin-scope-auth'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { prisma } from '../utils/prisma'

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes
  AuthScopes: {
    isAdmin: boolean
  }
  Context: {
    userId: User['id']
    role: User['role']
  }
}>({
  prisma: {
    client: prisma,
  },
  plugins: [PrismaPlugin, ScopeAuthPlugin],
  authScopes: async ({ role }) => {
    return { isAdmin: role === 'ADMIN' }
  },
})
