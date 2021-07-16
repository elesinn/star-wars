import { Film, Films } from '../types/Films';
import axios, { CancelTokenSource } from 'axios';

const API_URL = 'https://swapi.dev/api';
let cancelRequestToken: CancelTokenSource;

const fetchAll = (): Promise<Film[] | undefined> => {
  return axios
    .get<Films>(`${API_URL}/films`)
    .then((response) => response.data.results);
};

const fetchFilmByUrl = (url: string): Promise<Film> => {
  if (typeof cancelRequestToken != typeof undefined) {
    cancelRequestToken.cancel();
  }

  cancelRequestToken = axios.CancelToken.source();

  return axios
    .get<Film>(url, { cancelToken: cancelRequestToken.token })
    .then((response) => response.data);
};

export const filmsService = {
  fetchAll,
  fetchFilmByUrl,
};
