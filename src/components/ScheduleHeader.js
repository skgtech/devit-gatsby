import React from 'react'
import Link from 'gatsby-link'
import { css } from '@emotion/core'

const ScheduleHeader = () => {
  return (
    <div
      css={css`
        background-color: #f5f8fa;
      `}
    >
      <ul
        css={css`
          margin: 0;
          padding: 0;
          margin-bottom: 0;
          padding-top: 40px;
          padding-bottom: 80px;
          text-align: center;

          li {
            display: inline-block;
            margin: 0;
            opacity: 0.5;

            &.active {
              opacity: 1;
            }

            &.separator {
              border: 0;
              padding: 16px;
              width: 32px;
              position: relative;

              &:after {
                content: '';
                position: absolute;
                left: 0;
                top: -10px;
                width: 32px;
                height: 4px;
                border-radius: 24px;
                background-color: #d9d9d9;
              }
            }

            & > div {
              font-size: 14px;
              text-align: center;
              color: #57585a;
            }

            & > a {
              padding: 0;
              line-height: 1em;
              font-size: 24px;
              font-weight: 900;
              text-align: center;
              color: #57585a;
              padding: 16px 40px;
              border-radius: 32px;
              border: solid 2px #b1b2b4;
              display: inline-block;
            }

            &:not(.active) > a {
              color: #57585a;
            }
          }
        `}
      >
        <li>
          <Link href="/workshops">Workshops</Link>
          <div>June 09</div>
        </li>
        <li className="separator"></li>
        <li>
          <Link href="/talks">Talks</Link>
          <div>June 10</div>
        </li>
      </ul>
    </div>
  )
}

ScheduleHeader.propTypes = {}

export default ScheduleHeader
