import React from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './element';

function Product() {
  const { productId } = useParams();

  return (
    <Wrapper>
      <h1>Product {productId}</h1>
      {/* Add your content for the dynamic product page */}
    </Wrapper>
  );
}

export default Product;