import React from 'react';
import css from 'react-emotion';

import { Row, Col } from 'react-flexbox-grid';

import blueLogo from './../../images/logo/blue/logo.svg';
import whiteLogo from './../../images/logo/white/logo.svg';

const mainMenuLinkStyles = {
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.7)',
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  '&:hover,&:focus': {
    background: 'none !important',
    color: 'rgba(255,255,255,1) !important',
  },
  '.sticky--stick &': {
    color: 'rgba(87,88,90, 0.7)',
    '&:hover,&:focus': {
      color: 'black !important',
    }
  }
};

const MainMenuLink = css('a')(mainMenuLinkStyles)

const MainMenuCTALink = css('a')(mainMenuLinkStyles, {
  borderRadius: '24px',
  backgroundColor: '#00629e',
  color: 'white',
  fontWeight: 'bold',
  lineHeight: '22px',
  padding: '13px 32px !important',
  '&:hover,&:focus': {
    color: '#FFFFFF !important',
    backgroundColor: '#003E73 !important',
  },
  '.sticky--stick &': {
    backgroundColor: '#00629e',
    color: 'white',
    '&:hover,&:focus': {
      color: '#FFFFFF !important',
      backgroundColor: '#003E73 !important',
    }
  }
})

const Menu = ({date, tickets, pathname}) => {
  return (
    <nav css={{
      zIndex: 999,
      padding: '16px 56px 16px 56px',
      '@media (max-width: $screen-sm-min)': {
        paddingLeft: '32px',
        paddingRight: '32px',
      },
      marginBottom: '0',
      borderRadius: '0',
      '&.sticky--stick': {
        paddingTop: '14px',
        paddingBottom: '14px',
        background: 'white',
      }
    }}>
      <Row middle="xs">
        <Col xs css={{
          padding: 0,
          '@media (max-width: $screen-sm-min)': {
            fontSize: '1.3em'
          }
        }}>
          <a href="/" css={{
            width: '4em',
            height: '52px',
            float: 'left',
            backgroundImage: `url(${whiteLogo})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            '.sticky--stick &': {
              backgroundImage: `url(${blueLogo})`,
            }
          }}></a>
          <div css={{
            textAlign: 'left',
            color: 'white',
            marginLeft: '10px',
            float: 'left',
            lineHeight: '18px',
            paddingTop: '5px',
            '.sticky--stick &': {
              color: 'black',
            }
          }}>
            <span css={{
              fontSize: '1em',
              fontWeight: '900',
            }}>{date}</span><br/>
            <span css={{
              fontSize: '0.77em',
              fontWeight: 'bold',
            }}>Thessaloniki, Greece</span>
          </div>
        </Col>
        <Col xs>
          <ul css={{
            margin: '0',
            paddingLeft: '0',
            '& li': {
              display: 'inline-block',
            },
            '& li + li': {
              marginLeft: '24px',
            }
          }}>
            <li>
              <MainMenuLink href="/#about">About</MainMenuLink>
            </li>
            <li>
              <MainMenuLink href="/#speakers">Speakers</MainMenuLink>
            </li>
            <li>
              <MainMenuLink href="/#venue">Venue</MainMenuLink>
            </li>
              <li>
              <MainMenuLink href="/#sponsors">Sponsors</MainMenuLink>
            </li>
            <li>
              <MainMenuLink target="_blank" rel="noopener" href="https://medium.com/devitconf">Blog</MainMenuLink>
            </li>
            {
              tickets.enabled
                ? (
                  <li>
                    <MainMenuCTALink target="_blank" rel="noopener" className="main-menu__link--cta cta" href="{{ site.data.config.tickets.url }}">
                      Buy tickets
                    </MainMenuCTALink>
                  </li>
                )
                : null
            }
          </ul>
        </Col>
      </Row>
    </nav>
  );
};

export default Menu;
