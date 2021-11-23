export const Constants = {
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  production: process.env.NODE_ENV === 'production',
  harmony: {
    chainURL: process.env.NODE_ENV === 'production' ? 'https://api.s0.t.hmny.io' : 'https://api.s0.b.hmny.io',
    metamask: 'https://docs.harmony.one/home/network/wallets/browser-extensions-wallets/metamask-wallet',
  },
}

export default Constants