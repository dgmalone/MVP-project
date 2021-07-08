const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/favorites', {useNewUrlParser: true, useUnifiedTopology: true})

db.then(db => {
  console.log('Connected to mongo')
})
  .catch(err => {
    console.log('failed to connect', err)
  })

  module.exports = db;