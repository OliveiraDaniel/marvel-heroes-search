import { FavoriteStyle } from "./styles"

interface FavoriteButtonProps {
  onClick?: () => void;
  isFavorite: boolean;
}

export default function FavoriteButton({onClick, isFavorite}: FavoriteButtonProps) {
  return (
    <FavoriteStyle onClick={onClick} isFavorite={isFavorite}/>
  )
}