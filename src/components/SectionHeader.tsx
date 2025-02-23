import type { NextPage } from 'next'
import { useTranslations } from 'use-intl';

interface SectionHeaderProps {
  title?: string
  subtitle?: string
}

const SectionHeader: NextPage<SectionHeaderProps> = ({ title, subtitle}) => {
  const t = useTranslations('Header');

  return (
    <div className="border-b py-14">
      <h1 className="text-6xl font-bold">
        {title}
      </h1>
      {subtitle ? <h1 className="text-6xl font-bold">
        {subtitle}
      </h1> : null}
    </div>
  )
}

export default SectionHeader


