export const Constants = {
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  production: process.env.NODE_ENV === 'production',
  harmony: {
    chainURL: process.env.NODE_ENV === 'production' ? 'https://api.s0.t.hmny.io' : 'https://api.s0.b.hmny.io',
    metamask: 'https://docs.harmony.one/home/network/wallets/browser-extensions-wallets/metamask-wallet',
  },
}

export const Templates = [
  {title: 'Template 1', imageURL: '/templates/template1.png', _id: '1'},
  {title: 'Template 2', imageURL: '/templates/template2.png', _id: '2'},
  {title: 'Template 3', imageURL: '/templates/template3.png', _id: '3'},
  {title: 'Template 4', imageURL: '/templates/template4.png', _id: '4'},
  {title: 'Template 5', imageURL: '/templates/template5.png', _id: '5'},
]

export default Constants