import React from 'react';

const Subscribe = () => {
  return (
    <div className="subscribe-block text-center">
      <div className="container">
        <h2 className="block__heading">Stay informed</h2>
        <p className="leading">
          Register for our newsletter and stay informed about our latest news.
        </p>
        <p>
          Special Offers are available exclusively to our newsletter subscribers.
        </p>

        <form className="subscribe-form" action="#" method="get">
          <input type="hidden" value="signup" name="SOURCE" />
          <input type="hidden" value="" name="REF_SOURCE" className="js-signup-ref-source" />
          <input name="FNAME" type="text" className="subscribe-name-field" placeholder="First name" />
          <div className="input-group">
            <input name="EMAIL" type="email" className="subscribe-email-field" placeholder="Email" />
            <span className="input-group-btn">
              <button className="subscribe-submit" type="submit">Submit <i className="fas fa-long-arrow-alt-right"></i></button>
            </span>
          </div>
          <p className="subscribe-result hidden"></p>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
