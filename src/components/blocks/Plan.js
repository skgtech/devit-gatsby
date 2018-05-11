import React from 'react';

const Plan = () => {
  return (
    <div className="plan-block text-center">
      <div className="container">
        <h2 className="block__heading">Plan your stay at Thessaloniki</h2>
        <p>
          Lonely Planet has described Thessaloniki as “easy to fall in love with – it has beauty, chaos, history and culture, a remarkable cuisine and wonderful, vast sea views.” Discover hotel options, attractions, things to do and combine your visit with a memorable experience.
        </p>
        <a href="/explore-thessaloniki" className="block__more-cta">Find out more
          <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Plan;
