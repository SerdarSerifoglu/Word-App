const { authService } = require("../services");

const router = require("express").Router();

router.get("/", (req, res) => {
	res.json("auth");
});

router.post("/", async (req, res) => {
	const user = await authService.insert(req.body);

	res.json(user);
});

module.exports = router;
