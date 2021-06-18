import { enumType } from 'nexus'
import { Role } from 'nexus-prisma'
import NexusPrismaScalars from 'nexus-prisma/scalars'

export const RoleEnum = enumType(Role)
export const Scalars = NexusPrismaScalars
