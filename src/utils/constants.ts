export const Harmony = {
  chainID: process.env.NODE_ENV === 'production' ? 1666600000 : 1666700000,
  chainName: process.env.NODE_ENV === 'production' ? 'Harmony Mainnet' : 'Harmony Testnet Shard 0',
  rpcURL: process.env.NODE_ENV === 'production' ? 'https://api.harmony.one' : 'https://api.s0.b.hmny.io',
  explorerURL: process.env.NODE_ENV === 'production' ? 'https://explorer.harmony.one/#/' : 'https://explorer.pops.one',
  token: 'ONE',
  decimals: 18,
}

export const Constants = {
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  production: process.env.NODE_ENV === 'production',
  harmony: Harmony,
  tutorial: {
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
