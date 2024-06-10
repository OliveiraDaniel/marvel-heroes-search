import React, { useEffect, useState } from 'react';
import { getCharacters } from './../../services/api/characterApi';
import Card from './Card';
import { Character } from '../../types/Character';
import { LoadingGif } from './../styles';
import { HyperTextTwo } from '../Header/style';

interface CharacterListProps {
  searchValue: string;
}

const CharacterList = ({ searchValue }: CharacterListProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const data = await getCharacters(searchValue);
        setCharacters(data.data.results);
      } catch (error) {
        setError('Não encontramos nenhum personagem');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchValue])

  if (loading) {
    return <LoadingGif />;
  }

  if (error) {
    return <HyperTextTwo>{error}</HyperTextTwo>;
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <Card
            id={character.id}
            name={character.name}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;