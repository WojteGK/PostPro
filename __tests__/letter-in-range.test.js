import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostDisplaySettings from './PostDisplaySettings';

describe('PostDisplaySettings component', () => {
  it('should handle non-numeric input gracefully', () => {
    const setPostCountMock = jest.fn();
    const { getByLabelText } = render(<PostDisplaySettings setPostCount={setPostCountMock} />);

    // Znajdź select na podstawie jego etykiety
    const selectElement = getByLabelText('Number of posts:');

    // Symuluj wpisanie litery w polu wyboru
    fireEvent.change(selectElement, { target: { value: 'a' } });

    // Sprawdź, czy stan komponentu nie uległ zmianie
    expect(selectElement.value).toBe('10'); // Domyślna wartość

    // Sprawdź, czy funkcja setPostCount nie została wywołana
    expect(setPostCountMock).not.toHaveBeenCalled();
  });
});
