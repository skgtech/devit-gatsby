import React from 'react';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__row">
        <div className="testimonials__one">
          <div className="testimonial">
            <div className="testimonial__quote">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="testimonial__text">
              It’s wonderful, lots of great people, great conversations and some really excellent talks!
            </div>
            <a href="/speakers/leonie_watson" className="testimonial__name">
              Leonie Watson 2017 <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
        <div className="testimonials__two">
          <img className="img-responsive testimonials__img" src="/assets/images/new/rita-jason-683x342.jpg" alt="Speaker 1" />
        </div>
        <div className="testimonials__one">
          <div className="testimonial">
            <div className="testimonial__quote">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="testimonial__text">
              There is mobile, there is front end, there is DevOps, databases. Very nice combination of everything.
            </div>
            <a href="/speakers/rita_zhang" className="testimonial__name">
              Rita Zhang 2017 <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="testimonials__row">
        <div className="testimonials__two">
          <img className="img-responsive testimonials__img" src="/assets/images/new/leonie-683x342.jpg" alt="Speaker 2" />
        </div>
        <div className="testimonials__one">
          <div className="testimonial">
            <div className="testimonial__quote">
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="testimonial__text">
              It’s fantastic as every year, it’s great!
            </div>
            <a href="/speakers/hugo_giraudel" className="testimonial__name">
              Hugo Giraudel 2017 <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
        <div className="testimonials__one">
          <img className="img-responsive testimonials__img" src="/assets/images/new/hugo-342x342.jpg" alt="Speaker 1" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
