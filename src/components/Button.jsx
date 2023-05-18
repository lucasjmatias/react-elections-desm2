import React from 'react';

export default function Button({
  children: description = 'Descrição',
  onButtonClick = i => i,
}) {
  function handleButtonClick() {
    onButtonClick();
  }
  return (
    <button
      className="bg-gray-200 p-2 rounded-md m-2"
      onClick={handleButtonClick}
    >
      {description}
    </button>
  );
}
