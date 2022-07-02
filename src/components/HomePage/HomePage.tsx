import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import heroVideo from '../../assets/hero-video.mp4';
import logo from '../../assets/logo.png';

interface Props{
  updateIsHomePageRendered: (value: boolean) => void
}

function HomePage(props: Props) {
  const { updateIsHomePageRendered } = props;

  /**
   * We set the isHomePageRendered prop on component
   * mount to let the components on the upper scope
   * know if the Homepage is rendered
   */
  useEffect(() => {
    updateIsHomePageRendered(true);
    return () => {
      updateIsHomePageRendered(false);
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
