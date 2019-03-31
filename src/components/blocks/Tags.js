import React from 'react';
import { css }from '@emotion/core';

export default ({ tags }) => {
  return (
    <div css={css`
      margin-top: 4px;
      margin-bottom: 4px;
      font-size: 0;
    `}>
      {tags && tags.map(tag => (
        <span css={css`
          border-radius: 24px;
          background-color: #74AACD;
          color: #FFFFFF;
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
        `}>
          {tag}
        </span>
      ))}
    </div>
  );
};