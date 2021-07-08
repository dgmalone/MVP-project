const Favorites = require('./db/Favorites.js')

exports.getFavs = (userName, callback)=> {
  // filter favoirtes by username
  Favorites.find({userName}, (err, docs) => {
    callback(err, docs)
  })
}

exports.deleteFav = (id, callback) => {
  Favorites.deleteOne({_id: id}, (err, docs) => {
    callback(err, docs)
  })
}
exports.updateFav = (data, callback) => {
  //console.log(data);
  Favorites.findOneAndUpdate({_id: data.id}, {searchName: data.newName}, (err, docs) => {
    callback(err, docs)
  })
}

exports.updateFavFilter = (data, callback) => {
  //console.log(data);
  Favorites.findOneAndUpdate({_id: data.id}, {filters: data.filters}, (err, docs) => {
    callback(err, docs)
  })
}

exports.saveFilter = (data, callback) => {
  //console.log('saveFilter data:', data);
  Favorites.create(data, (err, docs) => {
    callback(err, docs)
  })
}