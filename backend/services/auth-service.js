const BaseService = require("./base-service.js");
const User = require("../models/user.js");

class AuthService extends BaseService {}

module.exports = new AuthService(User);
