<template>
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
                         placeholder="Owner Address"
                         class="input input-primary">
                </p>
                 <p class="py-4">
                  <input type="text"
                         v-model="contractAdress"
                         placeholder="Contract Address"
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
          </div>
    </template>
<script>
 import { web3Model } from '../../packages/index'
import Web3 from 'web3'
import { abi } from './setting'

export default {
  name: 'BaseTpl',
  props:{
    provider: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
      balanceOfCount: '',
      totalSupplyCount: '',
      ownerAdress: '',
      baseCount: 1,
      netId: 4,
      contractAdress: "0x8D0CD152eDCE6D3468884AD1ade809ce6A02e53f"
    }
  },
 async mounted(){
     setTimeout( async ()=>{
        var web3ModelObj = await new web3Model(this.provider, Web3, this.netId, this.contractAdress, abi)
      this.ownerAdress = await web3ModelObj.getAccounts()
     },3000)
  },
  methods: {
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
