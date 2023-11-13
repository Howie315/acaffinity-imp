import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from "../../Products/domain/ProductDomain";
import './ProductPage.scss'; 

const ProductPage = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="productPage">
      <h1 className="productPage__title">{product.name}</h1>
      <p className="productPage__description">{product.description}</p>
      <div className="productPage__imageContainer">
        <img src={product.imageUrl} alt={product.name} className="productPage__image" />
      </div>
      {/* Add more details here as necessary */}
    </div>
  );
};

export default ProductPage;
