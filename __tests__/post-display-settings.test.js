import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostDisplaySettings from './PostDisplaySettings/PostDisplaySettings';

describe('PostDisplaySettings component', () => {
  it('should call setPostCount with correct value when select value changes', () => {
    const setPostCountMock = jest.fn();
    const { getByLabelText } = render(<PostDisplaySettings setPostCount={setPostCountMock} />);

    // Znajdź select na podstawie jego etykiety
    const selectElement = getByLabelText('Number of posts:');

    // Symuluj zmianę wartości w select
    fireEvent.change(selectElement, { target: { value: '5' } });

    // Sprawdź, czy funkcja setPostCount została wywołana z oczekiwaną wartością
    expect(setPostCountMock).toHaveBeenCalledWith(5);
  });
});

// __tests__/post-display-settings.test.js

import { render, fireEvent } from '@testing-library/react';
import PostDisplaySettings from '../src/components/PostSection/PostDisplaySettings/PostDisplaySettings';

test('calls setPostCount with correct value when select value changes', () => {
  const setPostCountMock = jest.fn();
  const { getByLabelText } = render(<PostDisplaySettings setPostCount={setPostCountMock} />);

  // Find select by its label
  const selectElement = getByLabelText('Number of posts:');

  // Simulate changing the value in the select to 25
  fireEvent.change(selectElement, { target: { value: '25' } });

  // Check that setPostCount was called with the expected value of 25
  expect(setPostCountMock).toHaveBeenCalledWith('25');
});