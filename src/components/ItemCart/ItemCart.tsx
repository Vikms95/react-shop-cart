import React from 'react';

interface Props{
  image: string
  title: string
  amount: number
}

function ItemCart(props: Props) {
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
