import React from 'react'
import { storiesOf } from '@storybook/react'

import AboutContainer from './AboutContainer'

storiesOf(`About block`, module).add(`default`, () => <AboutContainer imageSrc={''} />)
