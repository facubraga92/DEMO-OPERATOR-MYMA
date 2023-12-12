import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { BASE_URL } from "../services/utils";

import { SignalRContext } from "..";
import { SUCCEEDED } from "../constants";

const PrivateRouteProvider = ({ children, access_token }) => (
  <SignalRContext.Provider
    connectEnabled={!!access_token}
    accessTokenFactory={() => access_token}
    dependencies={[access_token]}
    url={`${BASE_URL}/storeHub`}
  >
    {children}
  </SignalRContext.Provider>
);

export const PrivateRoute = ({ children }) => {
  const { authData, authStatus } = useSelector((state) => state.auth);

  return authStatus === SUCCEEDED && authData.access_token ? (
    <PrivateRouteProvider children={children} {...authData} />
  ) : (
    <Navigate to="/auth" />
  );
};
