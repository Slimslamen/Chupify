
export interface IContext {
  GetToken: () => Promise<void>;
  SearchForArtist:(name:string) => Promise<string>
  FetchArtist: () => Promise<IArtist>;
  FetchArtistAlbums: () => Promise<IAlbumDataResponse>;
  Fetch5MostPopularTracks: () => Promise<ITopTracksResponse>;
  PlayTrack: (contextUri:string) => Promise<void>;
  SaveAlbumToLibrary:(AlbumId:string) => Promise<void>;
  setArtist: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
  Artist: IArtist | undefined;
  setAlbums: React.Dispatch<React.SetStateAction<IAlbumDataResponse | undefined>>;
  Albums: IAlbumDataResponse | undefined;
  Tracks: ITrack[] | undefined;
  setTracks: React.Dispatch<React.SetStateAction<ITrack[] | undefined>>;
  SearchedArtist: string | undefined;
  setSearchedArtist: React.Dispatch<React.SetStateAction<string | undefined>>;
  Token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
  addToList: boolean;
  setAddToList: React.Dispatch<React.SetStateAction<boolean>>
}
export interface FollowedArtist {
  created: string; // Timestamp when the artist was followed
  artist_name: string;
  artist_Id: string;
  artist_Uri: string;
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
  IsHovered: boolean
}
export interface ISearchResponse {
  artists: {
    href: string;
    items: IArtist[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}
export interface IExternalIds {
  isrc: string;
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

