const rateLimit = require('express-rate-limit');


// 1. Configure the Limiter
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 sign-in requests per 'window'
  message:
    'Too many login attempts from this IP, please try again after 15 minutes',
  standardHeaders: true, // Return rate limit info in the headers
  legacyHeaders: false, // Disable the deprecated headers
  keyGenerator: (req, res) => {
    // Crucial for sign-in: Use the IP address as the key
    return req.ip;
  }
});

module.exports = { rateLimiter };