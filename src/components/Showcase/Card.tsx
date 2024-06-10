import Image from './../Image'
import { CardItem, TextCardButton, TextParagraph } from './style'
import { CardProps } from '../../types/CardProps'
import Link from '../Link'
import { FavoriteStyle } from './../styles'

export default function Card({name, image, id}: CardProps) {
  return (
    <Link href={`/hero/:${id}`} title={name}>
      <CardItem>
        <div className="container-image"><Image src={image} alt={name} /></div>
        <TextCardButton>
          <TextParagraph>{name}</TextParagraph>
          <FavoriteStyle />
        </TextCardButton>
      </CardItem>
    </Link>
  )
}
