import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  const { data, index } = props;
  return (
    <li key={`article-${data.source.id}-${index}`} className="list__item">
      <a href={data.url} className="list__item-anchor">
        {new Date(data.publishedAt).toLocaleDateString()}
        {data.source.name}
        {data.title}
      </a>
    </li>
  );
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;
