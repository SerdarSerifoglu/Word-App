const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const authRouter = require("./routes/auth.js");
require("./mongo-connection");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();
app.use(bodyParser.json());

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

app.listen(4000, () => {
	console.log("started listening on 4000");
});
