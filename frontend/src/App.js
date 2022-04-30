import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
	return (
		<div className="App">
			<div className="main-place">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<div>Main Page</div>} />
						<Route path="login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
