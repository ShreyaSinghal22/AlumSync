const Student = require('../'); // Adjust path to your Student model

/**
 * Middleware to check if user is Student
 * Use AFTER authenticateToken middleware
 */
const isStudent = async (req, res, next) => {
  try {
    if (req.userRole !== 'student') {
      return res.status(403).json({ 
        success: false,
        error: 'Access denied. Student privileges required.' 
      });
    }

    // Fetch full student details from database
    const student = await Student.findById(req.userId).select('-password');
    
    if (!student) {
      return res.status(404).json({ 
        success: false,
        error: 'Student account not found' 
      });
    }

    // Attach student user to request
    req.user = student;
    next();
  } catch (error) {
    console.error('Student authorization error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Authorization failed' 
    });
  }
};

module.exports = { isStudent };