const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 12;

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Please provide a name"], // name alanı girilmediğinde verilecek mesajı tanımladık
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			match: [
				/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, //internetten aldığımız hazır email regex'i
				"Please provide a valid email", // email alanı email formatına uymuyorsa varsa verilecek mesajı tanımladık
			],
		},
		role: {
			type: String,
			default: "user",
			enum: ["user", "admin"],
		},
		password: {
			type: String,
			minlength: [6, "Please provide a password with min lenght 6"],
			required: [true, "Please provide a password"],
			// select: false, //Bu sayede user bilgisi çekildiği zaman password bilgisinin görünmemesi sağlanmış oldu.
			trim: true,
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function preSave(next) {
	const user = this;
	if (!user.isModified("password")) return next();
	try {
		const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
		user.password = hash;
		return next();
	} catch (error) {
		return next(error);
	}
});

UserSchema.methods.comparePassword = async function comparePassword(candidate) {
	console.log("model", { pass: this.password, candidate });
	return await bcrypt.compare(candidate, this.password);
};

/* Mongoose da içi içe giden objelerin sınırını belirlemeye yarar */
// UserSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model("User", UserSchema);
