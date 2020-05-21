import React from 'react';
import PropTypes from 'prop-types';

function List({ items }) {
  return (
    <ul>
      { items.map((item, index) => (
        <li key={`article-${item.source.id}-${index}`}>{item.title}</li>
      ))
      }
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
