import { useState } from 'react';
import './App.css';
import MyButton from './MyButton';
import Board from './Board';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>My First React App</h1>
      <MyButton count={count} onClick={handleClick} />
      <Board/>
    </div>
  );
}

export default App;
