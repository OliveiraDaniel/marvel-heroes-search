import { getCharacters } from './characterApi'

export const fetchCharacters = async (searchValue = '', offset = 0, limit = 20, orderBy = 'name') => {
  try {
    const data = await getCharacters(searchValue, offset, limit, orderBy);
    return data.data.results;
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
}