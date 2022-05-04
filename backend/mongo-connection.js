const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://srdr:2N6S2RpNNarg5gA6@serdar.gfnxk.mongodb.net/WordAPP?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("we are connected to mongodb!");
});
