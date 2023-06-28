import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import Link from 'next/link';

export default function AdminList(props) {
  if (props.session) {
    const isAdmin = props.session.user.isAdmin;
    if (isAdmin) {
      return (
        <>
          <h1>Admin List</h1>
          <p className='text-center'>Welcome, admin!</p>
        </>
      );
    } else {
      return (
        <>
          <h1>Admin List</h1>
          <p className='text-center'>You are not an admin.</p>
          <p className='text-center'>
            Go back to the <Link href='/map-main'>map.</Link>
          </p>
        </>
      );
    }
  } else {
    return (
      <>
        <h1>Admin List</h1>
        <p className='text-center'>You are not logged in.</p>
        <p className='text-center'>
          <Link href='/login'>Log in</Link> and try again.
        </p>
      </>
    );
  }
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
      session: await getServerSession(req, res, authOptions),
    },
  };
}
