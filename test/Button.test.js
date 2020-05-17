import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/client/components/Button.jsx';

describe('Button', () => {
  describe('Primary variant', () => {
    const buttonComponent = shallow(<Button variant="primary" text="Primary button" />);
  
    test('should render', () => {
      expect(buttonComponent.exists()).toBeTruthy();
    });
  });
});
