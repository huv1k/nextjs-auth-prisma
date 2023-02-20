import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useFragment, FragmentType, graphql } from '~gql'

const ViewerFragment = graphql(/* GraphQL */ `
  fragment ViewerFragment on User {
    name
    image
  }
`)

interface Props {
  viewer: FragmentType<typeof ViewerFragment>
}

export const Viewer = (props: Props) => {
  const viewer = useFragment(ViewerFragment, props.viewer)
  return (
    <div>
      {viewer.image && (
        <Image
          width={150}
          height={150}
          src={viewer.image}
          alt={viewer.name ?? 'User without a name'}
        />
      )}
      <h2>{viewer.name}</h2>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
