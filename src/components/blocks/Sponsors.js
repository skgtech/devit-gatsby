import React from 'react';

const Sponsors = ({sponsors, cfsLink}) => {
  const platinumSponsors = sponsors.filter(sponsor => sponsor.type === 'platinum');
  const goldSponsors = sponsors.filter(sponsor => sponsor.type === 'gold');
  const silverSponsors = sponsors.filter(sponsor => sponsor.type === 'silver');
  const bronzeSponsors = sponsors.filter(sponsor => sponsor.type === 'bronze');

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
            platinumSponsors.length
              ? (
                <div className="cfs__title">Platinum</div>
                // TODO fix icons-stack component to enable this
                // {% include components/icons-stack.html items=sponsors.2018.platinum %}
              )
              : null
          }

          {
            goldSponsors.length
            ? (
              <div className="cfs__title">Gold</div>
              // TODO fix icons-stack component to enable this
              // {% include components/icons-stack.html items=sponsors.2018.gold %}
            )
            : null
          }

          {
            silverSponsors.length
            ? (
              <div className="cfs__title">Silver</div>
              // TODO fix icons-stack component to enable this
              // {% include components/icons-stack.html items=sponsors.2018.silver %}
            )
            : null
          }

          {
            bronzeSponsors.length
            ? (
              <div className="cfs__title">Bronze</div>
              // TODO fix icons-stack component to enable this
              // {% include components/icons-stack.html items=sponsors.2018.bronze %}
            )
            : null
          }
        </div>

        {
          cfsLink
          ? (
            <a href={cfsLink} className="block__cta">
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
