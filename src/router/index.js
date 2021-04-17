import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'
import EventInd from '../views/EventInd.vue'
import ParticipantInd from '../views/ParticipantInd.vue'
import Participants from '../views/Participants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all-events',
    name: 'Events',
    component: Events
  },
  {
    path: '/all-participants',
    name: 'Participants',
    component: Participants
  },
  {
    path: '/:participantId',
    name: 'Participant',
    component: ParticipantInd
  },
  {
    path: '/:eventId',
    name: 'Event',
    component: EventInd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
