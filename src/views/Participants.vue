<template>
    <div>
        <h1>All Participants</h1>
        <b-table striped hover :items="participants">
      </b-table>

      <button @click="showNewPersonForm">Add a new Participant</button>
    <b-form @submit.prevent="newPerson" v-if="showForm">

      <b-form-group id="input-group-2" label="Participant Name" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter Person's Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>

    </b-form>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {

  data () {
    return {
      showForm: false,
      form: {
        name: ''
      }
    }
  },
  computed: {
    ...mapState([
      'participants'
    ])
  },
  methods: {
    ...mapActions([
      'getParticipants',
      'addParticipant'
    ]),
    showNewPersonForm () {
      this.showForm = !this.showForm
    },
    newPerson () {
      const payload = {
        person: this.form.name
      }
      this.addParticipant(payload)
    }
  },
  mounted () {
    this.getParticipants()
  }
}

</script>
