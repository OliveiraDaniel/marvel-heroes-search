import { getCharacterByID } from './characterApi'

export const fetchCharactersById = async (id: string) => {
  console.log('idididid', id)
  try {
    const data = await getCharacterByID(id)
    return data.data.results[0]
  } catch (error) {
    throw new Error('Failed to fetch characters')
  }
}