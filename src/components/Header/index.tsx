import Image from './../Image'
import { HyperTextTwo, HyperTextThree } from './style'

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 title="MARVEL HEROES">
          <Image src="/assets/logo.svg" alt="Logo Marvel Heroes" />
        </h1>
        <HyperTextTwo>EXPLORE O UNIVERSO</HyperTextTwo>
        <HyperTextThree>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</HyperTextThree>
      </header>
    </>
  )
}