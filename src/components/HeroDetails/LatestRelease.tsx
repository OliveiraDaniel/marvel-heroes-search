import { ComicItem } from "../../types/ComicItem";
import { HyperTextThree } from "../Header/style";
import Image from "../Image";
import Link from "../Link";

export default function LatestRelease(item: ComicItem[]) {
  return (
    <>
        <HyperTextThree>ÚLTIMOS LANÇAMENTOS</HyperTextThree>
        <ul>
            {item?.map((comic: ComicItem) => (
                <Link href={comic.urls[0].url} title={comic.title} target="_blank">
                  <li key={comic.id}>
                    <Image src={`${comic.thumbnail.path}.jpg`} alt={comic.title} width={150}/>
                    <h3>{comic.title}</h3>
                  </li>
                </Link>
            ))}
        </ul>
    </>
  )

}