export interface IContext{
    FetchArtist: (Token:string) => Promise<IArtist>;
    FetchArtistAlbums: (Token:string) => Promise<IAlbumDataResponse>;
    RefreshToken: (Token: string) => Promise<any>;
    setArtist: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
    Artist: IArtist | undefined;
    setAlbums: React.Dispatch<React.SetStateAction<IAlbumDataResponse | undefined>>;
    Albums: IAlbumDataResponse | undefined
}
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
export interface IPic {
    url: string;
    height: number;
    width: number;
}
export interface IExternalUrls {
  spotify: string;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
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