import React, { useState } from 'react'
import Tictac from './Tictac'

const Board = () => {
  const [xNext , setXNext] = useState(true);
  const [tictac, setTictac] = useState(Array(9).fill(null));

  function handleclick(i) {
    if (calculateWinner (tictac)|| tictac[i]){
      return;
    }

    if (tictac[i]){
      return;
    }
    const nextTictac = tictac.slice();
  if (nextTictac){
    nextTictac[i] = xNext ? 'X' : 'O';

  }
    setTictac(nextTictac);
    setXNext(!xNext);
  const winner = calculateWinner (tictac);
  let status;
  if (winner){
    status ='Winner :' + winner;
    } else {
      status = 'Next player: ' + (xNext ? 'X' : 'O');
    }
  }
  return (
    <>
      <div className='board-row'>
        <Tictac value={tictac[0]} onTictacClick={() => handleclick(0)} />
        <Tictac value={tictac[1]} onTictacClick={() => handleclick(1)} />
        <Tictac value={tictac[2]} onTictacClick={() => handleclick(2)} />
      </div>
      <div className='board-row'>
        <Tictac value={tictac[3]} onTictacClick={() => handleclick(3)} />
        <Tictac value={tictac[4]} onTictacClick={() => handleclick(4)} />
        <Tictac value={tictac[5]} onTictacClick={() => handleclick(5)} />
      </div>
      <div className='board-row'>
        <Tictac value={tictac[6]} onTictacClick={() => handleclick(6)} />
        <Tictac value={tictac[7]} onTictacClick={() => handleclick(7)} />
        <Tictac value={tictac[8]} onTictacClick={() => handleclick(8)} />
      </div>
    </>
  )
}

function calculateWinner(tictac) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (tictac[a] && tictac[a] === tictac[b] && tictac[a] === tictac[c]) {
      return tictac[a];
    }
  }
  return null;
}

export default Board