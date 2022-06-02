import React from 'react';

function ItemCart(props) {
  const {
    image, title, amount,
  } = props;

  return (
    <section className="item-cart-container">
      <section className="item-display">
        <h4 className="item-display-title">{title}</h4>
        <img className="item-image cart" src={image} alt={title} />
      </section>

      <section className="info-item-cart">
        Units ordered:
        {' '}
        <b>
          {' '}
          {amount}
        </b>
      </section>
    </section>
  );
}

export default ItemCart;
