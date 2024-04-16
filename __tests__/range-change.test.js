import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('should call onRangeChange with correct values when input values change', () => {
    const onRangeChangeMock = jest.fn();
    const { getByLabelText } = render(<Navbar onRangeChange={onRangeChangeMock} />);

    // Znajdź inputy na podstawie ich etykiet
    const startInput = getByLabelText('Od:');
    const endInput = getByLabelText('Do:');

    // Symuluj zmianę wartości w pierwszym polu wejściowym na 10
    fireEvent.change(startInput, { target: { value: '10' } });

    // Sprawdź, czy funkcja onRangeChange została wywołana z oczekiwaną wartością dla początkowego zakresu
    expect(onRangeChangeMock).toHaveBeenCalledWith('10', '');

    // Symuluj zmianę wartości w drugim polu wejściowym na 20
    fireEvent.change(endInput, { target: { value: '20' } });

    // Sprawdź, czy funkcja onRangeChange została wywołana z oczekiwaną wartością dla końcowego zakresu
    expect(onRangeChangeMock).toHaveBeenCalledWith('10', '20');
  });
});