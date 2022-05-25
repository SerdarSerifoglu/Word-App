const express = require("express");
var cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const authRouter = require("./routes/auth.js");
require("./mongo-connection");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "build"))); // yaptığı iş dirname ile public ismini bağlamak

app.use(
	session({
		secret: "my secret key",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 1 * 24 * 60 * 60 * 1000, secure: true },
		store: MongoStore.create({
			mongoUrl: process.env.DB_ADDRESS,
			collection: "sessions",
		}),
	})
);

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	console.log("Global middleware run");
	console.log("Session", req.session);
	console.log("UserData", req.user);
	next();
});

app.use("/", indexRouter);
app.use("/auth", authRouter);

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "./index.html"));
// });

app.listen(4000, () => {
	console.log("started listening on 4000");
});
