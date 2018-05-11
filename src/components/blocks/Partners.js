import React from 'react';

const Supporters = () => (
  <div class="supporters {% if include.center == true %}text-center{% endif %}">
    <div class="container">
      <div class="block__heading--dark">
        We proudly support
      </div>
      <div class="partners__container">
        {% include components/icons-stack.html items=site.data.team.weSupport %}
      </div>
    </div>
  </div>
)

const Partners = () => {
  return (
    <div class="partners {% if include.center == true %}text-center{% endif %}">
      <div class="container">
        <div class="block__heading--dark">
          Our partners
        </div>
        <p>
          We are lucky to have partnered with a lot of organizations across Thessaloniki. We want to thank them for helping us with DEVit every year.
        </p>
        <div class="partners__container">
          {% include components/icons-stack.html items=site.data.team.partners %}
        </div>
      </div>
    </div>
    <Supporters />
  );
};

export default Partners;
