import { cookies } from "next/headers";

export async function SetCookies(Token: any){
    console.log(":)"+Token)
    localStorage.setItem("access_token", Token.access_token);
    localStorage.setItem("refresh_token", Token.refresh_token);
    // 'use server'
    // const CookieStore = await cookies();

    // CookieStore.set("access_token", Token.access_token, { path: "/", httpOnly: true, maxAge: Token.expires_in });
    // CookieStore.set("refresh_token", Token.refresh_token, { path: "/", httpOnly: true });
  }