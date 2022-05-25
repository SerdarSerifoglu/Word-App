const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.js");

const customFields = {
	usernameField: "email",
	passwordField: "password",
};

const verifyCallback = (username, password, done) => {
	console.log("SS", { username, password });
	User.findOne({ email: username }, async function (err, user) {
		console.log("userData", user);
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false);
		}
		const passOk = await user.comparePassword(password);
		console.log("passOk", passOk);
		// if (!user.verifyPassword(password)) {
		if (!passOk) {
			return done(null, false);
		}
		return done(null, user);
	});
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.deserializeUser((userId, done) => {
	User.findById(userId)
		.then((user) => done(null, user))
		.catch((err) => done(err));
});

passport.serializeUser((user, done) => {
	done(null, user.id);
});
