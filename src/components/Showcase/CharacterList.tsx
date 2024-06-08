import React, { useEffect, useState } from 'react';
import { getCharacters } from './../../services/characterApi'
import Card from './Card';
import { Character } from '../../types/Character';
import Image from '../Image';
import { LoadingGif } from './style';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters();
        setCharacters(data.data.results);
      } catch (error) {
        setError('Failed to fetch characters');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <LoadingGif><Image width={100} src="assets/loading.gif" alt="loading" /></LoadingGif>;
  }

  console.log('characters', characters)

  return (
    <ul>
        {characters.map((character) => (
            <li key={character.id} >
              <Card name={character.name} image={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
            </li>
        ))}
        </ul>
  );
};

export default CharacterList;