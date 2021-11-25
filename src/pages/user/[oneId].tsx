import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link';

interface UserDetailProps {
  oneId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { oneId } = context.query

  return {
    props: { oneId },
  }
}

const UserDetail: NextPage<UserDetailProps> = ({ oneId }) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Id: {' '}
          <Link href="/" passHref>
            <a className="text-blue-600" >
              {oneId}
            </a>
          </Link>
        </h1>
      </main>
    </div>
  )
}

export default UserDetail
