import React from 'react'
import { signIn, useSession } from 'next-auth/client'
import { withGraphql } from '../lib/graphql/with-graphql'
import { useViewrQuery } from '../generated/graphql'
import { Viewer } from '../components/viewer'

const Index = () => {
  const [session] = useSession()
  const [{ fetching, data }] = useViewrQuery()

  if (fetching || !data) {
    return <div>Loading</div>
  }

  return (
    <>
      {!session && (
        <>
          <h2>Not signed in</h2>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && <Viewer viewer={data.viewer} />}
    </>
  )
}

export default withGraphql(Index)
