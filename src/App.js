import { useState } from 'react';
import './App.css';
import Tour from './components/Tour';
import data from './data';
function App() {
  const [tours, setTours] = useState(data);
  const removecard = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2 className='ending-text'>No Tours <span className='ending-text-left'>Left</span></h2>
        <button className='btn-white' onClick={() => { setTours(data) }}>Refresh</button>
      </div>
    );
  }
  return (
    <div className='App'>
      <Tour tours={tours} removecard={removecard}></Tour>
    </div>
  );
}

export default App;
