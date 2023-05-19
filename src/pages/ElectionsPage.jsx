import Candidate from '../components/Candidate';
import Candidates from '../components/Candidates';
import Header from '../components/Header';
import Main from '../components/Main';
import React, { useCallback, useEffect, useState } from 'react';
import SelectInput from '../components/SelectInput';
import SelectOption from '../components/SelectOption';
import CityElection from '../components/CityElection';
import { getCities } from '../services/citiesService';
import { getCandidates } from '../services/candidatesService';
import { getElection } from '../services/electionService';

export default function ElectionsPage() {
  const [cities, setCities] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [election, setElection] = useState([]);
  const [cityCandidates, setCityCandidates] = useState([]);
  const [currCity, setCurrCity] = useState({
    id: 'a27c86ce-d99a-4f4f-8cbb-37302754734e',
    name: 'Asgard',
    votingPopulation: 1850577,
    absence: 111034,
    presence: 1739543,
  });

  useEffect(() => {
    const candidatesByCity = election
      .filter(c => c.cityId === currCity.id)
      .map(({ candidateId, votes }) => {
        const candidate = candidates.find(c => c.id === candidateId);
        const votesPercentage = votes / currCity.presence;
        return { ...candidate, votes, votesPercentage };
      })
      .sort((a, b) => b.votesPercentage - a.votesPercentage)
      .map((candidate, index) => ({
        ...candidate,
        isElected: index === 0,
      }));

    setCityCandidates(candidatesByCity);
  }, [currCity, candidates, election]);

  useEffect(() => {
    (async () => {
      try {
        const retrievedCities = await getCities();
        const retrievedCandidates = await getCandidates();
        const retrievedElection = await getElection();
        setCities(retrievedCities);
        setCandidates(retrievedCandidates);
        setElection(retrievedElection);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCityChange = newId => {
    const newCurrCity = cities.find(({ id }) => id === newId);
    setCurrCity(newCurrCity);
  };

  return (
    <div>
      <Header>React elections</Header>
      <Main>
        <div className="flex justify-center p-4 m-4">
          <SelectInput
            id="city"
            name="city"
            description="Escolha o município"
            onChange={handleCityChange}
            value={currCity.id}
          >
            {cities.map(({ id, name }) => (
              <SelectOption key={id} value={id}>
                {name}
              </SelectOption>
            ))}
          </SelectInput>
        </div>
        <CityElection city={currCity}>
          <Candidates>
            {cityCandidates.map(candidate => (
              <Candidate key={candidate.id}>{candidate}</Candidate>
            ))}
          </Candidates>
        </CityElection>
      </Main>
    </div>
  );
}
