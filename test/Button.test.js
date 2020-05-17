import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/client/components/Button.jsx';

describe('Button', () => {
  describe('Primary variant', () => {
    const primaryButton = shallow(<Button variant="primary" text="Primary button" />);
  
    test('should render', () => {
      expect(primaryButton.exists()).toBeTruthy();
    });
    test('should have "primary" as its variant', () => {
      expect(primaryButton.hasClass('button--primary')).toEqual(true);
    });
    test('should have correct text', () => {
      expect(primaryButton.text()).toEqual('Primary button');
    });
  });
});
