import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostDisplaySettings from './PostDisplaySettings';

describe('PostDisplaySettings component', () => {
  it('should call setPostCount with correct value when select value changes', () => {
    const setPostCountMock = jest.fn();
    const { getByLabelText } = render(<PostDisplaySettings setPostCount={setPostCountMock} />);

    // Znajdź select na podstawie jego etykiety
    const selectElement = getByLabelText('Number of posts:');

    // Symuluj zmianę wartości w select na wartość 25
    fireEvent.change(selectElement, { target: { value: '25' } });

    // Sprawdź, czy funkcja setPostCount została wywołana z oczekiwaną wartością 25
    expect(setPostCountMock).toHaveBeenCalledWith(25);

    // Ponownie zmień wartość w select na wartość 5
    fireEvent.change(selectElement, { target: { value: '5' } });

    // Sprawdź, czy funkcja setPostCount została wywołana z oczekiwaną wartością 5
    expect(setPostCountMock).toHaveBeenCalledWith(5);
  });
});