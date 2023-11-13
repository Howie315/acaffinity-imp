import React from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from "../../Products/domain/ProductDomain";
import './ProductPage.scss'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; // Import the Slider component



const ProductPage = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const imagesToDisplay = [...product.additionalImages];

   // Slider settings
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show three items at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Add padding on the sides
  };
  
  return (
    <div className="productPage">
      <h1 className="productPage__title">{product.name}</h1>
      <p className="productPage__description">{product.description}</p>
      <div className="productPage__imageContainer">
        <img src={product.imageUrl} alt={product.name} className="productPage__image" />
      </div>
      <button className = "buy">Buy</button>
      <p className = "price"> {product.price}</p>


<p className = "Highlights">Get the highlights.</p>

      <Slider {...settings}>
        {imagesToDisplay.map((image, index) => (
      <div key={index} className="productPage__slide">
          <div  className="productPage__imageContainer2">
            <img src={image} alt={`${product.name} ${index + 1}`} className="productPage__image2"
             />
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductPage;
