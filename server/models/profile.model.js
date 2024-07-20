const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  wouldInvest: { type: String, required: true },
  yearlyIncome: { type: String, required: true },
  sourceOfIncome: { type: String, required: true },
  usedBuyNowPayLater: { type: String, required: true },
  currentlyInvested: { type: String, required: true },
  portfolioSize: { type: String, required: true },
  investmentOptions: { type: [String], required: true },
  investmentDuration: { type: String, required: true },
  riskTolerance: { type: String, required: true },
  incomeSlab: { type: String, required: true }
});

module.exports = mongoose.model('Profile', ProfileSchema);
