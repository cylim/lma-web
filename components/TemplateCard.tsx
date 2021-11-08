import type { NextPage } from 'next'
import Link from 'next/link'
import { useTranslations } from 'use-intl';

export interface TemplateCardProps {
  imageURL: string
  title: string
  _id: string
}

const TemplateCard: NextPage<TemplateCardProps> = ({ title, imageURL, _id }) => {
  const t = useTranslations('Templates');

  return (
    <div className="">
      <div className="bg-local bg-cover bg-no-repeat" style={{  backgroundImage: `url(${imageURL})`}}>
        <div className="backdrop-filter h-80 filter-none hover:backdrop-blur hover:backdrop-opacity-75">
          <div className="flex flex-col items-center justify-center w-full h-80 flex-1 text-center font-sans font-bold">
            <Link href={`/templates/${_id}`} passHref>
              <a className="underline leading-relaxed tracking-wider">{t('Start with', {title})}</a>
            </Link>
            <span>{t('Preview')}</span>
          </div>
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
    </div>
  )
}

export default TemplateCard


