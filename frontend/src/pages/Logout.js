import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";

const Logout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(logout());
	}, []);
	return <div>Existed</div>;
};

export default Logout;
