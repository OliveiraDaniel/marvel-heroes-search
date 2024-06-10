import { getComicsByCharacterID } from './characterApi'

export const fetchComicsById = async (id: string) => {
  try {
    const data = await getComicsByCharacterID(id)
    return data.data.results
  } catch (error) {
    throw new Error('Failed to fetch Comics')
  }
};