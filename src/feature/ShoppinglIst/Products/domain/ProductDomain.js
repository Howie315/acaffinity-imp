import waterSprayer from "../../../../img/waterSprayer.jpg";
import carbonfilterKit from "../../../../img/carbonfilterKit.jpg";
import meterKit from "../../../../img/meterKit.jpg";
import sprayer1 from "../../../../img/sprayer1.jpg";
import sprayer2 from "../../../../img/sprayer2.jpg";
import sprayer3 from "../../../../img/sprayer3.jpg";
import sprayer4 from "../../../../img/sprayer4.jpg";
import sprayer5 from "../../../../img/sprayer5.jpg";

import meter1 from "../../../../img/meter1.jpg";
import meter2 from "../../../../img/meter2.jpg";
import meter3 from "../../../../img/meter3.jpg";
import meter4 from "../../../../img/meter4.jpg";
import meter5 from "../../../../img/meter5.jpg";

import carbon1 from "../../../../img/carbon1.jpg";
import carbon2 from "../../../../img/carbon2.jpg";
import carbon3 from "../../../../img/carbon3.jpg";
import carbon4 from "../../../../img/carbon4.jpg";
import carbon5 from "../../../../img/carbon5.jpg";

export class Product {
	constructor(
		id,
		name,
		description,
		imageUrl,
		learnMore,
		price,
		additionalImages,
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.imageUrl = imageUrl;
		this.learnMore = learnMore;
		this.price = price;
		this.additionalImages = additionalImages;
	}
}

// Your hardcoded data can be an array of Product instances:
export const productsData = [
	new Product(
		1,
		"AUTOMATIC WATER SPRAYER",
		"Mind-blowing. Head-turning",
		waterSprayer,
		"/products/1",
		"29.99",
		[sprayer1, sprayer2, sprayer3, sprayer4, sprayer5],
	),
	new Product(
		2,
		"HYDROPONIC METER PRO KIT",
		"Packed with more juice",
		meterKit,
		"/products/2",
		"149.99",
		[meter1, meter2, meter3, meter4, meter5],
	),
	new Product(
		3,
		"REFILLABLE CARBON FILTER KIT",
		"Stronger than ever",
		carbonfilterKit,
		"/products/3",
		"79.99",
		[carbon1, carbon2, carbon3, carbon4, carbon5],
	),
	// ... other products
];
