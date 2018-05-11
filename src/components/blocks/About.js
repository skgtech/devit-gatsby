import React from 'react';

const About = () => {
  return (
    <div id="about" className="about-block text-center">
      <div className="container">
      <h2 className="block__heading">What is DEVit</h2>
      <p className="leading">
        DEVit is the leading web developer conference in South East Europe. Organized once per year, DEVit has become known for its top speaking talent, a mixture of world-class and world-renowned developers, highly specialized technology niches and developers who are on the edge of technology frontiers.
      </p>

      {% include blocks/organizers.html %}

      <a href="/about" className="block__more-cta">About us
        <i className="fas fa-long-arrow-alt-right"></i>
      </a>
      </div>
    </div>
  );
};

export default About;
