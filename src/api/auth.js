import {
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE,
} from './const';

const searchParams = new URLSearchParams('');

searchParams.append('client_id', CLIENT_ID);
searchParams.append('response_type', RESPONSE_TYPE);
searchParams.append('state', RANDOM_STRING);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('scope', SCOPE);

export const urlAuth = `${URL_AUTH}${searchParams.toString()}`;

// console.log('urlAuth: ', urlAuth);


// https://www.reddit.com/api/v1/authorize?client_id=CLIENT_ID&response_type=TYPE&state=RANDOM_STRING&redirect_uri=URI&scope=SCOPE_STRING

// http://localhost:3000/auth#access_token=2056957797056-6yC6ZKIt0yk_hxtVwUXZmmcTbahqGQ&token_type=bearer&state=random_string&expires_in=86400&scope=read+submit+identity

// http://localhost:3000/auth#access_token=2056957797056-6k3drWInbNgCEGy0-jcNZak8Ahb-LQ&token_type=bearer&state=random_string&expires_in=86400&scope=read+submit+identity
