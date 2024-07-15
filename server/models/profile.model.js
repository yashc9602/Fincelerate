const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  wouldInvest: { type: String, required: true }, // Changed to String
  yearlyIncome: { type: String, required: true },
  sourceOfIncome: { type: String, required: true },
  usedBuyNowPayLater: { type: String, required: true }, // Changed to String
  currentlyInvested: { type: String, required: true }, // Changed to String
  portfolioSize: { type: String, required: true },
  investmentOptions: { type: [String], required: true },
  investmentDuration: { type: String, required: true },
  riskTolerance: { type: String, required: true },
});

module.exports = mongoose.model('Profile', ProfileSchema);
