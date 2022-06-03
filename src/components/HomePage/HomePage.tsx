import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import heroVideo from './hero-video.mp4';
import logo from './logo.png';

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
      <video autoPlay loop muted playsInline id="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;
