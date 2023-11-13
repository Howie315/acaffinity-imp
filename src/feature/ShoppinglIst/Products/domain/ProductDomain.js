// ProductDomain.js

import waterSprayer from "../../../../img/waterSprayer.jpg";
import carbonfilterKit from "../../../../img/carbonfilterKit.jpg";
import meterKit from "../../../../img/meterKit.jpg";

export class Product {
  constructor(id, name, description, imageUrl, learnMore) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.learnMore = learnMore;
  }
}

// Your hardcoded data can be an array of Product instances:
export const productsData = [
  new Product(
    1,
    "AUTOMATIC WATER SPRAYER",
    "Mind-blowing. Head-turning",
    waterSprayer,
    "/products/1" // Path to the detail page of this product
  ),
  new Product(
    2,
    "HYDROPONIC METER PRO KIT",
    "Packed with more juice",
    meterKit,
    "/products/2" // Path to the detail page of this product
  ),
  new Product(
    3,
    "REFILLABLE CARBON FILTER KIT",
    "Stronger than ever",
    carbonfilterKit,
    "/products/3" // Path to the detail page of this product
  ),
  // ... other products
];
