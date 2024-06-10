type Url = {
  type: string;
  url: string;
};

type Series = {
  resourceURI: string;
  name: string;
};

type DateType = {
  type: string;
  date: string;
};

type Price = {
  type: string;
  price: number;
};

type Thumbnail = {
  path: string;
  extension: string;
};

type Image = {
  path: string;
  extension: string;
};

type CreatorItem = {
  resourceURI: string;
  name: string;
  role: string;
};

type Creators = {
  available: number;
  collectionURI: string;
  items: CreatorItem[];
  returned: number;
};

type CharacterItem = {
  resourceURI: string;
  name: string;
};

type Characters = {
  available: number;
  collectionURI: string;
  items: CharacterItem[];
  returned: number;
};

type StoryItem = {
  resourceURI: string;
  name: string;
  type: string;
};

type Stories = {
  available: number;
  collectionURI: string;
  items: StoryItem[];
  returned: number;
};

type Events = {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
};

export type ComicItem = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: DateType[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}