import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onRangeChange }) {
  const [startRange, setStartRange] = useState(''); // Filtrowanie od ilości znaków
  const [endRange, setEndRange] = useState(''); // Filtrowanie do ilości znaków

  const handleStartChange = (event) => {
    setStartRange(event.target.value);
    onRangeChange(event.target.value, endRange);
  };

  const handleEndChange = (event) => {
    setEndRange(event.target.value);
    onRangeChange(startRange, event.target.value);
  };

  return (
    <div className='navbar'>
      <h2>Wybierz zakres znaków jakie mają zawierać posty:</h2>
      {/* Sekcja wyboru początkowego zakresu */}
      <label>
        Od:
        <input type="number" value={startRange} onChange={handleStartChange} />
      </label>

      {/* Sekcja wyboru końcowego zakresu */}
      <label>
        Do:
        <input type="number" value={endRange} onChange={handleEndChange} />
      </label>
    </div>
  );
}
