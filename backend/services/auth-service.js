const BaseService = require("./base-service.js");
const User = require("../models/user.js");

class AuthService extends BaseService {
	async getUser(email) {
		return await User.findOne({ email }).select("+password");
	}
	async login(email, password) {
		const user = await this.getUser(email);
		console.log("login_user", user);
		if (user) {
			const passOk = await user.comparePassword(password);
			console.log("login_passOk", passOk);
			if (passOk) {
				return user;
			}
		}
	}
}

module.exports = new AuthService(User);
