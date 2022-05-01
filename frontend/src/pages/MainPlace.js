import { Outlet, Link } from "react-router-dom";

const MainPlace = () => {
	return (
		<>
			<nav>
				<Link to="/login">Login</Link> | <Link to="/register">Register</Link>
			</nav>
			<Outlet />
		</>
	);
};

export default MainPlace;
