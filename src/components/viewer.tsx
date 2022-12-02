import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { UserDetailFragment } from '../lib/graphql/viewer.generated'

interface Props {
  viewer: UserDetailFragment
}

export const Viewer = ({ viewer }: Props) => (
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
