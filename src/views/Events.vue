<template>
  <div class="home">
    <h1>All Events</h1>
    <b-table striped hover :items="events">
    </b-table>
    <button @click="showNewEventForm">Add a new Event</button>
    <b-form @submit.prevent="newEvent" v-if="showForm">

      <b-form-group id="input-group-2" label="Event Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.desc"
          placeholder="Enter event description"
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
        desc: ''
      }
    }
  },
  computed: {
    ...mapState([
      'events'
    ])
  },
  methods: {
    ...mapActions([
      'getEvents',
      'addEvent'
    ]),
    showNewEventForm () {
      this.showForm = !this.showForm
    },
    newEvent () {
      const payload = {
        desc: this.form.desc
      }
      this.addEvent(payload)
    }
  },
  mounted () {
    this.getEvents()
  }
}
</script>
