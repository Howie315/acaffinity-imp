import carbonFilter from "../../../../img/carbonfilterKit.jpg";
import "./CarbonFilter.scss";
import { useState } from "react";

const CarbonFilter = () => {
	const [selectedSize, setSelectedSize] = useState("6inches");
	const [price, setPrice] = useState("79.99");

	// Function to handle size selection and update price
	const handleSizeSelection = (size) => {
		setSelectedSize(size);
		setPrice(size === "6inches" ? "79.99" : "119.99");
	};

	return (
		<div className="carbonFilter">
			<h1 className="carbonFilter__title">Select Your Carbon Filter</h1>
			<div className="carbonFilter__selection">
				<div className="carbonFilter__item">
					<h2 className="carbonFilter__titleN">
						REFILLABLE CARBON FILTER KIT, WITH CHARCOAL REFILL
					</h2>
					<img
						src={carbonFilter}
						alt="Default Carbon Filter"
						className="carbonFilter__image"
					/>

					<div className="carbonFilter__sizeSelector">
						<button
							onClick={() => handleSizeSelection("6inches")}
							className={`sizeButton ${
								selectedSize === "6inches" ? "active" : ""
							}`}
						>
							6 inches
						</button>
						<button
							onClick={() => handleSizeSelection("4inches")}
							className={`sizeButton ${
								selectedSize === "4inches" ? "active" : ""
							}`}
						>
							4 inches
						</button>
					</div>

					<ul className="carbonFilter__features">
						<li>Reusable carbon filter features a patented design </li>
						<li>
							Includes 1+ refill to match the filtration capacity of two
							standard 6” carbon filters
						</li>
						<li>
							Removable twist-off flanges support easy, tool-free refilling
							using the included funnel and scoop.
						</li>
						<li>
							Larger chamber is lab-tested to block odors as effectively as
							standard filters with no compression required.
						</li>
						<li>
							Dual-layered steel mesh with protective coating withstands high
							humidity in grow tents through many grow cycles.
						</li>
					</ul>
					<p className="filter-price">{price}</p>
					<button className="selectModel">Select</button>
				</div>
			</div>
		</div>
	);
};

export default CarbonFilter;
