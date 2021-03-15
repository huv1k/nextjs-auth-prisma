import { signOut } from 'next-auth/client'
import { UserDetailFragment } from '../generated/graphql'

interface Props {
  viewer: UserDetailFragment
}

export const Viewer = ({ viewer }: Props) => (
  <div>
    <img
      width="150px"
      height="150px"
      style={{ borderRadius: '50%' }}
      src={viewer.image}
    />
    <h2>{viewer.name}</h2>
    <button onClick={() => signOut()}>Sign out</button>
  </div>
)
