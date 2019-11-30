import React from 'react'
import { storiesOf } from '@storybook/react'

import About from './About'

storiesOf(`About block`, module).add(`default`, () => <About imageSrc={''} />)
