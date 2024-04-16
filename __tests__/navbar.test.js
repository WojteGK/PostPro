import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar/Navbar';

describe('Navbar component', () => {
  it('should call onRangeChange callback with correct values when inputs change', () => {
    const onRangeChangeMock = jest.fn();
    const { getByLabelText } = render(<Navbar onRangeChange={onRangeChangeMock} />);

    // Znajdź inputy na podstawie ich etykiet
    const startInput = getByLabelText('Od:');
    const endInput = getByLabelText('Do:');

    // Symuluj zmianę wartości w pierwszym polu wejściowym
    fireEvent.change(startInput, { target: { value: '10' } });
    expect(onRangeChangeMock).toHaveBeenCalledWith('10', '');

    // Symuluj zmianę wartości w drugim polu wejściowym
    fireEvent.change(endInput, { target: { value: '20' } });
    expect(onRangeChangeMock).toHaveBeenCalledWith('10', '20');
  });
});