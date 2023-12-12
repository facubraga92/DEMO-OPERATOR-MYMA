import { createAsyncThunk } from "@reduxjs/toolkit";
import Oidc from "oidc-client";

const config = {
  authority: process.env.REACT_APP_AUTHORITY,
  client_id: process.env.REACT_APP_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  response_type: "code",
  scope: "openid profile email Myma.Api offline_access",
  post_logout_redirect_uri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI,
};

// Create only one unique instance of Oidc.UserManager
const auth = new Oidc.UserManager(config);

// Error handler function
const handleErrors = (error) => {
  // console.error("Error:", error); *TODO Research and fix errors.*
};

export const authSignIn = () => {
  try {
    auth.signinRedirect();
  } catch (error) {
    handleErrors(error);
  }
};

export const authLogout = () => {
  try {
    auth.signoutRedirect();
  } catch (error) {
    handleErrors(error);
  }
};

export const authCallback = createAsyncThunk("auth/authCallback", async () => {
  try {
    const response = await new Oidc.UserManager({
      response_mode: "query",
    }).signinRedirectCallback();
    return JSON.stringify(response);
  } catch (error) {
    handleErrors(error);
    throw error;
  }
});
