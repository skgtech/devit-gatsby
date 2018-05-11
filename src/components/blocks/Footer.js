import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__logo" src="/assets/images/new/devit-logo-white.svg" alt="DEVit logo" />
        <div className="footer-row">
          <div className="footer-row__column">
            <div className="footer-menu">
              <div className="footer-menu__header">
                ABOUT US
              </div>
              <ul className="footer-menu__list">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="https://medium.com/devitconf">Blog</a>
                </li>
                <li>
                  <a href="/press">Press</a>
                  </li>
                <li>
                  <a href="/code-of-conduct">Code of Conduct</a>
                  </li>
              </ul>
            </div>
          </div>
          <div className="footer-row__column">
            <div className="footer-menu">
              <div className="footer-menu__header">
                DEVit 2018
              </div>
              <ul className="footer-menu__list">
                <li>
                  <a target="_blank" rel="noopener" href="{{ site.data.config.tickets.url }}">Buy tickets</a>
                </li>
                <li>
                  <a href="/#speakers">Speakers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-row__column">
            <div className="footer-menu">
              <div className="footer-menu__header">
                PAST
              </div>
              <ul className="footer-menu__list">
                <li>
                  <a href="http://devitconf.org/2017">DEVit 2017</a>
                </li>
                <li>
                  <a href="http://devitconf.org/2016">DEVit 2016</a>
                </li>
                <li>
                  <a href="http://devitconf.org/2015">DEVit 2015</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-row__column">
            <div className="footer-menu">
              <div className="footer-menu__header">
                Social
              </div>
              <ul className="social-icons">
                <li>
                  <a target="_blank" rel="noopener" href="https://www.facebook.com/DEVitConf" className="fab fa-facebook-f"></a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="https://twitter.com/devitconf" className="fab fa-twitter"></a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCrKmMv6c6oqZPYC7zzbP-RQ" className="fab fa-youtube"></a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="https://www.instagram.com/devitconf/" className="fab fa-instagram"></a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/11399285/" className="fab fa-linkedin"></a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="https://www.medium.com/@devitconf" className="fab fa-medium"></a>
                </li>
              </ul>
              <div className="footer-menu__header">
                <i className="fab fa-slack"></i> Slack
                <form className="slack-form" method="post" action="#">
                  <div className="input-group">
                    <input name="email" type="email" className="slack-field" placeholder="Enter your email" />
                    <span className="input-group-btn">
                      <button className="slack-submit" type="submit">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </button>
                    </span>
                  </div>
                  <div className="slack-form__results"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <span className="copyrights__text">© 2018</span>
          <a className="copyrights__link" href="https://github.com/skgtech/devit/graphs/contributors" target="_blank" rel="noopener">SKGTech Contributors</a><span className="copyrights__text">, Licensed under</span>
          <a className="copyrights__link" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">Creative Commons 4.0</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
