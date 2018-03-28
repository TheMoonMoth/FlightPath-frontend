<template>
  <div id='Donation' v-if="donateToggle">
    <form v-if="!donationSuccess" class="stripe-form" @submit.prevent="pay">
      <p id="thanks">Thank you for considering a donation to this author.</p>
      <label>Please choose a donation amount:</label>
      <input v-model="chargeObject.amount" id="amount" type="number" min="0" name="amount">
      <label>Please provide your payment details:</label>
      <card class='stripe-card'
        :class='{ complete }'
        stripe='pk_test_OZViwf7sVKsvre0P16Hs3Ugm'
        @change='complete = $event.complete'
      />
      <div class="buttons">
        <input type="submit" value="Donate" class='pay-with-stripe' :disabled='!complete' />
        <button v-on:click="exitDonationComponent" type="button" name="cancel">Cancel</button>
      </div>
    </form>
    <div class="modal" v-if="donationSuccess">
      <div class="donation-success">
        <p id="thanks-message">Thank you so much for your donation of ${{chargeObject.amount}}.00!</p>
        <p @click="exitDonationComponent" class="close">&times;</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, createToken } from "vue-stripe-elements"

export default {
  name: "Stripe",
  data() {
    return {
      apiURL: "https://spacelanedb.herokuapp.com/",
      donateToggle: true,
      complete: false,
      donationSuccess: false,
      chargeObject: {
        token: undefined,
        amount: undefined,
        service: "Donation to Author ID",
      },
      errorMessage: undefined,
    }
  },
  components: { 
    Card 
  },
  methods: {
    pay() {
      createToken()
        .then(data => {
          this.chargeObject.token = data.token.id
          console.log(this.chargeObject)
          fetch(this.apiURL + "charge", {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(this.chargeObject)
          })
            .then(res => res.json())
            .then(res => {
              if(res.charge){
                this.donationSuccess = !this.donationSuccess
              }
            })
            .catch(error => {
              this.errorMessage = error.message
            })
        })
    },
    exitDonationComponent(){
      this.chargeObject.amount = undefined
      this.complete = false
      this.chargeObject.token = undefined
      this.donationSuccess = false
    }
  }
}
</script>

<style>

#Donation {
  margin-top: 25px;
  font-family: "Quicksand"
}

#Donation form {
  display: flex;
  flex-direction: column;
}

</style>
