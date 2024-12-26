export interface IContext{
    FetchArtist: (Token:IToken) => Promise<IArtist>;
    FetchArtistAlbums: (Token:IToken) => Promise<IAlbumData[]>;
    setArtist: React.Dispatch<React.SetStateAction<IArtist | undefined>>;
    Artist: IArtist | undefined;
    setAlbums: React.Dispatch<React.SetStateAction<IAlbumData[] | undefined>>;
    Albums: IAlbumData[] | undefined
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