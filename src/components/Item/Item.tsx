import React from 'react';

function Item(props) {
  const {
    image, title, slug, addItemToCart, isItemInCart, // removeItemFromCart,
  } = props;

  return (
    <div
      className="item"
      data-image={image}
      data-title={title}
    >
      <div>
        <img className="item-image" src={image} alt={slug} />
        <button
          type="button"
          className="toggle-item-button"
          onClick={(event) => addItemToCart(event, image, title)}
        >
          +
        </button>
        <h2 className="item-text">{title}</h2>
      </div>
      <div className={`item-buttons ${isItemInCart(title) ? 'show' : 'hidden'}`}>
        <button type="button" className="decrement">-</button>
        <div className="amount-display"> 5 </div>
        <button type="button" className="increment">+</button>
      </div>
    </div>
  );
}

export default Item;
