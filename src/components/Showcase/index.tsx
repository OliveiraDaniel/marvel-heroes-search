import Search from "../Search";
import CharacterList from "./CharacterList";

export default function Showcase() {
  return (
    <>
      <main className="showcase">
        <Search placeholder={'Procure por heróis'} />
        <CharacterList />
      </main>
    </>
  )
}