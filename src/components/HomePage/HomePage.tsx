import React from 'react';
import { Link } from 'react-router-dom';
import heroVideo from './hero-video.mp4';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="video-text">
        <div className="video-text-1">
          Your favourite games ...
        </div>
        <div className="video-text-2">
          ... at the best price you can find.
        </div>
      </div>
      <video autoPlay loop muted playsInline id="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;
