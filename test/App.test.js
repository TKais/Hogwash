import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/client/components/App.jsx';
import Header from '../src/client/components/Header.jsx';

describe('App', () => {
  const appComponent = shallow(<App />);

  test('should render', () => {
    expect(appComponent.exists()).toBeTruthy();
  });
  test('should have header component', () => {
    expect(appComponent.find(Header)).toHaveLength(1);
  });
})
