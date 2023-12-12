import { Box, Grid } from "@mui/material";
import ContainerScreen from "../../styled-components/container-screen";
import { useEffect, useState } from "react";
import { ReactComponent as BackIcon } from "../../assets/images/back-icon.svg";
import { ReactComponent as ScanQRFrame } from "../../assets/images/scan-qr.svg";

import QrReader from "react-qr-reader-es6";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useDispatch } from "react-redux";
import { getProductsPromo } from "../../services/product.service";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const ReadQRCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const size = useWindowSize();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "QR Scanner Page",
    });
  }, []);

  const handleScan = (data) => {
    if (data) {
      const params = data.split("?");
      const storeId = params.find((el) => el.includes("storeId") && el);
      // Call to set Promotional Products for the current storeId.
      dispatch(getProductsPromo({ storeId: storeId.split("=")[1] }));
      navigate(`/cards?${storeId}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <ContainerScreen bgColor="black">
      <Grid container>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "4rem",
          }}
        >
          <BackIcon
            style={{
              position: "absolute",
              top: "-1rem",
              left: "1rem",
              zIndex: 1,
            }}
            onClick={() => navigate(-1)}
          />
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "21px",
              color: "#FFFFFF",
              width: "60%",
              textAlign: "center",
            }}
          >
            Escanea el código QR
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "18px",
              textAlign: "center",
              color: "#FFFFFF",
              width: "60%",
            }}
          >
            para abrir tu tienda y elegir los productos que quieras.
          </span>
        </Box>
        <Grid
          item
          xs={12}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <ScanQRFrame style={{}} />
          </Box>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: size.width, alignSelf: "center" }}
            showViewFinder={false}
          />
        </Grid>
      </Grid>
    </ContainerScreen>
  );
};

export default ReadQRCode;
