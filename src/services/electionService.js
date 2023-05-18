import httpService from './httpService';

export async function getElection() {
  const { data } = await httpService.get('/election');
  return data;
}
