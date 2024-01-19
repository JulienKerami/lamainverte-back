const jwt = require('jsonwebtoken');

function getUserIdFromToken(authorizationHeader) {
  const token = authorizationHeader.split(' ')[1];
  return jwt.decode(token).id;
}

module.exports = { getUserIdFromToken };