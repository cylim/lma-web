import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'use-intl';

export interface LatestPageListItemProps {
  site: string
  name: string
  _id: string
}

const LatestPageListItem: NextPage<LatestPageListItemProps> = ({ name, site }) => {
  const t = useTranslations('Home');

  return (
    <Link href={site} passHref >

      <a className="flex flex-row justify-between w-full py-4 space-x-2">
        <div className="text-xl font-bold w-1/3 text-left">{name}</div>
        <div className="text-l w-3/6 text-left">{site}</div>
        <div className="flex w-1/6 justify-end">
          <Image src="/icons/arrow-right.png" alt={'Enter the page'} height={25} width={46} objectFit="contain"/>
        </div>
      </a>
    </Link>
  )
}

export default LatestPageListItem


