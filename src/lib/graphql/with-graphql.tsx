import type { NextPage } from 'next'
import { withUrqlClient, WithUrqlProps } from 'next-urql'

export const withGraphql = (page: NextPage<WithUrqlProps>) =>
  withUrqlClient(() => ({ url: '/api/graphql' }))(page)
