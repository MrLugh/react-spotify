export interface Image {
  heigth: number;
  width: number;
  url: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface ExternalUrl {
  key: string;
  value: string;
}

export interface UserLogged {
  birthdate: string;
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalUrl[];
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrl[];
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ArtistSearch {
  href: string;
  items: Artist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ArtistSearchResponse {
  artists: ArtistSearch
}
