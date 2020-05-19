import React from 'react';
import { shallow } from 'enzyme';
import Input from '../src/client/components/Input.jsx';

describe('Input', () => {
  const input = shallow(<Input type="text" ariaLabel="First name" />);

  test('should render', () => {
    expect(input.exists()).toBeTruthy();
  });
});
