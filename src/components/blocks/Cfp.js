import React from 'react';

const Cfp = () => {
  return (
    <div className="cfp">
      <div className="cfp__row">
        <div className="container">
          <div className="cfp__row--top-right">
            <div className="block__heading--dark">
              Our speakers
            </div>
            <p className="dark">
              Each year we meticulously vet and select remarkable speakers to deliver the best talks on web development. We are very proud of the quality of the content that we offered over the years and we are happy to share it with you.
            </p>
            <a href="#" className="block__cta">All past speakers</a>
          </div>
          <div className="cfp__row--top-left">
            <div className="cfp__speaker-top">
              <img className="speaker__avatar" src="/assets/images/speakers/2015/Christian_Heilmann.jpg" alt="Speaker one" />
              <div className="speaker__name">
                Christian Heilmann
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cfp__row cfp__row--orange">
        <div className="container">
          <div className="cfp__row--bottom-left">
            <div className="cfp__speaker-bottom">
              <div className="speaker__title">Founder and CEO</div>
              <div className="tags">
                <span className="tag">
                  Frontend
                </span>
                <span className="tag">
                  Backend
                </span>
                <span className="tag">
                  Mobile
                </span>
                <span className="tag">
                  Will work for bananas
                </span>
              </div>
              <div className="speaker__social">
                <a href="#" className="speaker__social__item fab fa-facebook-f"></a>
                <a href="#" className="speaker__social__item fab fa-twitter"></a>
                <a href="#" className="speaker__social__item fab fa-github"></a>
              </div>
            </div>
          </div>
          <div className="cfp__row--bottom-right">
            <div className="block__heading">
              Interested in speaking?
            </div>
            <p className="light">
              Even though we do not have an open call for papers, we are always looking to meet gifted speakers. If you are interested in speaking in the next edition of DEVit, feel free to fill our form
            </p>
            <a href="#" className="block__more-cta">
                Apply to talk
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cfp;
