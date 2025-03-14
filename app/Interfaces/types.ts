export interface IContext {
  GetToken: () => Promise<void>;
  SearchForArtist:(name:string) => Promise<string>
  FetchArtist: () => Promise<IArtist>;
  FetchArtistAlbums: () => Promise<IAlbumDataResponse>;
  Fetch5MostPopularTracks: () => Promise<ITopTracksResponse>;
  PlayTrack: (contextUri:string) => Promise<void>;
  SaveAlbumToLibrary:(AlbumId:string) => Promise<void>;
  GetAlbumTracks: (id:string) => Promise<void>;
  GetLatestAlbumOrTracks:() => Promise<void>;
  SaveTrackToList:(uri:string) => Promise<void>;
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
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
export interface IFollowedArtist {
  id: string;
  artist_name: string;
  image: string;
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
  saved: boolean;
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
  IsHovered: boolean;
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
export interface ILatestRelease {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: IAlbumData[];
}

export interface IPlaylistTracksResponse {
  href: string;
  items: Array<{
    added_at: string;
    added_by: {
      external_urls: IExternalUrls;
      href: string;
      id: string;
      type: string;
      uri: string;
    };
    is_local: boolean;
    primary_color: string | null;
    track: ITrack;
    video_thumbnail: {
      url: string | null;
    };
  }>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface IArtistAlbumsResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: IAlbumData[];
}

export interface IAlbumTracksResponse {
  href: string;
  items: Array<{
    artists: IArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: IExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  }>;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface IPlaylistResponse {
  collaborative: boolean;
  description: string;
  external_urls: IExternalUrls;
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: IImage[];
  name: string;
  owner: {
    display_name: string;
    external_urls: IExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: {
      added_at: string;
      added_by: {
        external_urls: IExternalUrls;
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      is_local: boolean;
      track: ITrack;
      trackObject: {
        album: IAlbumData;
        artists: IArtist[];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: IExternalIds;
        external_urls: IExternalUrls;
        href: string;
        id: string;
        is_local: boolean;
        name: string;
        popularity: number;
        preview_url: string | null;
        track_number: number;
        type: string;
        uri: string;
      };
      video_thumbnail: {
        url: string | null;
      };
    }
  };
  type: string;
  uri: string;
}

