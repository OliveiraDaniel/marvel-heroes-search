import { useParams } from 'react-router-dom';
import { HyperTextTwo } from '../Header/style';
import Image from '../Image';
import { useEffect, useState } from 'react';
import { fetchCharactersById } from '../../services/api/getCharacterById';
import { LoadingGif, StrongText } from '../styles';
import { Character } from '../../types/Character';
import FavoriteIcon from '../FavoriteIcon';
import {
  ContainerDescription,
  ContainerImage,
  ContainerInfo,
  ContainerLastComics,
  ContainerLastHq,
  ContainerName,
  ContainerRatings,
  HeroDetailContainer,
} from './style';
import LatestRelease from './LatestRelease';
import { fetchComicsById } from '../../services/api/getComics';
import { ComicItem } from '../../types/ComicItem';

export default function HeroDetails() {
  const { id } = useParams();
  const [hero, setHero] = useState<Character>();
  const [comics, setComics] = useState<ComicItem[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const heroData = await fetchCharactersById(id as string);
        const comicsData = await fetchComicsById(id as string);
        setHero(heroData);
        setComics(comicsData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch hero details:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchHeroDetails();
    }
  }, [id]);

  if (loading) {
    return <LoadingGif />;
  }

  const generateRatings = (max: number) => {
    return Array.from({ length: max }, (_, index) => (
      <li key={index}>
        <Image src={'/assets/avaliacao_off.svg'} alt="avaliação" />
      </li>
    ));
  };

  const maxNumberInsideParentheses = hero?.comics.items
    .flatMap((comic) => {
      const matches = comic.name.match(/\((\d{4})\)/g);
      return matches ? matches : [];
    })
    .map((match) => parseInt(match.slice(1, -1)))
    .reduce((max, number) => Math.max(max, number), 0);

  return (
    <>
      <HeroDetailContainer>
        <ContainerName>
          <HyperTextTwo>{hero?.name}</HyperTextTwo>
          <FavoriteIcon />
        </ContainerName>
        <ContainerDescription>
          <p>
            {hero?.description
              ? hero?.description
              : 'Não encontramos nenhuma descrição para esse herói'}
          </p>
        </ContainerDescription>
        <ContainerInfo>
          <div className="hq">
            <StrongText>Quadrinhos</StrongText>
            <div className="container-image-qty">
              <Image src="/assets/ic_quadrinhos.svg" alt="Icone quadrinhos" />
              <span>{hero?.comics.available || 0}</span>
            </div>
          </div>
          <div className="movies">
            <StrongText>Filmes</StrongText>
            <div className="container-image-qty">
              <Image src="/assets/ic_trailer.svg" alt="Icone quadrinhos" />
              <span>{hero?.series.items.length || 0}</span>
            </div>
          </div>
        </ContainerInfo>
        <ContainerRatings>
          <StrongText>Rating:</StrongText>
          <ul>{generateRatings(5)}</ul>
        </ContainerRatings>
        <ContainerLastHq>
          <StrongText>Ultimo quadrinho:</StrongText>
          <span>{maxNumberInsideParentheses}</span>
        </ContainerLastHq>
      </HeroDetailContainer>
      <ContainerImage>
        <Image
          src={
            `${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}` as string
          }
          alt={hero?.name as string}
          width={550}
        />
      </ContainerImage>
      <ContainerLastComics>
        {LatestRelease(comics as any)}
      </ContainerLastComics>
    </>
  );
}