import React, { useEffect } from 'react';

function Item(props) {
  const {
    cartItems, image, title, slug, addItemToCart, isItemInCart, // removeItemFromCart,
  } = props;

  /**
   * Find item with the same title as the one
   * on this Item component and return its amount key
   */
  const renderItemAmount = () => {
    const item = cartItems.find((cartItem) => (
      cartItem.title === title
    ));
    console.log(title);
    return 0;
  };

  useEffect(() => {

  }, []);
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
          onClick={(event) => addItemToCart(event, image, title)}
          className="toggle-item-button"
        >
          +
        </button>
        <h2 className="item-text">{title}</h2>
      </div>
      <div className={`item-buttons ${(isItemInCart(title)) ? 'show' : 'hidden'}`}>
        <button type="button" className="decrement">-</button>
        <div className="amount-display">
          {' '}
          {title && renderItemAmount()}
          {' '}
        </div>
        <button type="button" className="increment">+</button>
      </div>
    </div>
  );
}

export default Item;
