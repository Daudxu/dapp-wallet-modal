<template>

  <div class="hero min-h-screen"
       style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Dapp Wallet Modal</h1>
        <p class="mb-5">Dapp ETH Wallet Modal plugin.</p>
        <!-- <button class="btn btn-primary">Get Started</button> -->
        <div v-show="provider === ''">
          <button class="btn btn-success"
                  @click="handleClickConnect">Connect</button>
        </div>
        <div v-show="provider">

          <button class="btn btn-error"
                  @click="handleClickDisconnect">disconnect</button>

          <div class="divider">BASE</div>
          <div class="btu">
            <!-- The button to open modal -->
            <label for="my-modal-base-1"
                   class="btn btn-success">send Transaction</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-base-1"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-base-1"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000"> send Transaction</h3>
                <p class="py-4">
                  <input type="text"
                         v-model="baseOwnerAdress"
                         placeholder="your address"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <input type="text"
                         v-model="baseToAdress"
                         placeholder="to address"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <input type="text"
                         v-model="baseCount"
                         placeholder="count"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <button class="btn btn-active"
                          @click="handleClickSendTransaction">sendTransaction</button>
                </p>
              </div>
            </div>

            <!-- The button to open modal -->
            <label for="my-modal-base-2"
                   class="btn btn-success">Sign</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-base-2"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-base-2"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000"> Sign messages
                </h3>
                <p class="py-8">

                  <textarea class="textarea textarea-primary"
                            v-model="signText"
                            placeholder="signText"></textarea>
                </p>
                <p class="py-8">
                  <button class="btn btn-active"
                          @click="handleClickSignMessages">Sign messages</button>
                </p>
                <p class="py-8">
                  <textarea class="textarea textarea-primary"
                            v-model="signature"
                            placeholder="Bio"></textarea>
                </p>
              </div>
            </div>

            <!-- The button to open modal -->
            <label for="my-modal-base-3"
                   class="btn btn-success">Personal Sign</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-base-3"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-base-3"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000">Personal Sign
                </h3>
                <p class="py-8">

                  <textarea class="textarea textarea-primary"
                            v-model="signMessage"
                            placeholder="signMessage"></textarea>
                  <textarea class="textarea textarea-primary"
                            v-model="signPwd"
                            placeholder="signPwd"></textarea>
                </p>
                <p class="py-8">
                  <textarea class="textarea textarea-primary"
                            disabled
                            v-model="personalsignature"
                            placeholder="personal signature"></textarea>
                </p>
                <p class="py-8">
                  <button class="btn btn-active"
                          @click="handleClickPersonalSign">Personal Sign</button>
                </p>
                <h2> Verify Sign</h2>
                <p class="py-8">

                  <textarea class="textarea textarea-primary"
                            v-model="signMessage"
                            placeholder="signMessage"></textarea>

                  <textarea class="textarea textarea-primary"
                            v-model="personalsignature"
                            placeholder="signPwd"></textarea>
                </p>
                <p class="py-8">
                  <textarea class="textarea textarea-primary"
                            disabled
                            v-model="verifypersonalsignature"
                            placeholder="Validation Results"></textarea>
                </p>
                <p class="py-8">
                  <button class="btn btn-active"
                          @click="handleClickVerifyPersonalSign">verify</button>
                </p>
              </div>
            </div>

            <!-- The button to open modal -->
            <label for="my-modal-base-4"
                   class="btn btn-success">signTypedData</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-base-4"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-base-4"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000">signTypedData
                </h3>
                <p class="py-8">

                  <!-- <textarea class="textarea textarea-primary"
                            v-model="signText"
                            placeholder="signText"></textarea> -->
                </p>
                <p class="py-8">
                  <button class="btn btn-active"
                          @click="handleClickSignTypedData">signTypedData</button>
                </p>
                <p class="py-8">
                  <textarea class="textarea textarea-primary"
                            v-model="signTypedDatature"
                            placeholder="signTypedDatature"></textarea>
                </p>
              </div>
            </div>

          </div>

          <div class="divider">ERC20 Contract interaction</div>

          <div class="btu">

            <!-- The button to open modal -->
            <label for="my-modal-erc20-1"
                   class="btn btn-success">get BalanceOf</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-erc20-1"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-erc20-1"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000">Get BalanceOf </h3>
                <p class="py-4">
                  {{balanceOfCount}}
                </p>
                <p class="py-4">
                  <input type="text"
                         v-model="ownerAdress"
                         placeholder="owner address"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <button class="btn btn-active"
                          @click="handleClickGetBalanceOf">getBalanceOf</button>
                </p>
              </div>
            </div>

            <!-- The button to open modal -->
            <label for="my-modal-2"
                   class="btn btn-success">Get TotalSupply</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-2"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-2"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000">Get TotalSupply </h3>
                <p class="py-4">
                  {{totalSupplyCount}}
                </p>
                <p class="py-4">
                  <input type="text"
                         v-model="contractAdress"
                         placeholder="contract address"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <button class="btn btn-active"
                          @click="handleClickGetTotalSupply">getTotalSupply</button>
                </p>
              </div>
            </div>

            <!-- The button to open modal -->
            <label for="my-modal-3"
                   class="btn btn-success">Mint</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-3"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-3"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000">Mint </h3>
                <p class="py-4">
                  <input type="text"
                         v-model="ownerAdress"
                         placeholder="account address"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <input type="text"
                         v-model="mintCount"
                         placeholder="count"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <button class="btn btn-active"
                          @click="handleClickMint">Mint</button>
                </p>
              </div>
            </div>

            <!-- <button class="btn btn-active">getAllowance</button>
            <button class="btn btn-active">mint</button>
            <button class="btn btn-active">transfer</button>
            <button class="btn btn-active">transferFrom</button>
            <button class="btn btn-active">approve</button> -->
          </div>
          <div class="divider">ERC721 Contract interaction</div>
          <div class="btu">
            <!-- The button to open modal -->
            <label for="my-modal-3"
                   class="btn btn-success">Mint</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-3"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-3"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000">Mint </h3>
                <p class="py-4">
                  <input type="text"
                         v-model="ownerAdress"
                         placeholder="account address"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <input type="text"
                         v-model="mintCount"
                         placeholder="count"
                         class="input input-primary">
                </p>
                <p class="py-4">
                  <button class="btn btn-active"
                          @click="handleClickMint">Mint</button>
                </p>
              </div>
            </div>

          </div>

          <div class="divider">ERC1155 Contract interaction</div>
          <div class="btu">
            <!-- The button to open modal -->
            <label for="my-modal-3"
                   class="btn btn-success">open modal</label>

            <!-- Put this part before </body> tag -->
            <input type="checkbox"
                   id="my-modal-3"
                   class="modal-toggle btn btn-success">
            <div class="modal">
              <div class="modal-box relative">
                <label for="my-modal-3"
                       class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-lg font-bold"
                    style="color:#000"> random Interner user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
              </div>
            </div>

          </div>

        </div>
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
      baseOwnerAdress: '',
      baseToAdress: '',
      baseCount: 1,
      signText: '',
      signature: '',
      signTypedDatature: '',
      signMessage: '',
      signPwd: '',
      personalsignature: '',
      verifypersonalsignature: '',
      baseModel: '',
      ownerAdress: '0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166',
      contractAdress: '0x8D0CD152eDCE6D3468884AD1ade809ce6A02e53f',
      mintCount: 1,
      netId: 4,
      balanceOfCount: 0,
      totalSupplyCount: 0,
      provider: '',
      providerOptions: {
        logo: '',
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
        _this.handleClickConnect()
      }, 1000)
    }
  },
  methods: {
    async handleClickConnect () {
      var provider = await this.baseModel.connect()
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
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      this.totalSupplyCount = await web3ModelObj.getTotalSupply()


      // console.log(await web3ModelObj.getBalanceOf('0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166'))

      // console.log(await web3ModelObj.transfer("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", "0xdDC78e537D177D5e51598B02D04Ac8b5578Ed156", 10))

      // console.log(await web3ModelObj.mint("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", 1))

      // console.log(await web3ModelObj.getAllowance("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", "0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166"))

      // console.log(await web3ModelObj.approve("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", 10))

      // console.log(await web3ModelObj.transferFrom("0x1537f0d523a264d3bBDf8d4A4e8778cd65b6D166", "0xdDC78e537D177D5e51598B02D04Ac8b5578Ed156", 5))


    },
    async handleClickGetBalanceOf () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      this.balanceOfCount = await web3ModelObj.getBalanceOf(this.ownerAdress)
    },
    async handleClickGetTotalSupply () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      this.totalSupplyCount = await web3ModelObj.getTotalSupply()
    },
    async handleClickMint () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      await web3ModelObj.mint(this.ownerAdress, this.mintCount)
    },
    async handleClickSendTransaction () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      await web3ModelObj.sendTransaction(this.baseOwnerAdress, this.baseToAdress, this.baseCount)
    },
    async handleClickSignMessages () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      var sign = await web3ModelObj.sign(this.signText)
      this.signature = sign
    },
    async handleClickSignTypedData () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      var sign = await web3ModelObj.signTypedData()
      console.log('sign', sign)
      this.signTypedDatature = sign
    },
    async handleClickPersonalSign () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      var sign = await web3ModelObj.personalSign(this.signMessage, this.signPwd)
      console.log('sign', sign)
      this.personalsignature = sign
    },
    async handleClickVerifyPersonalSign () {
      var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      var sign = await web3ModelObj.personalAcRecover(this.signMessage, this.personalsignature)
      console.log('sign', sign)
      this.verifypersonalsignature = sign
    }
  }
}
</script>
<style scoped>
.btu button,
label {
  margin-left: 10px;
  margin-bottom: 10px;
}
.py-8 textarea,
.py-4 input {
  width: 100%;
}
.modal-box {
  color: #000;
}
</style>
