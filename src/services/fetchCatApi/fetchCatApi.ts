import axios from 'axios';
import { CATS_API_URL } from './constants';
import { ICatApiResponse } from './types';

export const fetchCatApi = async () => {
  const {
    data: [{ url: cardImage }],
  } = await axios.get<ICatApiResponse[]>(CATS_API_URL);

  return cardImage;
};
