import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import {REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID} from './../../vars'

export const Auth0ProviderWithHistory = ({ children }) => {

  const domain = REACT_APP_AUTH0_DOMAIN;
  const clientId = REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = window.location.redirectUri;

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