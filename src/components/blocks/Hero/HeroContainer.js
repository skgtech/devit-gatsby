import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../../images/logo/white/logo.svg'
import videoFrame from '../../../images/video-frame.jpg'
import videoWebm from '../../../images/video.webm'
import videoMp4 from '../../../images/video.mp4'

HeroContainer.propTypes = {
  date: PropTypes.string,
  menu: PropTypes.bool,
}

const HeroContainer = ({ date, menu }) => {
  return (
    <div
      css={{
        backgroundImage: 'linear-gradient(rgba(0, 62, 115, 0.8), rgba(0, 62, 115, 0.8))',
        textAlign: 'center',
        paddingBottom: '8.33em',
        paddingTop: '24px',
        '@media (max-width: $screen-sm-min)': {
          paddingBottom: '6em',
          paddingTop: '14px',
          backgroundImage:
            'linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)), url(/assets/images/header/screen.jpg)',
          backgroundPosition: 'center',
        },
      }}
    >
      {menu}
      <video
        playsInline
        autoPlay
        muted
        loop
        poster={videoFrame}
        css={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -100,
          transform: 'translateX(-50%) translateY(-50%)',
          background: 'rgba(0, 62, 115, 0.9)',
          '@media (max-width: $screen-sm-min)': {
            display: 'none',
          },
        }}
      >
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
      <img
        css={{
          paddingTop: '6em',
          width: '250px',
          '@media (max-width: $screen-sm-min)': {
            paddingTop: '4em',
          },
        }}
        src={logo}
        alt="DEVit logo"
      />
      <h1
        css={{
          margin: 0,
          color: 'white',
          fontWeight: '900',
          fontSize: '3.55em',
          lineHeight: '77px',
          marginBottom: '8px',
          marginTop: '40px',
        }}
      >
        {date}
      </h1>
      <h2
        css={{
          margin: 0,
          color: 'white',
          fontSize: '1.66em',
        }}
      >
        Thessaloniki, Greece
      </h2>
    </div>
  )
}

export default HeroContainer
