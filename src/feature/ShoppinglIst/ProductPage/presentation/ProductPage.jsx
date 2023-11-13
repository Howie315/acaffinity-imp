import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from "../../Products/domain/ProductDomain";

const ProductPage = () => {
    const { productId } = useParams();
    // Use parseInt to convert productId to a number, since URL params are always strings
    const product = productsData.find(p => p.id === parseInt(productId, 10));
  

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  // Render the product details
  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      {/* You can add more details here as necessary */}
    </div>
  );
};

export default ProductPage;

