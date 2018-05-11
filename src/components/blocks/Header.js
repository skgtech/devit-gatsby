import React from 'react';

const Header = () => {
  return (
    // TODO: convert this to valid JS
    <header className={`header {% if include.page %}{{ include.page | append: '-header'}}{% endif %}`}>
      {% include blocks/menu.html %}
    </header>
  );
};

export default Header;
