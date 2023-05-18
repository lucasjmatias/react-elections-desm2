import axios from 'axios';

const baseURL = 'http://localhost:3001';
const httpService = axios.create({
  baseURL,
});

export default httpService;
