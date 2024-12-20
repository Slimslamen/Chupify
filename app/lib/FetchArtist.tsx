import { IToken } from "../Interfaces/UserProfile";

export async function FetchArtist({ access_token, expires_in, token_type  }: IToken) {
  const response = await fetch(`https://open.spotify.com/artist/6qxpnaukVayrQn6ViNvu9I?si=KCc82mAfS_KZttYqhsp6Rw`, {
    method: "GET",
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    console.log(expires_in);
    return data;
  } else if (!response.ok) {
    return response.status;
  }
}
