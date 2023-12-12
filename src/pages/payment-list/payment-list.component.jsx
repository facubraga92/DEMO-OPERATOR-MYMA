import { Divider, Grid, Typography } from "@mui/material";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import ContainerRounded from "../../styled-components/container-rounded";
import { ReactComponent as MpLogo } from "../../assets/images/mp-logo.svg";
import { ReactComponent as BackIcon } from "../../assets/images/back-icon.svg";
import { ReactComponent as CardIcon } from "../../assets/images/card-icon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPaymentMethods } from "../../services/payment-method.service";

const PaymentList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: paymentMethods } = useSelector((state) => state.paymentMethods);

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, [dispatch]);

  const handleGoto = () => {
    navigate("/add-credit-card");
  };

  return (
    <ContainerRounded
      sx={{
        maxHeight: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid container sx={{ minHeight: "100px" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFF",
          }}
        >
          <BackIcon
            style={{
              position: "absolute",
              top: "2rem",
              left: 0,
              zIndex: 1,
              margin: "1rem",
            }}
            onClick={() => navigate(-1)}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Último paso
          </Typography>
          <Typography variant="body1">Asociá tu medio de pago</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          minHeight: "425px",
          backgroundColor: "#FFF",
          borderRadius: "0 40px 0 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          justifyItems: "center",
          alignItems: "center",
          alignContent: "flex-start",
        }}
      >
        {paymentMethods.map((pm) => {
          return (
            <Grid
              key={pm.id}
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                aria-label={pm.name}
                src={pm.secureThumbnail}
                width="80px"
                style={{ objectFit: "contain" }}
              ></img>
            </Grid>
          );
        })}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          backgroundColor: "#FFF",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: "10px 1.25rem 1.5rem",
          margin: "-1px 0",
        }}
      >
        <CustomizedButtons
          label={"Adherir tarjeta"}
          handleClick={handleGoto}
          sx={{ flexDirection: "row-reverse" }}
        >
          <CardIcon />
        </CustomizedButtons>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Divider
            flexItem={true}
            variant="middle"
            sx={{ borderTop: "1px solid #707070" }}
          />
          <MpLogo style={{ margin: "20px" }} />
        </Grid>
      </Grid>

      {/* </Grid> */}
    </ContainerRounded>
  );
};

export default PaymentList;
