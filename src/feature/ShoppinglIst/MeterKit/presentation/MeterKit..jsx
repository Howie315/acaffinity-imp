import React from "react";
import "./MeterKit.scss";
import MeterKitImage1 from "../../../../img/meterKit.jpg";
import MeterKitImage2 from "../../../../img/meterKit2.jpg";

const MeterKit = () => {
	return (
		<div className="meterKitContainer">
			<h1 className="meterKitTitle">Meter Kits Selection</h1>
			<div className="meterKitOptions">
				{/* Option A */}
				<div className="meterKitOption">
					<img
						src={MeterKitImage1}
						alt="Meter Kit Pro"
						className="meterKitImage"
					/>
					<h2 className="meterKitModelName">HYDROPONIC METER PRO KIT</h2>
					<ul className="specs">
						<li>Hydroponic pH reader for water quality assessment </li>
						<li>
							Measures acidity, alkalinity, EC, TDS, temp, and salinity of water{" "}
						</li>
						<li>
							Sensor probe delivers instant pH readings with pinpoint accuracy
						</li>
						<li>
							IP-67 rated to be sealed from high-volume moisture, dust, and sand
						</li>
						<li>
							Includes KCL, 4.00 & 7.00 solutions with 12.88 mS & 1413 µS
							solutions for lab-grade precision.
						</li>
					</ul>
					<p className="prices">149.99</p>
					<button className="select">Select</button>
				</div>

				<div className="meterKitOption">
					<img
						src={MeterKitImage2}
						alt="PH Meter Pro"
						className="meterKitImage"
					/>
					<h2 className="meterKitModelName">PH METER PRO KIT</h2>
					<ul className="specs">
						<li>
							Advanced pH reader for water quality assessment designed to help
							monitor and maintain proper pH levels.
						</li>
						<li>Measures the acidity, alkalinity, and temperature of water</li>
						<li>
							Sensor probe delivers instant pH readings with pinpoint accuracy
						</li>
						<li>
							IP-67 rated to be sealed from high-volume moisture, dust, and sand
						</li>
						<li>
							Lab-grade test kit includes ready-to-use KCL, 4.00, 7.00 & 10.01
							solutions
						</li>
					</ul>
					<p className="prices">79.99</p>
					<button className="select">Select</button>
				</div>
			</div>
		</div>
	);
};

export default MeterKit;
