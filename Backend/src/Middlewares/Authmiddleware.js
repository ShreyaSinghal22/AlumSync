const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
/**
 * Main authentication middleware
 * Verifies JWT token and extracts user info
 * Use this as the FIRST middleware on all protected routes
 */
const authenticateToken = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ 
        success: false,
        error: 'Access token required. Please login.' 
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    // Check token type
    if (decoded.type !== 'access') {
      return res.status(403).json({ 
        success: false,
        error: 'Invalid token type' 
      });
    }

    // Attach user info to request object
    req.userId = decoded.sub;
    req.userRole = decoded.role;
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        success: false,
        error: 'Token expired. Please refresh your session.' 
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(403).json({ 
        success: false,
        error: 'Invalid token. Please login again.' 
      });
    }

    console.error('Authentication error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Authentication failed' 
    });
  }
};

module.exports = { authenticateToken };