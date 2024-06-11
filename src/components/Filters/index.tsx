import { useState } from "react";
import { Character } from "../../types/Character";
import Image from "../Image";
import { StyledFilters } from "./styles";

type ContainerFiltersProps = {
  available: string;
  orderBy: string;
  heroes: Character[]
  setOrderBy: React.Dispatch<React.SetStateAction<string>>
  setFilteredHeroes: React.Dispatch<React.SetStateAction<any[]>>
};

export default function ContainerFilters({ available, orderBy, setOrderBy, heroes, setFilteredHeroes }: ContainerFiltersProps) {
  const [active, setActive] = useState<boolean>(false)
  const toggleOrderBy = () => {
    setOrderBy(orderBy === 'name' ? '-name' : 'name');
  }

  const filterFavorites = (active:boolean) => {
    setActive(!active)
    const favoriteHeroes = JSON.parse(localStorage.getItem('favoriteHeroes') || '[]')
    const filteredHeroes = heroes.filter(hero => favoriteHeroes.includes(hero.id.toString()))
    setFilteredHeroes(active ? heroes : filteredHeroes)
  }

  return (
    <StyledFilters>
      <div className="total-heroes">
        {`Encontrados ${available} heróis`}
      </div>
      <div className="order-heroes" onClick={toggleOrderBy}>
        <Image src="/assets/ic_heroi.svg" alt="icone-heroi" />
        <span>Ordenar por nome - AZ</span>
        <Image src={`/assets/toggle_${orderBy === 'name' ? 'on' : 'off'}.svg`} alt="toggle" />
      </div>
      <div className="favorite-only" onClick={()=>{filterFavorites(active)}}>
        <Image src="/assets/favorito_01.svg" alt="toggle" />
        <span>Somente Favoritos</span>
      </div>
    </StyledFilters>  
  );
}
