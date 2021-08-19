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
    RefundAmtMax: String,
    PrincAmtMin: String,
    PrincAmtMax: String,
    SaleType: String,
    Issuer: String,
    cdiacNo: String,
    County: String,
    PrivatePlacement: String
  }
})

const Favorites = mongoose.model('Favorite', favoritesSchema);

module.exports = Favorites;