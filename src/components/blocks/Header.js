import React from 'react';

const Header = () => {
  return (
    <header class="header {% if include.page %}{{ include.page | append: '-header'}}{% endif %}">
      {% include blocks/menu.html %}
    </header>
  );
};

export default Header;
