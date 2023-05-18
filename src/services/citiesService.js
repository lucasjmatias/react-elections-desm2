import httpService from './httpService';

export async function getCities() {
  const { data } = await httpService.get('/cities');
  return data;
}
