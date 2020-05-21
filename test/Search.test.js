import React from 'react';
import { shallow } from 'enzyme';
import Search from '../src/client/components/Search.jsx';

describe('Search', () => {
  const search = shallow(<Search />);

  test('should render', () => {
    expect(search.exists()).toBeTruthy();
  });
  test('should handle test failure')
});
