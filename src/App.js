import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./feature/Navigation/presentation/Navigation";
import ShoppingList from "./feature/ShoppinglIst/presentation/ShoppingList";
import ProductPage from "./feature/ShoppinglIst/ProductPage/presentation/ProductPage"; // Import the ProductDetail component

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<ShoppingList />} />
					<Route path="/products/:productId" element={<ProductPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
