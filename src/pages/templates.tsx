import type { GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useTranslations } from 'use-intl';
import Constants from '../utils/constants';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import TemplateCard, { TemplateCardProps } from '../components/TemplateCard';
import Footer from '../components/Footer';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const localeData = await import(`../utils/locales/${locale}.json`)
  return {
    props: {
      messages: JSON.parse(JSON.stringify(localeData))
    }
  };
}

const Templates = [
  { title: 'Template 1', imageURL: '/templates/template1.png', _id: '1'},
  { title: 'Template 2', imageURL: '/templates/template2.png', _id: '2'},
  { title: 'Template 3', imageURL: '/templates/template3.png', _id: '3'},
  { title: 'Template 4', imageURL: '/templates/template4.png', _id: '4'},
  { title: 'Template 5', imageURL: '/templates/template5.png', _id: '5'},
]

const Template: NextPage = () => {
  const t = useTranslations('Templates');

  const renderTemplate = (item: TemplateCardProps) => <TemplateCard {...item} key={item?.title} />

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 ">
        <SectionHeader title={t('title_1')} subtitle={t('title_2')}/>
        <div className="grid gap-x-4 gap-y-6 grid-cols-1 pt-20 md:grid-cols-2">
          {Templates.map(renderTemplate)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Template
