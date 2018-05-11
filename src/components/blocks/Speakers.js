import React from 'react';

const Speakers = () => {
  return (
    {% assign speakers = "" | split: "" %}
    {% assign years = include.years | split: ',' %}
    {% for year in years %}
      {% for speaker in site.data.speakers[year].speakers %}
        {% assign speakers = speakers | push: speaker %}
      {% endfor %}
    {% endfor %}

    <div id="speakers" className="speakers-container">
      <div className="container text-center">
        <div className="block__heading--dark">
          Meet our speakers
        </div>
        <p className="dark">
          Each year we meticulously vet and select remarkable speakers to deliver the best talks on web development.
        </p>
      </div>
      <div className="speakers-list">
        {% for speaker in speakers | sort: 'last_name' %}
        <div className="speakers-list__item">
          {% include components/speaker.html speaker=speaker speaker_page=false %}
        </div>
        {% endfor %}
        <div className="speakers-list__item">
          {% include components/speaker-tba.html %}
        </div>
      </div>
    </div>

    {% if site.data.config.isCFPOpen == true %}
    <div className="speakers__cfp">
      <div className="block__heading">
        Call for Papers
      </div>
      <p className="light">
        Be a DEVit speaker, share your experience with hundreds of peers!
      </p>
      <a href="#" className="block__more-cta">
        Apply now
        <i className="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
    {% endif %}
  );
};

export default Speakers;
