import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
// import itemsArray from '../data/items';
import BestItems from '../../url';

function Shop(props) {
  const { addItemToCart, removeItemFromCart, isItemInCart } = props;

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch(BestItems);
    const data = await response.json();
    setItems(data.results);
  };

  const renderItemsShop = () => items.map((item) => (
    <Item
      key={item.slug}
      alt={item.slug}
      image={item.background_image}
      title={item.name}
      addItemToCart={addItemToCart}
      removeItemFromCart={removeItemFromCart}
      isItemInCart={isItemInCart}
    />
  ));

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <h2 className="section-header"> Game List</h2>
      <section
        className="shop-container"
      >
        {renderItemsShop()}
      </section>
    </>
  );
}

export default Shop;
