import React from 'react'
import { signIn } from 'next-auth/react'
import { withGraphql } from '../lib/utils/with-graphql'
import { Viewer } from '../components/viewer'
import { useQuery } from 'urql'
import { graphql } from '~gql'

const viewerQuery = graphql(/* GraphQL */ `
  query ViewerQuery {
    viewer {
      ...ViewerFragment
    }
  }
`)

const Index = () => {
  const [{ fetching, data, error }] = useQuery({ query: viewerQuery })

  if (fetching) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (data?.viewer) {
    return <Viewer viewer={data?.viewer} />
  }

  return (
    <>
      <h2>Not signed in</h2>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default withGraphql(Index)
