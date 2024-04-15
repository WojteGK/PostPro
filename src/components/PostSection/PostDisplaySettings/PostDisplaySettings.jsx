import React from 'react'

function NumberOptions() {
    const numbers = [1, 5, 10, 15, 20, 25];
  
    return (
      <div>
        <h2>Wybierz liczbę wyświetlanych postów:</h2>
        <select>
          {numbers.map((number, index) => (
            <option key={index} value={number}>{number}</option>
          ))}     
        </select>
      </div>
    );
  }

export default function PostDisplaySettings(){
    return(
        <>
            <NumberOptions/>
        </>
    )
}
