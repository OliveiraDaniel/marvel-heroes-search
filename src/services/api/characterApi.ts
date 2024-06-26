import axios from 'axios';
import md5 from 'crypto-js/md5';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_PUBLIC_KEY = import.meta.env.VITE_API_PUBLIC_KEY;
const API_PRIVATE_KEY = import.meta.env.VITE_API_PRIVATE_KEY;

const generateHash = (timestamp: string, privateKey: string, publicKey: string) => {
  return md5(timestamp + privateKey + publicKey).toString();
}

const generateParams = (additionalParams = {}) => {
  const timestamp = new Date().getTime().toString();
  const hash = generateHash(timestamp, API_PRIVATE_KEY, API_PUBLIC_KEY);
  
  return {
    ...additionalParams,
    ts: timestamp,
    apikey: API_PUBLIC_KEY,
    hash: hash,
  };
};

export const getCharacters = async (searchValue = '', offset = 0, limit = 20, orderBy: string) => {
  const params = generateParams({
    ...(searchValue ? { nameStartsWith: searchValue } : {}),
    offset,
    limit,
    orderBy,
  });

  const response = await axios.get(`${API_BASE_URL}${API_ENDPOINT}`, { params });
  return response.data;
}

export const getCharacterByID = async (id: string, params = {}) => {
  const response = await axios.get(`${API_BASE_URL}${API_ENDPOINT}/${id}`, {
    params: generateParams(params),
  });
  return response.data;
}

export const getComicsByCharacterID = async (id: string, params = {}) => {
  const response = await axios.get(`${API_BASE_URL}${API_ENDPOINT}/${id}/comics`, {
    params: generateParams(params),
  });
  return response.data;
}