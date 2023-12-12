import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import PurchaseAccordion from "../../components/accordion/accordion.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../services/order.service";
import ReactGA from "react-ga4";

const Purchases = () => {
  const dispatch = useDispatch();
  const [expandedID, setExpanded] = useState(false);

  const { ordersData } = useSelector((state) => state.order);
  const results = ordersData?.results || [];

  const {
    authData: { access_token },
  } = useSelector((state) => state.auth);

  const handleChange = (id) => {
    setExpanded(id);
    setTimeout(() => setExpanded(false), 5000);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Purchases Page",
    });
  }, []);

  useEffect(() => {
    dispatch(getOrders(access_token));
  }, [access_token, dispatch]);

  // console.log(results);
  return (
    <Box sx={{ height: "100%" }}>
      <Header title={"Mis Compras"} />
      <Box
        sx={{
          marginBottom: "76px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Grid container>
          <Grid item xs={12} sx={{ padding: "15px" }}>
            {results.map((el) => {
              return (
                <PurchaseAccordion
                  data={el}
                  expanded={el.id === expandedID}
                  onChangeHandler={() => handleChange(el.id)}
                />
              );
            })}
          </Grid>
        </Grid>
      </Box>
      <Footer activeIconID={1} />
    </Box>
  );
};

export default Purchases;
