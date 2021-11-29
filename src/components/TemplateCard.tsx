import type { NextPage } from 'next'
import Link from 'next/link'
import { useTranslations } from 'use-intl';

export interface TemplateCardProps {
  imageURL: string
  title: string
  _id: string
  withoutTitle?: boolean
  withoutHover?: boolean
}

const TemplateCard: NextPage<TemplateCardProps> = ({ title, imageURL, _id, withoutTitle, withoutHover}) => {
  const t = useTranslations('Templates');

  return (
    <div className="">
      <div className="bg-local bg-cover bg-no-repeat" style={{  backgroundImage: `url(${imageURL})`}}>
        <div className="group backdrop-filter h-80 hover:backdrop-blur hover:backdrop-opacity-75">
          {withoutHover ? null : <div className="flex-col items-center justify-center w-full h-80 flex-1 text-center font-sans font-bold group-hover:flex hidden">
            <Link href={`/templates/${_id}/create`} passHref>
              <a className="underline leading-relaxed tracking-wider">{t('Start with', { title })}</a>
            </Link>
            <span>{t('Preview')}</span>
          </div>}
        </div>
      </div>
      {withoutTitle ? null : <h4 className="font-bold">{title}</h4>}
    </div>
  )
}

TemplateCard.defaultProps = {
  withoutHover: false,
  withoutTitle: false,
}

export default TemplateCard


