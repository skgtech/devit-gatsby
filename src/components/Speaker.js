import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import SpeakerSocial from './SpeakerSocial'
import Tags from './Tags'
import HereFor from './HereFor'

const Speaker = ({ speaker, speaker_page }) => {
  const { first_name, last_name, url, img, tags, social, hereFor, tagline } = speaker

  const speakerContainerHover = css`
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 62, 115, 0.1);
  `
  const speakerHiddenHover = css`
    opacity: 1;

    @media (min-width: 992px) {
      .speaker__hover {
        opacity: 1;
      }
    }
  `
  const outerCss = css`
    height: auto;
    text-align: center;
    background-color: white;
    padding: 32px;
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

    @media (min-width: 992px) {
      .speaker {
        background-color: white;
        box-shadow: 0 0 10px 0 rgba(0, 62, 115, 0.1);
        padding: 32px;
      }
    }
  `

  const speakerCss = speaker_page ? css(outerCss, speakerContainerHover) : outerCss

  return (
    <div css={speakerCss}>
      <a
        css={css`
          display: block;
        `}
        href={url}
      >
        {img && (
          <Img
            css={css`
              width: 100%;
              height: 100%;
              max-width: 240px;
              max-height: 240px;
              border-radius: 50%;
            `}
            fixed={img.childImageSharp.fixed}
            alt={`${first_name} ${last_name}`}
          />
        )}
      </a>
      {!speaker_page && (
        <>
          <a
            css={css`
              color: #333;
              font-size: 1.1em;
              font-weight: 900;
              line-height: 60px;
              height: 60px;
              padding-bottom: 16px;

              span {
                line-height: 24px;
                vertical-align: middle;
                display: inline-block;
              }
            `}
            href={url}
          >
            <span>{`${first_name} ${last_name}`}</span>
          </a>
          <div
            css={css`
              font-size: 0.77em;
              line-height: 17px;
              height: 34px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            {tagline.slice(0, 60)}
          </div>
          <HereFor herefor={hereFor} />
        </>
      )}
      <div css={speakerHiddenHover}>
        <Tags tags={tags} />
        <SpeakerSocial items={social} />
      </div>
    </div>
  )
}

Speaker.propTypes = {
  speaker: PropTypes.object,
  speaker_page: PropTypes.bool,
}

export default Speaker
