<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Dapp ETH Wallet Modal plugin.
    </p>
    <div class="ex-main">
      <div class="ex-main-box">
        <button @click="handleClickTest">Click</button>
        <button v-show="provider === ''"
                @click="handleClickConnect">Click Connect</button>
        <button v-show="provider"
                @click="handleClickDisconnect">Click disconnect</button>
      </div>
    </div>

  </div>
</template>

 <script>
// import '../../lib/dapp-wallet-modal.css'
// import Base from '../../lib/dapp-wallet-modal.umd.min.js'
import Base from '../../packages/index'
import { web3Model } from '../../packages/index'
import { abi } from './setting'
// import getUrlParameters from 'webpack-build-tools-test';
// import Base from 'dapp-wallet-modal';

import Web3 from 'web3'

// import { ethers } from 'ethers'

import WalletConnectLogo from "../assets/logos/walletconnect-circle.svg";

import MetaMaskLogo from "../assets/logos/metamask.svg";

import CoinbaseLogo from "../assets/logos/coinbase.svg";

import BlockWalletLogo from "../assets/logos/BlockWallet.png";

import FortmaticLogo from "../assets/logos/fortmatic.svg";

import BinancechainwalletLogo from "../assets/logos/binancechainwallet.svg";

import PortisLogo from "../assets/logos/portis.svg";

import BurnerwalletLogo from "../assets/logos/burnerwallet.png";

import TorusLogo from "../assets/logos/torus.svg";

import AuthereumLogo from "../assets/logos/authereum.svg";

import WalletConnectProvider from "@walletconnect/web3-provider";

import detectEthereumProvider from '@metamask/detect-provider';

import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

import Fortmatic from 'fortmatic';

import Portis from '@portis/web3';

import Authereum from 'authereum';

import BurnerConnectProvider from '@burner-wallet/burner-connect-provider';

import Torus from '@toruslabs/torus-embed';

// export default aaa(123123123);

const CHAINID = 4;

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      baseModel: '',
      provider: '',
      providerOptions: {
        logo: WalletConnectLogo,
        maskColor: 'rgb(30, 30, 30, 0.8)',
        bgColor: '#363636',
        borderColor: '#faba30',
        chainId: CHAINID,
        walletOptions: {
          metamask: {
            displayView: {
              logo: MetaMaskLogo,
              name: "MetaMask",
            },
            options: {
              drive: detectEthereumProvider,
            }
          },
          walletconnect: {
            displayView: {
              logo: WalletConnectLogo,
              name: "WalletConnect",
            },
            options: {
              drive: WalletConnectProvider,
              rpc: {
                1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
              },
              chainId: CHAINID,
              bridge: 'https://bridge.walletconnect.org'
            }
          },
          coinbase: {
            displayView: {
              logo: CoinbaseLogo,
              name: "Coinbase Wallet",
            },
            options: {
              drive: CoinbaseWalletSDK,
              infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
              chainId: CHAINID,
              appName: 'Digi',
              appLogoUrl: WalletConnectLogo,
              darkMode: false
            }
          },
          blockmallet: {
            displayView: {
              logo: BlockWalletLogo,
              name: "BlockWallet",
            },
            options: {}
          },
          fortmatic: {
            displayView: {
              logo: FortmaticLogo,
              name: "Fortmatic",
            },
            options: {
              drive: Fortmatic,
              chainId: CHAINID,
              key: 'pk_test_E652525CA4198573'
            }
          },
          binancechainwallet: {
            displayView: {
              logo: BinancechainwalletLogo,
              name: "Binance Wallet",
            }
          },
          portis: {
            displayView: {
              logo: PortisLogo,
              name: "Portis",
            },
            options: {
              drive: Portis,
              chainName: 'rinkeby', //mainnet,ropsten,rinkeby,goerli ...
              id: 'c668f1f8-ffc6-493e-86a1-b5c41d721ad9'
            }
          },
          burnerconnect: {
            displayView: {
              logo: BurnerwalletLogo,
              name: "burner connect",
            },
            options: {
              drive: BurnerConnectProvider,
              defaultNetwork: 4,
              chainId: 4
            }
          },
          torus: {
            displayView: {
              logo: TorusLogo,
              name: "torus",
            },
            options: {
              drive: Torus
            }
          },
          authereum: {
            displayView: {
              logo: AuthereumLogo,
              name: "authereum",
            },
            options: {
              drive: Authereum,
              chainName: 'rinkeby',
            }
          }
        },

      }
    }
  },
  mounted () {
    this.baseModel = new Base(this.providerOptions)
    const walletType = localStorage.getItem("injected")
    var _this = this
    if (walletType && typeof (walletType) !== 'undefined') {
      setTimeout(function () {
        console.log('lai le')
        _this.handleClickConnect()
      }, 3000)
    }
  },
  methods: {
    async handleClickConnect () {
      var provider = await this.baseModel.connect()
      console.log('provider', provider)
      if (provider) {
        this.provider = provider
      }
    },
    handleClickDisconnect () {
      this.baseModel.disconnect(this.provider)
      this.provider = ''
    },
    async handleClickTest () {
      // https://rinkeby.etherscan.io/address/0x8d0cd152edce6d3468884ad1ade809ce6a02e53f
      //  console.log(CHAIN_DATA_LIST)
      // var b = new web3Model(ethers)
      // console.log(b.run())
      // console.log(Web3.utils.isAddress("0xdDC78e537D177D5e51598B02D04Ac8b5578Ed156"))
      var web3ModelObj = new web3Model(this.provider, Web3, 4, "0x8D0CD152eDCE6D3468884AD1ade809ce6A02e53f", abi)

      // console.log(await web3ModelObj.getTotalSupply())

      // console.log(await web3ModelObj.getBalanceOf('0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166'))

      // console.log(await web3ModelObj.transfer("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", "0xdDC78e537D177D5e51598B02D04Ac8b5578Ed156", 10))

      // console.log(await web3ModelObj.mint("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", 1))

      // console.log(await web3ModelObj.getAllowance("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", "0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166"))

      // console.log(await web3ModelObj.approve("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", 10))

      console.log(await web3ModelObj.transferFrom("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", "0xdDC78e537D177D5e51598B02D04Ac8b5578Ed156", 5))


    }
  }
}
</script>
<style scoped>
.ex-main {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
.ex-main .ex-main-box {
  width: 300px;
  display: flex;
  justify-content: center;
}
.ex-main .ex-main-box button {
  height: 30px;
  background: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
