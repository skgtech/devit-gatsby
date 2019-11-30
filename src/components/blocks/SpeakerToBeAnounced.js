import React from 'react'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

const SpeakerToBeAnounced = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "new/placeholder-profile-photo.svg" }) {
            absolutePath
            publicURL
          }
          config {
            isCFPOpen
          }
        }
      `}
      render={data =>
        data.config.isCFPOpen ? (
          <div
            className="speaker-tba-no-hover speaker-tba"
            css={css`
              position: relative;
              color: #57585a;
              text-align: center;
              padding: 30px;
              background: white;
            `}
          >
            <div
              css={`
                display: block;
              `}
            >
              <img
                css={css`
                  width: 100%;
                  height: 100%;
                  max-width: 240px;
                  max-height: 240px;
                  border-radius: 50%;
                `}
                src={data.file.publicURL}
                alt="DEVit Speaker"
              />
            </div>
            <div className="speaker-tba__center">
              <div className="speaker-tba__title">
                More Speakers <br />
                to be announced
              </div>
            </div>
          </div>
        ) : null
      }
    />
  )
}

export default SpeakerToBeAnounced
