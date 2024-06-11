import React, { useEffect, useState } from 'react';
import { getCharacters } from './../../services/api/characterApi';
import Card from './Card';
import { Character } from '../../types/Character';
import { LoadingGif } from './../styles';
import { HyperTextTwo } from '../Header/style';
import { PaginationButton } from './style';
import ContainerFilters from '../Filters';

interface CharacterListProps {
  searchValue: string;
}

const CharacterList = ({ searchValue }: CharacterListProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<string>('name')
  const limit = 20;

  const fetchCharacters = async (searchValue: string, page: number, orderBy: string) => {
    try {
      setLoading(true);
      const offset = page * limit;
      const data = await getCharacters(searchValue, offset, limit, orderBy);
      setCharacters(data.data.results);
      setFilteredCharacters(data.data.results)
      setTotal(data.data.total);
    } catch (error) {
      setError('Não encontramos nenhum personagem');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(searchValue, page, orderBy);
  }, [searchValue, page, orderBy]);

  if (loading) {
    return <LoadingGif />;
  }

  if (error) {
    return <HyperTextTwo>{error}</HyperTextTwo>;
  }

  const handleNextPage = () => {
    if ((page + 1) * limit < total) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <ContainerFilters available={characters.length.toString()} orderBy={orderBy} setOrderBy={setOrderBy} heroes={characters} setFilteredHeroes={setFilteredCharacters}/>
      <ul>
        {filteredCharacters.map((character) => (
          <li key={character.id}>
            <Card
              id={character.id}
              name={character.name}
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          </li>
        ))}
      </ul>
      <div className="button-pages">
        <PaginationButton className="left" onClick={handlePreviousPage} disabled={page === 0} />
        <PaginationButton className="right" onClick={handleNextPage} disabled={(page + 1) * limit >= total} />
      </div>
    </>
  );
};

export default CharacterList;
