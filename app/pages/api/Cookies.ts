// 'use server'
// import { cookies } from "next/headers";

// export default async function SetCookies(Token: any) {
//     const CookieStore = await cookies();
//     CookieStore.set("access_token", Token.access_token, { path: "/", httpOnly: true, maxAge: Token.expires_in });
//     CookieStore.set("refresh_token", Token.refresh_token, { path: "/", httpOnly: true });
// }
// export async function AccessCookies() {
//     const CookieStore = await cookies();
//     const refreshToken = CookieStore.get("refresh_token");
//     console.log("Refresh token: ", refreshToken);
//     if (refreshToken) {
//         return refreshToken;
//     } else {
//       console.error("Refresh token is undefined");
//     }
//   } 

 export async function fetchToken(){
        const response = await fetch("/api/auth/callback", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log("data",data);
      }