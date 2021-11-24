import type { GetServerSideProps, GetStaticPropsContext, NextPage } from 'next'
import Link from 'next/link';
import Head from 'next/head';
import { useTranslations } from 'use-intl';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import SectionHeader from '../../../components/SectionHeader';
import Constants from '../../../utils/constants';
interface TemplateCreateProps {
  templateId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { templateId } = context.query
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const errorCode = res.ok ? false : res.statusCode
  // const json = await res.json()

  return {
    props: { templateId },
  }
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const localeData = await import(`../utils/locales/${locale}.json`)
  return {
    props: {
      messages: JSON.parse(JSON.stringify(localeData))
    }
  };
}

const TemplateCreate: NextPage<TemplateCreateProps> = () => {
  const t = useTranslations('TemplatesCreate');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{t('title_1')} - {Constants.appName}</title>
      </Head>
      <Header />
      <main className="flex flex-col w-full flex-1 px-20 ">
        <SectionHeader title={t('title_1')} subtitle={t('title_2')}/>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Welcome to{' '}
              <Link href="/" passHref>
                <a className="text-blue-600" >
                  LMA Art!
                </a>
              </Link>
            </h1>
          </main>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default TemplateCreate
