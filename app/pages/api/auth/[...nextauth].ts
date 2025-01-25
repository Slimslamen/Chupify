import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

async function RequestAccessToken(token: any){
  const Token = localStorage.getItem("token");
  if (!process.env.NEXT_PUBLIC_CLIENT_ID || !process.env.NEXT_PUBLIC_CLIENT_SECRET) {
    throw new Error("Missing Spotify Client ID or Secret");
}
if (!token.refreshToken) {
    throw new Error("Missing refresh token");
}

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: Token!,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      }),
    })
    if(response.ok){
        const data = (await response.json());
        console.log("Refresh Token" + data.refresh_token)
        console.log("Token" + data.access_token)
        return {
          ...token,
          accessToken: data.access_token,
          refreshToken: data.refresh_token ?? token.refreshToken,
          accessTokenExpires: data.expires_in * 1000
        }
    }
    else if(!response.ok)
    {
      return {
        ...token,
        error: "RefreshAccessTokenError"
      }
    }
}

const scopes = [
    "user-library-modify",
    "playlist-modify-private",
    "playlist-modify-public",
    "streaming",
    "user-read-email",
].join(',')

const params = {
    scope: scopes
}

const queryParams = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, user }: { token: any, account: any, user: any }) {
      
      if (account && user) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at*1000;
      }
      // if(Date.now() < token.accessTokenExpires)
      //  {
      //   console.log("Token is still valid")
      //    return token
      //  }
      //  console.log("Token is expired")
      //  return await refreshAccessToken(token)
    },
    async session({ session, token }: { session: any, token: any }){
        session.user.access_token = token.accessToken;
        session.refresh_token = token.refresh_token;
        return session;
    }
  }
}

export default NextAuth(authOptions)