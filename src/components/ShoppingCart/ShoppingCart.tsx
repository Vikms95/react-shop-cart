/* eslint-disable no-unused-vars */
import React from 'react';
import ItemCart from '../ItemCart';

interface Props {
  cartItems: any[]
}

function ShoppingCart(props: Props) {
  const { cartItems } = props;

  const renderItemsCart = () => {
    cartItems.map((item) => (
      <ItemCart
        image={item.image}
        title={item.title}
      />
    ));
  };

  return (
    <>
    </>
  );
}

export default ShoppingCart;
