import axios from 'axios'
import md5 from 'crypto-js/md5'

const API_BASE_URL = 'https://gateway.marvel.com'
const API_PUBLIC_KEY = '3c8aeda1b3d22a6171c33125ae79135c'
const API_PRIVATE_KEY = '8d08d9050fa688e47a493b99a33f80bd39846dd0'
const API_ENDPOINT = '/v1/public/characters'

const generateHash = (timestamp: string, privateKey: string, publicKey: string) => {
  return md5(timestamp + privateKey + publicKey).toString()
}

export const getCharacters = async (params = {}) => {
  const timestamp = new Date().getTime().toString()
  const hash = generateHash(timestamp, API_PRIVATE_KEY, API_PUBLIC_KEY)

  try {
    const response = await axios.get(`${API_BASE_URL}${API_ENDPOINT}`, {
      params: {
        ...params,
        ts: timestamp,
        apikey: API_PUBLIC_KEY,
        hash: hash,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}