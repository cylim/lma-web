import type { NextPage } from 'next'
import Constants from '../utils/constants'

const Header: NextPage = () => {
  return (
    <div>

    <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
          {Constants.appName}
          </a>
        </h1>
    </div>

  )
}

export default Header
