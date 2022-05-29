import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage-container">
      <h2> Buy your favourite games with the best price </h2>
      <Link to="/shop">
        <h2 className="gotoshop-button"> GO TO SHOP </h2>
      </Link>

    </div>
  );
}

export default HomePage;
