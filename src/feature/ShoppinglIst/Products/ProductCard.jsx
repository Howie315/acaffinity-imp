import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom"; // If you're using react-router for navigation

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<h2 className="product-title">{product.name}</h2>
			<p className="product-description">{product.description}</p>
			<Link to={product.learnMore} className="product-learnMore">
				Learn More
			</Link>
			<div className="product-image-container">
				<img
					src={product.imageUrl}
					alt={product.name}
					className="product-image"
				/>
			</div>
		</div>
	);
};

export default ProductCard;
