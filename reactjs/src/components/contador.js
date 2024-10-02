import './contador.css'
import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue); // Usar el valor pasado por props
  const [showCounter, setShowCounter] = useState(true); // Controla la visibilidad

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const toggleCounter = () => setShowCounter(!showCounter); // Función para alternar visibilidad

  return (
    <div id='flex-container'>
      <div id='flex-auto' onClick={toggleCounter}><h1>HOLA PEPE</h1></div>
      {showCounter && ( // Mostrar u ocultar el contador
        <div id='default'>
          <h2>Counter: {count}</h2>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </div>
      )}
    </div>
  );
};

export default Counter;