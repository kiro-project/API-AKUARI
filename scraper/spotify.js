const Spotify = require('spotifydl-core').default
const fs = require('fs')

//Use public key
const spotifydl = new Spotify({
   clientId: '271f6e790fb943cdb34679a4adcc34cc',
    clientSecret: 'c009525564304209b7d8b705c28fd294'
})

module.exports = { spotifydl }
