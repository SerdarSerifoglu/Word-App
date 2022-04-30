import { useEffect, useState } from "react";
import { Button } from "../components/core/Button";
import { Input } from "../components/core/Input";
import "./login.css";
const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		username: "",
		password: "",
	});

	const handleChange = (prop) => (event) => {
		setFormData({
			...formData,
			[prop]: event.target.value,
		});
	};

	const loginClick = (e) => {
		console.log("Click Login Button");
	};

	return (
		<div className="login-form">
			<div className="form-element">
				<label>Email</label>
				<Input
					type="text"
					onChange={handleChange("email")}
					value={formData.name}
				></Input>
			</div>
			<div className="form-element">
				<label>Password</label>
				<Input
					type="password"
					onChange={handleChange("password")}
					value={formData.password}
				></Input>
			</div>
			<Button
				textValue="Login"
				className="login-button"
				onClick={loginClick}
			></Button>
			{/* <button className="login-button">Login</button> */}
		</div>
	);
};

export default Login;
