import Image from './../Image'
import { CardItem, TextCardButton } from './style'

export default function Card() {
  return (
    <CardItem>
      <Image width={185} src="/assets/star-lord.jpg" alt="star-lord" />
      <TextCardButton>
        <p>Star-lord</p>
        <button></button>
      </TextCardButton>
    </CardItem>
  )
}
