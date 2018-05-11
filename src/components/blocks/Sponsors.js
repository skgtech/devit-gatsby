import React from 'react';

const Sponsors = ({sponsors, config}) => {
  return (
    <div id="sponsors" className="cfs">
      <div className="cfs__container text-center">
        <div className="block__heading--dark">
          Our sponsors
        </div>
        <p className="dark">
          Thanks to all our sponsors for supporting us.
        </p>

        <div className="cfs__sponsors">
          {
            sponsors.year2018.platinum
              ? (
                <div className="cfs__title">Platinum</div>
                // TODO fix icons-stack component to enable this
                // {% include components/icons-stack.html items=sponsors.2018.platinum %}
              )
              : null
          }

          {
            sponsors.year2018.gold
            ? (
              <div className="cfs__title">Gold</div>
              // TODO fix icons-stack component to enable this
              // {% include components/icons-stack.html items=sponsors.2018.gold %}
            )
            : null
          }

          {
            sponsors.year2018.silver
            ? (
              <div className="cfs__title">Silver</div>
              // TODO fix icons-stack component to enable this
              // {% include components/icons-stack.html items=sponsors.2018.silver %}
            )
            : null
          }

          {
            sponsors.year2018.bronze
            ? (
              <div className="cfs__title">Bronze</div>
              // TODO fix icons-stack component to enable this
              // {% include components/icons-stack.html items=sponsors.2018.bronze %}
            )
            : null
          }
        </div>

        {
          config.sponsors.cfs
          ? (
            <a href={config.sponsors.link_to_sponsorship} className="block__cta">
              Apply to sponsor
            </a>
          )
          : null
        }
      </div>
    </div>
  );
};

export default Sponsors;
