import React from 'react';

const Stay = () => (
  <div className="block-stay text-center">
    <h2 className="block__heading--dark">Stay</h2>
    <p className="dark">
      We have partnered with Park Hotel to offer you competitive room prices. Park Hotel is located in the center of the City with lots of cafes and restaurants at walking distance.
    </p>
  </div>
)

const ParkHotel = () => (
  <a href="http://www.parkhotel.com.gr/" title="Park Hotel Thessaloniki" target="_blank" className="destinations__panel destinations__image destinations__image--hotel1"></a>
  <div className="destinations__panel">
    <div>
      <h2 className="block__heading--dark">Park Hotel</h2>
      <p className="dark">
        Ionos Dragoumi 81, 54630 Thessaloniki <br />
        +30 2310 524121 <br />
        <a href="http://www.parkhotel.com.gr/" title="Park Hotel Thessaloniki" target="_blank">www.parkhotel.com.gr</a>
      </p>
    </div>
  </div>
  <div className="destinations__panel">
    <table className="table price-table">
      <thead>
        <tr>
          <th>Room type</th>
          <th>Price/night</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Single bed</td>
          <td>&euro;55</td>
        </tr>
        <tr>
          <td>Double bed</td>
          <td>&euro;66</td>
        </tr>
      </tbody>
    </table>

    <div className="table-footnote">
      * In order to take advantage of the exclusive rates for DEVit, you will need to directly contact Park hotel and mention you are a DEVit attendee. * Excluding €1.5 overnight stay tax.
    </div>
    </div>
  <a href="http://www.parkhotel.com.gr/" title="Park Hotel Thessaloniki" target="_blank" className="destinations__panel destinations__image destinations__image--hotel2"></a>
)

const Testimonials = () => (
  <div className="block-testimonial">
    <div className="content">
      <div className="testimonial-avatar">
        <img src="assets/images/speakers/2017/Rita_Zhang.png" alt="Rita Zhang" />
      </div>
      <div className="testimonial-copy">
        <div className="testimonial__text">Thanks #devitconf for having us! Awesome first impression of Greece. To all new friends, feel free to connect :)</div>
        <a href="/speakers/2017/rita_zhang" className="testimonial__name">
          Rita Zhang 2017 <i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  </div>
)

const Visit = () => (
  <div className="destinations__panel destinations__image destinations__image--sea1"></div>
  <div className="destinations__panel">
    <div>
      <h2 className="block__heading--dark">Visit</h2>
      <p className="destinations__excerpt">The popularity of breakfast foods is a good reason to keep dependable starters, such as eggs, bread and other staples, on hand.</p>
    </div>
  </div>
  <div className="destinations__panel destinations__image destinations__image--sea3 destinations__panel--75"></div>
  <div className="destinations__panel destinations__image destinations__image--sea2 destinations__panel--25"></div>
)

const Experience = () => (
  <div className="destinations__panel">
    <div>
      <h2 className="block__heading--dark">Experience</h2>
      <p className="destinations__excerpt">The popularity of breakfast foods is a good reason to keep dependable starters, such as eggs, bread and other staples, on hand.</p>
    </div>
  </div>
  <div className="destinations__panel destinations__image destinations__image--building2"></div>
  <div className="destinations__panel destinations__image destinations__image--market1 destinations__panel--25"></div>
  <div className="destinations__panel destinations__image destinations__image--building1 destinations__panel--75"></div>
  </div>
)

const Destinations = () => {
  return (
      <Stay />

      <div className="destinations">
        <ParkHotel />
        <Testimonials />
        {/* <Visit /> */}
        {/* <Experience /> */}
      </div>

      {% include blocks/early.html %}
  );
};

export default Destinations;
