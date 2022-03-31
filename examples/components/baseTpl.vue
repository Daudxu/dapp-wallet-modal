<template>
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
      netId: 4,
      contractAdress: "0x8D0CD152eDCE6D3468884AD1ade809ce6A02e53f"
    }
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
      var sign = await web3ModelObj.signTypedData(await this.msgParamsData(4))
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
    },
     async msgParamsData (chainId) {
        return JSON.stringify({
          types: {
            EIP712Domain: [
              { name: "name", type: "string" },
              { name: "version", type: "string" },
              { name: "chainId", type: "uint256" },
              { name: "verifyingContract", type: "address" },
            ],
            Person: [
              { name: "name", type: "string" },
              { name: "account", type: "address" },
            ],
            Mail: [
              { name: "from", type: "Person" },
              { name: "to", type: "Person" },
              { name: "contents", type: "string" },
            ],
          },
          primaryType: "Mail",
          domain: {
            name: "Example Dapp",
            version: "1.0",
            chainId: chainId,
            verifyingContract: "0x0000000000000000000000000000000000000000",
          },
          message: {
            from: {
              name: "Alice",
              account: "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            },
            to: {
              name: "Bob",
              account: "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            },
            contents: "Hey, Bob!",
          },
        });
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