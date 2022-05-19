const express = require("express");
var cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const authRouter = require("./routes/auth.js");
require("./mongo-connection");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "build"))); // yaptığı iş dirname ile public ismini bağlamak

const store = new MongoDBStore({
	uri: "mongodb+srv://srdr:2N6S2RpNNarg5gA6@serdar.gfnxk.mongodb.net/WordAPP?retryWrites=true&w=majority",
	collection: "sessions",
});

app.use(
	session({
		secret: "my secret key",
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 1 * 24 * 60 * 60 * 1000, secure: true },
		store: store,
	})
);

app.use("/", indexRouter);
app.use("/auth", authRouter);

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./index.html"));
// });

app.listen(4000, () => {
	console.log("started listening on 4000");
});
