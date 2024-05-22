'use client';
import React from 'react';
import Link from 'next/link';
import BasicExample from '../components/navbar';  // Adjust the import path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const products = [
    { productId: 1, name: 'Milk' },
    { productId: 2, name: 'Milk ice cream' }
  ];

  return (
    <div>
      <BasicExample />
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.productId}>
            <Link href={`/products/productsDetail/${product.productId}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

