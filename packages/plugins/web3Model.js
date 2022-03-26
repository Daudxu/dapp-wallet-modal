export class web3Model {
    /**
     * @param {*} providObj 
     * @param {*} web3Obj 
     * @param {*} chainId 
     * @param {*} Abi 
     */
    constructor(providObj, web3Obj, chainId, Abi) {  
        this.providObj = providObj;
        this.web3Obj = web3Obj;
        this.chainId = chainId;
        this.Abi = Abi;
    }

    run(){
        console.log('run')
    }
}