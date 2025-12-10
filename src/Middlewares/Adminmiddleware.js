const AdminSchema = require('../models/Admin'); // Adjust path to your Admin model

/**
 * Middleware to check if user is Admin
 * Use AFTER authenticateToken middleware
 */
const isAdmin = async (req, res, next) => {
  try {
    if (req.userRole !== 'admin') {
      return res.status(403).json({ 
        success: false,
        error: 'Access denied. Admin privileges required.' 
      });
    }

    // Fetch full admin details from database
    const admin = await Admin.findById(req.userId).select('-password');
    
    if (!admin) {
      return res.status(404).json({ 
        success: false,
        error: 'Admin account not found' 
      });
    }

    // Attach admin user to request
    req.user = admin;
    next();
  } catch (error) {
    console.error('Admin authorization error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Authorization failed' 
    });
  }
};

module.exports = { isAdmin };