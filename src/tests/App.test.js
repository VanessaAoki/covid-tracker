import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from '../App';

describe('Home page renders as required', () => {
  it('Home UI matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
