import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/client/components/Button.jsx';

describe('Button', () => {
  const buttonComponent = shallow(<Button variant="primary" text="Test button" />);

  test('should render', () => {
    expect(buttonComponent.exists()).toBeTruthy();
  })
});
