import { config } from '@/config';
import axios from 'axios';

export const getAsync = <T>(endpoint: string): Promise<T> =>
  new Promise((resolve, reject) => axios.get<T>(config.API_URL + endpoint).then(res => resolve(res.data)).catch(reject));