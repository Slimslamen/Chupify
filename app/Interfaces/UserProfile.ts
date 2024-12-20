export interface IUserProfile {
    country: string;
    display_name: string;
    email: string;
    explicit_content: {
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
