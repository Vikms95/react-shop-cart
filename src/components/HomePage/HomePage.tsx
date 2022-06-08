import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import heroVideo from '../../assets/hero-video.mp4';
import logo from '../../assets/logo.png';

function HomePage(props) {
  const { setIsHomePageRendered } = props;

  useEffect(() => {
    setIsHomePageRendered(true);
    return () => {
      setIsHomePageRendered(false);
    };
  }, []);

  return (
    <div className="homepage-container">
      <div className="logo-container-homepage">
        <img src={logo} alt="logo" className="logo-homepage" />
        <div className="title-homepage">VGKeys</div>
      </div>
      <Link to="/shop">
        <button type="button" className="gotoshop-button"> GO TO SHOP </button>
      </Link>
      <video
        autoPlay
        loop
        muted
        playsInline
        data-testid="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;
