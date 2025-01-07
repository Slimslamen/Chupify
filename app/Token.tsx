
export async function Token() {

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string;
   const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET as string;
 
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
        // new URLSearchParams({
        //   grant_type: "client_credentials",
        //   client_id: clientId,
        //   client_secret: clientSecret,
        // }).toString()
    })
    if(response.ok){
        const data = (await response.json());
        localStorage.setItem("token", data.access_token)
        return data
    }
    else if(!response.ok)
    {
      return response.status;
    }
}

 export async function NavigateToSpotifyAuth(e: any) {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID as string;
    e.preventDefault();
    const params = {
      client_id: clientId!,
      response_type: "code",
      redirect_uri: "http://localhost:3000/pages/index",
      scope: "user-library-modify user-modify-playback-state playlist-modify-private",
    };
    const queryParam = new URLSearchParams(params).toString()

    const Url = `https://accounts.spotify.com/authorize?${queryParam}`;
    const response = await fetch(Url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    });
    if (response.ok) {
      console.log("Url", Url)
    } else {
      throw new Error(`Error fetching artist albums: ${response.status}`);
    }
    console.log(Url);
  }