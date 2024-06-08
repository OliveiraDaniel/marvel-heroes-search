import { SearchProps } from "../../types/SearchProps";
import { Input } from "./style"

export default function Search({ placeholder, value }: SearchProps) {
  return (
    <div className="search">
      <Input type="text" placeholder={placeholder} />
    </div>
  )
}
