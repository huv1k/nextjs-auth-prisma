import type { UserRole, User } from '@prisma/client'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: UserRole
    id: User['id']
  }
}
