import React from 'react';
import { formatInteger, formatPercent } from '../utils/number-utils';
import { colorizeWarning } from '../utils/style-utils';

export default function Candidate({ children: candidate }) {
  const { name, username } = candidate;
  const votesPercentage = 0.4568;
  const totalVotes = 749559;
  const isElected = true;

  return (
    <div className="border border-gray-50 rounded-md w-64 h-56 p-4 m-2 shadow-lg flex flex-wrap box-content">
      <img
        src={`img/${username}.png`}
        alt="Candidate name"
        className="w-24 h-24 left-2 rounded-full "
      />
      <div className="w-40 h-24">
        <div className="w-full h-12 relative">
          <span
            className={`bottom-0 w-full align-text-bottom absolute text-center text-lg font-bold ${colorizeWarning(
              isElected
            )}`}
          >
            {formatPercent(votesPercentage)}
          </span>
        </div>
        <div className="h-12 text-center text-sm">
          {formatInteger(totalVotes)} votos
        </div>
      </div>
      <div className="w-full h-16 relative">
        <span className="absolute text-center bottom-0 w-full text-2xl">
          {name}
        </span>
      </div>
      <div className="text-center w-full h-16 text-xl">
        <span className={`inline-block p-6 ${colorizeWarning(isElected)}`}>
          {isElected ? 'Eleito' : 'Não eleito'}
        </span>
      </div>
    </div>
  );
}
