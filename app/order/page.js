'use client';
import React from 'react';
import BasicExample from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';

const page = () => {
  const [numOfItems, setNumOfItems] = React.useState(0);

  function add() {
    setNumOfItems(numOfItems => numOfItems + 1);
  }

  function subtract() {
    if(numOfItems > 0) {
        setNumOfItems(numOfItems => numOfItems - 1);
    }
  }

  return (
    <div>
        <BasicExample />
        <p>{numOfItems}</p>
        <div className={styles.addToCart}>
            <p>Add to cart</p>
            <button onClick={subtract} className={styles.addToCartButtons}>-</button>
            <button onClick={add} className={styles.addToCartButtons}>+</button>
        </div>
        <button type='submit' className={styles.submitButton}>Submit order</button>
    </div>
  )
}

export default page;