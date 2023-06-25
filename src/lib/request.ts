import axios from 'axios';
import { MAIN_URL } from '../constant';

export const getRequest = async (url: string): Promise<any> => {
  const response = await axios(MAIN_URL + url);
  return response.data;
};
