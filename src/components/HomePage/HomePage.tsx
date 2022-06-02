import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from './hero-video.mp4';

function HomePage() {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted playsInline id="hero-video">
        <source src={heroVideo} type="video/mp4" />
        <div className="video-text-1">
          Your favourite games ...
        </div>
        <div className="video-text-2">
          ... with the best price you can find.
        </div>
      </video>
    </div>
  );
}

export default HomePage;
