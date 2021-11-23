import type { NextPage } from 'next'
import Link from 'next/link'
import Constants from "../utils/constants"

export interface AccountErrorProps {
  status: string
}


const ErrorHeader: NextPage<AccountErrorProps> = ({ status }) => {

  return status ? <div className= "flex flex-row flex-wrap w-full px-20 py-5 text-center bg-red-400 text-center text-white">
     { status === 'WALLET_NOT_FOUND' ?
     <p>
      Wallet not found. Learn how to create a wallet:{' '}
      <Link href={Constants.tutorial.metamask} passHref>
        <a className="text-black">Install Metamask</a>
      </Link>

     </p>
    : <p>{status}</p>}
    
    </div > : null
}
export default ErrorHeader