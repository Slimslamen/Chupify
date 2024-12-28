export interface IContext {
  FetchArtist: () => Promise<IArtist>;
  FetchArtistAlbums: () => Promise<IAlbumDataResponse>;
  Fetch5MostPopularTracks: () => Promise<ITopTracksResponse>;
  RefreshToken: () => Promise<IRefreshToken>;
  setArtist: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
  Artist: IArtist | undefined;
  setAlbums: React.Dispatch<React.SetStateAction<IAlbumDataResponse | undefined>>;
  Albums: IAlbumDataResponse | undefined;
  Tracks: ITrack[] | undefined;
  setTracks: React.Dispatch<React.SetStateAction<ITrack[] | undefined>>
}
export interface IRefreshToken {
  access_token: string;
  token_type: string;
  expires_in?: number;
  refresh_token: string;
  scope?: string;
}
export interface IArtist {
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  genres: string;
  href: string;
  id: string;
  images: IPic[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
export interface IAlbumData {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: IImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: IArtist[];
  album_group: string;
}
export interface IAlbumDataResponse {
  href: string;
  items: IAlbumData[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}
export interface IExternalUrls {
  spotify: string;
}
export interface IPic {
  url: string;
  height: number;
  width: number;
}

export interface ITopTracksResponse {
  tracks: ITrack[];
}

export interface ITrack {
  album: IAlbumData;
  artists: IArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids?: IExternalIds;
  external_urls?: IExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

export interface IExternalIds {
  isrc: string;
}
