import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import AppRoutes from "./AppRoutes";

import { getCustomer } from "./services/customer.service";
import { authCallback, authSignIn } from "./services/auth.service";

import { IDLE, SUCCEEDED } from "./constants";
import Loading from "./components/loading/loading.component";
import { setAuthToken } from "./services/utils";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-2W58B2J6ZQ";
ReactGA.initialize(TRACKING_ID);


const searchParams = new URLSearchParams(window.location.search);
const storeId = searchParams.get("storeId");
const localStoragedStoreId = localStorage.getItem("storeId");

if (
  !localStoragedStoreId ||
  (storeId !== localStoragedStoreId && storeId !== null && storeId !== "")
) {
  localStorage.setItem("storeId", storeId);
}


export const Auth = () => {
  useEffect(() => {
    const asyncSignIn = async () => await authSignIn();

    asyncSignIn();
  }, []);

  return <Loading />;
};

export const Callback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authStatus, authData } = useSelector((state) => state.auth);
  const { customerStatus, customerData } = useSelector(
    (state) => state.customer
  );

  useEffect(() => {
    if (authStatus === IDLE) {
      dispatch(authCallback());
    }
    if (authStatus === SUCCEEDED) {
      setAuthToken(authData);
      dispatch(getCustomer());
    }
  }, [dispatch, authStatus, authData]);

  useEffect(() => {
    if (customerStatus === SUCCEEDED) {
      if (customerData == null) {
        navigate("/create-account");
      } else {
        navigate("/home");
      }
    }
  }, [navigate, customerStatus, customerData]);

  // im still getting customerData = null , i think our own DB is not creating a customer with the OIDC payload.
  return <Loading />;
};

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <AppRoutes />
    </Box>
  );
};

export default App;
