import React, {Fragment} from 'react';
import Plan from './Plan';

const Venue = () => {
  return (
    <div id="venue" className="venues text-center">
      <h2 className="block__heading--dark">The Venues</h2>
      <div className="venue">
        <div className="venue__title">
          City College, Sunday Jun 10
        </div>
        <div className="venue__for">
          Workshops
        </div>
        <div className="venue__description">
          Sunday, 10th of June will be a day dedicated to workshops, with at least 11 sessions of various topics to choose from. It will be hosted at City College Thessaloniki, which offers multiple academic classrooms, an ideal space for the purpose of delivering a hands-on session.
        </div>
        <div className="venue__container">
          <div className="venue__map">
            <div className="map" data-long="40.6373756" data-lat="22.9370313"></div>
          </div>
          {/* TODO: fix responsive images */}
          {/* {% responsive_image path: assets/images/venues/citycollege.jpg template: _includes/responsive/venue.html %} */}
        </div>
      </div>
      <div className="venue">
        <div className="venue__title">
          Royal Theatre, Monday Jun 11
        </div>
        <div className="venue__for">
            Talks
          </div>
        <div className="venue__description">
          Monday, 11th of June will be a day dedicated to presentations, with a single track of 8 speakers. It will be hosted at the iconic Royal Theater of Thessaloniki, a spacious theatrical venue with a capacity of 683 people located at the heart of Thessaloniki, right next to the historic White Tower by the seaside.
        </div>
        <div className="venue__container">
            {/* TODO: fix responsive images */}
            {/* {% responsive_image path: assets/images/venues/royal_theatre.jpg template: _includes/responsive/venue.html %} */}
          <div className="venue__map">
            <div className="map" data-long="40.6252233" data-lat="22.9495758"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
