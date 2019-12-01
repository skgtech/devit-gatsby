import React from 'react'
import { css } from '@emotion/core'
import GatsbyImage from 'gatsby-image'
import PropTypes from 'prop-types'

import Tags from './Tags'

const Session = ({ session }) => {
  return (
    <div
      css={css`
        padding: 1.33em;
        display: flex;
        align-items: center;
        color: #57585a;
        background-color: #f5f8fa;

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        @media (max-width: $screen-xs-min) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 89px;
          height: 89px;
          margin-right: 1.33em;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;

          @media (max-width: $screen-xs-min) {
            margin: auto;
          }
        `}
      >
        <GatsbyImage
          styles={css`
            width: 100%;
            min-height: 100%;
            object-fit: cover;
            object-position: center;
          `}
          alt={`${session.speaker.first_name} ${session.speaker.last_name}`}
          sizes={session.speaker.img}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 100;
          color: #57585a;

          @media (max-width: $screen-xs-min) {
            text-align: center;
            margin: 20px auto 0;
          }
        `}
      >
        <div
          css={css`
            font-size: 1em;
          `}
        >
          {session.speaker.first_name} {session.speaker.last_name}
        </div>
        <a
          css={css`
            display: block;
            font-size: 1.33em;
            font-weight: 900;
            color: #57585a;
          `}
          href={`/speakers/${session.speaker.url}#${session.title}`}
        >
          {session.title}
        </a>
        <Tags tags={session.tags} />
      </div>
      {session.buyLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            margin: 0 24px;
            border-radius: 50px;
            padding: 10px 32px;
            font-size: 1em;
            font-weight: normal;
            text-transform: uppercase;

            @media (max-width: $screen-xs-min) {
              margin: auto;
            }
          `}
          href={session.buyLink}
        >
          Buy now
        </a>
      )}
    </div>
  )
}

Session.propTypes = {
  session: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    buyLink: PropTypes.string,
    tags: PropTypes.array,
    speaker: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      img: PropTypes.object,
      url: PropTypes.string,
    }),
  }),
}

export default Session
