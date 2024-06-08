import Image from './../Image'
import { CardItem, TextCardButton, TextParagraph } from './style'
import { CardProps } from '../../types/CardProps'
import Link from '../Link'

export default function Card({name, image}: CardProps) {
  return (
    <Link href={`/hero?id=123`} title={name}>
      <CardItem>
        <div className="container-image"><Image src={image} alt={name} /></div>
        <TextCardButton>
          <TextParagraph>{name}</TextParagraph>
          <button></button>
        </TextCardButton>
      </CardItem>
    </Link>
  )
}
