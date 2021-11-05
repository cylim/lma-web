import type { NextPage } from 'next'
import Link from 'next/link'
import { useTranslations } from 'use-intl';

const Header: NextPage = () => {
  const t = useTranslations('Header');

  return (
    <div className="flex flex-row flex-wrap items-center justify-between w-full px-20 py-10 text-center">
      <Link href="/" passHref>
        <a className="flex flex-row items-center">
          <img src="/logo.png" alt="Vercel Logo" className="h-12" />
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
        <button className=" font-bold border-1 border-black p-2 hover:text-primary">{t('Connect')}</button>
      </div>
    </div>
  )
}

export default Header
