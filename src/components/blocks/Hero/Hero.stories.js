import React from 'react'
import { storiesOf } from '@storybook/react'

import HeroContainer from './HeroContainer'
import Menu from '../Menu/MenuContainer'

storiesOf(`Hero block`, module).add(`default`, () => (
  <HeroContainer
    date={''}
    menu={<Menu date={''} tickets={{ enabled: true, url: '' }} />}
  />
))
