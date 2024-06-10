import { getCharacterByID } from './characterApi'

export const fetchCharactersById = async (id: string) => {
  try {
    const data = await getCharacterByID(id.split(':')[1])
    return data.data.results[0]
  } catch (error) {
    throw new Error('Failed to fetch characters')
  }
};