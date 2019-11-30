import React from 'react'
import { storiesOf } from '@storybook/react'

import Hero from './Hero'
import Menu from '../Menu/Menu'

storiesOf(`Hero block`, module).add(`default`, () => (
  <Hero date={''} menu={<Menu date={''} tickets={{ enabled: true, url: '' }} />} />
))
