import type { NextPage } from 'next'
import Image from 'next/image'
import { useTranslations } from 'use-intl';

interface LinkProps {
  url: string
  title: string
  target: string
}

const communities = [
  { url: '#', title: 'Help Center', target: '_self' },
  { url: '#', title: 'LMA - DAO', target: '_self' },
  { url: '#', title: 'Snapshot Votation', target: '_self' },
  { url: '#', title: 'LMA token', target: '_self' },
]

const social = [
  { url: '#', title: 'Twitter', target: '_self' },
  { url: '#', title: 'Telegram', target: '_self' },
  { url: '#', title: 'Youtube', target: '_self' },
  { url: '#', title: 'Learn More', target: '_self' },
]

const Footer: NextPage = () => {
  const t = useTranslations('Footer');

  const renderLink = (item: LinkProps) => <a key={item.title} href={item.url} target={item.target} className="hover:text-primary">{t(item.title)}</a>

  return (
    <footer className="flex flex-col items-center justify-center w-full px-20 mt-20 pt-20 bg-neutral-5">
      <div className="flex flex-row items-center justify-between">
        <Image src="/logo.png" alt="LMA Logo"  width={100} height={280}/>
        <div className="pl-8">
          <span className="font-bold text-base">{t('description')}</span>
        </div>
        <div className="flex flex-col text-sm pl-10 leading-6 min-w-max">
          <h4 className="font-bold leading-7">{t('Community:')}</h4>
          {communities.map(renderLink)}
          </div>
        <div className="flex flex-col text-sm pl-10 leading-6 min-w-max">
          <h4 className="font-bold leading-7">{t('Follow:')}</h4>
          {social.map(renderLink)}
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
