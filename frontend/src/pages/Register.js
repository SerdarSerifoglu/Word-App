import { useState } from "react";
import { Button } from "../components/core/Button";
import { Input } from "../components/core/Input";
import "./register.css";
const Register = () => {
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

	const registerClick = (e) => {
		console.log("Click Register Button");
	};

	return (
		<div className="register-form">
			<div className="form-element">
				<label>Username</label>
				<Input
					type="text"
					onChange={handleChange("username")}
					value={formData.username}
				></Input>
			</div>
			<div className="form-element">
				<label>Email</label>
				<Input
					type="text"
					onChange={handleChange("email")}
					value={formData.email}
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
				textValue="Register"
				className="register-button"
				onClick={registerClick}
			></Button>
			{/* <button className="register-button">Register</button> */}
		</div>
	);
};

export default Register;
