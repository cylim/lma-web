import { Harmony } from '@harmony-js/core'
import { ChainID, ChainType } from '@harmony-js/utils'
import { useEffect, useState } from 'react'
import Constants from './constants'

export const EXPLORER_URL = 'https://explorer.harmony.one/#'

const GAS_LIMIT = 6721900
const GAS_PRICE = 1000000000

const hmy = new Harmony(Constants.harmony.chainURL, {
  chainType: ChainType.Harmony,
  chainId: Constants.production ? ChainID.HmyMainnet : ChainID.HmyTestnet,
})

const contractJson = require('./SoccerPlayers.json')
// const contractAddrTestnet = '0x0Fc3269F1ED6807aD96C62b66fAfdE2C02f9a76b';
const contractAddr = '0x4abd7C503445380dDc3844DcaE1d08dB997C714A'

const soccerPlayers = hmy.contracts.createContract(contractJson.abi, contractAddr)


export const useLMAContract = () => {
  const [web3, setWeb3] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        if (window.ethereum) {
          setError(null)
          await window.ethereum.enable()
          setWeb3(new Web3(window.ethereum))
        } else if (window.web3) {
          setError(null)
          setWeb3(new Web3(window.web3.currentProvider))
        } else {
          throw new Error('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      } catch (err) {
        setWeb3(null)
        setError(err.message)
      }
    }

    initWeb3()
  }, [])

  return {web3, web3Error: error}
}
