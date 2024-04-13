import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Fetch counter value from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:5000/counter')
      .then(response => response.json())
      .then(data => setCounter(data.counter))
      .catch(error => console.error('Error:', error));
  }, []);

  // Function to increment counter
  const incrementCounter = () => {
    fetch('http://localhost:5000/counter', { method: 'POST' })
      .then(response => response.json())
      .then(data => setCounter(data.counter))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Counter: {counter}</p>
        <button onClick={incrementCounter}>Increment Counter</button>
      </header>
    </div>
  );
}

export default App;
