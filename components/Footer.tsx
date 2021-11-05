import type { NextPage } from 'next'
import Link from 'next/link'
import { useTranslations } from 'use-intl';

const Footer: NextPage = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="flex flex-col items-center justify-center w-full px-20 mt-20 pt-20 bg-neutral-5">
      <div className="flex flex-row items-center justify-between">
          <img src="/logo.png" alt="Vercel Logo" className="h-28 mr-8" />
          <div>
          <span className="font-bold text-base">{t('description')}</span>
          </div>
        <div className="flex flex-col text-sm pl-10 leading-6 min-w-max">
          <h4 className="font-bold leading-7">{t('Community:')}</h4>
            <a href="#">{t('Help Center')}</a>
            <a href="#">{t('LMA - DAO')}</a>
            <a href="#">{t('Snapshot Votation')}</a>
            <a href="#">{t('LMA token')}</a>
          </div>
        <div className="flex flex-col text-sm pl-10 leading-6 min-w-max">
          <h4 className="font-bold leading-7">{t('Follow:')}</h4>
          <a href="#">{t('Twitter')}</a>
          <a href="#">{t('Telegram')} </a>
          <a href="#">{t('Youtube')}</a>
          <a href="#">{t('Learn More')}</a>
          </div>
      </div>

      <div className="flex flex-row items-center py-5 text-xs">
        <span className="mx-4">© LMA Art Gallery 2021</span>
        <span className="mx-4"> · </span>
        <span className="mx-4">lam.art.gallery.dao@gmail.com</span>
      </div>
    </footer>
  )
}

export default Footer
