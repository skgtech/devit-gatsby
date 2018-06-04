import React from 'react';
import Organizers from './Organizers';

import { Grid, Row, Col } from 'react-flexbox-grid';

const BlockWBackgroundImage = ({imageSrc, id, children}) => {
  return (
    <div id={id} css={{
      paddingTop: '5.5em',
      paddingBottom: '5.5em',
      background: 'white',
      backgroundImage: `linear-gradient(rgba(0, 62, 115, 0.9), rgba(0, 62, 115, 0.9)), url(${imageSrc})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `top`,
      position: `relative`,
      color: `white`,
      paddingTop: `7.11em`,
      paddingBottom: `7.11em`,
      textAlign: 'center'
    }}>
      {children}
    </div>
  );
};

export default BlockWBackgroundImage;
