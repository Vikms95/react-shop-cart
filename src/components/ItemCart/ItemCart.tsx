import React from 'react';

function ItemCart(props) {
  const {
    image, title,
  } = props;

  return (
    <div>
      <img src={image} alt="hello" />
      <div>
        {' '}
        {title}
        {' '}
      </div>
    </div>
  );
}

export default ItemCart;
