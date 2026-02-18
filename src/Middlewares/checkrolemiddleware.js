const {AdminSchema} = require('@models/Admin'); 
const {AlumniSchema} = require('@models/Alumni'); 
const {StudentSchema} = require('@models/Student'); 

const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.userRole) {
        return res.status(401).json({
          success: false,
          error: 'User role not found. Please authenticate first.'
        });
      }

      if (!allowedRoles.includes(req.userRole)) {
        return res.status(403).json({
          success: false,
          error: `Access denied. Required role: ${allowedRoles.join(' or ')}`
        });
      }

      next();
    } catch (error) {
      console.error('Role check error:', error);
      res.status(500).json({
        success: false,
        error: 'Authorization check failed'
      });
    }
  };
};

module.exports = checkRole;