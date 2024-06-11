import React, { useState } from 'react';
import { SearchProps } from "../../types/SearchProps";
import { Input } from "./style";

interface SearchComponentProps extends SearchProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default function Search({ placeholder, setSearchValue }: SearchComponentProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: any) => {
    const newValue = event.target.value
    setInputValue(newValue)
    if (newValue.length > 3 || newValue.length === 0) {
      setSearchValue(newValue);
    }
  };

  return (
    <div className="search">
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  )
}