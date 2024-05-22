'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import BasicExample from '../../../components/navbar';  // Adjust the import path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductDetail({ params }) {
  /*const router = useRouter();
  const { params.productId } = router.query;*/

  console.log(params);
  console.log(params.productId);
  return (
    <div>
      <BasicExample />
      <h1>Product Details</h1>
      <p>Details about product with ID: {params.productId}</p>
    </div>
  );
}


