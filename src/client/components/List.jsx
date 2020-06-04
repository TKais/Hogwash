import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.jsx';

function List({ items }) {
  return (
    <ul className="list">
      { items.map((item, index) => (
        <ListItem data={item} index={index} key={`article-${item.source.id}-${index}`} />
      ))
      }
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
