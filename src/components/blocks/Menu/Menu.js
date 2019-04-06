import React from 'react';
import { StaticQuery, graphql } from "gatsby"

import MenuContainer from './MenuContainer';

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
      query {
        config(id: { eq: "Config"}) {
          date,
          tickets {
            enabled
            url
          }
        },
      }
      `}
      render={data => <MenuContainer
        date={data.config.date}
        tickets={data.config.tickets}
      />}
    />
  );
};

export default Menu;
