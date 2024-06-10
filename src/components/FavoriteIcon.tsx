import { FavoriteStyle } from "./styles"

export default function FavoriteButton() {
  return (
    <FavoriteStyle onClick={()=> {console.log('click')}} />
  )
}