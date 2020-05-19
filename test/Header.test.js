import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/client/components/Header.jsx';

describe('Header', () => {
  const header = shallow(<Header headerText="Example Header" />);

  test('should render', ()=> {
    expect(header.exists()).toBeTruthy();
  });
  test('should have correct header text', () => {
    expect(header.text()).toEqual('Example Header');
  });
})
