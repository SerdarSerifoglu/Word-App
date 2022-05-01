import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import MainPlace from "./pages/MainPlace";
import Register from "./pages/Register";

function App() {
	return (
		<div className="App">
			<div className="main-place">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPlace />}>
							<Route path="login" element={<Login />} />
							<Route path="register" element={<Register />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
