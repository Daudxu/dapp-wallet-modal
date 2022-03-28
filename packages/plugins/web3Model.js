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
    //  check address is 
    // Web3.utils.isAddress(contract)
  }

  run () {
    console.log('run')
  }


  // ERC20 BASE FUNCTION OPTION
  async getTotalSupply () {
    return await this.myContract.methods.totalSupply().call({ from: this.contract })
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


}