import type { FieldAuthorizeResolver } from 'nexus/dist/plugins/fieldAuthorizePlugin'
import type { Context } from './context'

export const isAdmin: FieldAuthorizeResolver<any, any> = (
  _,
  {},
  { role }: Context
) => {
  return role === 'ADMIN'
}
