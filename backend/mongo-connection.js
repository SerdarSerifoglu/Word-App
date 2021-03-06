require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_ADDRESS, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("we are connected to mongodb!");
});
