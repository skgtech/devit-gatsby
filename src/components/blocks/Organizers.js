import React from 'react';

const Organizers = () => {
  return (
    <div className="organizers__logos">
      <p>organised by</p>
      <ul className="list-inline">
        <li>
          <a href="https://skgtech.io/" target="_blank">
            <img src="/assets/images/new/skgtech-logo.svg" alt="SKGTech" />
          </a>
        </li>
        <li>
          <a href="http://www.shesharp.org/" target="_blank">
            <img src="/assets/images/new/shesharp-logo.svg" alt="SKGTech" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Organizers;
