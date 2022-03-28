// import Web3 from 'web3'

export class web3Model {
  /**
   * @param {*} providObj 
   * @param {*} web3Obj 
   * @param {*} chainId 
   * @param {*} Abi 
   */
  constructor(providObj, web3Obj, chainId, contract, abi) {
    this.providObj = providObj;
    this.web3Obj = web3Obj;
    this.chainId = chainId;
    this.contract = contract;
    this.abi = abi;
    this.web3 = new this.web3Obj(providObj)
    this.myContract = new this.web3.eth.Contract(abi, contract)
    this.gasLimit = 60000
  }
  // static async getInstance () {
  //   return Promise.resolve(new MyStorage())
  // }
  run () {
    console.log('run')
  }

  // ERC20 BASE FUNCTION OPTION
  async getTotalSupply () {
    console.log(await this.checkCurrentNetwork())
    if (await this.checkCurrentNetwork()) {

      return await this.myContract.methods.totalSupply().call({ from: this.contract })
    }
  }

  async getBalanceOf (account) {
    return await this.myContract.methods.balanceOf(account).call({ from: this.contract })
  }

  async getAllowance (owner, spender) {
    return await this.myContract.methods.allowance(owner, spender).call({ from: this.contract })
  }

  async transfer (account, toAddress, count) {
    // this.web3Obj.utils.toHex(count)
    return await this.myContract.methods.transfer(toAddress, count).send({ from: account })
  }

  async mint (account, count) {
    return await this.myContract.methods.mint(account, count).send({ from: account })
  }

  async approve (spenderAddress, count) {
    return await this.myContract.methods.approve(spenderAddress, count).send({ from: spenderAddress })
  }

  async transferFrom (fromAddress, toAddress, count) {
    return await this.myContract.methods.transferFrom(fromAddress, toAddress, count).send({ from: fromAddress })
  }


  // ERC721 BASEF FUNCTION OPTION



  // ERC1155 BASEF FUNCTION OPTION

  // check Current network
  async checkCurrentNetwork () {
    if (this.providObj.networkVersion !== this.chainId) {
      return await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: this.web3.utils.toHex(this.chainId)
          }
        ]
      }).then(() => {
        return true
      }).catch((err) => {
        if (err.code === 4902) {
          if (this.addNetwork(this.chainId)) {
            this.checkCurrentNetwork()
          }
        } else {
          return false
        }
      })
    } else {
      return true
    }
  }

  // add network
  async addNetwork (chainId) {
    const networkMap = {
      POLYGON_MAINNET: {
        chainId: chainId,
        chainName: "Matic(Polygon) Mainnet",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://polygon-rpc.com/"],
        blockExplorerUrls: ["https://polygonscan.com/"],
      },
      MUMBAI_TESTNET: {
        chainId: chainId,
        chainName: "Matic(Polygon) Mumbai Testnet",
        nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
        rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
      },
    };
    var CONF
    if (chainId === this.web3Obj.utils.toHex(80001)) {
      CONF = networkMap.MUMBAI_TESTNET
    } else {
      CONF = networkMap.POLYGON_MAINNET
    }

    return await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [CONF],
    }).then((res) => {
      // store.dispatch('wallet/setChainId', Web3.utils.hexToNumberString(chainId))
      console.log(res)
      return true
    }).catch((err) => {
      console.log(err)
      return false
    })

  }


}