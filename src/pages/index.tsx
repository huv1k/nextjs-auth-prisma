import React from 'react'
import { signIn } from 'next-auth/react'
import { withGraphql } from '../lib/graphql/with-graphql'
import { useViewerQuery } from '../lib/graphql/viewer.generated'
import { Viewer } from '../components/viewer'

const Index = () => {
  const [{ fetching, data, error }] = useViewerQuery()

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
