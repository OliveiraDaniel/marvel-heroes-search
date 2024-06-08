import { getCharacters } from './characterApi'

export const fetchCharacters = async () => {
  try {
    const data = await getCharacters()
    return data.data.results
  } catch (error) {
    throw new Error('Failed to fetch characters')
  }
};