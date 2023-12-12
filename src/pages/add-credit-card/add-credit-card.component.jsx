// import * as yup from 'yup';
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as BackIcon } from "../../assets/images/back-icon.svg";
import { ReactComponent as CardIcon } from "../../assets/images/card-icon.svg";
import { ReactComponent as MpLogo } from "../../assets/images/mp-logo.svg";
import CustomizedButtons from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import ContainerRounded from "../../styled-components/container-rounded";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useRef } from "react";
import { addCard } from "../../services/card.services";
import ReactGA from "react-ga4";
import { getCustomerCards } from "../../services/customer.service";

const AddCreditCard = () => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("Guardar");
  const [disabled, setDisabled] = useState(false);

  const [cardInfo, setCardInfo] = useState({ identificationType: "DNI" });
  const { newCardStatus, newCardData } = useSelector((state) => state.card);
  const { customerCardsData } = useSelector((state) => state.customer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mp = useRef();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Add Card Page",
    });
  }, []);

  useEffect(() => {
    restartButton();
    setError(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    mp.current = new MercadoPago(process.env.REACT_APP_MP);

    const cardNumberElement = mp.current.fields
      .create("cardNumber", {
        placeholder: "Número de tarjeta",
      })
      .mount("cardNumber");

    mp.current.fields
      .create("expirationDate", {
        placeholder: "Vence el MM/AA",
      })
      .mount("expirationDate");

    mp.current.fields
      .create("securityCode", {
        placeholder: "CVV",
      })
      .mount("securityCode");

    cardNumberElement.on("binChange", _guessPaymentMethod);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const storeId = searchParams.get("storeId") || "";
    // console.log(newCardStatus, newCardData, storeId);
    if (newCardStatus === "succeeded" && storeId) {
      navigate(`/home?storeId=${storeId}&cardId=${newCardData.id}`);
      return;
    }
    if (newCardStatus === "succeeded") {
      navigate(`/add-payment-success`);
      return;
    }
    if (newCardStatus === "failed") {
      navigate("/add-payment-failed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCardStatus, navigate]);

  const _guessPaymentMethod = async (data) => {
    const { bin } = data;
    try {
      const { results } = await mp.current.getPaymentMethods({ bin });

      if (results[0].id)
        setCardInfo({
          ...cardInfo,
          paymentMethod: results[0].id,
          issuerId: results[0].issuer.id,
        });
    } catch (error) {
      // console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const getCardToken = async () => {
    try {
      const token = await mp.current.fields.createCardToken({
        cardholderName: cardInfo.cardHolderName,
        identificationType: cardInfo.identificationType,
        identificationNumber: cardInfo.identificationNumber,
      });
      return token;
    } catch (error) {
      // console.log("Error getCardToken");
      // console.error(error);
    }
  };

  const restartButton = () => {
    setLabel("Guardar");
    setDisabled(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLabel(`Cargando, espere...`);
      setDisabled(true);
      setError(false);
      const cardToken = await getCardToken();
      const data = {
        cardHolderName: cardInfo.cardHolderName,
        paymentMethodId: cardInfo.paymentMethod,
        token: cardToken.id,
        default: true,
      };

      await dispatch(addCard(data));
      dispatch(getCustomerCards());
    } catch (e) {
      // console.error("Error adding card: ", e);
      navigate("/add-payment-failed");
    }
  };

  return (
    <ContainerRounded>
      <form
        id="form-checkout"
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <Grid container sx={{ flex: 1, padding: " 0 1.25rem" }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <BackIcon
              style={{
                zIndex: 1,
                margin: "1rem",
                marginLeft: 0,
              }}
              onClick={() => {
                !customerCardsData?.length ? navigate("/home") : navigate(-1);
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#FFF",
              }}
            >
              Datos de la tarjeta
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div id="cardNumber"></div>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={6}>
              <div id="expirationDate"></div>
            </Grid>
            <Grid item xs={6}>
              <div id="securityCode"> </div>
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: "bold", color: "#FFF" }}>
                  El CVV ingresado no es válido, intente nuevamente...
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FFF" }}>
              Datos del titular{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              type="text"
              name="cardHolderName"
              placeholder="Titular de la tarjeta"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              type="number"
              name="identificationNumber"
              placeholder="DNI"
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            bgcolor: "#fff",
            paddingBlockStart: "1rem",
            borderRadius: "7.5rem 7.5rem 0rem 0rem",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxHeight: "6rem",
              marginInline: "2rem",
              marginBottom: "0.5rem",
            }}
          >
            <MpLogo />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#FFF",
              padding: "0.5rem 1.25rem 0rem",
              borderRadius: "50px",
            }}
          >
            <CustomizedButtons
              label={label}
              disabled={disabled}
              type="submit"
              id="form-checkout__submit"
              sx={{ flexDirection: "row-reverse" }}
            >
              {disabled ? <CircularProgress size={30} /> : <CardIcon />}
            </CustomizedButtons>
          </Grid>
        </Grid>
      </form>
    </ContainerRounded>
  );
};

export default AddCreditCard;
