import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should handle non-numeric input gracefully', () => {
    const onRangeChangeMock = jest.fn();
    const { getByLabelText } = render(<Navbar onRangeChange={onRangeChangeMock} />);

    // Znajdź inputy na podstawie ich etykiet
    const startInput = getByLabelText('Od:');
    const endInput = getByLabelText('Do:');

    // Symuluj wpisanie litery w pierwszym polu wejściowym
    fireEvent.change(startInput, { target: { value: 'a' } });

    // Sprawdź, czy stan komponentu nie uległ zmianie
    expect(startInput.value).toBe('');

    // Sprawdź, czy funkcja onRangeChange nie została wywołana
    expect(onRangeChangeMock).not.toHaveBeenCalled();

    // Symuluj wpisanie litery w drugim polu wejściowym
    fireEvent.change(endInput, { target: { value: 'b' } });

    // Sprawdź, czy stan komponentu nie uległ zmianie
    expect(endInput.value).toBe('');

    // Sprawdź, czy funkcja onRangeChange nie została wywołana
    expect(onRangeChangeMock).not.toHaveBeenCalled();
  });
});
