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
              <Link key={comic.id} href={comic.urls[0].url} title={comic.title} target="_blank">
                <li>
                  <Image src={`${comic.thumbnail.path}.jpg`} alt={comic.title} width={150}/>
                  <span>{comic.title}</span>
                </li>
              </Link>
          ))}
      </ul>
    </>
  )
}