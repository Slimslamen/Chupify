import { access } from "fs";
import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

async function refreshAccessToken(token: any){
  const Token = localStorage.getItem("token");

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: Token || "",
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

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/'
  },
  callbacks: {
    async jwt({ token, account, user }: { token: any, account: any, user: any }) {
      // Persist the OAuth access_token to the token right after signin
      if (account && user) {
        token.accessToken = account.access_token,
        token.refreshToken = account.refresh_token,
        token.accessTokenExpires = account.expires_in * 1000
      }
      if(Date.now() < token.accessTokenExpires)
       {
        console.log("Token is still valid")
         return token
       }
       console.log("Token is expired")
       return await refreshAccessToken(token)
    },
    async session({ session, token }: { session: any, token: any }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.accessToken = token.accessToken
      session.user.refresh_token = token.refresh_token
      return session
    }
  }
}

export default NextAuth(authOptions)