import React from 'react'
import { storiesOf } from '@storybook/react'

import GetTickets from './GetTickets'

storiesOf(`Get tickets block`, module).add(`default`, () => <GetTickets enabled={true} url={''} />)
