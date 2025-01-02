
export async function Token() {
  const clientId:string = "b27e34422d36480d98024631a9b2bc17";
  const clientSecret:string = "8c7c072e89d44197a669b8a6b1c24be8";
 
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: clientId,
          client_secret: clientSecret,
          scope: "user-library-modify user-modify-playback-state"
        }).toString() // `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
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
