import React from "react"
import { storiesOf } from "@storybook/react"

import GetTicketsContainer from './GetTicketsContainer';

storiesOf(`Get tickets block`, module).add(`default`, () => (
  <GetTicketsContainer enabled={true} url={''}/>
))
