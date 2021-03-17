import React from 'react'
import { signIn, useSession } from 'next-auth/client'
import { withGraphql } from '../lib/graphql/with-graphql'
import { useViewrQuery } from '../generated/graphql'
import { Viewer } from '../components/viewer'

const Index = () => {
  const [session, loading] = useSession()
  const [{ fetching, data }] = useViewrQuery()

  if (fetching || loading) {
    return <div>Loading</div>
  }

  return !session && !data ? (
    <>
      <h2>Not signed in</h2>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  ) : (
    <Viewer viewer={data.viewer} />
  )
}

export default withGraphql(Index)
