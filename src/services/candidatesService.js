import httpService from './httpService';

export async function getCandidates() {
  const { data } = await httpService.get('/candidates');
  return data;
}
