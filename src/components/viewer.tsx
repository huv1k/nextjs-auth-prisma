import Image from 'next/image'
import { signOut } from 'next-auth/client'
import { UserDetailFragment } from '../lib/graphql/generated/viewer.generated'

interface Props {
  viewer: UserDetailFragment
}

export const Viewer = ({ viewer }: Props) => (
  <div>
    <Image width="150px" height="150px" src={viewer.image} alt={viewer.name} />
    <h2>{viewer.name}</h2>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
)
