import type { NextPage } from 'next'
import { ReactComponentElement, ReactElement } from 'react';
import { useTranslations } from 'use-intl';

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  headerStyle?: string
  leftComponent?: any
}

const SectionHeader: NextPage<SectionHeaderProps> = ({ title, subtitle, headerStyle, leftComponent}) => {
  const t = useTranslations('Header');

  return (
    <div className={`flex flex-row justify-between border-b py-10 text-6xl font-sans font-extrabold ${headerStyle}`}>
      <div className={'flex flex-col'}>
        <h1>
          {title}
        </h1>
        {subtitle ? <h1>
          {subtitle}
        </h1> : null}
      </div>
      {leftComponent ? leftComponent() : null}
    </div>
  )
}

SectionHeader.defaultProps = {
  title: '',
  subtitle: '',
  headerStyle: '',
  leftComponent: undefined
}

export default SectionHeader


