import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/client/components/Button.jsx';

function variantHelper(button, variantClass) {
  expect(button.hasClass(variantClass)).toEqual(true);
}

function textHelper(button, text) {
  expect(button.text()).toEqual(text);
}

function eventHelper(button, event, callback) {
  button.find('button').simulate(event);
  expect(callback.mock.calls.length).toEqual(1);
}

describe('Button', () => {
  const mockClickCallback = jest.fn();
  const primaryButton = shallow(<Button variant="primary" text="Primary button" onClick={mockClickCallback} />);
  
  test('should render', () => {
    expect(primaryButton.exists()).toBeTruthy();
  });
  test('should have correct text', () => {
    textHelper(primaryButton, 'Primary button');
  });
  test('should fire click event', () => {
    eventHelper(primaryButton, 'click', mockClickCallback);
  });
  test('should fail if passed an incorrect variant', () => {
    try {
      primaryButton.setProps({ 'variant': 'someVariant' });
    } catch(err) {
      expect(err).toHaveProperty('message', 'Warning: Failed prop type: Invalid prop `variant` of value `someVariant` supplied to `Button`, expected one of ["primary","secondary","tertiary"].\n    in Button');
    }
  });

  describe('Primary variant', () => {
    test('should have "primary" as its variant', () => {
      primaryButton.setProps({ 'variant': 'primary' });
      variantHelper(primaryButton, 'button--primary');
    });
  });

  describe('Secondary variant', () => {
    const mockClickCallback = jest.fn();
    const secondaryButton = shallow(<Button variant="secondary" text="Secondary button" onClick={mockClickCallback} />);

    test('should have correct text', () => {
      textHelper(secondaryButton, 'Secondary button');
    });
    test('should fire click event', () => {
      eventHelper(secondaryButton, 'click', mockClickCallback);
    });
    test('should have "secondary" as its variant', () => {
      variantHelper(secondaryButton, 'button--secondary');
    });
  });

  describe('Tertiary variant', () => {
    const mockClickCallback = jest.fn();
    const tertiaryButton = shallow(<Button variant="tertiary" text="Tertiary button" onClick={mockClickCallback} />);

    test('should have correct text', () => {
      textHelper(tertiaryButton, 'Tertiary button');
    });
    test('should fire click event', () => {
      eventHelper(tertiaryButton, 'click', mockClickCallback);
    });
    test('should have "tertiary" as its variant', () => {
      variantHelper(tertiaryButton, 'button--tertiary');
    });
  });
});
