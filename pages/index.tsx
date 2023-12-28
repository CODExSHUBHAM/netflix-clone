
import Navbar from '@/components/navbar';
import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {

  const { data: user } = useCurrentUser();

  return (
    <div className='w-full'>
      <Navbar />
      <button className='px-6 py-3 text-center font-bold rounded-full mx-auto bg-white mt-60' onClick={() => signOut()}> Logout !!</button>
    </div>
  )
}
