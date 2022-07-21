import * as Types from './generated/types'

import { DocumentNode } from 'graphql'
import * as Urql from 'urql'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type UserDetailFragment = {
  __typename?: 'User'
  name?: string | null
  image?: string | null
}

export type ViewerQueryVariables = Types.Exact<{ [key: string]: never }>

export type ViewerQuery = {
  __typename?: 'Query'
  viewer?: {
    __typename?: 'User'
    name?: string | null
    image?: string | null
  } | null
}

export const UserDetailFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode
export const ViewerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'viewer' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'viewer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserDetail' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserDetail' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode

export function useViewerQuery(
  options?: Omit<Urql.UseQueryArgs<ViewerQueryVariables>, 'query'>
) {
  return Urql.useQuery<ViewerQuery, ViewerQueryVariables>({
    query: ViewerDocument,
    ...options,
  })
}
