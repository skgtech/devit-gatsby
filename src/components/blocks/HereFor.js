import React from 'react';
import { css } from '@emotion/core';

export default ({ herefor }) => {
  const styles = css`
    border-radius: 24px;
    background-color: #e7e7e8;
    font-size: 0.55em;
    font-weight: bold;
    color: #57585a;
    text-transform: uppercase;
    display: inline-block;
    padding: 6px 8px;
    margin-top: 8px;
  `;

  if (!herefor) {
    return null;
  }

  return (
    <div class="herefor">
    {Array.isArray(herefor) ? herefor.map(item => (
      <div css={styles}>
        { item }
      </div>
    )) : (
      <span css={styles}>
        { herefor }
      </span>
    )}

    </div>
  );
};