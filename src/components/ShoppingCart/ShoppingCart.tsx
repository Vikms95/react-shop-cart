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
      image={item.image}
      title={item.title}
      amount={item.amount}
    />
  ));

  return (
    <>
      <h2 className="section-header">Check-out</h2>
      <section className="shopping-cart-container">
        <section className="shopping-cart-item">
          {renderItemsCart()}
        </section>
        <section className="check-out-info">
          this is checkout
        </section>
      </section>

    </>
  );
}

export default ShoppingCart;
