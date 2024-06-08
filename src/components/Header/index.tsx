import Link from '../Link'
import Image from './../Image'
import { HyperTextTwo, HyperTextThree } from './style'

export default function Header() {
  return (
    <>
      <header className="header">
        <h1 title="MARVEL HEROES">
          <Link href="/" title="Marvel Search Heroes"><Image src="/assets/logo.svg" alt="Logo Marvel Heroes" /></Link>
        </h1>
        <HyperTextTwo>EXPLORE O UNIVERSO</HyperTextTwo>
        <HyperTextThree>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</HyperTextThree>
      </header>
    </>
  )
}