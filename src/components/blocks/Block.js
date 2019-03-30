import React from 'react';
import Organizers from './Organizers';

import { Grid, Row, Col } from 'react-flexbox-grid';

export default ({style, id, children}) => {
  return (
    <div id={id} css={{
      paddingTop: '5.5em',
      paddingBottom: '5.5em',
      background: 'white',
      ...style,
    }}>
      {children}
    </div>
  );
};
