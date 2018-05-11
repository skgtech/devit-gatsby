import React from 'react';
import Menu from './Menu';

const Hero = ({config, pathname}) => {
  return (
    <div className="hero home-header">
      <Menu date={config.date} tickets={config.tickets} pathname={pathname} />
      <video playsInline autoPlay muted loop poster="/assets/video-frame.jpg" id="background-video">
        <source src="/assets/video.webm" type="video/webm" />
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      <img className="hero__logo" src="/assets/images/new/devit-logo-white.svg" alt="DEVit logo" />
      <h1 className="hero__headline">{config.date}</h1>
      <h2 className="hero__location">Thessaloniki, Greece</h2>
    </div>

  );
};

export default Hero;
