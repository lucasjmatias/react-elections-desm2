import React from 'react';

export default function Candidates({ children }) {
  return (
    <>
      <div className="text-center mb-6 ">
        <label className="font-bold ">Total de candidatos:</label>{' '}
        {children.length}
      </div>
      <div className="flex  flex-wrap justify-center w-full ">{children}</div>
    </>
  );
}
