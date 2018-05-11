import React from 'react';

const Menu = ({date, tickets, pathname}) => {
  return (
    <nav className="main-navbar sticky">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className={`navbar-brand ${pathname === "/" ? 'navbar-brand--hidden' : ''}`}>
          <a href="/" className="navbar-logo"></a>
          <div className="navbar-date">
            <span className="navbar-date__date">{date}</span><br/>
            <span className="navbar-date__place">Thessaloniki, Greece</span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="main-menu">
            <li>
              <a className="main-menu__link" href="/#about">About</a>
            </li>
            <li>
              <a className="main-menu__link" href="/#speakers">Speakers</a>
            </li>
            <li>
              <a className="main-menu__link" href="/#venue">Venue</a>
            </li>
             <li>
              <a className="main-menu__link" href="/#sponsors">Sponsors</a>
            </li>
            <li>
              <a className="main-menu__link" target="_blank" rel="noopener" href="https://medium.com/devitconf">Blog</a>
            </li>
            {
              tickets.enabled
                ? (
                  <li>
                    <a target="_blank" rel="noopener" className="main-menu__link--cta cta" href="{{ site.data.config.tickets.url }}">
                      Buy tickets
                    </a>
                  </li>
                )
                : null
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
