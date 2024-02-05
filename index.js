import * as fetch from "node-fetch";

const client_id = "sTerq36XSKAk21RCp40FU0NSXhyKAHIo";
const client_secret = "Q4GRpGAOFjWQPZ21";
const redirect_uri = "https://dexcom-api.onrender.com/callback";
const auth_code = "ae2d9c3cd219230c1bbba71316b3ff5c";
const token_url = "https://sandbox-api.dexcom.com/v2/oauth2/token";

const data = new URLSearchParams({
  grant_type: "authorization_code",
  code: auth_code,
  redirect_uri: redirect_uri,
});

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${Buffer.from(
      `${client_id}:${client_secret}`
    ).toString("base64")}`,
  },
  body: data.toString(),
};

fetch(token_url, options)
  .then((response) => response.json())
  .then((data) => {
    console.log(`Access Token: ${data.access_token}`);
    console.log(`Refresh Token: ${data.refresh_token}`);
  })
  .catch((error) => {
    console.error(error);
  });
