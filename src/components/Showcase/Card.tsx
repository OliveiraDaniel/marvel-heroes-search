import { useState, useEffect } from 'react';
import Image from './../Image';
import { CardItem, TextCardButton, TextParagraph } from './style';
import { CardProps } from '../../types/CardProps';
import Link from '../Link';
import { FavoriteStyle } from './../styles';

export default function Card({ name, image, id }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favoriteHeroes = JSON.parse(localStorage.getItem('favoriteHeroes') || '[]');
    setIsFavorite(favoriteHeroes.includes(id.toString()));
  }, [id]);

  const handleToggleFavorite = () => {
    const favoriteHeroes = JSON.parse(localStorage.getItem('favoriteHeroes') || '[]');
    const updatedFavoriteHeroes = [...favoriteHeroes, id];
    localStorage.setItem('favoriteHeroes', JSON.stringify(updatedFavoriteHeroes));
    setIsFavorite(!isFavorite);
    console.log('favoriteHeroes', favoriteHeroes)
  };

  return (
    <Link href={`/hero/:${id}`} title={name}>
      <CardItem>
        <div className="container-image"><Image src={image} alt={name} /></div>
        <TextCardButton>
          <TextParagraph>{name}</TextParagraph>
          <FavoriteStyle isFavorite={isFavorite} onClick={handleToggleFavorite} />
        </TextCardButton>
      </CardItem>
    </Link>
  );
}