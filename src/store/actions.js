export default {
  getEvents: ({ commit }) => {
    fetch('https://distinct-mature-appliance.glitch.me/getEvents')
      .then(res => res.json())
      .then(result => commit('getEvents', result))
  },

  addEvent: ({ dispatch }, payload) => {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
      event: payload.desc
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('https://distinct-mature-appliance.glitch.me/addEvent', requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        dispatch('getEvents')
      })
      .catch(error => console.log('error', error))
  },

  getParticipants: ({ commit }) => {
    fetch('https://distinct-mature-appliance.glitch.me/getParticipants')
      .then(res => res.json())
      .then(result => commit('getParticipants', result))
  },

  addParticipant: ({ dispatch }, payload) => {
    console.log(payload)
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
      person: payload.person
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    }

    fetch('https://distinct-mature-appliance.glitch.me/addParticipant', requestOptions)
      .then(res => res.text())
      .then(result => {
        console.log(result)
        dispatch('getParticipants')
      })
  }
}
