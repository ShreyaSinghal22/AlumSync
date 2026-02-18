
const Alumni = require('../'); // Adjust path to your Alumni model

/**
 * Middleware to check if user is Alumni
 * Use AFTER authenticateToken middleware
 */
const isAlumni = async (req, res, next) => {
  try {
    if (req.userRole !== 'alumni') {
      return res.status(403).json({ 
        success: false,
        error: 'Access denied. Alumni privileges required.' 
      });
    }

    // Fetch full alumni details from database
    const alumni = await Alumni.findById(req.userId).select('-password');
    
    if (!alumni) {
      return res.status(404).json({ 
        success: false,
        error: 'Alumni account not found' 
      });
    }

    // Attach alumni user to request
    req.user = alumni;
    next();
  } catch (error) {
    console.error('Alumni authorization error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Authorization failed' 
    });
  }
};

module.exports = { isAlumni };
