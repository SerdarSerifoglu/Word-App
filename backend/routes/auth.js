const { authService } = require("../services");

const router = require("express").Router();

router.get("/", (req, res) => {
	console.log("auth get /", { reqsess: req.session });
	res.json("auth");
});

router.post("/", async (req, res) => {
	const user = await authService.insert(req.body);

	res.json(user);
});

router.post("/login", async (req, res) => {
	console.log("req.body", req.body);
	const { email, password } = req.body;
	const user = await authService.login(email, password);
	if (user) {
		req.session.user = user;
	}
	console.log("login_user", user);
	console.log("login", req.session);
	res.json(req.session);
});

router.get("/logout", async (req, res) => {
	console.log("logout", req.session);
	req.session.destroy((err) => console.log(err));
	console.log("logout_after", req.session);
});

module.exports = router;
