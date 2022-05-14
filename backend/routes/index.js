const router = require("express").Router();

router.get("/", (req, res) => {
	console.log("/", req.session);
	res.json("index");
});

module.exports = router;
