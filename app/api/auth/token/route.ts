import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const cookieHeader = req.headers.get("cookie");
    const accessToken = cookieHeader?.split("; ").find(row => row.startsWith("access_token="))?.split("=")[1];

    const data = { access_token: accessToken }
    //console.log("!!!!!!!FETCHED TOKEN!!!!!!!", refreshToken)
    if (!accessToken) {
        return NextResponse.json({ error: "No token found" }, { status: 401 });
    }

    return NextResponse.json(data, { status: 200 });
}