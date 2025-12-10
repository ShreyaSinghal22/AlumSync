
const Admin = require('../');
const Alumni = require('../');
const Student = require('../');

/**
 * Middleware to allow multiple roles
 * Use AFTER authenticateToken middleware
 * 
 * Example: hasRole('admin', 'alumni') - allows both admin and alumni
 */
const hasRole = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      // Check if user's role is in the allowed roles
      if (!allowedRoles.includes(req.userRole)) {
        return res.status(403).json({ 
          success: false,
          error: `Access denied. Required roles: ${allowedRoles.join(', ')}` 
        });
      }

      // Fetch user based on their role
      let user;
      switch (req.userRole) {
        case 'admin':
          user = await Admin.findById(req.userId).select('-password');
          break;
        case 'alumni':
          user = await Alumni.findById(req.userId).select('-password');
          break;
        case 'student':
          user = await Student.findById(req.userId).select('-password');
          break;
        default:
          return res.status(403).json({ 
            success: false,
            error: 'Invalid user role' 
          });
      }

      if (!user) {
        return res.status(404).json({ 
          success: false,
          error: 'User account not found' 
        });
      }

      // Attach user to request
      req.user = user;
      next();
    } catch (error) {
      console.error('Role authorization error:', error);
      return res.status(500).json({ 
        success: false,
        error: 'Authorization failed' 
      });
    }
  };
};

module.exports = { hasRole };
