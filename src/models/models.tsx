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

export interface ArtistsSearch {
  href: string;
  items: Artist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface ArtistsSearchResponse {
  artists: ArtistsSearch;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: false;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface TracksSearch {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface TracksSearchResponse {
  tracks: TracksSearch;
}
