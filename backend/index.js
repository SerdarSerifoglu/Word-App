const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
const authRouter = require("./routes/auth.js");
require("./mongo-connection");

const app = express();
app.use(bodyParser.json());

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.listen(4000, () => {
	console.log("started listening on 4000");
});
