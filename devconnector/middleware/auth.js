const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verift token
  try {
    // Decode the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    console.log(decoded.user); // { id: '5f30b2553666042b9621bdf5' }

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
