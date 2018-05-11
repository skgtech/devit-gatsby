import React from 'react';

const Early = ({config}) => {
  return (
    config.tickets.enabled
    ? (
      <div className="early-birds">
        <div className="early-birds__container">
          <div className="early-birds__left">
            <img className="early-birds__img" src="/assets/images/new/tickets.svg" alt="Early birds tickets" />
          </div>
          <div className="early-birds__right">
            <div className="block__heading--dark">
              Get your tickets now!
            </div>
            <p className="dark">
              Whether it’s Frontend, Backend, DevOps or Mobile that you care about, join us to learn about the most modern practices and techniques. Secure your ticket now, while there is still availability.
            </p>
            <a target="_blank" rel="noopener" href={config.tickets.url} className="block__cta">Buy tickets</a>
          </div>
        </div>
      </div>
    )
    : null
  );
};

export default Early;
