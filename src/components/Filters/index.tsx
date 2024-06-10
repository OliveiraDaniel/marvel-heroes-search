import Image from "../Image";
import { StyledFilters } from "./styles";

type ContainerFiltersProps = {
  available: string;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
};

export default function ContainerFilters({ available, orderBy, setOrderBy }: ContainerFiltersProps) {
  const toggleOrderBy = () => {
    setOrderBy(orderBy === 'name' ? '-name' : 'name');
  };

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
      <div className="favorite-only">
        <Image src="/assets/favorito_01.svg" alt="toggle" />
        <span>Somente Favoritos</span>
      </div>
    </StyledFilters>  
  );
}
