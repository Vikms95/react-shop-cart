import React from 'react';

function ItemCart(props) {
  const {
    image, title,
  } = props;

  return (
    <section className="item-cart-container">
      <section className="item-display">
        <h4 className="item-display-title">{title}</h4>
        <img className="item-image" src={image} alt={title} />
      </section>

      <section className="info-item-cart">
        we have 3
      </section>
    </section>
  );
}

export default ItemCart;
