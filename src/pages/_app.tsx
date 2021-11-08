import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return <NextIntlProvider messages={pageProps.messages} formats={{
    dateTime: {
      short: {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
    }
  }}>
    <Component {...pageProps} />
  </NextIntlProvider>
}

export default MyApp
