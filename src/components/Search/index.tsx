import React, { useState } from 'react';
import { getCharacters } from './../../services/api/characterApi';
import { SearchProps } from "../../types/SearchProps";
import { Input } from "./style";

export default function Search({ placeholder, onSearchChange }: SearchProps) {
  const [searchValue, setSearchValue] = useState('')

  const handleInputChange = (event: any) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    if (newValue.length > 3 && onSearchChange) {
      onSearchChange(newValue);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await getCharacters(searchValue)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="search">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        onSubmit={handleSearch}
      />
    </div>
  )
}