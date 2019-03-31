import React from 'react';
import { css }from '@emotion/core';

export default ({ items }) => {
  return (
    <div css={css`
      margin-top: 4px;
      font-size: 0;
      display: flex;
      justify-content: center;
    `}>
    {items && Object.keys(items).map(item => {
      let icon;
      let link;
      return (
        <a href={link} class="speaker__social__item" target="blank" rel="noopener">
          <i class={icon}></i>
        </a>
      )
    })}
      {/* {% for social in include.social %}
        {% if social[0] == "github" %}
          {% assign icon = "fab fa-github" %}
          {% assign link = "https://github.com/" | append: social[1] %}
        {% endif %}
        {% if social[0] == "linkedin" %}
          {% assign icon = "fab fa-linkedin" %}
          {% assign link = social[1] %}
        {% endif %}
        {% if social[0] == "medium" %}
          {% assign icon = "fab fa-medium" %}
          {% assign link = "https://medium.com/@" | append: social[1] %}
        {% endif %}
        {% if social[0] == "twitter" %}
          {% assign icon = "fab fa-twitter" %}
          {% assign link = "https://twitter.com/" | append: social[1] %}
        {% endif %}
        {% if social[0] == "facebook" %}
          {% assign icon = "fab fa-facebook-f" %}
          {% assign link = "https://facebook.com/" | append: social[1] %}
        {% endif %}
        {% if social[0] == "homepage" %}
          {% assign icon = "fas fa-link" %}
          {% assign link = social[1] %}
        {% endif %}

      {% endfor %} */}
    </div>

  );
};
