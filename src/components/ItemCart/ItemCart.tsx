import React from 'react';

function ItemCart(props) {
  const {
    image, title, amount,
  } = props;

  return (
    <section className="item-cart-container">
      <section className="item-display">
        <img className="item-image-cart" src={image} alt={title} />
      </section>

      <section className="info-item-cart">
        <h4 className="item-display-title">{title}</h4>
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
