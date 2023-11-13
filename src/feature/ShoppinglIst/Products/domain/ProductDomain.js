import waterSprayer from "../../../../img/waterSprayer.jpg";
import carbonfilterKit from "../../../../img/carbonfilterKit.jpg";
import meterKit from "../../../../img/meterKit.jpg";
import sprayer1 from "../../../../img/sprayer1.jpg";
import sprayer2 from "../../../../img/sprayer2.jpg";
import sprayer3 from "../../../../img/sprayer3.jpg";
import sprayer4 from "../../../../img/sprayer4.jpg";
import sprayer5 from "../../../../img/sprayer5.jpg";

export class Product {
  constructor(
    id,
    name,
    description,
    imageUrl,
    learnMore,
    price,
    additionalImages
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
    [sprayer1, sprayer2, sprayer3, sprayer4, sprayer5]
  ),
  new Product(
    2,
    "HYDROPONIC METER PRO KIT",
    "Packed with more juice",
    meterKit,
    "/products/2",
    "149.99"
  ),
  new Product(
    3,
    "REFILLABLE CARBON FILTER KIT",
    "Stronger than ever",
    carbonfilterKit,
    "/products/3",
    "79.99"
  ),
  // ... other products
];
