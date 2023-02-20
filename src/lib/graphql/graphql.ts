/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
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
  users: Array<User>
  viewer?: Maybe<User>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type ViewerFragmentFragment = {
  __typename?: 'User'
  name?: string | null
  image?: string | null
} & { ' $fragmentName'?: 'ViewerFragmentFragment' }

export type ViewerQueryQueryVariables = Exact<{ [key: string]: never }>

export type ViewerQueryQuery = {
  __typename?: 'Query'
  viewer?:
    | ({ __typename?: 'User' } & {
        ' $fragmentRefs'?: { ViewerFragmentFragment: ViewerFragmentFragment }
      })
    | null
}

export const ViewerFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ViewerFragment' },
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
} as unknown as DocumentNode<ViewerFragmentFragment, unknown>
export const ViewerQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ViewerQuery' },
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
                  name: { kind: 'Name', value: 'ViewerFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ViewerFragmentFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ViewerQueryQuery, ViewerQueryQueryVariables>
