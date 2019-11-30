import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

Tags.propTypes = {
  tags: PropTypes.array,
}

const Tags = ({ tags }) => {
  return (
    <div
      css={css`
        margin-top: 4px;
        margin-bottom: 4px;
        font-size: 0;
      `}
    >
      {tags &&
        tags.map((tag, index) => (
          <span
            key={index}
            css={css`
              border-radius: 24px;
              background-color: #74aacd;
              color: #ffffff;
              font-size: 10px;
              font-weight: bold;
              line-height: 12px;
              padding: 6px 8px;
              margin: 4px;
              display: inline-block;
              text-transform: uppercase;

              &:first-child {
                margin-left: 0;
              }
            `}
          >
            {tag}
          </span>
        ))}
    </div>
  )
}

export default Tags
