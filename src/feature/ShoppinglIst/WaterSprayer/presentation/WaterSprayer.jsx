import React from "react";
import { useState } from "react";
import "./WaterSprayer.scss"; // Make sure to create and import your styles
import WaterSprayer1 from "../../../../img/waterSprayer.jpg";
import WaterSprayer2 from "../../../../img/waterSprayerV2.jpg";

const WaterSprayer = () => {
	const [selectedColor, setSelectedColor] = useState("graphite");
	const [isFading, setIsFading] = useState(false); // New state for controlling the fade effect

	// This will update the selectedColor state to the new color
	const handleColorSelection = (color) => {
		if (color !== selectedColor) {
			setIsFading(true); // Start fade out effect
			setTimeout(() => {
				setSelectedColor(color); // Change the color after the fade out effect
				setIsFading(false); // Reset fade effect for next transition
			}, 350); // The timeout should match the CSS transition duration
		}
	};

	// Determine which image to display based on the selected color
	const getImageSrc = (color) => {
		switch (color) {
			case "graphite":
				return WaterSprayer1;
			case "frost":
				return WaterSprayer2;
			default:
				return WaterSprayer1;
		}
	};

	return (
		<div className="waterSprayer">
			<h1 className="waterSprayer__title">Choose Your New Water Sprayer</h1>
			<div className="waterSprayer__options">
				<div className="waterSprayer__option">
					<img
						src={getImageSrc(selectedColor)}
						alt={`Water Sprayer Model ${selectedColor}`}
						className={`waterSprayer__image ${
							isFading ? "image-fade-out" : ""
						}`}
					/>

					<div className="waterSprayer__colorSelector">
						<button
							onClick={() => handleColorSelection("graphite")}
							className={`colorButton ${
								selectedColor === "graphite" ? "active" : ""
							}`}
						>
							Graphite
						</button>
						<button
							onClick={() => handleColorSelection("frost")}
							className={`colorButton ${
								selectedColor === "frost" ? "active" : ""
							}`}
						>
							Frost
						</button>
					</div>

					<h2 className="waterSprayer__modelName">
						AUTOMATIC WATER SPRAYER, 2-LITER ELECTRIC MISTER, GRAPHITE
					</h2>
					<ul className="waterSprayer__features">
						<li>An electric garden sprayer with a 2L capacity tank</li>
						<li>Rechargeable sprayer with 2200 mAh power</li>
						<li>
							One-button operation with low-noise spraying action provides ease
							and comfort of use.
						</li>
						<li>Adjustable nozzle delivers a wide range of coverage options</li>
						<li>Sturdy thermoplastic build resists cracking</li>
					</ul>
					<p className="spray-price">29.99</p>
					<button className="select">Select</button>
				</div>
			</div>
		</div>
	);
};

export default WaterSprayer;
