/* eslint-disable no-unused-vars */
import React from 'react';
import ItemCart from '../ItemCart/ItemCart';

interface Props {
  cartItems: any[]
}

function ShoppingCart(props: Props) {
  const { cartItems } = props;

  const renderItemsCart = () => cartItems.map((item) => (
    <ItemCart
      key={item.title}
      image={item.image}
      title={item.title}
    />
  ));

  return (
    <>
      <h2 className="section-header">Check-out</h2>
      <section className="shopping-cart-container">
        {renderItemsCart()}
      </section>

    </>
  );
}

export default ShoppingCart;
