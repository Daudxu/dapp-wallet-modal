export class ethersModel {
    /**
     * @param {*} providObj 
     * @param {*} ethersObj 
     * @param {*} chainId 
     * @param {*} Abi 
     */
    constructor(providObj, ethersObj, chainId, Abi) {  
        this.providObj = providObj;
        this.ethersObj = ethersObj;
        this.chainId = chainId;
        this.Abi = Abi;
    }

    run(){
        console.log('run')
    }
}