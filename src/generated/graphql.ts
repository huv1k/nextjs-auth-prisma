import { DocumentNode } from 'graphql'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  users?: Maybe<Array<Maybe<User>>>
  viewer?: Maybe<User>
}

export type User = {
  __typename?: 'User'
  id: Scalars['String']
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type UserDetailFragment = { __typename?: 'User' } & Pick<
  User,
  'name' | 'image'
>

export type ViewrQueryVariables = Exact<{ [key: string]: never }>

export type ViewrQuery = { __typename?: 'Query' } & {
  viewer?: Maybe<{ __typename?: 'User' } & UserDetailFragment>
}

export const UserDetailFragmentDoc: DocumentNode = {
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
}
export const ViewrDocument: DocumentNode = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'viewr' },
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
}

export function useViewrQuery(
  options: Omit<Urql.UseQueryArgs<ViewrQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<ViewrQuery>({ query: ViewrDocument, ...options })
}
