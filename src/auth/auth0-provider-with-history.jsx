import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
//import { useHistory } from "react-router-dom";

export const Auth0ProviderWithHistory = ({ children }) => {
  //const history = useHistory();

  const domain = 'dev-24upghbcyzi6pe71.us.auth0.com';
  const clientId = "7UrthEKe8y9bsQPZvjTKdiRFOGzpJpku";
  //   const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  //   const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = window.location.redirectUri;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}