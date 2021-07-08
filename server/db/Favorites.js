const mongoose = require('mongoose');

const favoritesSchema = new mongoose.Schema({
  userName: String,
  searchName: String,
  filters: {
    FA: String,
    Counsel: String,
    SaleDateStart: String,
    SaleDateEnd: String,
    IssuerType: String,
    DebtType: String,
    RefundAmtMin: String,
    SaleType: String,
    Issuer: String
  }
})

const Favorites = mongoose.model('Favorite', favoritesSchema);

module.exports = Favorites;