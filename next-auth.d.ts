import type { UserRole, User as PrismaUser } from '@prisma/client'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    role: UserRole
    id: PrismaUser['id']
  }
}

declare module 'next-auth' {
  interface User extends PrismaUser {}
}
