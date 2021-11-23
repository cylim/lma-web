import {useState} from 'react'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
const {HarmonyExtension} = require('@harmony-js/core')


export const useAccount = () => {
  const [account, setAccount] = useState<any | undefined>(undefined)
  const [chainId, setChainId] = useState<number | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleAccountsChanged = (accounts: [string?]) => {
    if (accounts.length === 0) {
      console.error('Not found accounts')
    } else {
      setAccount({address: accounts[0]})
      console.log('Your address: ', accounts[0])
    }
  }

  const handleDisconnected = () => {
    setAccount(undefined)
    setError(undefined)
  }

  const handleChangeChainId = (chainId: number) => {
    setChainId(chainId)
    console.log('chainIdChanged', chainId)
  }

  const connect = async (wallet: string) => {
    try {
      if (wallet === 'onewallet') {
        const harmonyExt = await new HarmonyExtension(window.onewallet)
        const account = await harmonyExt.login()
        console.log(account)
        setAccount(account)
      } else if( wallet === 'metamask') {
        const provider: any = await detectEthereumProvider({mustBeMetaMask: true, silent: true})
        if (!provider) {
          throw new Error('Metamask not found')
        }
        if (provider !== window.ethereum) {
          throw new Error('Do you have multiple wallets installed?')
        }

        provider.on('accountsChanged', handleAccountsChanged)
        provider.on('disconnect', handleDisconnected)
        provider.on('chainIdChanged', handleChangeChainId)
        
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: '0x63564C40'}],
          })
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await provider.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x63564C40',
                  chainName: 'Harmony Mainnet',
                  nativeCurrency: {
                    name: 'ONE',
                    symbol: 'ONE',
                    decimals: 18,
                  },
                  rpcUrl: ['https://api.harmony.one'],
                  blockExplorerUrls: ['https://explorer.harmony.one/#/'],
                },
              ],
            })
          }
        }
        const acc = await provider.request({method: 'eth_requestAccounts'})
        handleAccountsChanged(acc)
      }
    } catch (err: any) {
      handleDisconnected()
      console.log(err.message)
      setError(err)
    }
  }

  return [connect, account, error]
}
