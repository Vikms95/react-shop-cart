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
    <section className="shopping-cart-container">
      <section className="shopping-cart-item">
        {renderItemsCart()}
      </section>
      <section className="check-out-info">

        <h2>
          {' '}
          Check-out
        </h2>
        <div>
          {' '}
          Total units ordered
          <hr />
          {' '}
          <span>{cartItems.length}</span>
        </div>
        <button type="button" className="pay-button">Proceed to pay</button>
      </section>
    </section>
  );
}

export default ShoppingCart;
