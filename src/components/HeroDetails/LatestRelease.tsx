import { ComicItem } from "../../types/ComicItem";
import { HyperTextThree } from "../Header/style";
import Image from "../Image";

export default function LatestRelease(item: ComicItem[]) {
  return (
    <>
        <HyperTextThree>ÚLTIMOS LANÇAMENTOS</HyperTextThree>
        <ul>
            {item?.map((comic: ComicItem) => (
                <li key={comic.id}>
                <Image src={`${comic.thumbnail.path}.jpg`} alt={comic.title} width={150}/>
                <h3>{comic.title}</h3>
                </li>
            ))}
        </ul>
    </>
  )

}