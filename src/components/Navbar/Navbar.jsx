// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';

function Navbar({ onRangeChange }) {
  const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');

  const handleStartChange = (event) => {
    setStartRange(event.target.value);
  };

  const handleEndChange = (event) => {
    setEndRange(event.target.value);
  };

  const handleApplyFilters = () => {
    if (startRange === '' || endRange === '') {
      alert('Pola "Od" i "Do" nie mogą być puste.');
      return;
    }

    if (parseInt(endRange) < parseInt(startRange)) {
      alert('Wartość "Do" nie może być mniejsza niż wartość "Od".');
      return;
    }

    onRangeChange(startRange, endRange);
  };

  return (
    <div className='navbar'>
      <h2>Wybierz zakres znaków jakie mają zawierać posty:</h2>
      <label>
        Od:
        <input type="number" value={startRange} onChange={handleStartChange} />
      </label>
      <label>
        Do:
        <input type="number" value={endRange} onChange={handleEndChange} />
      </label>
      <button onClick={handleApplyFilters}>apply</button>
    </div>
  );
}

export default Navbar;