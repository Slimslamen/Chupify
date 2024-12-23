export interface IUserProfile {
    country?: string;
    display_name?: string;
    email?: string;
    explicit_content?: {
        filter_enabled: boolean,
        filter_locked: boolean
    },
    external_urls: { spotify: string; };
    followers: { href: string; total: number; };
    href: string;
    id: string;
    images: IPic[];
    product: string;
    type: string;
    uri: string;
}
export interface IArtist {
    external_urls: { spotify: string },
    followers: { href: string; total: number; };
    genres: string;
    href : string;
    id: string;
    images: IPic[];  
    name : string;
    popularity : number,
    type: string;
    uri: string;
}

export interface IToken{
    access_token: string;
    expires_in: number;
    token_type: string;
  }
export interface IPic {
    url: string;
    height: number;
    width: number;
}
export interface IContext{
    FetchArtist: (Token:IToken) => Promise<IArtist>;
    setArtist: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
    Artist: IArtist | undefined;
}

export interface ISpotifyResponse {
  tracks: ITrack[];
}

export interface ITrack {
  album: IAlbum;
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
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

export interface IAlbum {
  album_type: string;
  artists: IArtist[];
  available_markets: string[];
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: IImage[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface IExternalIds {
  isrc: string;
}

export interface IExternalUrls {
  spotify: string;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}