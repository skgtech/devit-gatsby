import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import { Grid } from 'react-flexbox-grid'
import BlockWBackgroundImage from '../BlockWBackgroundImage'
import { LightBlockHeading } from '../BlockHeading'
import { LightLeading } from '../Leading'

const Subscribe = ({ imageSrc }) => {
  return (
    <BlockWBackgroundImage imageSrc={imageSrc}>
      <Grid
        css={{
          zIndex: '20',
        }}
      >
        <LightBlockHeading>Stay informed</LightBlockHeading>
        <LightLeading>
          Register for our newsletter and stay informed about our latest news.
        </LightLeading>
        <p>Special Offers are available exclusively to our newsletter subscribers.</p>

        <form
          css={css`
            margin-top: 24px;
          `}
          action="#"
          method="get"
        >
          <input type="hidden" value="signup" name="SOURCE" />
          <input type="hidden" value="" name="REF_SOURCE" className="js-signup-ref-source" />
          <input
            name="FNAME"
            type="text"
            css={css`
              border: 0;
              padding: 16px 24px;
              height: 54px;

              &:focus {
                outline: 0;
                box-shadow: none;
              }

              @media (max-width: $screen-md-min) {
                margin-bottom: 10px;
              }
              border-radius: 36px;
              background-color: #ffffff;
              margin-right: 16px;
            `}
            placeholder="First name"
          />
          <div className="input-group">
            <input
              name="EMAIL"
              type="email"
              css={css`
                border: 0;
                padding: 16px 24px;
                height: 54px;

                &:focus {
                  outline: 0;
                  box-shadow: none;
                }

                @media (max-width: $screen-md-min) {
                  margin-bottom: 10px;
                }

                border-top-left-radius: 36px;
                border-bottom-left-radius: 36px;
                background-color: #ffffff;
              `}
              placeholder="Email"
            />
            <span className="input-group-btn">
              <button
                css={css`
                  color: #57585a;
                  border-top-right-radius: 36px;
                  border-bottom-right-radius: 36px;
                  padding: 16px 24px;
                  height: 54px;

                  i {
                    margin-left: 8px;
                  }

                  &:active,
                  &:active:focus,
                  &:visited {
                    outline: 0;
                    box-shadow: none;
                    border: 0;
                  }
                `}
                type="submit"
              >
                Submit <i className="fas fa-long-arrow-alt-right" />
              </button>
            </span>
          </div>
          <p
            css={css`
              color: white;
              padding: 20px 0;
              text-align: center;
              margin: 0;
            `}
          />
        </form>
      </Grid>
    </BlockWBackgroundImage>
  )
}

Subscribe.propTypes = {
  imageSrc: PropTypes.string,
}

export default Subscribe
