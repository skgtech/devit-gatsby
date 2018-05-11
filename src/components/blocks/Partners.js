import React, {Fragment} from 'react';

const Supporters = () => (
  <div className={`supporters ${include.center ? 'text-center' : ''}`}>
    <div className="container">
      <div className="block__heading--dark">
        We proudly support
      </div>
      <div className="partners__container">
        {/* {% include components/icons-stack.html items=site.data.team.weSupport %} */}
      </div>
    </div>
  </div>
)

const Partners = () => {
  return (
  <Fragment>
    <div className={`partners ${include.center ? 'text-center' : ''}`}>
      <div className="container">
        <div className="block__heading--dark">
          Our partners
        </div>
        <p>
          We are lucky to have partnered with a lot of organizations across Thessaloniki. We want to thank them for helping us with DEVit every year.
        </p>
        <div className="partners__container">
          {/* {% include components/icons-stack.html items=site.data.team.partners %} */}
        </div>
      </div>
    </div>
    <Supporters />
  </Fragment>
  );
};

export default Partners;
