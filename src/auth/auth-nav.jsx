import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../components/buttons/login-button";
import { LogoutButton } from "../components/buttons/logout-button";
import { SignupButton } from "../components/buttons/signup-button";

export const MobileNavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};