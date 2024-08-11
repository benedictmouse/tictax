import React from 'react';

const MyButton = ({ count, onClick }) => {
  return (
    <button onClick={onClick}>
      {count} My Button
    </button>
  );
}

export default MyButton;
