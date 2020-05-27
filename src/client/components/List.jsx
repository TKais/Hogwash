import React from 'react';
import PropTypes from 'prop-types';

function List({ items }) {
  return (
    <ul className="list">
      { items.map((item, index) => (
        <li key={`article-${item.source.id}-${index}`} className="list__item">
          <a href={item.url}>
            {new Date(item.publishedAt).toLocaleDateString()}
            {item.source.name}
            {item.title}
          </a>
        </li>
      ))
      }
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
