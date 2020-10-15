const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (user) => jwt.sign(user, config.get("jwtPrivateKey"));