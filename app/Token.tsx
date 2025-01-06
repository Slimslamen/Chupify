
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

export async function POST(){

}