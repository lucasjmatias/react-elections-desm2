import React from 'react';
import { formatInteger } from '../utils/number-utils';

export default function CityElection({ children, city, totalVoters = 0 }) {
  const { votingPopulation, absence, presence } = city;
  return (
    <div className="border-2 bordr-gray-200  p-4 shadow-inner rounded-md">
      <div className="pb-04">
        <h2 className="font-bold text-lg text-center">
          Eleição em {city.name}
        </h2>
        <div className="flex space-x-6 justify-center p-4">
          <div>
            <label className="font-bold">Total de eleitores: </label>
            {formatInteger(votingPopulation)}
          </div>
          <div>
            <label className="font-bold">Abstenção: </label>
            {formatInteger(absence)}
          </div>
          <div>
            <label className="font-bold">Comparecimento: </label>
            {formatInteger(presence)}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
