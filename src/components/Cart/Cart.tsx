import React from 'react';
import ItemCart from '../ItemCart/ItemCart';
/* eslint-disable import/no-cycle */
import { ICartItem } from '../../App';

interface Props {
  cartItems: ICartItem[]
}

function Cart(props: Props) {
  const { cartItems } = props;

  const renderItemsCart = () => cartItems.map((item) => (
    <ItemCart
      key={item.title}
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
          Total items ordered
          <hr />
          {' '}
          <span className="amount-checkout">{cartItems.length}</span>
        </div>
        <div>
          {' '}
          <b>Final price: </b>
          {' '}
          FREE
        </div>
        <button
          type="button"
          className="pay-button"
          onClick={() => alert('Thanks for passing by!')}
        >
          Proceed to pay
        </button>
      </section>
    </section>
  );
}

export default Cart;
