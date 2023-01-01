import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

export const Auth0ProviderWithHistory = ({ children }) => {

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = window.location.origin;
  const onRedirectCallback = (appState) => {
    useNavigate().push(appState?.returnTo || window.location.pathname);
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