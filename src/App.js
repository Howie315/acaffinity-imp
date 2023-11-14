import logo from "./logo.svg";
import "./App.scss";
import Navigation from "./feature/Navigation/presentation/Navigation";
import ShoppingList from "./feature/ShoppinglIst/presentation/ShoppingList";
import ProductPage from "./feature/ShoppinglIst/ProductPage/presentation/ProductPage"; // Import the ProductDetail component
import WaterSprayer from "./feature/ShoppinglIst/WaterSprayer/presentation/WaterSprayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeterKit from "./feature/ShoppinglIst/MeterKit/presentation/MeterKit.";
import CarbonFilter from "./feature/ShoppinglIst/CarbonFilter/presentation/CarbonFilter";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<ShoppingList />} />
					<Route path="/products/:productId" element={<ProductPage />} />
					<Route path="/purchase/waterSprayer" element={<WaterSprayer />} />
					<Route path="/purchase/meterKit" element={<MeterKit />} />
					<Route path="/purchase/carbonFilter" element={<CarbonFilter />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
