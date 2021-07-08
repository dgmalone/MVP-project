const Favorites = require('./db/Favorites.js')

exports.getFavs = (userName, callback)=> {
  console.log('test', userName)
  Favorites.find({}, (err, docs) => {
    callback(err, docs)
  })
}

exports.saveFilter = (data, callback) => {
  console.log('saveFilter data:', data);
  Favorites.create(data, (err, docs) => {
    callback(err, docs)
  })
}