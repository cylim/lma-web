import type { NextPage } from 'next'
import { useTranslations } from 'use-intl';

interface SectionHeaderProps {
  title?: string
  subtitle?: string
}

const SectionHeader: NextPage<SectionHeaderProps> = ({ title, subtitle}) => {
  const t = useTranslations('Header');

  return (
    <div className="border-b py-10">
      <h1 className="text-6xl font-sans font-extrabold">
        {title}
      </h1>
      {subtitle ? <h1 className="text-6xl font-sans  font-extrabold">
        {subtitle}
      </h1> : null}
    </div>
  )
}

export default SectionHeader


