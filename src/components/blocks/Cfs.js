import React from 'react';

const Cfs = () => {
  return (
    <div className="cfs">
      <div className="cfs__container text-center">
        <div className="block__heading--dark">
          Sponsors through the years
        </div>
        <p className="dark">
          The popularity of breakfast foods is a good reason to keep dependable starters, such as eggs, bread and other staples, on hand.
        </p>
        {% include components/icons-stack.html items=site.data.homepage.sponsors %}
        <a href="#" className="block__cta">
          Apply to sponsor
        </a>
      </div>
    </div>
  );
};

export default Cfs;
