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