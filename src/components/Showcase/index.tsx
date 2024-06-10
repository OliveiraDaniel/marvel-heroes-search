import { useState } from "react";
import Search from "../Search";
import CharacterList from "./CharacterList";

export default function Showcase() {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  }
  
  return (
    <main className="showcase">
      <Search placeholder={'Procure por heróis'} onSearchChange={handleSearchChange} />
      <CharacterList searchValue={searchValue} />
    </main>
  )
}