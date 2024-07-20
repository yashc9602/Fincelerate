const Profile = require('../models/profile.model');

// Create or update user profile
const createOrUpdateProfile = async (req, res) => {
  const { userId } = req;
  console.log('Request body:', req.body); // Logging request body

  const {
    wouldInvest,
    yearlyIncome,
    sourceOfIncome,
    usedBuyNowPayLater,
    currentlyInvested,
    portfolioSize,
    investmentOptions,
    investmentDuration,
    riskTolerance,
    incomeSlab
  } = req.body;

  try {
    let profile = await Profile.findOne({ user: userId });

    const profileData = {
      user: userId,
      wouldInvest: wouldInvest === 'yes' ? 'yes' : 'no',
      yearlyIncome,
      sourceOfIncome,
      usedBuyNowPayLater: usedBuyNowPayLater === 'yes' ? 'yes' : 'no',
      currentlyInvested: currentlyInvested === 'yes' ? 'yes' : 'no',
      portfolioSize,
      investmentOptions,
      investmentDuration,
      riskTolerance,
      incomeSlab
    };

    if (profile) {
      // Update profile
      Object.assign(profile, profileData);
    } else {
      // Create new profile
      profile = new Profile(profileData);
    }

    await profile.save();
    console.log('Profile saved:', profile); // Logging saved profile
    res.json({ success: true, profile });
  } catch (error) {
    console.error('Error in creating/updating profile:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userId });
    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }
    // Convert boolean values to strings for frontend consumption
    const profileData = {
      ...profile.toObject(),
      wouldInvest: profile.wouldInvest === 'yes' ? 'yes' : 'no',
      usedBuyNowPayLater: profile.usedBuyNowPayLater === 'yes' ? 'yes' : 'no',
      currentlyInvested: profile.currentlyInvested === 'yes' ? 'yes' : 'no'
    };
    res.json({ success: true, profile: profileData });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { createOrUpdateProfile, getProfile };
