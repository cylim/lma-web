import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Modal from 'react-modal';
import { useState } from 'react';
import { useTranslations } from 'use-intl';
import Constants from '../utils/constants';
import IconButton from './IconButton';
import { useAccount } from '../utils/useAccount';
import { truncateAddressString } from '../utils/numbers';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#modal-root');

const Header: NextPage = () => {
  const t = useTranslations('Header');
  // const [web3, web3Error] = useWeb3();
  const [showModal, setShowModal] = useState(false)
  const [connect, account, accError] = useAccount()


  const toggleConnect = () => setShowModal(!showModal)
  const closeModal = () => setShowModal(false)

  const handleMetamask = () => { 
    connect('metamask')
    closeModal()
  }
  const handleOneWallet =() => { 
    connect('onewallet') 
    closeModal()
  }

  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full px-20 py-10 text-center">
      <Link href="/" passHref>
        <a className="flex flex-row items-center">
          <Image src="/logo.png" alt="LMA Logo" width={20} height={40} />
          <span className="pl-5 text-xl font-bold">{t('title')}</span>
        </a>
      </Link>

      <div className="flex flex-row items-center text-base">
        <Link href="/templates" passHref>
          <a className="mr-10  hover:text-primary">{t('Sell Your Art')}</a>
        </Link>
        <Link href="/about" passHref>
          <a className="mr-10  hover:text-primary">{t('About Us')}</a>
        </Link>
        {account ? <p>{truncateAddressString(account.address)}</p>: <IconButton title={t('Connect')} handlePress={toggleConnect} />}
        
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col items-center justify-center flex-1 px-20 text-center max-w-md">
          <h1 className="font-bold text-xl py-5">{t('Connect your wallet')}</h1>
          <IconButton title={t('Metamask')} handlePress={handleMetamask} style="my-2 w-full" icon="/icons/metamask.png"/>
          <IconButton title={t('One Wallet')} handlePress={handleOneWallet} style="my-2 w-full" icon="/icons/harmony.png"/>
          <p className="text-sm py-1">{t('disclaimer_1')}</p>
          {/* <p className="text-sm py-1">{t('disclaimer_2_1')}
            <a href={Constants.harmony.metamask} className="text-primary" target='_blank' rel="noreferrer">{t('disclaimer_2_2')}</a>
          {t('disclaimer_2_3')}</p> */}

          {/* {accError ? <p>{accError}</p> : null} */}

        </div>
      </Modal>
    </div>
  )
}

export default Header
