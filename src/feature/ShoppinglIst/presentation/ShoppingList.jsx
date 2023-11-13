import React from 'react';
import ProductCard from '../Products/ProductCard'; // Import the ProductCard component
import './ShoppingList.scss';
import {productsData} from '../Products/domain/ProductDomain';

const ShoppingList = ({ products = productsData }) => {
    return (
    <div className="shopping-list">
      {products.map((product) => (
        <section key={product.id} className="product-section">
          <ProductCard product={product} />
        </section>
      ))}
    </div>
  );
};

export default ShoppingList;
