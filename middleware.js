const jwt = require('express-jwt')

exports.authenticated = jwt({secret: 'reactnative'})